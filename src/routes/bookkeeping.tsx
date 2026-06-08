import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Plus,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";

// TODO: replace with the real Cal.com booking link
const CAL_LINK = "https://cal.com/brightflow-ai/10min";

export const Route = createFileRoute("/bookkeeping")({
  head: () => ({
    meta: [
      {
        title: "BrightFlow AI - Stop Chasing Missing Client Documents",
      },
      {
        name: "description",
        content:
          "We automate client follow-ups for bookkeepers. Get a free 10-min diagnosis call and a 2-week free pilot. No contracts.",
      },
      {
        property: "og:title",
        content: "BrightFlow AI - Stop Chasing Missing Client Documents",
      },
      {
        property: "og:description",
        content:
          "We automate client follow-ups for bookkeepers. Free 10-min diagnosis call, then a 2-week free pilot.",
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
        <WhatWeDo />
        <WhatYouGet />
        <HowItWorks />
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.10),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            The automation agency for bookkeepers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] lg:leading-[1.02] font-semibold tracking-[-0.035em] mb-5 sm:mb-7 max-w-4xl text-balance"
          >
            Stop chasing missing client documents.{" "}
            <span className="font-serif italic font-normal text-accent">Finish the books faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 text-pretty leading-relaxed"
          >
            We automate client follow-ups for bookkeepers. Get a free 10-min diagnosis call, then a 2-week free pilot. No obligation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full sm:w-auto flex flex-col items-center"
          >
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-neutral rounded-full w-full sm:w-auto"
            >
              Book my free call <ArrowRight className="size-4" />
            </a>
            <div className="mt-4 text-sm text-muted-foreground">
              10 minutes. No pitch. No pressure.
            </div>
          </motion.div>

          {/* Proof point */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 sm:mt-14 inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/60 backdrop-blur px-5 py-2.5"
          >
            <TrendingUp className="size-4 text-accent" />
            <span className="text-sm text-foreground">
              <span className="font-semibold">14 hours/month</span>{" "}
              <span className="text-muted-foreground">saved by one bookkeeper after switching to us.</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT WE DO ---------------- */
function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            What we do
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            We take the chase{" "}
            <span className="font-serif italic font-normal text-muted-foreground">off your plate.</span>
          </h2>
        </div>
        <div className="space-y-8">
          <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed text-pretty">
            You spend hours every month chasing receipts, statements and answers. We take that off your plate. We build the follow-up system around the tools you already use, then run it for you, every month, so you close the books on time.
          </p>
          <div className="rounded-xl border border-border bg-secondary/40 p-5 sm:p-6">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              <Sparkles className="size-3.5 text-accent" />
              Built for
            </div>
            <p className="text-base text-foreground leading-relaxed">
              Solo bookkeepers, small firms, CAS practices and virtual CFOs.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Any bookkeeper losing hours each month chasing missing client documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT YOU GET ---------------- */
function WhatYouGet() {
  const items = [
    {
      index: "01",
      icon: <Clock className="size-5" />,
      title: "Month end without the chase",
      body: "Every document and answer arrives before close week. No reminder emails, no waiting.",
    },
    {
      index: "02",
      icon: <ArrowUpRight className="size-5" />,
      title: "More clients, same headcount",
      body: "Hours saved turn into capacity for advisory work and new engagements.",
    },
    {
      index: "03",
      icon: <Check className="size-5" />,
      title: "Close on schedule, every month",
      body: "Deadlines stop slipping. Books finish the same day each month.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            What you get
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            The outcome,{" "}
            <span className="font-serif italic font-normal text-accent">every engagement.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {items.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 sm:p-10 md:p-12 hover:bg-secondary/60 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <div className="size-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.index}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
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
      body: "We diagnose your workflow and identify the biggest time-waster in your month end.",
    },
    {
      num: "02",
      title: "We build",
      body: "We build a client follow-up system using your existing tools. Your email, Google Drive, QuickBooks and the rest of your stack. No new software for you to learn.",
    },
    {
      num: "03",
      title: "We run",
      body: "We handle all the client communication: reminders, document collection, and answering the routine queries that come back.",
    },
    {
      num: "04",
      title: "You close",
      body: "Books ready on time. You walk into close week with everything in hand.",
    },
  ];

  const benefits = [
    "Live in under a week",
    "Flat monthly fee, no surprises",
    "No contracts, cancel anytime",
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            From first call to a closing month{" "}
            <span className="font-serif italic font-normal text-muted-foreground">we already run.</span>
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
              className="relative bg-background p-8 sm:p-10 md:p-12 min-h-[260px] grid grid-rows-[auto_auto_1fr] gap-y-5 group hover:bg-secondary/40 transition-colors"
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

        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <Check className="size-4 text-accent" strokeWidth={2.5} />
              <span className="text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "Will my clients be annoyed?",
      a: "No. Our follow-ups are professional and persistent. Clients appreciate the reminders.",
    },
    {
      q: "How fast does it start?",
      a: "Live within one week from kickoff. You'll feel the difference the next month end.",
    },
    {
      q: "Do I need to learn technical tools?",
      a: "No. We build it around your existing stack and run everything ourselves. You just get the books.",
    },
    {
      q: "What's the catch with the free pilot?",
      a: "None. Two weeks, on us, so you can see it work in your practice before committing. No contracts, cancel anytime.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 border-t border-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            The straight{" "}
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(168_72%_32%/0.10),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_bottom,#000,transparent_70%)]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-40 text-center">
        <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.05] lg:leading-[1.02] mb-6 sm:mb-8 text-balance">
          Ready to{" "}
          <span className="font-serif italic font-normal text-accent">stop chasing?</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto">
          Book a free 10-min diagnosis call. We'll map your biggest bottleneck and offer a 2-week free pilot, no obligation.
        </p>
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-neutral rounded-full"
        >
          Book my free call <ArrowUpRight className="size-4" />
        </a>
        <div className="mt-5 text-sm text-muted-foreground">
          No contracts. Cancel anytime after the pilot.
        </div>
      </div>
    </section>
  );
}
