'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { PROFILE } from '@/lib/data';

function Magnetic({
  href,
  children,
  primary,
  download,
  onClick,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const b = el.getBoundingClientRect();
    const x = e.clientX - (b.left + b.width / 2);
    const y = e.clientY - (b.top + b.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  const isExt = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  const target = href.startsWith('http') ? '_blank' : undefined;

  return (
    <a
      ref={ref}
      href={href}
      className={`mag ${primary ? 'primary' : ''}`}
      onPointerMove={move}
      onPointerLeave={leave}
      target={target}
      rel={isExt ? 'noreferrer' : undefined}
      download={download}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
    </a>
  );
}

const ROLL = [
  ['Developer', PROFILE.name],
  ['Focus', 'Python & Django Applications · Web Development'],
  ['Frontend', 'JavaScript · TypeScript · React · React Native · HTML & CSS'],
  ['Backend & APIs', 'Django · Django REST Framework · Flask · REST APIs'],
  ['Databases', 'MySQL · SQLite · PostgreSQL project work'],
  ['Featured Projects', 'Little Lemon · Metriva · Zaiqa'],
  ['Prototypes & Designs', 'Ultrasound Classifier · AI Database Assistant'],
  ['Education', 'Lahore College for Women University · BSc (Hons)'],
  ['Certifications', 'Python · Ethical Hacking · RHCSA'],
];

export default function Finale() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

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
    <section className="finale" id="contact">
      <div className="fin-glow" />
      <p className="eyebrow center">FINAL CHAPTER</p>
      <motion.h2
        className="fin-title"
        initial="h"
        whileInView="s"
        viewport={{ once: true, amount: 0.3 }}
      >
        {['LET’S MAKE', 'CONTACT'].map((l, i) => (
          <span key={l} className={`fl ${i ? 'outline' : ''}`}>
            <motion.span
              variants={{
                h: { y: '105%' },
                s: { y: '0%' },
              }}
              transition={{ delay: i * 0.12, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      <p className="fin-sub">
        I am seeking opportunities to contribute practical programming skills, clear communication, and a strong learning attitude. Reach out via email, phone, or LinkedIn to connect.
      </p>

      {/* Honest Direct Contact Actions */}
      <div className="fin-links">
        <Magnetic
          href={`mailto:${PROFILE.email}`}
          primary
          ariaLabel="Send email to Maryam Abdul Karim"
        >
          {PROFILE.email}
        </Magnetic>

        <Magnetic
          href={PROFILE.phoneTel}
          ariaLabel="Call Maryam Abdul Karim directly"
        >
          {PROFILE.phone}
        </Magnetic>

        <Magnetic href={PROFILE.github} ariaLabel="Visit GitHub Profile">
          GitHub ↗
        </Magnetic>

        <Magnetic href={PROFILE.linkedin} ariaLabel="Visit LinkedIn Profile">
          LinkedIn ↗
        </Magnetic>

        <Magnetic
          href={PROFILE.resumeUrl}
          download={PROFILE.resumeFileName}
          onClick={handleResumeDownload}
          ariaLabel="Download Resume"
        >
          Download Résumé ↗
        </Magnetic>
      </div>

      {/* Quick Clipboard Copy Actions */}
      <div className="fin-copy-row">
        <button
          className="fin-copy-btn"
          onClick={() => copyToClipboard(PROFILE.email, 'email')}
          aria-label="Copy email address"
        >
          {copiedType === 'email' ? '✓ Email Copied' : '📋 Copy Email'}
        </button>
        <button
          className="fin-copy-btn"
          onClick={() => copyToClipboard(PROFILE.phone, 'phone')}
          aria-label="Copy phone number"
        >
          {copiedType === 'phone' ? '✓ Phone Copied' : '📋 Copy Phone'}
        </button>
        <a
          className="fin-copy-btn open-email-btn"
          href={`mailto:${PROFILE.email}?subject=Opportunity%20Inquiry%20for%20Maryam%20Abdul%20Karim`}
          aria-label="Open your email app"
        >
          ✉️ Open Email App
        </a>
      </div>
      <p className="fin-note">
        * Honest communication: &ldquo;Open Email App&rdquo; opens your system mail client (mailto:). No simulated or fake message submission.
      </p>

      {/* Credits Roll */}
      <div className="roll" aria-label="Credits">
        <div className="roll-inner">
          {ROLL.map(([k, v]) => (
            <div className="roll-row" key={k}>
              <span>{k}</span>
              <b>{v}</b>
            </div>
          ))}
          <div className="roll-end">PORTFOLIO OF MARYAM ABDUL KARIM</div>
        </div>
      </div>

      <footer className="fin-foot">
        <span>© 2026 {PROFILE.name} · {PROFILE.headline}</span>
        <span>
          <a href="#billboard" style={{ color: 'var(--sakura)' }}>
            Back to Top ↑
          </a>
        </span>
      </footer>
    </section>
  );
}
