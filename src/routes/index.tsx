import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  Coffee,
  FileText,
  Inbox,
  Mail,
  MessageSquare,
  Phone,
  PhoneCall,
  Plus,
  Quote,
  Sparkles,
  Zap,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";
import { BookCallDialog } from "@/components/BookCallDialog";
import { AuroraBackground } from "@/components/AuroraBackground";




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "BrightFlow AI - Fully Automate Repetitive Manual Admin",
      },
      {
        name: "description",
        content:
          "We eliminate the mundane, repetitive manual tasks eating your team's time so you can focus on strategic initiatives that actually grow your business.",
      },
      { property: "og:title", content: "BrightFlow AI - Fully Automate Repetitive Manual Admin" },
      {
        property: "og:description",
        content:
          "We handle the low-value repetitive admin in your business, freeing you to focus on the critical areas that truly matter.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Marquee />
        <ValueProp />
        <Storyboard />
        <Products />
        <Testimonials />
        <Process />
        <Metrics />
        <FAQ />
      </main>
      <Footer />
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
      id="top"
      ref={ref}
      className="relative pt-14 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <AuroraBackground />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now booking Q1 engagements — 2 spots left
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] font-semibold tracking-[-0.035em] mb-6 max-w-4xl text-balance"
          >
            Automate the repetitive work{" "}
            <span className="font-serif italic font-normal text-accent">killing your week.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-9 text-pretty leading-relaxed"
          >
            We fully automate the repetitive manual work running inside your business and operate the system for you, end to end. You get the hours back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <BookCallDialog>
              <button
                type="button"
                className="btn btn-lg btn-neutral rounded-full w-full sm:w-auto"
              >
                Book a free audit <ArrowRight className="size-4" />
              </button>
            </BookCallDialog>
            <a
              href="#services"
              className="btn btn-lg btn-outline rounded-full w-full sm:w-auto border-border text-foreground hover:bg-secondary hover:border-border"
            >
              See what we build
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" /> Live in under 7 days</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" /> Fixed monthly fee</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" /> We manage everything</span>
          </motion.div>

          {/* Floating product preview collage */}
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}

