import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/SiteChrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — BrightFlow AI" },
      {
        name: "description",
        content:
          "The terms that govern your use of BrightFlow AI's website and managed automation services.",
      },
      { property: "og:title", content: "Terms of Service — BrightFlow AI" },
      { property: "og:description", content: "Terms that govern use of BrightFlow AI services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="May 2026">
      <p>
        These Terms of Service govern your access to and use of BrightFlow AI's website and the
        managed automation services we provide. By using our services you agree to these terms.
      </p>

      <Section title="1. Services">
        <p>
          BrightFlow AI designs, builds, and operates custom AI automation systems for service
          businesses. The specific scope, deliverables, and pricing for your engagement are set out
          in a separate written Statement of Work.
        </p>
      </Section>

      <Section title="2. Fees and payment">
        <p>
          Build fees are typically fixed-price and invoiced at kickoff and on launch. Managed
          monthly fees are billed in advance and cover hosting, monitoring, and continuous
          improvement of your system. Invoices are due within 14 days.
        </p>
      </Section>

      <Section title="3. Your responsibilities">
        <p>
          You are responsible for providing accurate information about your workflows, granting the
          access we need to integrate with your tools, and reviewing deliverables in a timely way.
          You retain ownership of your data at all times.
        </p>
      </Section>

      <Section title="4. Confidentiality">
        <p>
          We treat your business information as confidential and only share it with team members
          who need it to deliver your engagement. We sign mutual NDAs on request.
        </p>
      </Section>

      <Section title="5. Termination">
        <p>
          Either party may end a managed engagement with 30 days' written notice. On termination we
          provide a clean handover of your system, documentation, and credentials.
        </p>
      </Section>

      <Section title="6. Liability">
        <p>
          Our total liability for any claim arising from your use of our services is limited to the
          fees you paid to us in the three months before the claim arose.
        </p>
      </Section>

      <Section title="7. Contact">
        <p>
          Questions about these terms? Email{" "}
          <a className="text-accent hover:underline" href="mailto:legal@brightflow.ai">
            legal@brightflow.ai
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}

function LegalPage({
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export { LegalPage, Section };
