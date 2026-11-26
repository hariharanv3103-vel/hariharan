
"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Sparkles,
  Users,
  ChevronDown,
  Lightbulb,
  MessageCircle,
  Trophy,
  RefreshCw,
  TrendingUp,
  UsersRound,
  Braces,
} from "lucide-react";

import "../../styles/skills.css";

type Skill = {
  name: string;
  logo?: string;
  color?: string;
  mark?: string;
};

type SkillGroup = {
  title: string;
  icon: typeof Code2;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", logo: "python", color: "#3776AB" },
      { name: "JavaScript", logo: "javascript", color: "#D6A800" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "HTML5", logo: "html5", color: "#E34F26" },
      { name: "CSS3", logo: "css3", color: "#1572B6" },
      { name: "React.js", logo: "react", color: "#00B8D9" },
      { name: "Next.js", logo: "nextdotjs", color: "#111111" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", logo: "nodedotjs", color: "#339933" },
      { name: "FastAPI", logo: "fastapi", color: "#009688" },
      { name: "REST API", mark: "API", color: "#9A6A22" },
      { name: "CRUD Operations", mark: "CRUD", color: "#9A6A22" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", logo: "mongodb", color: "#47A248" },
      { name: "Firebase", logo: "firebase", color: "#F4A900" },
      { name: "MySQL", logo: "mysql", color: "#00758F" },
      { name: "SQL", mark: "SQL", color: "#2775E2" },
    ],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: [
      { name: "VS Code", logo: "visualstudiocode", color: "#007ACC" },
      { name: "Git", logo: "git", color: "#F05032" },
      { name: "GitHub", logo: "github", color: "#171717" },
      { name: "Postman", logo: "postman", color: "#FF6C37" },
      { name: "GitHub Copilot", logo: "githubcopilot", color: "#222222" },
      { name: "Vercel", logo: "vercel", color: "#111111" },
    ],
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    skills: [
      { name: "ChatGPT", logo: "openai", color: "#10A37F" },
      { name: "Google Gemini", logo: "googlegemini", color: "#4285F4" },
      { name: "Google Flow", mark: "FLOW", color: "#6854D9" },
      { name: "Veo", mark: "VEO", color: "#3478F6" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", mark: "PS" },
      { name: "Teamwork", mark: "TW" },
      { name: "Communication", mark: "CM" },
      { name: "Leadership", mark: "LD" },
      { name: "Adaptability", mark: "AD" },
      { name: "Continuous Learning", mark: "CL" },
    ],
  },
];

const softSkillIcons = [
  Lightbulb,
  UsersRound,
  MessageCircle,
  Trophy,
  RefreshCw,
  TrendingUp,
];

function getLogoUrl(slug: string): string {
  return `https://cdn.simpleicons.org/${slug}`;
}

function SkillLogo({ skill }: { skill: Skill }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (skill.logo && !imageFailed) {
    return (
      <img
        className="skill-brand-logo"
        src={getLogoUrl(skill.logo)}
        alt=""
        loading="eager"
        decoding="async"
        onError={() => setImageFailed(true)}
      />
    );
  }

  return (
    <span
      className="skill-fallback-logo"
      style={{ color: skill.color || "#98723A" }}
      aria-hidden="true"
    >
      {skill.mark || skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Start loading brand logos when the section mounts.
  useEffect(() => {
    const urls = skillGroups.flatMap((group) =>
      group.skills.flatMap((skill) =>
        skill.logo ? [getLogoUrl(skill.logo)] : []
      )
    );

    const images: HTMLImageElement[] = urls.map((url) => {
      const image = new Image();
      image.src = url;
      return image;
    });

    return () => {
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <header className="skills-heading">
          <span className="skills-eyebrow">TECHNICAL</span>

          <h2>
            Skills<span>.</span>
          </h2>

          <div className="skills-heading-line" />

          <p>
            Explore my skills, technologies and tools.
            Select a category to discover more.
          </p>
        </header>

        <div className="skills-accordion">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;
            const isOpen = activeCategory === group.title;
            const panelId = `skill-panel-${index}`;

            return (
              <article
                className={`skill-group ${isOpen ? "is-open" : ""}`}
                key={group.title}
              >
                <button
                  type="button"
                  className="skill-group-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveCategory(isOpen ? null : group.title)
                  }
                >
                  <span className="skill-category-icon">
                    <GroupIcon size={23} strokeWidth={1.8} />
                  </span>

                  <span className="skill-category-title">
                    <span className="skill-category-name">
                      {group.title}
                    </span>

                    <span className="skill-category-underline" />

                    <span className="skill-category-count">
                      {group.skills.length} skills
                    </span>
                  </span>

                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ChevronDown
                    className="skill-chevron"
                    size={21}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="skill-panel" id={panelId}>
                    <div className="skill-items">
                      {group.skills.map((skill, skillIndex) => {
                        const SoftIcon =
                          group.title === "Soft Skills"
                            ? softSkillIcons[skillIndex]
                            : null;

                        return (
                          <div
                            className="skill-item"
                            key={skill.name}
                            style={
                              {
                                "--skill-index": skillIndex,
                              } as CSSProperties
                            }
                          >
                            <div
                              className="skill-logo"
                              style={
                                {
                                  "--skill-color":
                                    skill.color || "#98723A",
                                } as CSSProperties
                              }
                            >
                              {SoftIcon ? (
                                <SoftIcon
                                  size={32}
                                  strokeWidth={1.8}
                                  aria-hidden="true"
                                />
                              ) : group.title === "Backend Development" &&
                                skill.name === "REST API" ? (
                                <Braces
                                  size={32}
                                  strokeWidth={1.8}
                                  aria-hidden="true"
                                />
                              ) : (
                                <SkillLogo skill={skill} />
                              )}
                            </div>

                            <span className="skill-name">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
