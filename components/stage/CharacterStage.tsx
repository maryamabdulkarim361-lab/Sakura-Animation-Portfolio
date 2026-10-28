'use client';

import { useEffect, useRef } from 'react';
import { frames, nearest } from '@/lib/frames';
import { aboutFrameAt, clamp, easeInOut, easeOut, heroFrameAt, lerp, live, seg } from '@/lib/store';

type Place = { cx: number; cy: number; h: number; rot: number; alpha: number };
const FRAME_ASPECT = 9 / 16; // 720x1280 portrait aspect ratio

function heroPlace(vw: number, vh: number, mobile: boolean): Place {
  if (mobile) {
    const maxW = vw * 0.92;
    const maxH = vh * 0.64;
    const h = Math.min(maxH, maxW / FRAME_ASPECT);
    return { cx: vw / 2, cy: vh * 0.36, h, rot: 0, alpha: 1 };
  }
  // Prominent desktop scale: ~78% to 85% of screen height, up to 850px max-height
  const h = Math.min(850, Math.max(vh * 0.78, Math.min(vh * 0.85, 850)));
  const cx = vw > 1300 ? vw * 0.70 : vw * 0.72;
  return { cx, cy: vh * 0.50, h, rot: 0, alpha: 1 };
}

function aboutPlace(vw: number, vh: number, mobile: boolean): Place {
  if (mobile) {
    const maxW = vw * 0.88;
    const maxH = vh * 0.55;
    const h = Math.min(maxH, maxW / FRAME_ASPECT);
    return { cx: vw / 2, cy: vh * 0.32, h, rot: 0, alpha: 1 };
  }
  const h = Math.min(850, Math.max(vh * 0.78, Math.min(vh * 0.85, 850)));
  const cx = vw > 1300 ? vw * 0.27 : vw * 0.29;
  return { cx, cy: vh * 0.52, h, rot: 0, alpha: 1 };
}

/**
 * One fixed full-screen canvas that "plays" Sakura:
 * hero.mp4 frames are scrubbed by scroll, the last pose flies down the page,
 * then about.mp4 frames continue from that exact pose.
 */
