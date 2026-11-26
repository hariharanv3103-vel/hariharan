"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ExperienceItem {
  id: number;
  number: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  certificateId: string;
  certificateImage: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    number: "01",
    role: "MERN Stack Development Intern",
    company: "NoviTech R&D Private Limited",
    location: "Coimbatore, Tamil Nadu",
    duration: "3 Months",
    period: "June 29 – September 29, 2026",
    certificateId: "NT_3MERN3772",
    certificateImage: "/experience/e2.png",
    summary:
      "Completed an intensive 3-month MERN Stack internship focused on architecting full-stack web applications, RESTful API engineering, and end-to-end database integration.",
    highlights: [
      "Engineered responsive, mobile-first user interfaces using React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap.",
      "Built and tested scalable REST APIs with Node.js and Express.js, validating endpoints via Postman.",
      "Designed relational and NoSQL schemas in MongoDB and MySQL, executing full CRUD operations and debugging workflows.",
      "Delivered multiple independent end-to-end web projects from initial wireframing through deployment.",
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "MySQL", "REST API", "Postman", "Git"],
  },
  {
    id: 2,
    number: "02",
    role: "Full Stack Development Intern",
    company: "NoviTech R&D Private Limited",
    location: "Coimbatore, Tamil Nadu",
    duration: "1 Month",
    period: "June 29 – July 29, 2026",
    certificateId: "FSDIN6603",
    certificateImage: "/experience/e1.png",
    summary:
      "Completed a hands-on 1-month Full Stack Development internship covering modern frontend UI development, server-side logic, and database connectivity.",
    highlights: [
      "Developed clean, responsive web interfaces utilizing HTML5, CSS3, JavaScript, and React.js components.",
      "Implemented backend service logic and RESTful API integration using Node.js and Express.js.",
      "Connected frontend applications with MongoDB and MySQL databases to perform structured CRUD operations.",
      "Practiced modular version control with Git and GitHub while building standalone web prototypes.",
    ],
    techStack: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL", "HTML5", "CSS3"],
  },
];

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="experience-accent-line" />
          <h2 className="experience-title">
            Work <span>Experience</span>
          </h2>
          <p className="experience-subtitle">
            Hands-on engineering internships building full-stack web applications and scalable APIs.
          </p>
        </div>

        {/* Clean Editorial Timeline */}
        <div className="experience-timeline">
          {experienceData.map((item) => (
            <article key={item.id} className="experience-card">
              {/* Timeline Marker */}
              <div className="experience-marker" aria-hidden="true">
                <span className="experience-dot" />
              </div>

              <div className="experience-card-inner">
                {/* Top Meta Row */}
                <div className="experience-top-row">
                  <div>
                    <span className="experience-period">{item.period}</span>
                    <h3 className="experience-role">{item.role}</h3>
                    <p className="experience-company">
                      {item.company} <span>• {item.location}</span>
                    </p>
                  </div>

                  <div className="experience-badges">
                    <span className="experience-duration-pill">{item.duration}</span>
                    <span className="experience-id-pill">ID: {item.certificateId}</span>
                  </div>
                </div>

                <p className="experience-summary">{item.summary}</p>

                {/* Impact Bullets */}
                <ul className="experience-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {/* Footer: Tech Pills + Certificate Preview Button */}
                <div className="experience-footer">
                  <div className="experience-tech-list">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="experience-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="experience-cert-btn"
                    onClick={() => setSelectedCert(item)}
                  >
                    View Certificate <span>↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="exp-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exp-modal-title"
        >
          <div
            className="exp-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="exp-modal-top">
              <div>
                <p className="exp-modal-eyebrow">
                  VERIFIED INTERNSHIP • ID: {selectedCert.certificateId}
                </p>
                <h3 id="exp-modal-title" className="exp-modal-title">
                  {selectedCert.role} — {selectedCert.company}
                </h3>
              </div>

              <button
                type="button"
                className="exp-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>

            <div className="exp-modal-image-box">
              <Image
                src={selectedCert.certificateImage}
                alt={`${selectedCert.role} Certificate`}
                width={900}
                height={680}
                className="exp-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}