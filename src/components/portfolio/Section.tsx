interface Props {
  number: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  id: string;
}

export const Section = ({ number, label, title, intro, children, id }: Props) => (
  <section id={id} className="relative px-6 lg:px-10 py-28 border-t border-border/40">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-primary tracking-widest">{number}.</span>
        <span className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">{label}</span>
        <span className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
      </div>
      <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl mb-6 leading-[1.05] gradient-text">
        {title}
      </h2>
      {intro && (
        <p className="text-muted-foreground max-w-2xl mb-14 leading-relaxed text-lg">{intro}</p>
      )}
      {children}
    </div>
  </section>
);
