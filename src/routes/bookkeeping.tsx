import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Check, Clock, Plus, Shield } from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";

const CAL_LINK = "https://cal.com/samuel-howell-iwfnp4/15min";

export const Route = createFileRoute("/bookkeeping")({
  head: () => ({
    meta: [
      { title: "Stop Chasing Client Docs — Guaranteed | BrightFlow AI" },
      {
        name: "description",
        content:
          "Bookkeepers: how many hours do you lose each month chasing missing client documents? We automate the chase — or you don't pay a cent.",
      },
      { property: "og:title", content: "Stop Chasing Client Docs — Guaranteed | BrightFlow AI" },
      {
        property: "og:description",
        content: "Automate the chase. Get your month end back — or you don't pay a single cent.",
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
        <Calculator />
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
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.04] font-semibold tracking-[-0.04em] text-balance max-w-4xl"
          >
            How many hours do you lose each month{" "}
            <span className="font-serif italic font-normal text-accent">chasing missing client documents?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
          >
            Whatever the number is — we give it back. We build the automation that chases clients for you, so month end closes itself.
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
          Yet every month end, hours vanish into reminder emails, Slack pings, and "just following up." For most bookkeepers it's 10, 20, sometimes 30+ hours a month.
        </p>
        <p className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight">
          We give every one of them back.
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
          <span className="font-serif italic font-normal text-accent">Only pay if you keep it.</span>
        </h2>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Try it for 2 weeks — completely free, no card, no strings. If you love it and want to keep the system, you only pay based on the hours we give back. If it's not for you, just walk away. Zero cost, zero commitment, completely up to you. Risk free.
        </p>

        <div className="mt-10 inline-flex items-center gap-2.5 rounded-2xl border-2 border-accent/40 bg-accent/10 px-6 py-4 shadow-[0_0_40px_-12px_hsl(168_72%_32%/0.4)]">
          <Shield className="size-5 text-accent shrink-0" strokeWidth={2.5} />
          <span className="text-sm sm:text-base font-semibold tracking-tight">
            Walk away after 2 weeks and pay nothing. No commitment, completely up to you.
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

/* ---------------- CALCULATOR ---------------- */
function Calculator() {
  const [rate, setRate] = useState(75);
  const [hours, setHours] = useState(10);
  const monthly = rate * hours;
  const yearly = monthly * 12;
  const fmt = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent mb-8">
            <Clock className="size-3.5" /> Your savings
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            See what your time is{" "}
            <span className="font-serif italic font-normal text-accent">actually worth.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Drag the sliders. The number on the right is what chasing is costing you right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {/* Inputs */}
          <div className="bg-background p-8 sm:p-10 flex flex-col gap-10 justify-center">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm uppercase tracking-[0.14em] text-muted-foreground">Your hourly rate</label>
                <span className="text-2xl font-semibold tabular-nums">{fmt(rate)}<span className="text-sm text-muted-foreground font-normal">/hr</span></span>
              </div>
              <input
                type="range"
                min={25}
                max={300}
                step={5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[hsl(168_72%_32%)] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-2 font-mono">
                <span>$25</span><span>$300</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm uppercase tracking-[0.14em] text-muted-foreground">Hours saved / month</label>
                <span className="text-2xl font-semibold tabular-nums">{hours}<span className="text-sm text-muted-foreground font-normal"> hrs</span></span>
              </div>
              <input
                type="range"
                min={5}
                max={40}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-[hsl(168_72%_32%)] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground mt-2 font-mono">
                <span>5 hrs</span><span>40 hrs</span>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="bg-accent/5 p-8 sm:p-10 flex flex-col justify-center gap-6 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(168_72%_32%/0.18),transparent_70%)]" />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">You save / month</div>
              <div className="text-5xl sm:text-6xl font-semibold tracking-[-0.035em] text-accent tabular-nums">
                {fmt(monthly)}
              </div>
            </div>
            <div className="h-px bg-border/70" />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">You save / year</div>
              <div className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] tabular-nums">
                {fmt(yearly)}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pt-2">
              That's {hours} hours every month back in your pocket — at your rate, billable to real client work.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-foreground text-background px-7 py-3.5 text-[15px] font-medium tracking-tight hover:bg-foreground/90 transition-colors"
          >
            Claim my {fmt(monthly)}/mo back <ArrowRight className="size-4" />
          </a>
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
          2 weeks free.
          <br />
          <span className="font-serif italic font-normal text-accent">Only pay if you keep it.</span>
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          No contract, no catch, no hard feelings. Try it risk free. If you want to keep the system, we'll agree on a price based on the hours you get back. If not, just walk away — zero cost, completely up to you.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "How many hours will I actually save?",
      a: "Depends on your client load and how messy the chase is — but every bookkeeper we've worked with has gotten back significant time in the first 2 weeks. If you don't see a real difference, you pay nothing.",
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
      a: "10 minutes. We map your chase, show you exactly where the hours are hiding, and walk you through how we'd automate it.",
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