function HeroCollage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-16 sm:mt-20 w-full max-w-5xl"
    >
      <div className="relative h-[320px] sm:h-[380px] md:h-[420px]">
        {/* Center card - dashboard */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-4 -translate-x-1/2 w-[78%] sm:w-[70%] rounded-2xl border border-border bg-background/90 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">brightflow / control</span>
          </div>
          <div className="grid grid-cols-3 gap-px bg-border">
            {[
              { l: "Hours saved", v: "14h", s: "this week" },
              { l: "Tasks handled", v: "1,284", s: "this month" },
              { l: "Uptime", v: "100%", s: "30 day" },
            ].map((m) => (
              <div key={m.l} className="bg-background p-4 text-left">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{m.l}</div>
                <div className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight">{m.v}</div>
                <div className="text-[10px] text-muted-foreground">{m.s}</div>
              </div>
            ))}
          </div>
          <div className="p-4 space-y-2">
            {[
              { icon: <Mail className="size-3" />, t: "Document chase sent → Acme Co.", ok: true },
              { icon: <PhoneCall className="size-3" />, t: "Missed call captured → Brown plumbing", ok: true },
              { icon: <Calendar className="size-3" />, t: "Interview booked → J. Patel", ok: true },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="flex items-center gap-2.5 rounded-md border border-border/70 bg-secondary/40 px-3 py-2 text-[11px]"
              >
                <span className="text-accent">{row.icon}</span>
                <span className="flex-1 truncate text-foreground/80">{row.t}</span>
                <Check className="size-3 text-accent" strokeWidth={3} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Left floating card - SMS */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -6, y: [0, 6, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 0.8 }, x: { duration: 0.8, delay: 0.8 }, rotate: { duration: 0.8, delay: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          className="hidden sm:block absolute left-0 sm:left-4 top-24 w-[220px] rounded-2xl border border-border bg-background shadow-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="size-7 rounded-full bg-accent/10 text-accent flex items-center justify-center">
              <MessageSquare className="size-3.5" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">New lead · 2s ago</div>
          </div>
          <div className="text-[11px] text-foreground leading-relaxed">
            <span className="font-medium">Sarah J.</span> · Burst pipe, 24 Elm St. Wants callback today before 5pm.
          </div>
        </motion.div>

        {/* Right floating card - invoice */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 5, y: [0, -6, 0] }}
          transition={{ opacity: { duration: 0.8, delay: 1 }, x: { duration: 0.8, delay: 1 }, rotate: { duration: 0.8, delay: 1 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="hidden sm:block absolute right-0 sm:right-4 top-32 w-[220px] rounded-2xl border border-border bg-background shadow-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="size-7 rounded-full bg-accent/10 text-accent flex items-center justify-center">
              <FileText className="size-3.5" />
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Receipt filed</div>
          </div>
          <div className="text-[11px] text-foreground leading-relaxed">
            <span className="font-medium">£412.80</span> · Office supplies, matched to Xero ledger. No human touched it.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------------- STATS STRIP ---------------- */
function StatsStrip() {
  const items = [
    { v: "14,200+", l: "Hours returned per year" },
    { v: "<7 days", l: "From kickoff to live" },
    { v: "100%", l: "Managed end-to-end" },
    { v: "£0", l: "Until it's working" },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="px-4 sm:px-6 py-6 sm:py-8 text-center md:text-left"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em]">{it.v}</div>
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{it.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "BOOKKEEPING FIRMS",
    "PROPERTY MANAGEMENT",
    "RECRUITMENT AGENCIES",
    "MEDICAL & DENTAL CLINICS",
    "LOCAL SERVICE BUSINESSES",
    "REAL ESTATE TEAMS",
    "LEGAL PRACTICES",
    "E-COMMERCE OPERATIONS",
  ];
  return (
    <div className="py-10 sm:py-12 border-y border-border/60 overflow-hidden">
      <div className="text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-6 sm:mb-8 px-4">
        Trusted by service businesses done running on manual admin
      </div>
      <div className="flex gap-10 sm:gap-14 whitespace-nowrap animate-marquee w-max">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="text-muted-foreground/40 font-medium uppercase tracking-[0.18em] text-xs flex items-center gap-10 sm:gap-14"
          >
            {it}
            <span className="size-1 rounded-full bg-muted-foreground/30" />
          </span>
        ))}
      </div>
    </div>
  );
}


/* ---------------- VALUE PROP ---------------- */
function ValueProp() {
  const lead = {
    index: "01",
    icon: <Clock className="size-5" />,
    label: "The outcome",
    title: "Your week back. Every week.",
    body: "Walk into Monday with the repetitive admin already handled. No backlog, no chasing, no friction. Just the hours and headspace to do the work only you can do.",
  };
  const supporting = [
    {
      index: "02",
      icon: <ArrowUpRight className="size-5" />,
      label: "The outcome",
      title: "More revenue, same team.",
      body: "Capacity shifts from busywork to the activities that actually grow the business. Closing deals, serving clients, building product.",
    },
    {
      index: "03",
      icon: <Check className="size-5" />,
      label: "The outcome",
      title: "A business that scales without you.",
      body: "The routine running of your operation keeps moving whether you're in the office, on holiday, or hiring. Without bottlenecks or extra headcount.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            What you actually get
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance mb-6 sm:mb-8">
            We don't sell workflows.{" "}
            <span className="font-serif italic font-normal text-accent">We sell the outcome.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Automation is just the means. What you're really buying is your time back, more capacity for the work that grows the business, and a company that runs without you in the loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {/* Lead card spans full row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-background p-8 sm:p-10 md:p-12 hover:bg-secondary/60 transition-colors"
          >
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <div className="size-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                {lead.icon}
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {lead.index}. {lead.label}
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] mb-4 max-w-2xl">
              {lead.title}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {lead.body}
            </p>
          </motion.div>

          {supporting.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="bg-background p-8 sm:p-10 md:p-12 hover:bg-secondary/60 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <div className="size-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.index}. {p.label}
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


/* ---------------- STORYBOARD ---------------- */
function Storyboard() {
  const panels = [
    {
      tag: "Before",
      index: "01",
      title: "The week you know too well.",
      caption: "10+ hours a week lost to admin your team shouldn't be touching.",
      Visual: BeforePanel,
    },
    {
      tag: "The shift",
      index: "02",
      title: "We take it over. Permanently.",
      caption: "We own the workflow end to end. Your team stops touching it from day one.",
      Visual: ShiftPanel,
    },
    {
      tag: "After",
      index: "03",
      title: "Hours back. Capacity unlocked.",
      caption: "10+ hours a week redirected to closing deals, serving clients, and growing revenue.",
      Visual: AfterPanel,
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.06),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            The transformation
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance mb-6 sm:mb-8">
            From manual chaos to{" "}
            <span className="font-serif italic font-normal text-accent">hours back, every week.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Three frames. The exact outcome we deliver. 10+ hours a week back, every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[140px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {panels.map((p, i) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-background border border-border/70 rounded-2xl p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.index}. {p.tag}
                </div>
                {i < panels.length - 1 && (
                  <ArrowRight className="size-4 text-muted-foreground/50 md:hidden" />
                )}
              </div>

              {/* Animated visual */}
              <div className="relative h-44 sm:h-48 rounded-xl border border-border/60 bg-secondary/30 overflow-hidden mb-6">
                <p.Visual />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Frame 1: chaos. Tasks piling on top of each other, inbox counter climbing */
function BeforePanel() {
  const tasks = [
    { icon: <Mail className="size-3.5" />, label: "Unread email" },
    { icon: <FileText className="size-3.5" />, label: "Invoice to chase" },
    { icon: <AlertCircle className="size-3.5" />, label: "Follow-up overdue" },
    { icon: <Calendar className="size-3.5" />, label: "Reschedule request" },
    { icon: <Mail className="size-3.5" />, label: "Reply needed" },
  ];
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Inbox className="size-3" /> Inbox
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-foreground font-medium tracking-normal normal-case"
        >
          + {tasks.length} new
        </motion.span>
      </div>
      <div className="relative flex-1 mt-3">
        {tasks.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -12, rotate: 0 }}
            whileInView={{
              opacity: 1,
              y: i * 8,
              rotate: (i % 2 === 0 ? -1 : 1) * (i * 0.8),
            }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 mx-auto w-[90%] bg-background border border-border rounded-md px-2.5 py-1.5 flex items-center gap-2 text-[11px] text-foreground shadow-sm"
            style={{ top: `${i * 14}px`, zIndex: tasks.length - i }}
          >
            <span className="text-muted-foreground">{t.icon}</span>
            <span className="truncate">{t.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Frame 2: shift. Animated beam routing tasks through the system */
function ShiftPanel() {
  return (
    <div className="absolute inset-0 p-4">
      <div className="absolute inset-0 flex items-center justify-between px-6">
        {/* left: incoming tasks */}
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="size-2 rounded-full bg-muted-foreground/40"
            />
          ))}
        </div>

        {/* center: pulsing core */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative size-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-accent/20"
          />
          <Zap className="size-5 text-accent relative z-10" />
        </motion.div>

        {/* right: clean output */}
        <div className="flex flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="size-2 rounded-full bg-accent"
            />
          ))}
        </div>
      </div>

      {/* animated traveling dots */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.line
          x1="18" y1="50" x2="42" y2="50"
          stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2"
          className="text-border"
        />
        <motion.line
          x1="58" y1="50" x2="82" y2="50"
          stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2"
          className="text-border"
        />
      </svg>

      <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Routing · Replying · Filing
      </div>
    </div>
  );
}

/* Frame 3: calm. Cleared list, time reclaimed counter */
function AfterPanel() {
  const done = ["Replies sent", "Invoices filed", "Bookings confirmed", "Reports built"];
  return (
    <div className="absolute inset-0 p-4 flex flex-col">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
        <span className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-accent" /> Handled today
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-foreground font-medium tracking-normal normal-case flex items-center gap-1"
        >
          <Coffee className="size-3" /> Inbox zero
        </motion.span>
      </div>
      <div className="flex-1 space-y-1.5">
        {done.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className="flex items-center gap-2 text-[11px] text-foreground"
          >
            <span className="size-4 rounded-full bg-accent/15 text-accent flex items-center justify-center">
              <Check className="size-2.5" strokeWidth={3} />
            </span>
            <span className="text-muted-foreground line-through decoration-border">{d}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-[11px]"
      >
        <span className="text-muted-foreground">Time reclaimed</span>
        <span className="font-semibold text-foreground tracking-tight">+ 14h / week</span>
      </motion.div>
    </div>
  );
}


/* ---------------- PRODUCTS ---------------- */
function Products() {
  return (
    <section id="services" className="py-24 sm:py-32 md:py-40 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            What we build
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Two flagship systems.{" "}
            <span className="font-serif italic font-normal text-accent">Already live.</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
          Productised automations we deploy in days. Each one is a complete, managed system — not a script you have to babysit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        <ProductCard
          to="/call-net"
          eyebrow="Call Net"
          tag="For trades & local service businesses"
          icon={<Phone className="size-5" />}
          title="Capture every missed call. 24/7."
          body="An AI receptionist answers when you can't, collects the caller's name, number and need, then texts you the summary instantly. You call back. You close."
          stats={[
            { v: "62%", l: "calls usually missed" },
            { v: "<5 min", l: "callback window" },
            { v: "$97/mo", l: "flat fee" },
          ]}
          Visual={CallNetVisual}
        />
        <ProductCard
          to="/bookkeeping"
          eyebrow="Document Chase"
          tag="For bookkeeping firms"
          icon={<FileText className="size-5" />}
          title="The month-end document chase, on autopilot."
          body="The system spots missing receipts and unexplained transactions, then emails and texts clients until everything is in. Your team never touches the chase again."
          stats={[
            { v: "10h+", l: "saved per month-end" },
            { v: "0", l: "manual follow-ups" },
            { v: "Free pilot", l: "2 weeks, or you don't pay" },
          ]}
          Visual={BookkeepingVisual}
        />
      </div>

      <div className="mt-6 rounded-2xl bg-foreground p-8 sm:p-10 md:p-12 text-background flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] mb-3 opacity-60">
            Don't see your workflow?
          </div>
          <h4 className="font-semibold tracking-tight text-xl sm:text-2xl md:text-3xl text-balance">
            If it's repetitive, we automate it. Every time.
          </h4>
        </div>
        <Link
          to="/contact"
          className="btn btn-md bg-background text-foreground border-none hover:bg-background/90 rounded-full self-start md:self-auto"
        >
          Tell us about it <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

function ProductCard({
  to,
  eyebrow,
  tag,
  icon,
  title,
  body,
  stats,
  Visual,
}: {
  to: "/call-net" | "/bookkeeping";
  eyebrow: string;
  tag: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  stats: { v: string; l: string }[];
  Visual: React.ComponentType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background hover:border-accent/40 transition-colors"
    >
      {/* visual panel */}
      <div className="relative h-56 sm:h-64 overflow-hidden border-b border-border bg-gradient-to-br from-secondary/60 via-background to-background">
        <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
        <div className="absolute -top-20 -right-16 size-56 rounded-full blur-3xl bg-accent/15" />
        <Visual />
      </div>

      <div className="p-7 sm:p-9">
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-center gap-2">
            <div className="size-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              {icon}
            </div>
            <div>
              <div className="text-base font-semibold tracking-tight leading-tight">{eyebrow}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">{tag}</div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] leading-[1.15] mb-3 text-balance">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-7">{body}</p>

        <div className="grid grid-cols-3 gap-3 mb-7 pt-5 border-t border-border">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-xl sm:text-2xl font-semibold tracking-tight">{s.v}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>

        <Link
          to={to}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          See {eyebrow} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

function CallNetVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative size-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-accent/20"
        />
        <motion.div
          animate={{ scale: [1, 2.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 rounded-full bg-accent/10"
        />
        <PhoneCall className="size-9 text-accent relative z-10" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute right-5 bottom-5 w-[180px] rounded-xl border border-border bg-background shadow-md p-3"
      >
        <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground mb-1">New lead · just now</div>
        <div className="text-[11px] text-foreground leading-snug">
          <span className="font-medium">Mike R.</span> · Boiler down. Wants quote today.
        </div>
      </motion.div>
    </div>
  );
}

function BookkeepingVisual() {
  const rows = [
    { name: "Acme Co. — Sept receipts", done: true },
    { name: "Bright Bistro — Q3 statements", done: true },
    { name: "Nguyen LLC — missing invoice", done: false },
    { name: "Patel Salon — VAT docs", done: true },
  ];
  return (
    <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-center">
      <div className="rounded-xl border border-border bg-background/90 backdrop-blur shadow-md overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Chase queue</div>
          <div className="text-[10px] text-accent font-medium">Auto · running</div>
        </div>
        <div className="divide-y divide-border">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="flex items-center gap-2.5 px-3 py-2 text-[11px]"
            >
              <span className={`size-4 rounded-full flex items-center justify-center ${r.done ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`}>
                {r.done ? <Check className="size-2.5" strokeWidth={3} /> : <Clock className="size-2.5" />}
              </span>
              <span className={`flex-1 truncate ${r.done ? "text-muted-foreground line-through decoration-border" : "text-foreground"}`}>
                {r.name}
              </span>
              {!r.done && <span className="text-[9px] uppercase tracking-[0.18em] text-accent">chasing</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    {
      q: "We got our month-end back. Two weeks in, our team stopped chasing receipts entirely. I genuinely don't know how we ran without it.",
      name: "Hannah L.",
      role: "Partner, mid-size bookkeeping firm",
    },
    {
      q: "Call Net caught 5 new jobs in our first 2 weeks. The callers don't know it's AI and I close them like any other lead.",
      name: "Dave M.",
      role: "Plumbing Pro, Bristol UK",
    },
    {
      q: "Live in 6 days. Flat monthly fee. They manage the whole thing. It's the most boring, profitable system we've ever bought.",
      name: "Marcus T.",
      role: "Founder, recruitment agency",
    },
  ];
  return (
    <section className="py-24 sm:py-32 md:py-40 border-y border-border/60 bg-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.08),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            What clients say
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Quietly running{" "}
            <span className="font-serif italic font-normal text-accent">in the background.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-background p-7 flex flex-col"
            >
              <Quote className="size-6 text-accent/60 mb-4" />
              <blockquote className="text-base leading-relaxed text-foreground/90 flex-1">
                {q.q}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="text-sm font-medium">{q.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{q.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}




/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit",
      body: "We sit down with you and map the repetitive workflows costing the most time and money. You leave with a clear plan, whether or not you work with us.",
    },
    {
      num: "02",
      title: "Build",
      body: "We design and build the automated workflow around your exact process, integrated with the tools you already use. CRM, email, accounting, calendar.",
    },
    {
      num: "03",
      title: "Launch",
      body: "We deploy the system, train your team in under an hour, and switch it on. Every client is live in under a week.",
    },
    {
      num: "04",
      title: "Manage",
      body: "We monitor, maintain and improve the system every month at a flat fee. You never lift a finger to keep it running.",
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 md:py-40 border-y border-border/60 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            From first call to live system{" "}
            <span className="font-serif italic font-normal text-muted-foreground">in under a week.</span>
          </h2>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 sm:p-10 md:p-12 min-h-[220px] sm:min-h-[260px] grid grid-rows-[auto_auto_1fr] gap-y-6 group hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent">{s.num}</span>
                <div className="size-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
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

/* ---------------- METRICS ---------------- */
function Metrics() {
  const items = [
    { value: "14,200+", label: "Hours handed back to our clients each year" },
    { value: "100%", label: "Automation accuracy across every system we run" },
    { value: "1-7 days", label: "From kickoff to live, in production" },
    { value: "100%", label: "Managed by us. You never touch the system" },
  ];
  return (
    <section className="py-24 sm:py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {items.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] text-foreground">
              {m.value}
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground mt-3 leading-snug">{m.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "Why should I trust you over an in-house hire or another agency?",
      a: "An in-house hire costs you six figures, takes months to ramp, and still gets sick. Other agencies sell you 'AI strategy' decks. We ship a working system inside a week and run it for you. Flat fee, no excuses.",
    },
    {
      q: "How do I know it'll actually work in my business?",
      a: "Because we don't guess. We audit your workflow first, scope exactly what we're automating, and only quote once we know it'll work. If we can't deliver the outcome, we tell you upfront. Not three months in.",
    },
    {
      q: "What if my processes are too messy or custom to automate?",
      a: "Good. That's our entire job. If your workflow was clean and templated, you wouldn't need us. You'd buy a SaaS tool. Messy, bespoke, glued-together processes are exactly what we're built to fix.",
    },
    {
      q: "How fast will I see results?",
      a: "Every system is live within 7 days of kickoff. You see the hours come back the week it switches on. Not next quarter, not after a 'transformation roadmap'.",
    },
    {
      q: "What happens if it breaks?",
      a: "It doesn't reach you. We monitor every workflow 24/7, issues self-recover, and our team handles anything else before it touches your business. That's the entire point of the managed monthly fee.",
    },
    {
      q: "Do I have to learn anything technical?",
      a: "No. You hired us so you wouldn't have to. We build it, we run it, we improve it. Your job is to keep doing the work only you can do. We'll handle everything else.",
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 md:py-40">
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

