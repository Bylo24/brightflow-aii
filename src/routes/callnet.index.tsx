import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Check, Plus, Phone, MessageSquare, PhoneCall } from "lucide-react";
import { Wordmark, Footer } from "@/components/SiteChrome";

export const Route = createFileRoute("/callnet/")({
  head: () => ({
    meta: [
      { title: "Call Net — Never miss a paying customer again" },
      {
        name: "description",
        content:
          "Call Net is your AI receptionist. It answers missed calls 24/7, captures the lead's name, number and need, and texts you the summary in seconds. 14-day free trial.",
      },
      { property: "og:title", content: "Call Net — Never miss a paying customer again" },
      {
        property: "og:description",
        content:
          "AI receptionist that turns missed calls into texted leads. Try free for 14 days.",
      },
    ],
    scripts: [
      {
        src: "https://unpkg.com/@elevenlabs/convai-widget-embed",
        async: true,
        type: "text/javascript",
      },
    ],
  }),
  component: CallNetPage,
});

// Allow custom element in JSX
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

function CallNetPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <CallNetNav />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <TryItYourself />
        <Pricing />
        <SocialProof />
        <FinalCta />
        <FAQ />
      </main>
      <Footer hideCta />
    </div>
  );
}

function CallNetNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Wordmark />
        <a
          href="#pricing"
          className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          Pricing
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-12 sm:pt-20 pb-14 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.14),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            AI receptionist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] sm:text-5xl md:text-6xl leading-[1.04] font-semibold tracking-[-0.04em] text-balance"
          >
            Never miss a paying customer{" "}
            <span className="font-serif italic font-normal text-accent">
              because you were on the other line.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Call Net answers your missed calls instantly, collects the lead's name, number, and need, and texts you the summary. You call back. You close. You stop losing money.
          </motion.p>

          <a
            href="#pricing"
            className="mt-7 btn btn-lg btn-neutral rounded-full text-base"
          >
            Start my 14-day free trial <ArrowRight className="size-4" />
          </a>

          <p className="mt-3 text-xs text-muted-foreground">
            No credit card required · Works with your existing number
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: "Connect your number",
      body: "Forward your business line to Call Net when you can't answer — or 24/7.",
    },
    {
      icon: PhoneCall,
      title: "AI answers",
      body: "Our AI greets the caller naturally, asks what they need, and captures name and phone number.",
    },
    {
      icon: MessageSquare,
      title: "You get the lead",
      body: "Instant text with the full transcript and callback info. You call them back and close.",
    },
  ];
  return (
    <section className="py-14 sm:py-20 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-center mb-12">
          How it works
        </h2>
        <ol className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li
              key={i}
              className="rounded-2xl border border-border bg-secondary/40 p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <span className="size-9 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <s.icon className="size-4" />
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    "Zero missed opportunities — every call becomes a lead.",
    "No voicemail purgatory — callers get a real conversation, not a beep.",
    "Affordable — costs less than a coffee per day.",
    "No hardware — works with your existing phone number.",
    "Try free for 14 days — no risk, no contract.",
  ];
  return (
    <section className="py-14 sm:py-20 border-t border-border/60 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-center mb-10">
          Why owners love it
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <li key={i} className="flex gap-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <Check className="size-4 text-accent shrink-0 mt-1" strokeWidth={2.5} />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TryItYourself() {
  return (
    <section className="py-14 sm:py-20 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(168_72%_32%/0.12),transparent_60%)]" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          Live demo
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-balance">
          Try it for yourself.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          Tap the widget below and talk to Call Net like a real caller. This is the same AI that answers your customers.
        </p>

        <div className="mt-8 flex justify-center">
          <elevenlabs-convai agent-id="agent_7001ks6yjp6rfbh9899wpb8kvy7t"></elevenlabs-convai>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-20 border-t border-border/60">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-balance">
          One simple plan. <span className="font-serif italic font-normal text-accent">Everything included.</span>
        </h2>

        <div className="mt-10 rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10 text-left shadow-[0_0_60px_-20px_hsl(168_72%_32%/0.35)]">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl sm:text-6xl font-semibold tracking-[-0.04em]">$97</span>
            <span className="text-muted-foreground">/ month</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Or <span className="text-foreground font-medium">$970/year</span> — save 17% (2 months free).
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "AI answers unlimited calls",
              "Instant text summaries with transcript",
              "Custom greeting in your brand voice",
              "Works with your existing phone number",
              "14-day free trial — cancel anytime",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-sm sm:text-base">
                <Check className="size-4 text-accent shrink-0 mt-1" strokeWidth={2.5} />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="mt-8 w-full btn btn-lg btn-neutral rounded-full text-base"
          >
            Claim my free trial <ArrowRight className="size-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const quotes = [
    {
      q: "I was skeptical, but Call Net caught a $2,500 job on my first day. The caller said they loved talking to 'someone' immediately.",
      a: "Dave, Plumbing Pro",
    },
    {
      q: "Best $97 I spend. I used to lose 5–10 calls a week. Now I get all of them.",
      a: "Sarah, Dental Clinic",
    },
  ];
  return (
    <section className="py-14 sm:py-20 border-t border-border/60 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-6">
          {quotes.map((it, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-background p-6">
              <blockquote className="text-base sm:text-lg leading-relaxed text-foreground/90">
                “{it.q}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {it.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="cta" className="py-16 sm:py-24 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(168_72%_32%/0.14),transparent_60%)]" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
          Stop losing money to{" "}
          <span className="font-serif italic font-normal text-accent">missed calls.</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          Try Call Net free for 14 days. No credit card required.
        </p>
        <a
          href="#pricing"
          className="mt-7 inline-flex btn btn-lg btn-neutral rounded-full text-base"
        >
          Claim my free trial <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Will callers know it's an AI?",
      a: "It sounds natural and conversational. Most callers think they're talking to a real receptionist — and they appreciate getting help instantly instead of voicemail.",
    },
    {
      q: "Do I need new hardware or a new number?",
      a: "No. Call Net works with your existing business number. You just forward unanswered calls (or all calls) to us.",
    },
    {
      q: "How fast do I get the lead?",
      a: "Within seconds of the call ending. You get a text with the caller's name, number, and what they need.",
    },
    {
      q: "What if I want to cancel?",
      a: "Cancel anytime from your dashboard. No contract, no lock-in.",
    },
  ];
  return (
    <section className="py-14 sm:py-20 border-t border-border/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-center mb-10">
          Questions?
        </h2>
        <div className="border-t border-border">
          {items.map((it, i) => (
            <FAQItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left group"
      >
        <span className="font-medium text-base md:text-lg tracking-tight">{q}</span>
        <span className="shrink-0 size-8 border border-border rounded-full flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground transition-colors">
          <Plus className={`size-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed pb-6 max-w-2xl">{a}</p>
      </motion.div>
    </div>
  );
}

// Keep useEffect import used in case future analytics are added
void useEffect;
