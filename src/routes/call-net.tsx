import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Phone, MessageSquare, Zap } from "lucide-react";
import { Wordmark } from "@/components/SiteChrome";


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
          Capture every call. Even when you can't answer.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Call Net answers missed calls, collects lead info, and texts you the summary. You call back. You close.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-foreground">
          It doesn't replace you. It only works when you can't.
        </p>
        <a
          href="#trial"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Start my 14-day free trial <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          Credit card required. You won't be charged until day 14. Cancel anytime in your dashboard.
        </p>
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Setup in 2 minutes</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Cancel anytime</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> SSL secured checkout</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Trusted by local trade businesses</span>
        </div>
      </section>

      {/* Try it for yourself */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live demo
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Try a live demo
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Talk to Call Net like a real caller would — ask about pricing, book a job, or leave a message. Hear how it sounds before you sign up.
            </p>
            <button
              type="button"
              onClick={() => {
                const w = document.querySelector('elevenlabs-convai') as (HTMLElement & { open?: () => void }) | null;
                if (w?.open) w.open();
                else w?.dispatchEvent(new Event('click', { bubbles: true }));
              }}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background shadow-lg hover:opacity-90"
            >
              Talk to Call Net now <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground">
              The demo opens in the chat bubble at the bottom-right of your screen.
            </p>
          </div>
        </div>
      </section>

      {/* Floating ElevenLabs widget */}
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<elevenlabs-convai agent-id="agent_7001ks6yjp6rfbh9899wpb8kvy7t"></elevenlabs-convai>',
        }}
      />





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
            "Only works when you miss a call — you stay the main point of contact.",
            "Callers don't get voicemail — they talk to a helpful AI, leave their info, and hang up happy.",
            "You get a text summary — name, number, reason for calling. You call them back.",
            "No setup headaches — forward your existing number in 2 minutes.",
            "Try free for 14 days — cancel anytime in your dashboard, no contract.",
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
            Or save 17% annually: <span className="font-medium text-foreground">$970/year</span> ($80.83/month — 2 months free vs. monthly).
          </p>
          <p className="mt-2 text-xs font-medium text-foreground">
            Founding offer: first 50 customers get free setup + 10% off any plan for life. Use code <span className="font-mono">FOUNDER10</span> at checkout. Only 37 spots left.
          </p>
          <a
            href="#trial"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Start my 14-day free trial <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Credit card required. You won't be charged until day 14 — cancel anytime in your dashboard and pay nothing.
          </p>
          <p className="mt-4 text-xs italic text-muted-foreground">
            You're still the owner. Call Net is just your backup. When you can't answer, we catch the lead. You call back. You close.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <figure className="rounded-2xl border border-border bg-card p-8 text-center">
          <blockquote className="text-base leading-relaxed sm:text-lg">
            "I was worried about sounding like a robot to my customers. But Call Net only picks up when I'm on the other line or after hours. My callers still talk to me for the real conversation. I've captured 5 new jobs in 2 weeks."
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
            — Dave M., Plumbing Pro (Bristol, UK)
          </figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-8 space-y-4">
          {[
            {
              q: "Will Call Net replace my receptionist or annoy my callers?",
              a: "No. Call Net only answers when you can't — after hours, during lunch, or when you're already on another call. Your callers get a helpful conversation, leave their info, and you call them back. It's you they close with. Call Net just makes sure you never miss the chance.",
            },
            {
              q: "How fast is setup?",
              a: "Under 2 minutes. You forward your existing business line to Call Net (24/7 or only when you don't pick up). We email setup instructions the moment you sign up.",
            },
            {
              q: "What happens during the 14-day trial?",
              a: "Full access to every feature. No credit card required to start. Cancel anytime inside the trial and pay nothing.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>




      {/* Final CTA */}
      <section id="trial" className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Stop losing money to missed calls.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Start your 14-day free trial. Setup takes 2 minutes. Cancel anytime in your dashboard.
        </p>
        <a
          href="mailto:samuel@brightflowagency.com?subject=Call%20Net%20free%20trial"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Start my free trial — setup in 2 minutes <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-3 text-xs text-muted-foreground">Credit card required. You won't be charged until day 14.</p>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-muted-foreground">
          Call Net — AI lead capture for small business. © 2026.
        </div>
      </footer>
    </div>
  );
}


