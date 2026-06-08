import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Plus,
  Shield,
  Sparkles,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";

const CAL_LINK = "https://cal.com/samuel-howell-iwfnp4/15min";

export const Route = createFileRoute("/bookkeeping")({
  head: () => ({
    meta: [
      {
        title: "Save 10 Hours on Month End — Guaranteed | BrightFlow AI",
      },
      {
        name: "description",
        content:
          "Bookkeepers: save 10+ hours on month end in 2 weeks. We automate chasing missing client documents — or your next month is on us. Free 10-min call.",
      },
      {
        property: "og:title",
        content: "Save 10 Hours on Month End — Guaranteed | BrightFlow AI",
      },
      {
        property: "og:description",
        content:
          "Automate the chase for missing client documents. Save 10 hours in 2 weeks — or the next month is free.",
      },
    ],
  }),
  component: BookkeepingPage,
});

function BookkeepingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Guarantee />
        <HowItWorks />
        <Outcomes />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer hideCta />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-24 md:pb-28 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.12),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            For bookkeepers · drowning in client follow-ups
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] lg:leading-[1.02] font-semibold tracking-[-0.035em] mb-6 sm:mb-8 max-w-5xl text-balance"
          >
            Save{" "}
            <span className="font-serif italic font-normal text-accent">10 hours</span>{" "}
            on your month end in 2 weeks.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6 sm:mb-8 text-pretty leading-relaxed"
          >
            We build the automation that chases missing client documents for you — so you stop sending reminder emails and start closing books on time.
          </motion.p>

          {/* GUARANTEE BAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10 inline-flex items-center gap-3 rounded-full border-2 border-accent/40 bg-accent/10 px-5 py-2.5 shadow-[0_0_40px_-10px_hsl(168_72%_32%/0.4)]"
          >
            <Shield className="size-4 text-accent shrink-0" strokeWidth={2.5} />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
              Save 10+ hours in 2 weeks <span className="text-accent">— or the next month is on us.</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full sm:w-auto flex flex-col items-center"
          >
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-neutral rounded-full w-full sm:w-auto text-base"
            >
              Book my free 10-min call <ArrowRight className="size-4" />
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> 100% free</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No signup, no card</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No sales pitch</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN POINTS ---------------- */
function PainPoints() {
  const pains = [
    "It's the 5th of the month and you're still chasing last month's bank statements.",
    "You send the same reminder email three times and still get no reply.",
    "Half your week disappears into Slack messages and 'just following up' emails.",
    "Close week slips. Again. Clients don't notice — but you feel it.",
    "You'd love to take on more clients, but you can't fit another chase cycle.",
    "Evenings and weekends bleed into work because the chase never ends.",
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16 text-center mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            Sound familiar?
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance mb-6">
            You didn't get into bookkeeping{" "}
            <span className="font-serif italic font-normal text-accent">to be a chaser.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Yet here you are — month after month — burning hours on the same dance with the same clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 sm:p-5"
            >
              <div className="shrink-0 size-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mt-0.5">
                <X className="size-3.5" strokeWidth={3} />
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight max-w-3xl mx-auto text-balance">
            That's <span className="text-accent">10+ hours every month</span> — gone. We give them back.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GUARANTEE ---------------- */
function Guarantee() {
  return (
    <section className="py-24 sm:py-32 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(168_72%_32%/0.10),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent mb-8">
          <Shield className="size-3.5" />
          Our guarantee
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance mb-8">
          Save{" "}
          <span className="text-accent">10+ hours</span>{" "}
          in 2 weeks
          <br />
          <span className="font-serif italic font-normal text-muted-foreground">or the next month is on us.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          We're so confident our system saves you double-digit hours that we'll put our money on it. Don't see the time back in 2 weeks? Next month of service is free. Simple.
        </p>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-neutral rounded-full"
        >
          Claim your free call <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Free 10-min call",
      body: "We map your chase workflow and pinpoint where the hours are going. You walk away with a clear plan — even if we never work together.",
    },
    {
      num: "02",
      title: "We build in days",
      body: "We design and deploy the follow-up automation around your existing stack: email, Drive, QBO, Xero. No new software for you to learn.",
    },
    {
      num: "03",
      title: "We run it for you",
      body: "Reminders go out automatically. Documents land in the right folders. Routine client questions get answered. You stay out of the inbox.",
    },
    {
      num: "04",
      title: "You close on time",
      body: "Walk into close week with everything in hand. Get 10+ hours back. Use them on advisory, new clients, or actually logging off.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            From first call to closed books{" "}
            <span className="font-serif italic font-normal text-accent">in under a week.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-background p-8 sm:p-10 md:p-12 min-h-[260px] grid grid-rows-[auto_auto_1fr] gap-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="size-10 rounded-full border border-accent/40 bg-accent/10 text-accent flex items-center justify-center text-xs font-mono font-semibold">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="size-4 text-muted-foreground/40" />
                )}
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- OUTCOMES (what you get back) ---------------- */
function Outcomes() {
  const items = [
    {
      icon: <Clock className="size-5" />,
      stat: "10+ hours",
      label: "back every month",
      body: "Reclaimed from chase emails, follow-ups, and 'just checking in' Slack messages.",
    },
    {
      icon: <Zap className="size-5" />,
      stat: "1 week",
      label: "to go live",
      body: "Fully built around your stack. No software for you to learn. No long onboarding.",
    },
    {
      icon: <TrendingUp className="size-5" />,
      stat: "More capacity",
      label: "same headcount",
      body: "Take on more clients, raise rates, or just take a real weekend back. Your call.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            What you get back
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Hours, sanity,{" "}
            <span className="font-serif italic font-normal text-accent">and your evenings.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {items.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 sm:p-10 md:p-12 flex flex-col"
            >
              <div className="size-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-foreground">
                {p.stat}
              </div>
              <div className="text-sm uppercase tracking-[0.16em] text-muted-foreground mt-1 mb-4">
                {p.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARISON ---------------- */
function Comparison() {
  const before = [
    "Manually sending the same 'gentle reminder' 3 times",
    "Close week always slipping by 2-5 days",
    "Working weekends to catch up",
    "Saying no to new clients — no capacity",
    "10+ hours/month lost in your inbox",
  ];
  const after = [
    "Automated follow-ups, in your tone, on your schedule",
    "Close week starts on day one with everything in hand",
    "Evenings and weekends actually off",
    "Capacity to take on 2-3 more clients without hiring",
    "10+ hours/month back, every month",
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            Before vs After
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Two months from now,{" "}
            <span className="font-serif italic font-normal text-accent">pick your reality.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              <X className="size-3.5 text-destructive" strokeWidth={3} /> Without BrightFlow
            </div>
            <ul className="space-y-4">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                  <X className="size-4 text-destructive/70 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-accent/40 bg-accent/[0.04] p-6 sm:p-8 shadow-[0_0_60px_-20px_hsl(168_72%_32%/0.3)]">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent mb-6">
              <Sparkles className="size-3.5" /> With BrightFlow
            </div>
            <ul className="space-y-4">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm sm:text-base text-foreground">
                  <Check className="size-4 text-accent shrink-0 mt-0.5" strokeWidth={3} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "How can you guarantee 10 hours saved?",
      a: "Because chasing is the biggest time-sink in bookkeeping, and we've never seen a workflow where we couldn't cut at least that. If we somehow miss the mark in 2 weeks, the next month is free. Zero risk to you.",
    },
    {
      q: "Will my clients be annoyed by the automation?",
      a: "No. Follow-ups go out in your tone, on your cadence. Clients actually respond faster because the reminders are consistent and professional. They'll never know it isn't you.",
    },
    {
      q: "How fast does it actually start saving me time?",
      a: "Live within one week of kickoff. You feel the difference at the very next month end.",
    },
    {
      q: "Do I need to learn any new software?",
      a: "No. We build everything around your existing stack — email, Drive, QBO, Xero, whatever you use — and we run it for you. You don't touch anything.",
    },
    {
      q: "What does it cost?",
      a: "Flat monthly fee, no contracts, cancel anytime. We'll walk through pricing on the free call once we know your setup. If it doesn't pay for itself 5x over in saved hours, don't do it.",
    },
    {
      q: "What happens on the free 10-min call?",
      a: "We ask what your month end looks like, where the chase eats your time, and tell you exactly how we'd fix it. No slides. No pitch. Just the plan. Even if you never hire us, you keep it.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60 bg-secondary/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Straight{" "}
            <span className="font-serif italic font-normal text-muted-foreground">answers.</span>
          </h2>
        </div>
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
        <span className="font-medium text-base md:text-lg tracking-tight group-hover:text-foreground transition-colors">
          {q}
        </span>
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

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(168_72%_32%/0.14),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_bottom,#000,transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-accent/40 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent">
          <Shield className="size-3.5" />
          10 hours saved · or next month free
        </div>
        <h2 className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.05] lg:leading-[1.02] mb-6 sm:mb-8 text-balance">
          Get your{" "}
          <span className="font-serif italic font-normal text-accent">month back.</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto">
          Free 10-minute call. We map your chase, hand you the plan, and put our guarantee behind it. The worst outcome is you leave with a free playbook.
        </p>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-neutral rounded-full text-base"
        >
          Book my free 10-min call <ArrowUpRight className="size-4" />
        </a>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> 100% free</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No card, no signup</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> Plan is yours to keep</span>
        </div>
      </div>
    </section>
  );
}
