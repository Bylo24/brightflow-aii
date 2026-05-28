import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy, BrightFlow AI" },
      {
        name: "description",
        content:
          "How BrightFlow AI collects, uses, and protects personal information from our website visitors and clients.",
      },
      { property: "og:title", content: "Privacy Policy, BrightFlow AI" },
      {
        property: "og:description",
        content: "How we collect, use, and protect personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="May 2026">
      <p>
        This policy explains what personal information BrightFlow AI collects, why we collect it,
        and how we protect it.
      </p>

      <Section title="Information we collect">
        <p>
          From website visitors: basic analytics (anonymised IP, page views) and anything you send
          us through the contact form. From clients: business contact details, the workflow data
          needed to build and operate your automation, and the system credentials you grant us.
        </p>
      </Section>

      <Section title="How we use it">
        <p>
          To reply to your enquiry, deliver your engagement, operate and improve your managed
          system, and send occasional service-related emails. We never sell your data and we never
          train external AI models on it.
        </p>
      </Section>

      <Section title="Where it's stored">
        <p>
          On enterprise-grade infrastructure in the EU and US. Access is restricted to the team
          members who need it and is logged for audit purposes.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          You can request a copy of the personal information we hold, ask us to correct it, or ask
          us to delete it. Email{" "}
          <a className="text-accent hover:underline" href="mailto:privacy@brightflow.ai">
            privacy@brightflow.ai
          </a>{" "}
          and we'll respond within 30 days.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          We use a small number of first-party cookies for basic analytics. We do not use
          third-party advertising cookies.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy? Email{" "}
          <a className="text-accent hover:underline" href="mailto:privacy@brightflow.ai">
            privacy@brightflow.ai
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
