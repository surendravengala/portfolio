import { useState } from "react";
import avatar from "@/assets/avatar.jpg";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Download, MapPin, Mail, Github, Linkedin } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

const skills = ["Python", "Django", "ReactJS", "RESTful APIs"];

const education = [
  { degree: "B.Tech, Computer Science", school: "Gitam University, Bengaluru", year: "2020 – 2024" },
  { degree: "Intermediate (MPC)", school: "Narayana Junior College", year: "2018 – 2020" },
  { degree: "10th Class", school: "Narayana E.M High School", year: "2018" },
];

const certifications = [
  "Software Engineer Certificate - HackerRank",
  "AI For Everyone (100%)– DeepLearning.AI",
  "Software Architecture– University of Alberta",
];

const projects = [
  { name: "AI Resume Analyzer & ATS Job Matcher" },
  { name: "Learning ManagementSystem(LMS)" },
  { name: "FlexCoders- EduTechWebsite" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Open profile"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-md group-hover:bg-primary/60 transition-colors" />
              <img
                src={avatar}
                alt="Surendra Reddy"
                width={36}
                height={36}
                className="relative w-9 h-9 rounded-full ring-2 ring-primary/60 object-cover"
              />
            </div>
            <span className="font-mono text-sm text-foreground">Surendra Reddy</span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary/60">0{i + 1}.</span> {s.label}
              </a>
            ))}
          </nav>

          <a
            href="/Surendra_Python_FSD.pdf"
            download="Surendra_Python_FSD.pdf"
            className="font-mono text-xs px-3 py-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
        </div>
      </header>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm p-0 overflow-hidden bg-card/95 backdrop-blur-xl border-border max-h-[85vh] overflow-y-auto">
          <DialogTitle className="sr-only">Surendra Reddy profile</DialogTitle>
          <DialogDescription className="sr-only">Profile picture, name, role, skills, education, certifications and projects</DialogDescription>
          <div className="flex flex-col items-center pt-6 px-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-primary/40 blur-xl" />
              <img
                src={avatar}
                alt="Vengala Surendra Kumar Reddy"
                className="relative w-28 h-28 rounded-full object-cover object-top ring-2 ring-primary/60"
              />
            </div>
            <h2 className="mt-4 font-sans font-extrabold text-xl primary-gradient-text text-center leading-tight">
              Vengala Surendra Kumar Reddy
            </h2>
            <p className="font-mono text-[11px] text-muted-foreground mt-1">Full Stack Developer</p>
          </div>

          <div className="p-5 space-y-4">
            <div>
              <p className="font-mono text-[11px] text-primary mb-2">// skills</p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md border border-border bg-muted/40 text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] text-primary mb-2">// education</p>
              <ul className="space-y-2">
                {education.map((e) => (
                  <li key={e.degree} className="text-xs">
                    <div className="text-foreground font-medium">{e.degree}</div>
                    <div className="text-muted-foreground">{e.school} · <span className="font-mono">{e.year}</span></div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] text-primary mb-2">// certifications</p>
              <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside marker:text-primary">
                {certifications.map((c) => (<li key={c}>{c}</li>))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] text-primary mb-2">// projects</p>
              <ul className="space-y-2">
                {projects.map((p) => (
                  <li key={p.name} className="text-xs">
                    <div className="text-foreground font-medium">{p.name}</div>
                    <div className="text-muted-foreground">{p.desc}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-border text-muted-foreground">
              <a href="https://github.com/surendravengala" aria-label="GitHub" className="hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/surendravengala/" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:surendravengala2001@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px]">
                <MapPin className="w-3 h-3 text-primary" /> Bengaluru, India
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
