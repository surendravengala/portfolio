import { Section } from "./Section";

const groups = [
  {
    id: "01",
    name: "Languages",
    items: ["Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "02",
    name: "Backend",
    items: [
      "Django",
      "Django REST Framework (DRF)",
      "REST APIs",
      "Authentication",
      "API Design",
    ],
  },
  {
    id: "03",
    name: "Frontend",
    items: [
      "React.js",
      "Bootstrap",
      "Responsive Design",
      "UI/UX Fundamentals",
    ],
  },
  {
    id: "04",
    name: "Databases",
    items: ["MySQL", "SQLite", "Query Optimization"],
  },
  {
    id: "05",
    name: "AI / NLP",
    items: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Regex",
      "Text Processing",
      "Model Integration",
    ],
  },
  {
    id: "06",
    name: "LLMs & GenAI",
    items: [
      "LLMs",
      "Prompt Engineering",
      "LangChain",
      "Hugging Face", "Transformers",
    ],
  },
  {
    id: "07",
    name: "Tools & Deployment",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

export const Skills = () => (
  <Section
    id="skills"
    number="02"
    label="Toolkit"
    title="Technologies I use to build and ship systems."
    intro="From backend systems and APIs to frontend interfaces and AI-powered features — focused on building reliable, scalable applications."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
      {groups.map((g) => (
        <div key={g.id} className="terminal-card p-5 hover:border-primary/40 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs text-primary">{g.id}</span>
            <span className="font-mono text-[10px] text-muted-foreground">{g.items.length} items</span>
          </div>
          <h3 className="font-sans font-semibold text-foreground mb-3">{g.name}</h3>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((it) => (
              <span
                key={it}
                className="font-mono text-[11px] px-2 py-1 rounded bg-secondary text-muted-foreground border border-border/50 group-hover:text-foreground transition-colors"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/40 py-4">
      <div className="marquee flex gap-6 whitespace-nowrap font-mono text-sm text-muted-foreground">
        {[...allItems, ...allItems].map((it, i) => (
          <span key={i} className="flex items-center gap-6">
            {it}
            <span className="text-primary">•</span>
          </span>
        ))}
      </div>
    </div>
  </Section>
);