import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Phone, MessageSquare, Zap } from "lucide-react";
import { Wordmark, Footer } from "@/components/SiteChrome";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id"?: string },
        HTMLElement
      >;
    }
  }
}

export const Route = createFileRoute("/call-net")({
  head: () => ({
    meta: [
      { title: "Call Net — AI receptionist that captures every missed call" },
      {
        name: "description",
        content:
          "Call Net answers your missed calls 24/7, captures the lead's name, number, and need, and texts you instantly. Try free for 14 days.",
      },
      { property: "og:title", content: "Call Net — Never miss a paying customer" },
      {
        property: "og:description",
        content:
          "AI receptionist that turns missed calls into leads. Instant text summaries. $97/mo. 14-day free trial.",
      },
    ],
  }),
  component: CallNetPage,
});

function CallNetPage() {
  useEffect(() => {
    if (document.querySelector('script[data-elevenlabs-convai]')) return;
    const s = document.createElement("script");
    s.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    s.async = true;
    s.type = "text/javascript";
    s.setAttribute("data-elevenlabs-convai", "true");
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Wordmark />
        <a
          href="#trial"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Start free trial
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-10 pb-16 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Phone className="h-3.5 w-3.5" /> AI receptionist for small business
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Never miss a paying customer because you were on the other line, at lunch, or closed for the day.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Call Net answers your missed calls instantly, collects the lead's name, number, and need, and sends it to you by text. You call back. You close. You don't lose another dollar.
        </p>
        <a
          href="#trial"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Start my 14-day free trial <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-3 text-xs text-muted-foreground">No credit card required.</p>
      </section>

      {/* Try it widget */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">Try it for yourself</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tap the widget below and talk to Call Net like a real caller would.
            </p>
          </div>
          <div
            className="flex min-h-[120px] items-center justify-center"
            dangerouslySetInnerHTML={{
              __html:
                '<elevenlabs-convai agent-id="agent_7001ks6yjp6rfbh9899wpb8kvy7t"></elevenlabs-convai>',
            }}
          />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">The problem</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every missed call is a potential client who hangs up and calls your competitor. You're losing money every time your phone rings and you can't answer.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">The solution</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Call Net is your AI receptionist. It answers calls 24/7, speaks naturally, captures the lead's details, and texts you the summary within seconds.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Phone, title: "Connect your number", body: "Forward your business line to Call Net when you can't answer — or 24/7." },
            { icon: Zap, title: "AI answers", body: "Our AI greets the caller, asks what they need, and records their name and phone number." },
            { icon: MessageSquare, title: "You get the lead", body: "Instant text with the transcript and callback info. You call back and close." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Why Call Net</h2>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3">
          {[
            "Zero missed opportunities — every call becomes a lead.",
            "No voicemail purgatory — callers get a helpful conversation, not a generic beep.",
            "Affordable — costs less than a coffee per day.",
            "No hardware — works with your existing phone number.",
            "Try free for 14 days — no risk, no contract.",
          ].map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Check className="mt-0.5 h-5 w-5 flex-none text-foreground" />
              <span className="text-sm">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Simple pricing</h2>
        <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
          <div className="text-sm font-medium text-muted-foreground">Single plan — all features</div>
          <div className="mt-2 text-5xl font-semibold tracking-tight">$97<span className="text-lg text-muted-foreground">/month</span></div>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm">
            {[
              "AI answers unlimited calls",
              "Instant text summaries",
              "Custom greeting (your brand voice)",
              "14-day free trial — cancel anytime",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-none" /> {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Annual: <span className="font-medium text-foreground">$970/year</span> (save 17%) — 2 months free.
          </p>
          <a
            href="#trial"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Claim my free trial <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { q: "I was skeptical, but Call Net caught a $2,500 job on my first day. The caller said they loved talking to 'someone' immediately.", a: "Dave, Plumbing Pro" },
            { q: "Best $97 I spend. I used to lose 5–10 calls a week. Now I get all of them.", a: "Sarah, Dental Clinic" },
          ].map((t) => (
            <figure key={t.a} className="rounded-2xl border border-border bg-card p-6">
              <blockquote className="text-sm leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-4 text-xs font-medium text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="trial" className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Stop losing money to missed calls.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Try Call Net free for 14 days. No credit card required.
        </p>
        <a
          href="mailto:samuel@brightflowagency.com?subject=Call%20Net%20free%20trial"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Claim my free trial <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      <Footer />
    </div>
  );
}
