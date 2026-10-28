'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { CERTIFICATIONS } from '@/lib/data';

export default function Honors() {
  const rowA = useRef<HTMLDivElement>(null);
  const rowB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0,
      x = 0,
      v = 0,
      lastY = window.scrollY;
    const loop = () => {
      const y = window.scrollY;
      const dv = y - lastY;
      lastY = y;
      v += (dv - v) * 0.12;
      x -= 0.6 + Math.abs(v) * 0.35;
      const w = (rowA.current?.scrollWidth || 2) / 2;
      if (-x > w) x += w;
      const skew = Math.max(-10, Math.min(10, v * 0.3));
      if (rowA.current) rowA.current.style.transform = `translate3d(${x}px,0,0) skewX(${-skew}deg)`;
      if (rowB.current) rowB.current.style.transform = `translate3d(${-w - x}px,0,0) skewX(${skew}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const certsDoubled = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section className="honors" id="honors">
      <header className="sec-head center">
        <p className="eyebrow">CHAPTER V</p>
        <h2>
          Certifications &amp; <span>Training</span>
        </h2>
        <p className="sec-sub">
          Specialized coursework and technical credentials.
        </p>
      </header>

      <div className="seals">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.title}
            className="seal"
            data-hot
            initial={{ opacity: 0, y: 50, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 200 200" className="seal-ring" aria-hidden="true">
              <defs>
                <path id={`sp${i}`} d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
              </defs>
              <circle cx="100" cy="100" r="96" className="sr-o" />
              <circle cx="100" cy="100" r="68" className="sr-i" />
              <text>
                <textPath href={`#sp${i}`}>
                  CERTIFICATIONS &amp; TRAINING ✦ CONTINUOUS LEARNING ✦
                </textPath>
              </text>
            </svg>
            <div className="seal-core">
              <span className="seal-n">CREDENTIAL 0{i + 1}</span>
              <b>{c.title}</b>
              <small>{c.category}</small>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="marquee" aria-label="Certifications marquee">
        <div className="mq-row" ref={rowA}>
          {certsDoubled.map((c, i) => (
            <span key={i} className="mq-item">
              <b>{c.title}</b>
              <em>{c.category}</em>
              <i>✦</i>
            </span>
          ))}
        </div>
        <div className="mq-row outline" ref={rowB}>
          {certsDoubled.map((c, i) => (
            <span key={i} className="mq-item">
              <b>{c.title}</b>
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
