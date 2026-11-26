
"use client";

import Image from "next/image";
import "../../styles/about.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about-me">
      <div className="about-card">

        {/* LEFT: PORTRAIT */}
        <div className="about-image-column">
          <div className="about-image-frame">
            <div className="about-frame-accent about-frame-accent-top" />
            <div className="about-frame-accent about-frame-accent-bottom" />

            <div className="about-frame-label">
              <span className="about-frame-dot" />
              HARIHARAN V
            </div>

            <div className="about-image">
              <Image
                src="/hari1.png"
                alt="Hariharan V"
                fill
                priority
                sizes="(max-width: 600px) 85vw, (max-width: 1024px) 42vw, 440px"
                className="about-profile-image"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: INTRODUCTION */}
        <div className="about-content">
          <div className="about-eyebrow">
            <span>GET TO KNOW ME</span>
            <span className="about-eyebrow-line" />
          </div>

          <h2 className="about-title">
            Hello, I&apos;m{" "}
            <span>Hariharan V</span>
          </h2>

          <p className="about-subtitle">
            Artificial Intelligence and Data Science
          </p>

          <div className="about-gold-accent" />

          <p className="about-description">
            I am a passionate developer interested in building
            modern, user-friendly, and responsive web applications.
            I enjoy solving problems, learning new technologies,
            and turning ideas into practical digital solutions.
            I am always eager to improve my skills and grow as a
            developer.
          </p>
        </div>

      </div>
    </section>
  );
}
