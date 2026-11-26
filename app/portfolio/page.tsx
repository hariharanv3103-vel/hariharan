import "../../styles/portfolio.css";
import "../../styles/education.css";
import "../../styles/skills.css";
import "../../styles/experience.css";
import "../../styles/projects.css";
import "../../styles/certifications.css";
import "../../styles/contact.css";

import Home from "../../components/portfolio/Home";
import AboutMe from "../../components/portfolio/AboutMe";
import Education from "../../components/portfolio/Education";
import Skills from "../../components/portfolio/Skills";
import Experience from "../../components/portfolio/Experience";
import Projects from "../../components/portfolio/Projects";
import Certifications from "../../components/portfolio/Certifications";
import Contact from "../../components/portfolio/Contact";

export default function PortfolioPage() {
  return (
    <main className="portfolio-page" id="top">
      {/* 1. Hero Section */}
      <Home />

      {/* 2. About Me Section */}
      <section
        className="portfolio-section"
        id="about-me"
      >
        <AboutMe />
      </section>

      {/* 3. Education Section */}
      <section
        className="portfolio-section"
        id="education"
      >
        <Education />
      </section>

      {/* 4. Skills Section */}
      <section
        className="portfolio-section"
        id="skills"
      >
        <Skills />
      </section>

      {/* 5. Experience Section */}
      <Experience />

      {/* 6. Projects Section */}
      <Projects />

      {/* 7. Certifications Section */}
      <Certifications />

      {/* 8. Contact Section */}
      <Contact />
    </main>
  );
}