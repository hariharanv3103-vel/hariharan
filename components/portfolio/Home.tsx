
"use client";

import Image from "next/image";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hariharan-v-a75989421/",
    className: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/hariharanv3103-vel",
    className: "github",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.09 5.49.4.34.75 1 .75 2.02V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Hariharan3103/",
    className: "leetcode",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m14.8 3.2-7.1 7.1a4.1 4.1 0 0 0 0 5.8l2.1 2.1a4.1 4.1 0 0 0 5.8 0l2.1-2.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m12.2 5.8 2.6-2.6a2.1 2.1 0 0 1 3 0l.8.8M11 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Home() {
  return (
    <section className="hero-section" id="home">
      <header className="hero-header">
        <a href="#home" className="hero-brand" aria-label="Home">
          <span className="hero-logo">
            H<span>V</span>
          </span>
        </a>

        <div className="hero-header-right">
          <span>AI</span>
          <i />
          <span>DATA SCIENCE</span>
          <i />
          <span>INNOVATION</span>
        </div>
      </header>

      <main className="hero-main">
        <div className="hero-content">
          <div className="hero-short-line" />
          <p className="hero-eyebrow">WELCOME TO MY</p>

          <h1 className="hero-title">
            Portf<span>olio</span>
          </h1>

          <h2 className="hero-name">
            HARIHARAN <span>V</span>
          </h2>

          <p className="hero-role">AI &amp; DATA SCIENCE</p>
          <div className="hero-role-line" />

          <p className="hero-description">
            Building useful solutions
            <br />
            with technology.
          </p>
        </div>

        {/* One shared container keeps DEVELOPER behind the photo */}
        <div className="hero-portrait-area">
          <div className="hero-portrait-glow" aria-hidden="true" />

          <div className="hero-developer-word" aria-hidden="true">
            DEVELOPER
          </div>

          <div className="hero-portrait">
            <Image
              src="/hariharan.png"
              alt="Hariharan V"
              fill
              priority
              sizes="(max-width: 600px) 92vw, (max-width: 1050px) 55vw, 48vw"
              className="hero-portrait-image"
            />
          </div>
        </div>

        <div className="hero-actions">
          <button
            type="button"
            className="hero-button hero-button-primary"
            onClick={() => scrollToSection("about-me")}
          >
            Explore My Portfolio <span aria-hidden="true">⟶</span>
          </button>

          <button
            type="button"
            className="hero-button hero-button-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>

          <div className="hero-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`hero-social ${social.className}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${social.name} profile`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="hero-tagline">
            Let&apos;s build something meaningful.
          </p>
        </div>
      </main>

      <footer className="hero-bottom-line">
        <span>CREATIVITY</span>
        <i />
        <span>TECHNOLOGY</span>
        <i />
        <span>CONTINUOUS LEARNING</span>
      </footer>
    </section>
  );
}
