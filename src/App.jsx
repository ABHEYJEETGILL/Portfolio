import React, {useState, useEffect} from "react";
import Prism from "./prism";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Close on Escape
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <div className="bg">
        <Prism
          animationType="rotate"
          timeScale={0.45}
          height={3.1}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}         // you can try 0.3 for more texture
          glow={0.55}
        />
      </div>

      <nav className={`${menuOpen ? "is-open" : ""}`} aria-label="Primary">
        <div className="brand">PORTFOLIO</div>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul id="primary-menu" onClick={(e) => {
          if (e.target.tagName === "A") setMenuOpen(false);
        }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
      <div
        className={`nav-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <main>
        {/* HERO */}
        <section id="home" className="hero">

          <div className="hero-content">
            <AnimatedTitle text="Abheyjeet S. Gill" />
            <div className="cta">
              <button className="btn btn-primary">
                <img className="icon" src="github-mark.png" alt="" aria-hidden="true" />
                GitHub
              </button>
              <button className="btn btn-glass">Resume</button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="container">
            <h2>About Me</h2>
            <p>A second-year Computer Science student at <b>McMaster University</b>, I,<i> Abheyjeet Singh Gill</i>, am ardent about cyber, creative in every aspect and a responsible man.
              In the serendipity of values for excelling in my future, having ambition as my daily dose wakes me up in the morning to work. I dream big and set aspiring goals, and I am determined to make a significant impact on the world one day. </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="container">
            <h2>Projects</h2>
            <div className="grid">
              <article className="card">
                <h3>University Network</h3>
                <p>Campus-exclusive networking platform with email gating.</p>
              </article>
              <article className="card">
                <h3>Prism Hero</h3>
                <p>Interactive OGL prism background + glass UI components.</p>
              </article>
              <article className="card">
                <h3>Security Toolkit</h3>
                <p>Packet capture helpers and scriptable analysis utilities.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Abheyjeet S. Gill</footer>
    </>
  );
};
const AnimatedTitle = ({ text }) => {
  return (
    <h1 className="hero-title" aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className={`char${ch === " " ? " space" : ""}`}
          style={{ "--i": i }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </h1>
  );
};
export default App;