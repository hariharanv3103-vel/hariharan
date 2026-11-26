"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "hariharanv3103@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div>
            <div className="contact-accent-line" />
            <h2 className="contact-title">
              Get In <span>Touch</span>
            </h2>
            <p className="contact-subtitle">
              V. Hariharan • B.Tech AI &amp; Data Science
            </p>
          </div>

          <div className="contact-status-badge">
            <span className="status-pulse" />
            Open to Full-Time Opportunities
          </div>
        </div>

        {/* Direct Contact Details Grid */}
        <div className="contact-cards-grid">
          {/* Email Card with One-Click Copy */}
          <div className="contact-detail-card">
            <div className="contact-detail-main">
              <span className="contact-detail-label">EMAIL ADDRESS</span>
              <a href={`mailto:${emailAddress}`} className="contact-detail-value">
                {emailAddress}
              </a>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="contact-copy-btn"
              aria-label="Copy email address"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="contact-detail-card">
            <div className="contact-detail-main">
              <span className="contact-detail-label">PHONE / WHATSAPP</span>
              <a href="tel:+919342787864" className="contact-detail-value">
                +91 9342787864
              </a>
            </div>
            <a
              href="https://wa.me/919342787864"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-link"
            >
              WhatsApp ↗
            </a>
          </div>

          {/* Location Card */}
          <div className="contact-detail-card">
            <div className="contact-detail-main">
              <span className="contact-detail-label">LOCATION</span>
              <p className="contact-detail-value">Cuddalore, Tamil Nadu, India</p>
            </div>
            <span className="contact-tz-tag">IST</span>
          </div>
        </div>

        {/* Social & Coding Profiles */}
        <div className="contact-socials-box">
          <p className="contact-socials-heading">CONNECT &amp; CODING PROFILES</p>
          <div className="contact-socials-grid">
            <a
              href="https://www.linkedin.com/in/hariharan-v-a75989421/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-pill"
            >
              <span>LinkedIn</span>
              <span className="social-arrow">↗</span>
            </a>

            <a
              href="https://github.com/hariharanv3103-vel"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-pill"
            >
              <span>GitHub</span>
              <span className="social-arrow">↗</span>
            </a>

            <a
              href="https://leetcode.com/u/Hariharan3103/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-pill"
            >
              <span>LeetCode</span>
              <span className="social-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <footer className="contact-footer">
          <p>© 2026 V. Hariharan. Built with Next.js &amp; React.</p>
          <a href="#top" className="back-to-top-link">
            Back to Top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}