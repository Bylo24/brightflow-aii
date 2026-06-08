import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Check, Clock, Plus, Shield } from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";

const CAL_LINK = "https://cal.com/samuel-howell-iwfnp4/15min";

export const Route = createFileRoute("/bookkeeping")({
  head: () => ({
    meta: [
      { title: "Save 10 Hours on Month End — Guaranteed | BrightFlow AI" },
      {
        name: "description",
        content:
          "Bookkeepers: save 10+ hours on month end in 2 weeks. We automate chasing missing client documents — or you don't pay a single cent.",
      },
      { property: "og:title", content: "Save 10 Hours on Month End — Guaranteed | BrightFlow AI" },
      {
        property: "og:description",
        content: "Automate the chase. Save 10 hours in 2 weeks — or you don't pay a single cent.",
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
        <Pain />
        <HowItWorks />
        <Pricing />
        <Guarantee />
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
    <section ref={ref} className="relative pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.14),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            For bookkeepers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] font-semibold tracking-[-0.04em] text-balance max-w-4xl"
          >
            Save{" "}
            <span className="font-serif italic font-normal text-accent">10 hours</span>{" "}
            on month end. In 2 weeks.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
          >
            We build the automation that chases missing client documents for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 sm:mt-10 inline-flex items-center gap-2.5 rounded-full border-2 border-accent/50 bg-accent/10 px-4 py-2 shadow-[0_0_50px_-10px_hsl(168_72%_32%/0.5)]"
          >
            <Shield className="size-4 text-accent shrink-0" strokeWidth={2.5} />
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              Or you don't pay a cent.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col items-center"
          >
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-neutral rounded-full text-base"
            >
              Book my free 10-min call <ArrowRight className="size-4" />
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> 100% free</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No card</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No commitment</span>
              <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> Leave anytime</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN ---------------- */
function Pain() {
  return (
    <section className="py-24 sm:py-32 border-t border-border/60 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
          You didn't get into bookkeeping{" "}
          <span className="font-serif italic font-normal text-accent">to be a chaser.</span>
        </h2>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
          Yet every month end, 10+ hours vanish into reminder emails, Slack pings, and "just following up."
        </p>
        <p className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight">
          We give those hours back.
        </p>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Free 10-min call", body: "We map your chase. You get the plan." },
    { num: "02", title: "We build it in days", body: "Around your stack. Nothing for you to learn." },
    { num: "03", title: "You close on time", body: "Docs land. Reminders run. You log off." },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">How it works</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Live in a week.{" "}
            <span className="font-serif italic font-normal text-accent">Hours back forever.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 sm:p-10 md:p-12 min-h-[220px] flex flex-col gap-5"
            >
              <div className="size-10 rounded-full border border-accent/40 bg-accent/10 text-accent flex items-center justify-center text-xs font-mono font-semibold">
                {s.num}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  return (
    <section className="py-24 sm:py-32 border-t border-border/60 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent mb-8">
          <Clock className="size-3.5" /> Pricing
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
          2 weeks free.{" "}
          <span className="font-serif italic font-normal text-accent">Then pay for hours saved.</span>
        </h2>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          The trial is completely free — no card, no commitment, no strings. Use it for 2 weeks. If you want to walk away at the end, you pay absolutely nothing. If you stay, you only pay based on the hours we actually give back. The more time you reclaim, the more you benefit. Always proportional to value.
        </p>

        <div className="mt-10 inline-flex items-center gap-2.5 rounded-2xl border-2 border-accent/40 bg-accent/10 px-6 py-4 shadow-[0_0_40px_-12px_hsl(168_72%_32%/0.4)]">
          <Shield className="size-5 text-accent shrink-0" strokeWidth={2.5} />
          <span className="text-sm sm:text-base font-semibold tracking-tight">
            Walk away after 2 weeks and pay nothing. Zero risk.
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> 2 weeks completely free</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No upfront fees</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No commitment</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> Scales with your savings</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GUARANTEE ---------------- */
function Guarantee() {
  return (
    <section className="py-28 sm:py-36 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(168_72%_32%/0.14),transparent_60%)]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent mb-8">
          <Shield className="size-3.5" /> The guarantee
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
          10 hours back in 2 weeks
          <br />
          <span className="font-serif italic font-normal text-accent">or you don't pay a cent.</span>
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          That's it. No fine print. No catch.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "How can you guarantee 10 hours?",
      a: "Chasing is the biggest time-sink in bookkeeping — we've never seen a workflow where we couldn't cut at least 10 hours. If we miss it in 2 weeks, you pay nothing.",
    },
    {
      q: "Will my clients notice?",
      a: "Only that they hear from you faster and more consistently. Follow-ups go out in your tone, on your cadence.",
    },
    {
      q: "Do I have to learn new software?",
      a: "No. We build around your stack — email, Drive, QBO, Xero — and run it for you.",
    },
    {
      q: "What happens on the call?",
      a: "10 minutes. We map your chase, show you exactly where the 10+ hours are hiding, and walk you through how we'd automate it.",
    },
    {
      q: "What if I want to leave after the trial?",
      a: "Then you leave, and you don't pay a single cent. No contract, no lock-in, no awkward conversations. The 2 weeks are completely free with zero obligation.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 border-t border-border/60 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] text-center mb-12">
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

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(168_72%_32%/0.16),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_bottom,#000,transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-28 sm:py-36 text-center">
        <h2 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.04] mb-8 text-balance">
          Get your{" "}
          <span className="font-serif italic font-normal text-accent">month back.</span>
        </h2>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-neutral rounded-full text-base"
        >
          Book my free 10-min call <ArrowRight className="size-4" />
        </a>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> Free</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No card</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No commitment</span>
          <span className="inline-flex items-center gap-1.5"><Check className="size-3.5 text-accent" strokeWidth={2.5} /> No pitch</span>
        </div>
      </div>
    </section>
  );
}
