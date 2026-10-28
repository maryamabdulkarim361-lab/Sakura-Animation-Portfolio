'use client';

import { motion } from 'framer-motion';
import { EDUCATION, EXPERIENCE } from '@/lib/data';

export default function Journey() {
  return (
    <section className="journey" id="experience">
      {/* Professional Experience Subsection */}
      <div className="jr-container">
        <header className="sec-head">
          <p className="eyebrow">CHAPTER VI</p>
          <h2>
            Professional <span>Experience</span>
          </h2>
          <p className="sec-sub">
            Chronological timeline of project leadership, compliance coordination, and technical instruction.
          </p>
        </header>

        <div className="jr-timeline">
          {EXPERIENCE.map((exp, i) => (
            <motion.article
              key={exp.role + exp.period}
              className="jr-timeline-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="jr-media-wrap">
                <img src={exp.still} alt="" loading="lazy" />
                <div className="jr-media-overlay" />
                <span className="jr-idx">0{i + 1}</span>
              </div>

              <div className="jr-content-wrap">
                <div className="jr-meta-row">
                  <span className="jr-period">{exp.period}</span>
                  <span className="jr-badge">VERIFIED ROLE</span>
                </div>
                <h3 className="jr-role-title">{exp.role}</h3>
                <p className="jr-company-name">{exp.company}</p>

                <ul className="jr-highlights-list">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Education Subsection */}
      <div className="ed-container" id="education">
        <header className="sec-head">
          <p className="eyebrow">CHAPTER VII</p>
          <h2>
            Academic <span>Education</span>
          </h2>
          <p className="sec-sub">
            Completed university education in computer science.
          </p>
        </header>

        <motion.div
          className="ed-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ed-seal-side">
            <svg viewBox="0 0 100 100" className="ed-icon">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--sakura)" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M50 24L20 40L50 56L80 40L50 24Z" fill="var(--burgundy)" stroke="var(--sakura)" strokeWidth="1.5" />
              <path d="M30 46V66C30 73 50 78 50 78C50 78 70 73 70 66V46" fill="none" stroke="var(--sakura)" strokeWidth="1.5" />
            </svg>
            <span className="ed-status-tag">{EDUCATION.status}</span>
          </div>

          <div className="ed-info-side">
            <span className="ed-years">{EDUCATION.years}</span>
            <h3 className="ed-degree">{EDUCATION.degree}</h3>
            <p className="ed-institution">{EDUCATION.institution}</p>
            <p className="ed-desc">
              Four-year Honours degree in Computer Science covering core software engineering, programming paradigms, data structures, algorithms, and database management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
