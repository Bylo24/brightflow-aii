import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Calendar, Mail, MessageSquare } from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, BrightFlow AI" },
      {
        name: "description",
        content:
          "Book a free 20-minute workflow audit with BrightFlow AI, or send us a note about the repetitive task eating your team's time.",
      },
      { property: "og:title", content: "Contact BrightFlow AI" },
      {
        property: "og:description",
        content: "Book a free workflow audit or send us a note.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <Nav />
      <main>
        <section className="relative pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.10),transparent_60%)]" />
            <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 sm:mb-5">
                  Contact
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] mb-6 text-balance">
                  Tell us about the work{" "}
                  <span className="font-serif italic font-normal text-accent">eating your week.</span>
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                  Send us a short note. We'll reply within one business day with a time for a free
                  20-minute workflow audit.
                </p>

                <div className="space-y-5">
                  <ContactRow
                    icon={<Mail className="size-4" />}
                    label="Email"
                    value="hello@brightflow.ai"
                    href="mailto:hello@brightflow.ai"
                  />
                  <ContactRow
                    icon={<Calendar className="size-4" />}
                    label="Audit call"
                    value="20 minutes, free, no pitch"
                  />
                  <ContactRow
                    icon={<MessageSquare className="size-4" />}
                    label="Reply time"
                    value="Within one business day"
                  />
                </div>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-start py-8">
                    <div className="size-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-5">
                      <ArrowUpRight className="size-5" />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight mb-2">Thanks, we got it.</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      We'll reply within one business day with a couple of times for a 20-minute call.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <Field label="Your name">
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="input input-bordered w-full rounded-xl bg-background"
                      />
                    </Field>
                    <Field label="Work email">
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="input input-bordered w-full rounded-xl bg-background"
                      />
                    </Field>
                    <Field label="Company">
                      <input
                        type="text"
                        placeholder="Company name"
                        className="input input-bordered w-full rounded-xl bg-background"
                      />
                    </Field>
                    <Field label="What's eating your team's time?">
                      <textarea
                        required
                        rows={5}
                        placeholder="The one repetitive task we'd love to never do again is."
                        className="textarea textarea-bordered w-full rounded-xl bg-background leading-relaxed"
                      />
                    </Field>

                    <button
                      type="submit"
                      className="btn btn-lg btn-neutral rounded-full w-full sm:w-auto"
                    >
                      Send and book a call <ArrowUpRight className="size-4" />
                    </button>
                    <p className="text-xs text-muted-foreground">
                      No pitch. No newsletter. Just a clear plan.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="size-9 border border-border rounded-md flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="text-sm font-medium mt-1">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 group hover:text-accent transition-colors">
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground block mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
