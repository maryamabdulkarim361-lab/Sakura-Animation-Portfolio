'use client';

import { useRef } from 'react';
import { ADDITIONAL_PROJECTS, FEATURED_PROJECTS, PLANNED_PROJECTS } from '@/lib/data';
import { clamp } from '@/lib/store';
import { pad2, useScrollProgress } from '@/lib/useScroll';

export default function Missions() {
  const stack = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const N = FEATURED_PROJECTS.length;

  useScrollProgress(
    stack,
    (_p, r) => {
      const vh = window.innerHeight;
      cards.current.forEach((c, i) => {
        if (!c) return;
        const next = cards.current[i + 1];
        let k = 0;
        if (next) {
          const nt = next.getBoundingClientRect().top;
          k = clamp(1 - (nt - vh * 0.12) / (vh * 0.75));
        } else {
          k = clamp(-(r.bottom - vh) / (vh * 0.6));
        }
        const inner = c.firstElementChild as HTMLElement;
        if (inner) {
          inner.style.transform = `scale(${1 - k * 0.08}) rotateX(${k * 6}deg)`;
          inner.style.filter = `brightness(${1 - k * 0.55})`;
        }
      });
    },
    'view',
  );

  const spot = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const b = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - b.left}px`);
    el.style.setProperty('--my', `${e.clientY - b.top}px`);
  };

  return (
    <section className="missions" id="projects">
      {/* Featured Projects Header */}
      <header className="sec-head">
        <p className="eyebrow">CHAPTER IV</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p className="sec-sub">
          Core implemented projects &amp; interactive prototypes with verified repositories.
        </p>
      </header>

      {/* Stacking Dossier Cards */}
      <div className="ms-stack" ref={stack}>
        {FEATURED_PROJECTS.map((e, i) => (
          <article
            key={e.id}
            className="ms-card"
            ref={(el) => {
              cards.current[i] = el;
            }}
            style={{ top: `calc(11vh + ${i * 26}px)`, zIndex: i + 1 }}
          >
            <div className="ms-inner" onPointerMove={spot} data-hot>
              <div className="ms-spot" />
              <div className="ms-media">
                <img src={e.still} alt={`${e.title} visual illustration`} loading="lazy" />
                <div className="ms-duo" />
                <span className="ms-big">{pad2(i + 1)}</span>
                <span className="ms-stamp">{e.label}</span>
                <span className="ms-mockup-tag">{e.illustrationLabel}</span>
              </div>
              <div className="ms-body">
                <p className="ms-file">
                  DOSSIER {pad2(i + 1)} / {pad2(N)} <i /> {e.label}
                </p>
                <h3>{e.title}</h3>
                <p className="ms-desc">{e.desc}</p>

                <div className="ms-highlights-block">
                  <p className="ms-hl-title">Key Implementation Highlights:</p>
                  <ul className="ms-highlights-list">
                    {e.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>

                {e.note && <p className="ms-project-note">📌 {e.note}</p>}

                <ul className="ms-tech" aria-label="Technology Stack">
                  {e.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="ms-actions">
                  <a
                    className="ms-link"
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View repository for ${e.title}`}
                  >
                    <span>View Repository</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Additional Projects: Research & Design */}
      <div className="additional-section">
        <header className="sec-head">
          <p className="eyebrow">RESEARCH &amp; DESIGN</p>
          <h2>
            Additional <span>Work</span>
          </h2>
          <p className="sec-sub">
            Educational prototypes and documented system architecture designs.
          </p>
        </header>

        <div className="additional-grid">
          {ADDITIONAL_PROJECTS.map((p, idx) => (
            <article key={p.id} className="add-card" data-hot>
              <div className="add-head">
                <span className="add-badge">{p.label}</span>
                <span className="add-idx">ADDITIONAL 0{idx + 1}</span>
              </div>
              <h3>{p.title}</h3>
              <p className="add-desc">{p.desc}</p>

              <div className="add-highlights">
                <p className="add-hl-title">Highlights:</p>
                <ul>
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <p className="add-note">⚠️ {p.note}</p>

              <ul className="ms-tech add-tech">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <a
                className="btn-line add-repo-btn"
                href={p.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View repository for ${p.title}`}
              >
                <span>View Repository</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Upcoming Projects (Planned) */}
      <div className="planned-section" id="planned-projects">
        <header className="sec-head">
          <p className="eyebrow">ROADMAP</p>
          <h2>
            Upcoming <span>Initiatives</span>
          </h2>
          <p className="sec-sub">
            Future development plans displayed with visible &ldquo;Planned&rdquo; status.
          </p>
        </header>

        <div className="planned-grid">
          {PLANNED_PROJECTS.map((item) => (
            <div key={item.id} className="planned-card">
              <div className="planned-badge-row">
                <span className="planned-badge">{item.badge}</span>
                <span className="planned-dot" />
              </div>
              <h3>{item.title}</h3>
              <p className="planned-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
