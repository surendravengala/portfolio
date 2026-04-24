import { useState } from "react";
import { Section } from "./Section";

const tabs = ["Education", "Certifications", "Achievements"] as const;

const data = {
  Education: [
    {
      meta: "2020 — 2024",
      title: "B.Tech — Computer Science",
      sub: "GITAM University, Bengaluru",
      detail: "CGPA 7.67 / 10",
    },
    {
      meta: "2018 — 2020",
      title: "Intermediate — MPC",
      sub: "Narayana Junior College, Vijayawada",
      detail: "CGPA 9.54 / 10",
    },
    {
      meta: "2018",
      title: "10th Class",
      sub: "Narayana E.M High School, Nellore",
      detail: "CGPA 9.7 / 10",
    },
  ],
  Certifications: [
  {
    meta: "Scholar Logic",
    title: "Python Full-Stack Development",
    note: "Hands-on training in Python, Django, React, and REST APIs with focus on building end-to-end web applications.",
  },
  {
    meta: "HackerRank",
    title: "Software Engineer Certification",
    note: "Validated problem-solving skills, SQL proficiency, and understanding of REST API concepts.",
  },
  {
    meta: "DeepLearning.AI",
    title: "AI For Everyone",
    detail: "Coursera",
    note: "Foundations of applied AI, real-world use cases, and business-oriented AI thinking.",
  },
  {
    meta: "University of Alberta",
    title: "Software Architecture",
    detail: "Coursera",
    note: "Covered architectural patterns, system design principles, and engineering trade-offs.",
  },
],
  Achievements: [
    { meta: "LeetCode", title: "LeetCode 75", sub: "AceCoding", detail: "DSA Problems solved", note: "Solved curated DSA problems, strengthening problem-solving skills across core data structures and algorithms." },
    { meta: "HackerRank", title: "Python", sub: "Gold Level", detail: "5★ Badge", note: "Earned a 5-star badge in Python at the Gold level." },
    { meta: "HackerRank", title: "30 Days of Code", sub: "Gold Level", detail: "5★ Rating", note: "Achieved a 5-star rating in the 30 Days of Code challenge." },
  ],
};

export const Credentials = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("Education");
  const items = data[tab];

  return (
    <Section
      id="credentials"
      number="04"
      label="Credentials"
      title="Learning, certified, and a few wins along the way."
      intro="A quick look at academic foundation, self-driven upskilling and the milestones that shaped the journey."
    >
      <div className="flex gap-2 mb-8 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`font-mono text-xs px-4 py-2 rounded-md border transition-colors ${
              tab === t
                ? "bg-primary/10 border-primary text-primary"
                : "bg-card/40 border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div key={tab} className="grid md:grid-cols-2 gap-4 animate-float-in">
        {items.map((it, i) => (
          <div key={i} className="terminal-card p-6 hover:border-primary/40 transition-colors">
            <div className="font-mono text-xs text-primary mb-2">{it.meta}</div>
            <h3 className="font-sans font-semibold text-lg mb-1">{it.title}</h3>
            {it.sub && <p className="text-sm text-muted-foreground mb-1">{it.sub}</p>}
            {it.detail && <p className="font-mono text-xs text-foreground mb-3">{it.detail}</p>}
            <p className="text-sm text-muted-foreground leading-relaxed">{it.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
