"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ProjectItem {
  id: number;
  number: string;
  category: "Full-Stack Web" | "Productivity & Tools";
  title: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  techStack: string[];
  features: string[];
  demoCredentials?: {
    role: string;
    username: string;
    password: string;
  };
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    number: "01",
    category: "Full-Stack Web",
    title: "Campus Management System",
    tagline: "Unified Role-Based Academic & Campus Portal",
    description:
      "Web-based campus portal with dedicated Admin, Faculty, and Student dashboards for attendance, marks, homework, and leave tracking.",
    image: "/projects/p1.png",
    liveUrl: "https://campus-crm-chi.vercel.app/",
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Local Storage"],
    features: [
      "Role-Based Dashboards (Admin, Faculty & Student)",
      "Student & Faculty Profile Management",
      "Attendance, Marks & Homework Tracking",
      "Leave Request & Campus Announcements System",
    ],
    demoCredentials: {
      role: "Admin",
      username: "headmaster",
      password: "head123",
    },
  },
  {
    id: 2,
    number: "02",
    category: "Full-Stack Web",
    title: "FITCLUB – Gym Management",
    tagline: "Centralized Fitness Club & Membership Operations",
    description:
      "Full-stack gym management app to organize members, Basic/Standard/Premium plans, daily check-in attendance, and expiry tracking.",
    image: "/projects/p2.png",
    liveUrl: "https://fitclub-gym-management.vercel.app",
    techStack: ["React.js", "MongoDB", "REST API", "Vercel", "Render"],
    features: [
      "Real-time Gym Statistics & Admin Dashboard",
      "Member Registration, Search & Profile Management",
      "Tiered Plans (Basic, Standard & Premium)",
      "Member Check-In Attendance & Expiry Tracking",
    ],
    demoCredentials: {
      role: "Admin",
      username: "admin@example.com",
      password: "YourStrongPassword123",
    },
  },
  {
    id: 3,
    number: "03",
    category: "Productivity & Tools",
    title: "DailyKit – Productivity Toolkit",
    tagline: "All-in-One Browser Workspace & Utility Suite",
    description:
      "Browser workspace with 12+ daily utilities including PDF merge, Image-to-PDF, QR generator, image compressor, calculators, and Pomodoro.",
    image: "/projects/p3.png",
    liveUrl: "https://dailykit-jet.vercel.app",
    techStack: ["React.js", "JavaScript", "PDF-Lib", "Canvas API", "CSS3"],
    features: [
      "PDF Merge & Image-to-PDF Converter",
      "Image Compressor & QR Code Generator",
      "Standard & Scientific Calculators + Unit Converter",
      "Pomodoro Timer, Online Notepad & To-Do List",
    ],
  },
  {
    id: 4,
    number: "04",
    category: "Full-Stack Web",
    title: "Smart Queue Management",
    tagline: "Smart Waiting, Better Service",
    description:
      "Online token booking and live queue tracking app allowing slot reservations and real-time wait time updates with full admin queue control.",
    image: "/projects/p4.png",
    liveUrl: "https://smartqueue-chan.netlify.app",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Online Token Booking with Date & Time Slots",
      "Live Serving Token & Estimated Wait Time Tracker",
      "Admin Queue Control (Waiting, Serving, Completed)",
      "Service, Slot & Booking Statistics Management",
    ],
  },
];

const categories = ["All", "Full-Stack Web", "Productivity & Tools"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeFilter);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollTrack = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const scrollAmount = Math.min(trackRef.current.clientWidth * 0.82, 460);
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Compact Header */}
        <div className="projects-header">
          <div className="projects-heading-group">
            <div className="projects-accent-line" />
            <h2 className="projects-title">
              Featured <span>Projects</span>
            </h2>
          </div>

          <div className="projects-controls">
            <div className="projects-filters" role="tablist" aria-label="Filter projects">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat}
                  className={`projects-filter-btn ${activeFilter === cat ? "active" : ""}`}
                  onClick={() => handleFilterChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="projects-nav-arrows" aria-label="Scroll projects">
              <button
                type="button"
                className="projects-arrow-btn"
                onClick={() => scrollTrack("left")}
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                className="projects-arrow-btn"
                onClick={() => scrollTrack("right")}
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal X-Scroll Track */}
        <div className="projects-track" ref={trackRef}>
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Preview Frame */}
              <div className="project-image-wrapper">
                <span className="project-number-badge">{project.number}</span>
                <div className="project-image-frame">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 600px) 84vw, (max-width: 1024px) 46vw, 380px"
                    className="project-image"
                  />
                </div>
              </div>

              {/* Compact Body */}
              <div className="project-body">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.demoCredentials && (
                    <span className="project-demo-tag">Demo Login</span>
                  )}
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-list">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn-live"
                  >
                    Live Demo <span>↗</span>
                  </a>

                  <button
                    type="button"
                    className="project-btn-details"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal for Demo Login & Features */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <p className="project-modal-eyebrow">
              {selectedProject.number} — {selectedProject.category.toUpperCase()}
            </p>
            <h3 id="modal-project-title" className="project-modal-title">
              {selectedProject.title}
            </h3>
            <p className="project-modal-tagline">{selectedProject.tagline}</p>
            <p className="project-modal-desc">{selectedProject.description}</p>

            {selectedProject.demoCredentials && (
              <div className="project-credentials-box">
                <p className="credentials-heading">
                  Demo Login Credentials ({selectedProject.demoCredentials.role})
                </p>
                <div className="credentials-grid">
                  <div>
                    <span>Username / Email:</span>
                    <code>{selectedProject.demoCredentials.username}</code>
                  </div>
                  <div>
                    <span>Password:</span>
                    <code>{selectedProject.demoCredentials.password}</code>
                  </div>
                </div>
              </div>
            )}

            <div className="project-modal-features">
              <h4>Key Modules &amp; Features</h4>
              <ul>
                {selectedProject.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="project-modal-footer">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-modal-primary-btn"
              >
                Open Live Application ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}