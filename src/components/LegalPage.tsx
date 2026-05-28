import { Nav, Footer } from "@/components/SiteChrome";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <Nav />
      <main className="py-20 sm:py-24 md:py-28">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 sm:mb-5">
            {eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] mb-4 text-balance">
            {title}
          </h1>
          <div className="text-sm text-muted-foreground mb-12">Last updated {updated}</div>

          <div className="text-base text-foreground/90 leading-relaxed space-y-6">{children}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
