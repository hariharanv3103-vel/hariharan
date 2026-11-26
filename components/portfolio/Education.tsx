
"use client";

const educationDetails = [
  {
    id: "degree",
    year: "2022 – 2026",
    qualification: "B.Tech in Artificial Intelligence and Data Science",
    institution: "CARE College of Engineering",
    detail: "Autonomous · Affiliated with Anna University",
    location: "Tiruchirappalli, Tamil Nadu",
    percentage: "74%",
    type: "degree",
    icon: "cap",
  },
  {
    id: "higher-secondary",
    year: "2022",
    qualification: "Higher Secondary Certificate (Class XII)",
    institution: "Government Higher Secondary School",
    detail: "Tamil Nadu State Board",
    location: "Tamil Nadu, India",
    percentage: "70%",
    type: "school",
    icon: "book",
  },
  {
    id: "secondary",
    year: "2020",
    qualification: "Secondary School Certificate (Class X)",
    institution: "Government Higher Secondary School",
    detail: "Tamil Nadu State Board",
    location: "Tamil Nadu, India",
    percentage: "63%",
    type: "school",
    icon: "book",
  },
];

function EducationIcon({ type }: { type: string }) {
  if (type === "cap") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M4 17 24 7l20 10-20 10L4 17Z"
          fill="currentColor"
          opacity=".9"
        />
        <path
          d="M12 22v9c7 6 17 6 24 0v-9L24 28 12 22Z"
          fill="currentColor"
          opacity=".7"
        />
        <path
          d="M42 19v12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="42" cy="34" r="3" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M10 9h13c4 0 7 3 7 7v25c0-4-3-7-7-7H10V9Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M38 9H25c-4 0-7 3-7 7v25c0-4 3-7 7-7h13V9Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M13 17h7m-7 6h7m8-6h7m-7 6h7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PercentageIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="20" width="6" height="12" rx="2" fill="currentColor" />
      <rect x="15" y="12" width="6" height="20" rx="2" fill="currentColor" />
      <rect x="26" y="4" width="6" height="28" rx="2" fill="currentColor" />
    </svg>
  );
}

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <header className="education-heading">
          <div className="education-eyebrow">
            <span>MY ACADEMIC JOURNEY</span>
            <span className="education-eyebrow-line" />
          </div>

          <h2 className="education-title">
            Educa<span>tion</span>
          </h2>

          <p className="education-intro">
            My educational background that has shaped my skills and knowledge.
          </p>

          <div className="education-watermark" aria-hidden="true">
            <EducationIcon type="cap" />
          </div>
        </header>

        <div className="education-timeline">
          {educationDetails.map((item) => (
            <article
              className="education-item"
              key={item.id}
            >
              <div className="education-year">
                {item.year}
              </div>

              <div className="education-timeline-marker">
                <span />
              </div>

              <div className="education-card">
                <div className="education-card-accent" />

                <div className="education-icon-box">
                  <EducationIcon type={item.icon} />
                </div>

                <div className="education-details">
                  <h3 className="education-qualification">
                    {item.qualification}
                  </h3>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <div className="education-meta">
                    <span className="education-meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      {item.detail}
                    </span>

                    <span className="education-meta-divider" />

                    <span className="education-meta-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 3v4m10-4v4M3 10h18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="education-percentage">
                  <PercentageIcon />
                  <div>
                    <span className="education-percentage-label">
                      Percentage
                    </span>
                    <strong>{item.percentage}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
