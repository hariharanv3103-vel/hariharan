
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="welcome-page">
      {/* Background lighting */}
      <div className="ambient ambient-center" />
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      {/* Soft landscape */}
      <div className="landscape landscape-back" />
      <div className="landscape landscape-middle" />
      <div className="landscape landscape-front" />
      <div className="sun-glow" />

      {/* Fine moving light */}
      <div className="light-ray ray-one" />
      <div className="light-ray ray-two" />

      {/* Gold curves at the bottom only */}
      <div className="gold-wave wave-one" />
      <div className="gold-wave wave-two" />
      <div className="gold-wave wave-three" />

      {/* Elegant side marker */}
      <div className="side-marker" aria-hidden="true">
        <span className="active-dot" />
        <span />
        <span />
      </div>

      {/* Main content */}
      <section className="welcome-content">
        <p className="welcome-label">WELCOME TO</p>

        <div className="star-divider" aria-hidden="true">
          <span />
          <b>✦</b>
          <span />
        </div>

        <h1 className="hero-name">
          HARIHARAN <span>V</span>
        </h1>

        <p className="hero-tagline">
          LEARN <i>•</i> BUILD <i>•</i> GROW <i>•</i> MAKE AN IMPACT
        </p>

        <div className="hero-quote">
          <span className="quote-mark">“</span>
          <p>
            Every journey begins
            <br />
            <em>with a single step.</em>
          </p>
          <span className="quote-mark closing-mark">”</span>
        </div>

        <Link href="/portfolio" className="explore-button">
          <span>EXPLORE MY WORLD</span>
          <b aria-hidden="true">→</b>
          <i className="button-shine" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
