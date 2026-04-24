import { Section } from "./Section";

const tags = [
  "Python",
  "Django",
  "DRF",
  "React",
  "MySQL",
  "REST APIs",
  "NLP",
  "LLMs",
  "LangChain",
];
const cards = [
  {
  title: "Scalable backend systems",
  desc: "Built Django + DRF APIs powering real applications with clean architecture and reliable performance.",
},
{
  title: "Efficient data handling",
  desc: "Optimized queries, schema design, and processing pipelines for faster response times and better scalability.",
},
{
  title: "AI-powered applications",
  desc: "Developed NLP and LLM-based systems like resume analyzers with real accuracy improvements and production use.",
},
{
  title: "Full-stack execution",
  desc: "From React interfaces to deployment on Vercel and Render — delivering complete, user-ready products.",
},
];

export const About = () => (
<Section
  id="about"
  number="01"
  label="About"
  title="Full-stack developer building scalable and user-focused systems."
>
  <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
    <div className="space-y-5 text-muted-foreground leading-relaxed">
      <p>
        I'm a Full Stack Developer working with{" "}
        <span className="text-foreground">Python, Django, and React</span>,
        building scalable web applications and clean, reliable REST APIs.
      </p>

      <p>
        While I have strong experience in backend architecture, database design,
        and API development, I also build responsive, user-friendly interfaces
        and enjoy working across the full stack.
      </p>

      <p>
        I’ve developed applications integrating{" "}
        <span className="text-foreground">NLP and LLMs</span>, combining modern AI
        with production-grade systems. Open to{" "}
        <span className="text-primary">Backend, Frontend, and Full Stack roles</span>{" "}
        where I can contribute end-to-end and build impactful products.
      </p>

      <div className="flex flex-wrap gap-2 pt-4">
        {tags.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="terminal-card p-5 hover:border-primary/40 transition-colors">
          <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 mb-3 flex items-center justify-center text-primary font-mono text-sm">
            ✓
          </div>
          <h3 className="font-sans font-semibold text-foreground mb-2">{c.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
  </div>
</Section>
);
