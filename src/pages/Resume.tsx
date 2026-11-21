interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: {
    project: string;
    details: string[];
  }[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Rakuten",
    location: "Tokyo, Japan",
    role: "Product Manager · Analytics Data Engineering",
    period: "Jun 2023 — Present",
    highlights: [
      {
        project: "Offline Campaign Evaluation Web Application",
        details: [
          "Owned product lifecycle from concept and feature design through QA, leveraging offline purchase, behavioral, and demographic datasets.",
          "Adopted by 20+ retail partners to measure and optimize marketing campaigns.",
        ],
      },
      {
        project: "Voice of Customer (VoC) LLM Proof of Concept",
        details: [
          "Built an LLM-powered VoC pipeline for topic labeling, sentiment rating, semantic clustering, and summarization with visual reporting.",
        ],
      },
      {
        project: "Customized Target Prospecting Model",
        details: [
          "Led cross-service prospecting model PoC, achieving a 50% lift in conversion rate (CVR).",
        ],
      },
      {
        project: "Data-Driven Market & GMV Analysis",
        details: [
          "Analyzed offline purchase data to identify customer segments and market positioning, delivering storytelling-driven client proposals.",
        ],
      },
    ],
  },
  {
    company: "Accenture",
    location: "Tokyo, Japan",
    role: "Senior Analyst",
    period: "Apr 2019 — Jan 2022",
    highlights: [
      {
        project: "Fully Digital Banking System",
        details: [
          "Defined functional design and business rules for account opening, transactions, and rule registration; awarded the Red Dot Design Award 2021.",
        ],
      },
      {
        project: "Offline Digital Payments Platform",
        details: [
          "Standardized API design templates and authored functional specs for user, corporate, and Citi Bank transaction APIs.",
        ],
      },
      {
        project: "Telecom Logistics Data Migration",
        details: [
          "Led a 4-person migration team across tool development, ETL execution, data validation, and bilingual stakeholder alignment.",
        ],
      },
    ],
  },
  {
    company: "A.R Advanced Technology",
    location: "Tokyo, Japan",
    role: "Application Engineer",
    period: "Apr 2017 — Apr 2019",
    highlights: [
      {
        project: "Public Transportation DWH-ETL Tool",
        details: [
          "Led a 6-engineer team in DWH-ETL development and testing, recovering a delayed delivery schedule.",
        ],
      },
      {
        project: "Alcohol Detector Windows Application",
        details: [
          "Designed, implemented, and tested database-layer APIs.",
        ],
      },
    ],
  },
];

const SKILLS = [
  {
    category: "Product & Design",
    items: "Jira, Confluence, Notion, Figma, Agile, Waterfall",
  },
  {
    category: "Languages",
    items: "Python, SQL, Java, C#, R, JavaScript",
  },
  {
    category: "Cloud & Data",
    items: "GCP (BigQuery, Looker Studio, Cloud Functions, IAM, Identity Platform), AWS (RDS, EC2, Redshift), Git",
  },
];

const CERTIFICATIONS = [
  "Stanford Online — Machine Learning (Coursera)",
  "Google Cloud — Essential Infrastructure (Coursera)",
  "Advanced Product Management: Vision, Strategy & Metrics",
];

const Resume = () => {
  return (
    <div className="space-y-14">
      <header className="space-y-4 border-b border-border/60 pb-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
          <h1 className="text-fluid-h1 font-medium tracking-tight">
            Lin (Clare) Guo
          </h1>
          <a
            href="mailto:contact@clareguo.com"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            contact@clareguo.com
          </a>
        </div>
        <p className="max-w-2xl text-fluid-body text-muted-foreground">
          Product Manager with a background in data science, IT consulting, and
          application engineering across banking, payments, and enterprise BI.
        </p>
      </header>

      <section className="space-y-10">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Experience
        </h2>
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="grid gap-4 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <div className="space-y-1">
                <h3 className="text-base font-medium text-foreground">
                  {exp.company}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </p>
                <p className="text-xs text-muted-foreground">{exp.location}</p>
              </div>
              <div className="space-y-5">
                <p className="text-sm font-medium text-foreground">{exp.role}</p>
                <div className="space-y-4">
                  {exp.highlights.map((item) => (
                    <div key={item.project} className="space-y-1">
                      <h4 className="text-sm font-medium text-foreground/90">
                        {item.project}
                      </h4>
                      <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 border-t border-border/60 pt-10 sm:grid-cols-3">
        <div className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Technical Stack
          </h2>
          <dl className="space-y-3 text-sm">
            {SKILLS.map((group) => (
              <div key={group.category} className="space-y-0.5">
                <dt className="font-medium text-foreground">{group.category}</dt>
                <dd className="text-muted-foreground">{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Languages
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <span className="font-medium text-foreground">English</span> — IELTS 7.5, TOEIC 925
            </li>
            <li>
              <span className="font-medium text-foreground">Japanese</span> — JLPT N1
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Certifications
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
