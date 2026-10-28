'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FACTUAL_HIGHLIGHTS, PROFILE, SKILL_CATEGORIES } from '@/lib/data';
import { live, seg } from '@/lib/store';

/** The gap the character leaps through on the way down. */
export function Flight() {
  return (
    <section className="flight" id="flight" aria-hidden>
      <div className="flight-card">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.6 }} transition={{ duration: 0.6 }}>
          CHAPTER II
        </motion.span>
        <motion.b
          initial={{ opacity: 0, letterSpacing: '0.5em', filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, letterSpacing: '0.04em', filter: 'blur(0px)' }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 1.2 }}
        >
          PROFILE
        </motion.b>
      </div>
    </section>
  );
}

function useLive() {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0,
      prev = -1;
    const t = () => {
      const x = live.about;
      if (Math.abs(x - prev) > 0.002) {
        prev = x;
        setV(x);
      }
      raf = requestAnimationFrame(t);
    };
    raf = requestAnimationFrame(t);
    return () => cancelAnimationFrame(raf);
  }, []);
  return v;
}

const step = (p: number, a: number) => ({
  opacity: seg(p, a, a + 0.08),
  transform: `translateY(${(1 - seg(p, a, a + 0.08)) * 30}px)`,
});

/** Factual highlight dial */
function Dial({ value, suffix, label, k }: { value: number; suffix: string; label: string; k: number }) {
  const C = 2 * Math.PI * 34;
  return (
    <div className="dial">
      <svg viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="34" className="d-bg" />
        <circle
          cx="40"
          cy="40"
          r="34"
          className="d-fg"
          style={{ strokeDasharray: C, strokeDashoffset: C * (1 - k) }}
        />
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="40"
            y1="2"
            x2="40"
            y2={i % 6 === 0 ? 7 : 4.5}
            transform={`rotate(${i * 15} 40 40)`}
            className="d-tick"
          />
        ))}
      </svg>
      <b>
        {Math.round(value * k)}
        <i>{suffix}</i>
      </b>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  const p = useLive();
  const words = PROFILE.aboutSummary.split(' ');
  const inkP = seg(p, 0.16, 0.55);

  const handleResumeDownload = () => {
    fetch(PROFILE.resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          alert('Notice: Resume PDF is pending attachment. Please place Maryam-Abdul-Karim-Resume.pdf in public/resume/.');
        }
      })
      .catch(() => {
        alert('Notice: Resume PDF is pending attachment. Please place Maryam-Abdul-Karim-Resume.pdf in public/resume/.');
      });
  };

  return (
    <section className="about" id="about">
      <div className="about-sticky">
        <div className="about-glow" />
        <div className="about-panel">
          <div className="ab-kicker" style={step(p, 0.02)}>
            <i /> CHAPTER II · PROFILE
          </div>
          <h2 className="ab-title" style={step(p, 0.06)}>
            Engineering
            <br />
            <span>Foundations.</span>
          </h2>
          <p className="ab-ink" style={step(p, 0.12)}>
            {words.map((w, i) => {
              const lit = seg(inkP * words.length, i - 1, i + 1);
              return (
                <span
                  key={i}
                  style={{
                    opacity: 0.18 + lit * 0.82,
                    color:
                      lit > 0.85 &&
                      /Python|Django|JavaScript|APIs|databases|authentication|interfaces|prototypes/.test(w)
                        ? 'var(--sakura)'
                        : undefined,
                  }}
                >
                  {w}{' '}
                </span>
              );
            })}
          </p>
          <div className="ab-dials" style={step(p, 0.5)}>
            {FACTUAL_HIGHLIGHTS.map((s, i) => (
              <Dial key={s.label} {...s} k={seg(p, 0.52 + i * 0.04, 0.7 + i * 0.04)} />
            ))}
          </div>
          <div className="ab-tags" style={step(p, 0.72)}>
            {SKILL_CATEGORIES.map((g, i) => (
              <span key={g.name}>
                <i>{String(i + 1).padStart(2, '0')}</i>
                {g.name}
              </span>
            ))}
          </div>
          <a
            className="ab-resume"
            href={PROFILE.resumeUrl}
            download={PROFILE.resumeFileName}
            onClick={handleResumeDownload}
            style={step(p, 0.78)}
            aria-label="Download Full Resume"
          >
            Download Full Resume (PDF) <span>↗</span>
          </a>
        </div>
        <div className="ab-progress">
          <i style={{ transform: `scaleY(${p})` }} />
        </div>
      </div>
    </section>
  );
}
