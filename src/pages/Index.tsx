import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="ambient-orb w-[600px] h-[600px] bg-primary/5 top-[40%] right-[-200px] animate-float-orb" style={{ animationDelay: "-10s" }} />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Credentials />
      <Contact />
      <footer className="border-t border-border/40 py-8 px-6 text-center font-mono text-xs text-muted-foreground">
<span className="text-primary">©</span> {new Date().getFullYear()} Vengala Surendra Kumar Reddy </footer>
    </main>
  );
};

export default Index;
