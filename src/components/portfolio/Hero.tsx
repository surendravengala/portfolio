import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const stats = [
  { v: "3", l: "Freelance Projects Delivered" },
  { v: "100%", l: "Client Satisfaction" },
  { v: "5★", l: "Python (HackerRank)" },
  { v: "5★", l: "30 Days of Code (HackerRank)" },
];

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "AI Engineer",
];

export const Hero = () => {
const [text, setText] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const current = roles[roleIndex];
  let timeout;

  if (!isDeleting) {
    timeout = setTimeout(() => {
      setText(current.substring(0, text.length + 1));
      if (text === current) setIsDeleting(true);
    }, 100);
  } else {
    timeout = setTimeout(() => {
      setText(current.substring(0, text.length - 1));
      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, 80);
  }

  return () => clearTimeout(timeout);
}, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-24 px-6 lg:px-10 overflow-hidden">
      <div className="ambient-orb animate-float-orb w-[500px] h-[500px] bg-primary/20 -top-40 -right-40" />
      <div
        className="ambient-orb animate-float-orb w-[400px] h-[400px] bg-primary/10 top-1/2 -left-32"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
        {/* LEFT */}
        <div className="animate-float-in">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground mb-8 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            available for backend / frontend / full-stack / AI Engineer roles
          </div>

          <p className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-primary">$</span> who am i
          </p>

          <h1 className="font-sans font-extrabold tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-6">
            <span className="primary-gradient-text glow-text">Vengala</span><br />
            <span className="primary-gradient-text glow-text">Surendra Kumar</span><br />
            <span className="primary-gradient-text glow-text">Reddy.</span>
          </h1>

          {/* ROTATING ROLE */}
          <p className="font-mono text-sm text-muted-foreground mb-6">
  <span className="text-primary">&gt;</span>{" "}
  {text}
  <span className="text-primary animate-pulse">_</span>
</p>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Full Stack Developer specializing in{" "}
            <span className="text-foreground">Python</span>,{" "}
            <span className="text-foreground">Django</span>, and{" "}
            <span className="text-foreground">React</span>, with experience building scalable web applications and{" "}
            <span className="text-foreground">RESTful APIs</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-mono text-sm px-6 py-3.5 rounded-lg bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.4),0_10px_40px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.6),0_20px_60px_-10px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5 transition-all duration-300"
            >
              view projects{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="font-mono text-sm px-6 py-3.5 rounded-lg border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              get in touch
            </a>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/surendravengala" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/surendravengala/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:surendravengala2001@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>

            <span className="h-4 w-px bg-border" />

            <span className="flex items-center gap-1.5 font-mono text-xs">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Bengaluru, India
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5 animate-float-in" style={{ animationDelay: "0.15s" }}>
          <div className="terminal-card overflow-hidden shimmer-border">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/40">
              <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~/surendra/profile.py</span>
            </div>

            <pre className="p-4 sm:p-6 font-mono text-[11px] sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
<code>
{"{"}<br />
{"  "}"name": <span className="text-primary">"Surendra"</span>,<br />
{"  "}"tech_stack": [<br />
{"    "}"Python",<br />
{"    "}"Django",<br />
{"    "}"React",<br />
{"    "}"RESTful APIs",<br />
{"    "}"MySQL",<br />
{"    "}"AI/ML",<br />
{"    "}"NLP",<br />
{"    "}"LangChain"<br />
{"  "}],<br />
{"  "}"experience": <span className="text-primary">"Fresher"</span>,<br />
{"  "}"status": <span className="text-primary">"Open to Opportunities"</span>,<br />
{"  "}"immediate_joiner": <span className="text-primary">true</span><br />
{"}"}<br />
<span className="text-muted-foreground">&gt;&gt;&gt;</span> <span className="cursor-blink"># let's build.</span>
</code>
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.l} className="terminal-card p-5 group">
                <div className="font-sans font-bold text-3xl primary-gradient-text mb-1 group-hover:scale-105 transition-transform origin-left">
                  {s.v}
                </div>
                <div className="font-mono text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};