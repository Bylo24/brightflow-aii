import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security, BrightFlow AI" },
      {
        name: "description",
        content:
          "How BrightFlow AI secures the AI automation systems we build and operate for our clients.",
      },
      { property: "og:title", content: "Security, BrightFlow AI" },
      {
        property: "og:description",
        content: "How we secure the systems we build and operate.",
      },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <LegalPage eyebrow="Trust" title="Security" updated="May 2026">
      <p>
        Security is core to how we build and operate every system. Here's how we protect your data
        and your business.
      </p>

      <Section title="Infrastructure">
        <p>
          Everything we build runs on enterprise-grade cloud infrastructure with encryption at
          rest and in transit (TLS 1.2+). Production environments are isolated from development
          and access is restricted to named team members.
        </p>
      </Section>

      <Section title="Access and credentials">
        <p>
          We use scoped, least-privilege credentials for every integration. Secrets are stored in
          a managed secret vault, rotated on a regular schedule, and revoked immediately when a
          team member leaves.
        </p>
      </Section>

      <Section title="Monitoring and incidents">
        <p>
          Every system is monitored 24/7 with automated alerts on failure, latency, and unusual
          activity. Real incidents are handled by our on-call team and reported to you within 24
          hours, with a written post-mortem within 5 business days.
        </p>
      </Section>

      <Section title="Data handling">
        <p>
          We process the minimum data required to run your workflow. We do not train external AI
          models on your data. On request we'll sign a Data Processing Agreement.
        </p>
      </Section>

      <Section title="Compliance">
        <p>
          We sign mutual NDAs by default and can support GDPR data subject requests. Reach out for
          SOC 2 status, sub-processor lists, or vendor security questionnaires.
        </p>
      </Section>

      <Section title="Report a vulnerability">
        <p>
          Found something? Email{" "}
          <a className="text-accent hover:underline" href="mailto:security@brightflow.ai">
            security@brightflow.ai
          </a>
          . We'll acknowledge within one business day.
        </p>
      </Section>
    </LegalPage>
  );
}
