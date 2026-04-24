import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Section } from "./Section";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*${form.subject || "Hello Surendra"}*\n\n` +
      `${form.message}\n\n` +
      `— ${form.name}\n` +
      `${form.email}`;
    const url = `https://wa.me/919676157492?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Opening WhatsApp…", description: "Your message is ready to send." });
  };

  return (
    <Section
      id="contact"
      number="05"
      label="Contact"
      title="Let's build something useful together."
      intro="Have a role, a project, or just want to chat about APIs, Django or LLMs? My inbox is open."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          <a href="mailto:surendravengala2001@gmail.com" className="terminal-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors block">
            <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground">Email</div>
              <div className="font-sans text-foreground">surendravengala2001@gmail.com</div>
            </div>
          </a>

          <a href="tel:+919676157492" className="terminal-card p-5 flex items-center gap-4 hover:border-primary/40 transition-colors block">
            <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground">Phone</div>
              <div className="font-sans text-foreground">+91 96761 57492</div>
            </div>
          </a>

          <div className="terminal-card p-5">
            <div className="font-mono text-xs text-muted-foreground mb-2">Based in</div>
            <div className="font-sans text-foreground flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" /> Bengaluru, India
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-border/50">
              <a href="https://github.com/surendravengala" className="text-muted-foreground hover:text-primary"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/surendravengala/" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5" /></a>
              <span className="ml-auto font-mono text-[11px] text-muted-foreground">replies within 24h · IST</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="terminal-card p-6 lg:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
          <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
          <div>
            <label className="font-mono text-xs text-muted-foreground block mb-2">Message</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background/50 border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <span className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> message → whatsapp
            </span>
            <button type="submit" className="font-mono text-sm px-5 py-3 rounded-md bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow">
              send via whatsapp
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

const Field = ({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <div>
    <label className="font-mono text-xs text-muted-foreground block mb-2">{label}</label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-background/50 border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
    />
  </div>
);
