
"use client";

import { useEffect, useState } from "react";
import {
  Award,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  X,
} from "lucide-react";
import "../../styles/certifications.css";

type Certificate = {
  image: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
  skills: string[];
};

const certificates: Certificate[] = [
  {
    image: "/certificates/img1.png",
    title: "Full Stack Development MasterClass",
    organization: "NoviTech R&D Private Limited",
    date: "June 29 – July 31, 2026",
    category: "Web Development",
    description:
      "Successfully completed a 30-day MasterClass in Full Stack Development at NoviTech R&D Private Limited. The program provided exposure to frontend and backend development concepts, responsive website design, and the process of building user-friendly web applications. This learning experience strengthened my understanding of modern web development and the connection between client-side interfaces and server-side functionality.",
    skills: ["Full Stack Development", "Frontend", "Backend"],
  },
  {
    image: "/certificates/img2.png",
    title: "Business Analytics with Excel",
    organization: "SkillUp by Simplilearn",
    date: "June 3, 2023",
    category: "Business Analytics",
    description:
      "Completed Business Analytics with Excel training, developing knowledge of spreadsheet-based data analysis, data organization, and working with information to support business decisions. The course strengthened my understanding of how Excel can be used to interpret data and communicate useful findings.",
    skills: ["Microsoft Excel", "Data Analysis", "Business Analytics"],
  },
  {
    image: "/certificates/img3.png",
    title: "UI/UX Design Internship",
    organization: "NoviTech R&D Private Limited",
    date: "June 29 – July 29, 2026",
    category: "Internship",
    description:
      "Completed a one-month internship in UI/UX Design at NoviTech R&D Private Limited. Gained exposure to user interface design, user experience principles, visual consistency, and the importance of creating intuitive digital experiences. This experience helped develop an understanding of how thoughtful design supports usability.",
    skills: ["UI Design", "UX Principles", "Visual Design"],
  },
  {
    image: "/certificates/img4.png",
    title: "CERTVERIFY – ICSIDE'26",
    organization: "St. Peter's College of Engineering and Technology",
    date: "April 10, 2026",
    category: "Conference",
    description:
      "Presented the CERTVERIFY – AI Certificate Verification System paper at the 1st International Conference on Smart Intelligence and Data Engineering (ICSIDE'26). The presentation provided an opportunity to communicate a technical idea, explain its purpose, and engage with an academic conference audience.",
    skills: ["Artificial Intelligence", "Research", "Presentation"],
  },
  {
    image: "/certificates/img5.png",
    title: "Webfest'23 Participation",
    organization: "Holy Cross College (Autonomous)",
    date: "January 21, 2023",
    category: "Participation",
    description:
      "Participated in Webfest'23, a national-level inter-collegiate event featuring technical and non-technical activities. The experience offered an opportunity to participate in a college-level event environment and develop confidence through active involvement.",
    skills: ["Teamwork", "Communication", "Participation"],
  },
  {
    image: "/certificates/img6.png",
    title: "Spell Bee – First Prize",
    organization: "CARE College of Engineering",
    date: "May 18, 2023",
    category: "Achievement",
    description:
      "Received First Prize in the Spell Bee event organized by GESA and the Science Club at CARE College of Engineering. This achievement recognized spelling and vocabulary skills and provided a valuable opportunity to demonstrate language knowledge.",
    skills: ["Vocabulary", "Spelling", "Achievement"],
  },
];

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [fullView, setFullView] = useState(false);

  const selected =
    selectedIndex === null ? null : certificates[selectedIndex];

  const move = (direction: number) => {
    setActiveIndex(
      (current) =>
        (current + direction + certificates.length) % certificates.length
    );
  };

  const closeModal = () => {
    setFullView(false);
    setSelectedIndex(null);
  };

  const changeSelected = (direction: number) => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return (
        (current + direction + certificates.length) % certificates.length
      );
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (fullView) {
          setFullView(false);
        } else {
          closeModal();
        }
      }

      if (!fullView && event.key === "ArrowLeft") {
        changeSelected(-1);
      }

      if (!fullView && event.key === "ArrowRight") {
        changeSelected(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, fullView]);

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-heading">
        <div className="certifications-heading-main">
          <h2>
            Certifications<span>.</span>
          </h2>

          <p>
            Courses and certifications that helped me grow,
            <br className="cert-desktop-break" />
            strengthen my skills and keep learning.
          </p>
        </div>
      </div>

      {/* Certificate carousel */}
      <div className="cert-scene">
        <button
          type="button"
          className="cert-scene-arrow cert-scene-arrow-left"
          onClick={() => move(-1)}
          aria-label="Previous certificate"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="cert-stage">
          {certificates.map((certificate, index) => {
            const offset =
              (index - activeIndex + certificates.length) %
              certificates.length;

            const position =
              offset > certificates.length / 2
                ? offset - certificates.length
                : offset;

            return (
              <button
                type="button"
                key={certificate.image}
                className={`cert-3d-card ${
                  position === 0 ? "is-active" : ""
                }`}
                style={
                  { "--position": position } as React.CSSProperties
                }
                onClick={() => {
                  if (position === 0) {
                    setSelectedIndex(index);
                    setFullView(false);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                aria-label={
                  position === 0
                    ? `Open ${certificate.title} details`
                    : `Select ${certificate.title}`
                }
              >
                <div className="cert-card-visual">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                  />

                  <span className="cert-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="cert-card-open">
                    <Eye size={15} />
                    View details
                  </span>
                </div>

                <div className="cert-card-copy">
                  <span className="cert-card-category">
                    {certificate.category}
                  </span>

                  <h3>{certificate.title}</h3>
                  <p>{certificate.organization}</p>
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="cert-scene-arrow cert-scene-arrow-right"
          onClick={() => move(1)}
          aria-label="Next certificate"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="cert-carousel-footer">
        <div className="cert-progress">
          <span
            style={{
              width: `${((activeIndex + 1) / certificates.length) * 100}%`,
            }}
          />
        </div>

        <span className="cert-carousel-count">
          {String(activeIndex + 1).padStart(2, "0")}
          <span> / </span>
          {String(certificates.length).padStart(2, "0")}
        </span>

        <div className="cert-carousel-dots">
          {certificates.map((certificate, index) => (
            <button
              key={certificate.image}
              type="button"
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Details popup */}
      {selected && (
        <div
          className="certificate-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            className="certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <button
              type="button"
              className="certificate-modal-close"
              onClick={closeModal}
              aria-label="Close certificate details"
            >
              <X size={22} />
            </button>

            <div className="certificate-modal-visual">
              <img src={selected.image} alt={selected.title} />

              <div className="certificate-modal-image-controls">
                <button
                  type="button"
                  onClick={() => changeSelected(-1)}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft size={20} />
                </button>

                <span>
                  {selectedIndex! + 1} / {certificates.length}
                </span>

                <button
                  type="button"
                  onClick={() => changeSelected(1)}
                  aria-label="Next certificate"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="certificate-modal-details">
              <span className="certificate-modal-category">
                {selected.category}
              </span>

              <span className="certificate-modal-kicker">
                CERTIFICATE DETAILS
              </span>

              <h2>{selected.title}</h2>

              <div className="certificate-modal-meta">
                <div>
                  <Award size={20} />
                  <span>
                    <small>ORGANIZATION</small>
                    {selected.organization}
                  </span>
                </div>

                <div>
                  <CalendarDays size={20} />
                  <span>
                    <small>DATE</small>
                    {selected.date}
                  </span>
                </div>
              </div>

              <div className="certificate-modal-description">
                <small>OVERVIEW</small>
                <p>{selected.description}</p>
              </div>

              <div className="certificate-modal-skills">
                <h3>Skills &amp; Topics</h3>

                <div className="certificate-modal-tags">
                  {selected.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="certificate-modal-actions">
                <button
                  type="button"
                  onClick={() => setFullView(true)}
                >
                  <Eye size={17} />
                  View Certificate
                </button>

                <a href={selected.image} download>
                  <Download size={17} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-screen certificate viewer */}
      {fullView && selected && (
        <div
          className="certificate-fullview"
          role="dialog"
          aria-modal="true"
          aria-label={`Full certificate: ${selected.title}`}
        >
          <button
            type="button"
            className="certificate-fullview-close"
            onClick={() => setFullView(false)}
            aria-label="Close full certificate view"
          >
            <X size={25} />
          </button>

          <img src={selected.image} alt={selected.title} />

          <div className="certificate-fullview-caption">
            {selected.title}
          </div>
        </div>
      )}
    </section>
  );
}
