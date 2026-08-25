import { useEffect, useMemo, useState } from 'react';
import Prism from './components/Prism';
import Reveal from './components/Reveal';
import { profile, about, projects, toolkit, education, awards } from './data';
import './App.css';

const SECTIONS = [
  ['work', 'Work'],
  ['toolkit', 'Toolkit'],
  ['background', 'Background'],
  ['contact', 'Contact']
];

function SectionHead({ label, title, lead }) {
  return (
    <Reveal className="sec-head">
      <span className="eyebrow">
        <i className="spectrum-dot" aria-hidden="true" />
        {label}
      </span>
      <h2 className="sec-title">{title}</h2>
      {lead ? <p className="sec-lead">{lead}</p> : null}
    </Reveal>
  );
}

function Split({ text, delay = 0 }) {
  return (
    <span className="split" data-text={text} style={{ animationDelay: `${delay}ms` }}>
      {text}
    </span>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [stillPrism, setStillPrism] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setStillPrism(mq.matches);
    sync();
    mq.addEventListener?.('change', sync);
    return () => mq.removeEventListener?.('change', sync);
  }, []);

  // The prism shader is fill-rate bound: cost scales with pixels × raymarch
  // steps. Phones and low-core laptops get a cheaper version of the same look.
  const quality = useMemo(() => {
    if (typeof window === 'undefined') return { maxDpr: 1, steps: 64 };
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const cores = navigator.hardwareConcurrency || 4;
    if (touch || cores <= 4) return { maxDpr: 1, steps: 48 };
    if (cores <= 8) return { maxDpr: 1.25, steps: 64 };
    return { maxDpr: 1.5, steps: 80 };
  }, []);

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>

      <header className={`nav ${scrolled ? 'is-stuck' : ''}`}>
        <a className="nav-mark" href="#top" aria-label="Back to top">
          <svg className="nav-glyph" viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="navSpectrum" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7B5CFF" />
                <stop offset="50%" stopColor="#49C8F5" />
                <stop offset="100%" stopColor="#FF8A3D" />
              </linearGradient>
            </defs>
            <path
              d="M32 14 L48 46 H16 Z"
              fill="none"
              stroke="url(#navSpectrum)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path d="M6 32 H17" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
            <path d="M47 32 H58" stroke="url(#navSpectrum)" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
          <span>Abheyjeet Gill</span>
        </a>

        <span className="nav-status">
          <i aria-hidden="true" />
          Open to Summer 2027
        </span>
        <nav className="nav-links" aria-label="Sections">
          {SECTIONS.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-prism" aria-hidden="true">
            <Prism
              animationType="rotate"
              timeScale={stillPrism ? 0 : 0.5}
              height={3.5}
              baseWidth={5.5}
              scale={3.6}
              hueShift={0}
              colorFrequency={1}
              noise={0}
              glow={1}
              suspendWhenOffscreen
              maxDpr={quality.maxDpr}
              steps={quality.steps}
            />
          </div>
          <div className="hero-veil" aria-hidden="true" />

          <div className="hero-inner">
            <p className="hero-eyebrow">{profile.eyebrow}</p>
            <h1 className="hero-name">
              <Split text={profile.first} />
              <Split text={profile.last} delay={140} />
            </h1>
            <p className="hero-thesis">{profile.thesis}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#work">
                See what I’ve shipped
              </a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>
          </div>

          <a className="hero-cue" href="#about" aria-label="Scroll to about">
            <span>Scroll</span>
            <i aria-hidden="true" />
          </a>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section className="section about" id="about">
          <div className="about-grid">
            <Reveal className="about-copy">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? 'lede' : ''}>
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal className="about-now" delay={80}>
              <span className="eyebrow">Right now</span>
              <dl>
                {about.now.map(([k, v]) => (
                  <div key={k} className="now-row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Work ─────────────────────────────────────────────── */}
        <section className="section work" id="work">
          <SectionHead
            label="work"
            title="Three things I built by myself"
            lead="Every one of these went from empty repo to something a person could actually use."
          />

          <div className="work-list">
            {projects.map((p, i) => (
              <Reveal
                key={p.id}
                as="article"
                delay={i * 60}
                className={`card ${p.featured ? 'card-featured' : ''}`}
              >
                <span className="card-edge" aria-hidden="true" />

                <div className="card-status">
                  {p.status.map(s => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                <h3 className="card-name">
                  {p.name}
                  {p.href ? (
                    <a className="card-link" href={p.href} target="_blank" rel="noreferrer">
                      {p.hrefLabel}
                      <svg viewBox="0 0 14 14" aria-hidden="true">
                        <path d="M4 10 10 4M5 4h5v5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    </a>
                  ) : null}
                </h3>

                <p className="card-tagline">{p.tagline}</p>

                <div className="card-body">
                  {p.body.map((t, j) => (
                    <p key={j}>{t}</p>
                  ))}
                </div>

                {p.metrics ? (
                  <div className="card-metrics">
                    {p.metrics.map(([value, label]) => (
                      <div key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <ul className="chips">
                  {p.stack.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Toolkit ──────────────────────────────────────────── */}
        <section className="section toolkit" id="toolkit">
          <SectionHead label="toolkit" title="What I reach for" />
          <div className="tool-grid">
            {toolkit.map((group, i) => (
              <Reveal key={group.label} className="tool-col" delay={i * 60}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Background ───────────────────────────────────────── */}
        <section className="section background" id="background">
          <SectionHead label="background" title="Where I’ve been" />
          <div className="bg-grid">
            <Reveal className="bg-col">
              <h3 className="bg-col-title">Education</h3>
              <ol className="timeline">
                {education.map(e => (
                  <li key={e.what}>
                    <span className="tl-when">{e.when}</span>
                    <div className="tl-body">
                      <strong>{e.what}</strong>
                      <span>{e.detail}</span>
                      {e.note ? <em>{e.note}</em> : null}
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="bg-col" delay={80}>
              <h3 className="bg-col-title">Awards</h3>
              <ol className="timeline">
                {awards.map(a => (
                  <li key={a.what}>
                    <span className="tl-when">{a.when}</span>
                    <div className="tl-body">
                      <strong>{a.what}</strong>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section className="section contact" id="contact">
          <Reveal>
            <span className="eyebrow">
              <i className="spectrum-dot" aria-hidden="true" />
              contact
            </span>
            <p className="contact-ask">
              I’m looking for a Summer 2027 internship in software or security. If that’s something you
              have, I’d like to hear about it.
            </p>
            <a className="contact-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub / {profile.githubHandle}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn / {profile.linkedinHandle}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="foot">
        <span>{profile.location}</span>
        <span>Built solo · React, Vite, WebGL</span>
      </footer>
    </>
  );
}