export default function CharacterStage() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cv = canvas.current!;
    const ctx = cv.getContext('2d')!;
    let raf = 0;
    let dpr = 1;
    let vw = 0,
      vh = 0;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      vw = window.innerWidth;
      vh = window.innerHeight;
      cv.width = Math.round(vw * dpr);
      cv.height = Math.round(vh * dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };
    resize();
    window.addEventListener('resize', resize);

    let heroIdx = 0,
      aboutIdx = 0,
      mx = 0,
      my = 0;
    const ghosts: Place[] = [];
    let landed = false;
    let ring = 1; // 0..1 landing shockwave timer
    let ringPos = { x: 0, y: 0 };
    let last = performance.now();

    const progressOf = (id: string, mode: 'pin' | 'between', toId?: string) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      if (mode === 'pin') return clamp(-r.top / Math.max(1, r.height - vh));
      // between: from end of `id` pin to top of `toId`
      const to = document.getElementById(toId!)!.getBoundingClientRect();
      const start = r.bottom - vh; // 0 when pin releases
      const span = to.top - start; // distance until next section reaches top
      return clamp(-start / Math.max(1, span));
    };

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const draw = (img: HTMLImageElement | null, p: Place) => {
      if (!img || p.alpha <= 0.001) return;
      const naturalAspect = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : FRAME_ASPECT;
      const h = p.h;
      const w = h * naturalAspect;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.cx * dpr, p.cy * dpr);
      if (p.rot) ctx.rotate(p.rot);
      ctx.drawImage(img, (-w / 2) * dpr, (-h / 2) * dpr, w * dpr, h * dpr);
      ctx.restore();
    };

    const loop = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const mobile = vw < 820;

      live.hero = progressOf('billboard', 'pin');
      live.flight = progressOf('billboard', 'between', 'about');
      live.about = progressOf('about', 'pin');
      const aboutEl = document.getElementById('about');
      live.exit = aboutEl ? Math.max(0, -(aboutEl.getBoundingClientRect().bottom - vh)) : 0;

      // smooth frame scrubbing (freezes when scrolling stops)
      heroIdx = lerp(heroIdx, heroFrameAt(live.hero), 1 - Math.pow(0.002, dt));
      aboutIdx = lerp(aboutIdx, aboutFrameAt(live.about), 1 - Math.pow(0.002, dt));

      // cursor parallax on the whole stage (3D lean)
      mx = lerp(mx, live.mouse.x, 1 - Math.pow(0.02, dt));
      my = lerp(my, live.mouse.y, 1 - Math.pow(0.02, dt));
      wrap.current!.style.transform = `perspective(1400px) rotateY(${mx * 5}deg) rotateX(${-my * 3}deg) translate3d(${mx * -18}px, ${my * -10}px, 0)`;

      ctx.clearRect(0, 0, cv.width, cv.height);

      const A = heroPlace(vw, vh, mobile);
      const B = aboutPlace(vw, vh, mobile);
      let place: Place;
      let img: HTMLImageElement | null;

      if (live.flight <= 0 && live.about <= 0) {
        // ---- hero: scrubbed movie ----
        place = { ...A, h: A.h * (1 + 0.04 * seg(live.hero, 0, 0.05)) };
        img = nearest(frames.hero, heroIdx);
        ghosts.length = 0;
        landed = false;
      } else if (live.about <= 0) {
        // ---- the jump down between sections ----
        const t = easeInOut(live.flight);
        const arc = Math.sin(Math.PI * live.flight);
        place = {
          cx: lerp(A.cx, B.cx, t),
          cy: lerp(A.cy, B.cy, t) + arc * vh * (mobile ? 0.04 : 0.08),
          h: lerp(A.h, B.h, t) * (1 - arc * 0.22),
          rot: arc * (B.cx < A.cx ? -0.12 : 0.12) * (mobile ? 0.5 : 1),
          alpha: 1,
        };
        img = nearest(frames.about, 0) || nearest(frames.hero, frames.hero.length - 1);
        if (arc > 0.05) {
          ghosts.push({ ...place });
          if (ghosts.length > 7) ghosts.shift();
        } else ghosts.length = 0;
        if (live.flight > 0.97 && !landed) {
          landed = true;
          ring = 0;
          ringPos = { x: B.cx, y: B.cy + B.h * 0.47 };
        }
        if (live.flight < 0.9) landed = false;
      } else {
        // ---- about: continues from the same pose, then scrolls away with the page ----
        place = { ...B, cy: B.cy - live.exit };
        img = nearest(frames.about, aboutIdx);
        ghosts.length = 0;
      }

      // shadow-clone afterimages
      ghosts.forEach((g, i) => draw(img, { ...g, alpha: ((i + 1) / ghosts.length) * 0.18 }));
      draw(img, place);

      // landing shockwave
      if (ring < 1) {
        ring = Math.min(1, ring + dt * 1.6);
        const k = easeOut(ring);
        ctx.save();
        ctx.translate(ringPos.x * dpr, ringPos.y * dpr);
        ctx.scale(1, 0.22);
        ctx.beginPath();
        ctx.arc(0, 0, (40 + k * (mobile ? 220 : 420)) * dpr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(224, 17, 95, ${(1 - ring) * 0.9})`;
        ctx.lineWidth = (6 - k * 5) * dpr;
        ctx.shadowColor = '#8B0032';
        ctx.shadowBlur = 30 * dpr;
        ctx.stroke();
        ctx.restore();
      }

      // hide once the about section is gone
      cv.style.visibility = live.exit > vh * 1.2 ? 'hidden' : 'visible';
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="stage" aria-hidden>
      <div className="stage-inner" ref={wrap}>
        <canvas ref={canvas} />
      </div>
    </div>
  );
}
