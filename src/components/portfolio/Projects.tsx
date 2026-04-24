import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
  name: "AI Resume Analyzer & ATS Job Matcher",
  tag: "Full Stack · AI/NLP",
  desc: "Built a production-ready AI system that analyzes resumes, extracts key skills using NLP, and matches candidates to job descriptions with high accuracy and low latency.",
  bullets: [
    "Improved skill extraction accuracy by 60% using NLP-based text processing",
    "Reduced resume parsing time to under 3 seconds per request using PyMuPDF",
    "Achieved ~80% job-match accuracy with optimized scoring algorithms",
    "Designed scalable Django REST APIs and deployed on Vercel + Render to handle concurrent users",
  ],
  stack: ["React", "Django REST Framework", "Python", "NLP", "PyMuPDF", "Vercel", "Render"],
  repo: "https://github.com/surendravengala/ai-resume-analyzer-backend",
  live: "https://ai-resume-analyzer-frontend-mocha.vercel.app/",
},
  {
    name: "Learning Management System",
    tag: "Full Stack",
    desc: "A full-stack LMS with role-based authentication for Admin, Teacher and Student roles — supporting users with structured course workflows.",
    bullets: [
      "Role-based auth supporting 500+ users",
      "RESTful APIs for courses, assignments, and progress tracking",
      "Optimized DB queries for faster response times",
      "Secure auth & authorization mechanisms",
    ],
    stack: ["Django", "DRF", "MySQL", "HTML","CSS", "Restful APIs"],
    repo: "https://github.com/surendravengala/LMS",
  },
  
  {
  name: "Freelance Web Development",
  tag: "Freelance · Client Work",
  desc: "Delivered multiple client websites end-to-end, focusing on performance, responsive design, and clean user experience across different business domains.",
  bullets: [
    "Built and deployed 3 client websites using React and JavaScript for real-world business use",
    "Developed responsive, production-ready UIs ensuring cross-device compatibility",
    "Collaborated directly with clients to translate requirements into functional products",
    "Delivered projects with 100% client satisfaction and on-time execution",
  ],
  stack: ["React", "JavaScript", "HTML", "CSS", "Vercel", "Netlify"],
  links: [
    { label: "Sennova", url: "https://sennova.in/" },
    { label: "FlexCoders", url: "https://flexcoders.in/" },
    { label: "NxtSync", url: "https://nxtsync.in/" },
  ],
}
];

export const Projects = () => {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <Section
      id="projects"
      number="03"
      label="Selected Work"
      title="Things I've built, shipped, iterated."
      intro={`0${projects.length} projects · click a tab to read more`}
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {projects.map((proj, i) => (
          <button
            key={proj.name}
            onClick={() => setActive(i)}
            className={`font-mono text-xs px-4 py-2.5 rounded-md border transition-all text-left ${
              active === i
                ? "bg-primary/10 border-primary text-primary"
                : "bg-card/40 border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {proj.name}
          </button>
        ))}
      </div>

      <div key={active} className="terminal-card p-8 lg:p-10 animate-float-in">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="font-mono text-xs text-primary mb-2">{p.tag}</div>
            <h3 className="font-sans font-bold text-2xl md:text-3xl">{p.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
  {/* Repo */}
  {p.repo && (
    <a
      href={p.repo}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs px-3 py-2 rounded-md border border-border hover:border-primary hover:text-primary inline-flex items-center gap-1.5 transition-colors"
    >
      <Github className="w-3.5 h-3.5" /> Repo
    </a>
  )}

  {/* Single live link */}
  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs px-3 py-2 rounded-md border border-border hover:border-primary hover:text-primary inline-flex items-center gap-1.5 transition-colors"
    >
      Live <ArrowUpRight className="w-3.5 h-3.5" />
    </a>
  )}

  {/* Multiple freelance links */}
  {p.links?.map((l) => (
    <a
      key={l.url}
      href={l.url}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-xs px-3 py-2 rounded-md border border-border hover:border-primary hover:text-primary inline-flex items-center gap-1.5 transition-colors"
    >
      {l.label} <ArrowUpRight className="w-3.5 h-3.5" />
    </a>
  ))}
</div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">{p.desc}</p>

        <ul className="space-y-2 mb-6">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary font-mono mt-0.5">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded bg-secondary border border-border/50 text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};
