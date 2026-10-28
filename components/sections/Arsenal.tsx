'use client';

import { useRef, useState } from 'react';
import { SKILL_CATEGORIES, SkillItem } from '@/lib/data';
import { pad2, useScrollProgress } from '@/lib/useScroll';

const CORE_FOCUS = [
  { name: 'Python', role: 'Primary Language' },
  { name: 'Django & DRF', role: 'Backend & REST APIs' },
  { name: 'JavaScript & React', role: 'Frontend & UI' },
  { name: 'SQL & Relational DBs', role: 'MySQL / SQLite / PostgreSQL' },
  { name: 'System Design', role: 'Architecture & Prototypes' },
];

export default function Arsenal() {
  const sec = useRef<HTMLElement>(null);
  const drum = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const N = SKILL_CATEGORIES.length;
  const STEP = 360 / N;

  useScrollProgress(sec, (p) => {
    const t = p * (N - 1);
    if (drum.current) {
      drum.current.style.transform = `translateZ(calc(var(--r) * -1)) rotateX(-6deg) rotateY(${-t * STEP}deg)`;
    }
    const a = Math.round(t);
    setActive((x) => (x === a ? x : a));
  });

  return (
    <section className="arsenal" id="skills" ref={sec}>
      <div className="ars-sticky">
        <div className="ars-head">
          <p className="eyebrow">CHAPTER III</p>
          <h2>
            Technical
            <br />
            <span>Skills</span>
          </h2>
          <p className="ars-count">
            <b>{pad2(active + 1)}</b>
            <span>/ {pad2(N)}</span>
          </p>
          <p className="ars-now" key={active}>
            {SKILL_CATEGORIES[active]?.name}
          </p>
          <ol className="ars-top">
            {CORE_FOCUS.map((t, i) => (
              <li key={t.name}>
                <i>{pad2(i + 1)}</i>
                {t.name}
                <em>{t.role}</em>
              </li>
            ))}
          </ol>
          <p className="ars-disclaimer">
            * Technologies used to build this interactive portfolio (Three.js, WebGL, Lenis) are kept separate from professional proficiency claims.
          </p>
        </div>

        <div className="ars-scene">
          <div className="ars-drum" ref={drum}>
            {SKILL_CATEGORIES.map((g, i) => (
              <article
                key={g.name}
                className={`ars-panel ${i === active ? 'on' : ''}`}
                style={{ transform: `rotateY(${i * STEP}deg) translateZ(var(--r))` }}
              >
                <span className="ap-idx">{pad2(i + 1)}</span>
                <h3>{g.name}</h3>
                <ul>
                  {g.items.map((it) => {
                    if (typeof it === 'string') {
                      return <li key={it}>{it}</li>;
                    }
                    const item = it as SkillItem;
                    return (
                      <li key={item.name} className="has-badge">
                        <span>{item.name}</span>
                        <span className={`skill-badge ${item.badge === 'Familiarity' ? 'badge-fam' : 'badge-learn'}`}>
                          {item.badge}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <i className="ap-edge" />
              </article>
            ))}
          </div>
          <div className="ars-floor" />
        </div>
      </div>
    </section>
  );
}
