import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Phone,
  Plus,
  Quote,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";
import { BookCallDialog } from "@/components/BookCallDialog";
import { AuroraBackground } from "@/components/AuroraBackground";

/* Top-of-page scroll progress indicator */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]"
    />
  );
}

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
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Marquee />
        <ValueProp />
        <Products />
        <Testimonials />
        <Process />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-14 sm:pt-20 pb-20 sm:pb-28 overflow-hidden"
    >
      <motion.div style={reduceMotion ? undefined : { y: bgY }} className="absolute inset-0 -z-10 opacity-70">
        <AuroraBackground />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] leading-[0.92] font-semibold tracking-[-0.05em] mb-4 text-balance text-foreground"
        >
          Automate the repetitive work{" "}
          <span className="font-serif italic font-normal text-accent">killing your week.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[15px] sm:text-base text-muted-foreground max-w-md mb-7 text-pretty leading-relaxed"
        >
          We fully automate the repetitive manual work running inside your business and operate the system for you, end to end. You get the hours back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto"
        >
          <BookCallDialog>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-8 py-4 text-[15px] font-semibold text-background hover:bg-foreground/90 transition-colors shadow-sm"
            >
              Book a free audit <ArrowRight className="size-4" />
            </button>
          </BookCallDialog>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-7 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            See what we build
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- STATS STRIP ---------------- */
function StatsStrip() {
  const items = [
    { v: "1,000+", l: "Hours returned to clients" },
    { v: "<7 days", l: "From kickoff to live" },
    { v: "100%", l: "Managed end-to-end" },
    { v: "$0", l: "Until it's working" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-border/60">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="min-w-0 px-5 sm:px-7 md:px-8 py-7 sm:py-10 md:py-11 text-left"
          >
            <div className="text-[22px] sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05] whitespace-normal break-words">
              {it.v}
            </div>
            <div className="mt-2.5 sm:mt-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground/75 leading-snug whitespace-normal break-words">
              {it.l}
            </div>
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
    "TRADES & LOCAL SERVICES",
    "RECRUITMENT AGENCIES",
    "AND MORE",
  ];
  return (
    <div className="py-10 sm:py-12 border-b border-border overflow-hidden">
      <div className="text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-6 sm:mb-8 px-4">
        Trusted by service businesses done running on manual admin
      </div>
      <div className="flex gap-12 sm:gap-16 whitespace-nowrap animate-marquee w-max">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="text-muted-foreground/40 font-medium uppercase tracking-[0.18em] text-xs flex items-center gap-12 sm:gap-16"
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
  const rows = [
    {
      index: "01",
      title: "Your week back. Every week.",
      body: "Walk into Monday with the repetitive admin already handled. No backlog, no chasing, no friction. Just the hours and headspace to do the work only you can do.",
    },
    {
      index: "02",
      title: "More revenue, same team.",
      body: "Capacity shifts from busywork to the activities that actually grow the business. Closing deals, serving clients, building product.",
    },
    {
      index: "03",
      title: "A business that scales without you.",
      body: "The routine running of your operation keeps moving whether you're in the office, on holiday, or hiring. Without bottlenecks or extra headcount.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-28">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            What you actually get
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.045em] leading-[1.0] text-balance mb-6 sm:mb-8">
            We don't sell workflows.{" "}
            <span className="font-serif italic font-normal text-accent">We sell the outcome.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Automation is just the means. What you're really buying is your time back, more capacity for the work that grows the business, and a company that runs without you in the loop.
          </p>
        </div>

        <div className="border-t border-border">
          {rows.map((r, i) => (
            <motion.div
              key={r.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-6 sm:gap-10 py-7 sm:py-9 border-b border-border items-baseline"
            >
              <div className="col-span-2 sm:col-span-1 text-[11px] font-mono text-foreground/55 pt-1">
                {r.index}
              </div>
              <div className="col-span-10 sm:col-span-4">
                <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold tracking-[-0.03em] leading-[1.1] text-foreground">
                  {r.title}
                </h3>
              </div>
              <div className="col-span-12 sm:col-span-7">
                <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {r.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function Products() {
  return (
    <section id="services" className="bg-secondary/30 border-y border-border py-24 sm:py-32 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
              What we build
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.045em] leading-[1.0] text-balance">
              Two flagship systems.{" "}
              <span className="font-serif italic font-normal text-accent">Already live.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
            Productised automations we deploy in days. Each one is a complete, managed system - not a script you have to babysit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            variant="dark"
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
            variant="light"
          />
        </div>
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
  variant = "light",
}: {
  to: "/call-net" | "/bookkeeping";
  eyebrow: string;
  tag: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  stats: { v: string; l: string }[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-lg transition-colors flex flex-col h-full ${
        isDark
          ? "bg-foreground text-background"
          : "border border-foreground/15 bg-background hover:border-foreground/40 shadow-sm"
      }`}
    >
      <div className="p-12 sm:p-16 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-10">
          <div className={`size-9 rounded-md flex items-center justify-center ${isDark ? "bg-background/10 text-background" : "bg-accent/10 text-accent"}`}>
            {icon}
          </div>
          <div>
            <div className={`text-base font-semibold tracking-tight leading-tight ${isDark ? "text-background" : "text-foreground"}`}>{eyebrow}</div>
            <div className={`text-[10px] uppercase tracking-[0.18em] mt-1 ${isDark ? "text-background/60" : "text-muted-foreground"}`}>{tag}</div>
          </div>
        </div>

        <h3 className={`text-2xl sm:text-3xl font-semibold tracking-[-0.025em] leading-[1.1] mb-5 text-balance ${isDark ? "text-background" : "text-foreground"}`}>
          {title}
        </h3>
        <p className={`text-sm sm:text-base leading-relaxed mb-10 ${isDark ? "text-background/70" : "text-muted-foreground"}`}>{body}</p>

        <div className={`grid grid-cols-3 gap-6 mb-10 pt-8 border-t ${isDark ? "border-background/15" : "border-border"}`}>
          {stats.map((s, i) => (
            <div key={i} className="min-w-0">
              <div className={`text-xl sm:text-2xl font-semibold tracking-[-0.02em] leading-tight break-words ${isDark ? "text-background" : "text-foreground"}`}>{s.v}</div>
              <div className={`text-[10px] uppercase tracking-[0.16em] mt-1 leading-tight ${isDark ? "text-background/55" : "text-muted-foreground"}`}>{s.l}</div>
            </div>
          ))}
        </div>

        <Link
          to={to}
          className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors self-start mt-auto ${
            isDark
              ? "bg-background text-foreground hover:bg-background/90"
              : "bg-foreground text-background hover:bg-foreground/90"
          }`}
        >
          See {eyebrow} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
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
  const [lead, ...rest] = quotes;
  return (
    <section className="py-32 sm:py-40 md:py-44 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_0%,hsl(168_72%_32%/0.12),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-24">
          <div className="text-[11px] uppercase tracking-[0.18em] text-background/60 mb-6">
            What clients say
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.045em] leading-[0.98] text-balance text-background">
            Quietly running{" "}
            <span className="font-serif italic font-normal text-accent">in the background.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2 rounded-lg border border-background/15 bg-background/[0.04] p-8 sm:p-12 flex flex-col"
          >
            <Quote className="size-7 text-accent mb-5" />
            <blockquote className="text-xl sm:text-2xl lg:text-[26px] leading-[1.3] text-background tracking-[-0.015em] font-medium flex-1">
              {lead.q}
            </blockquote>
            <figcaption className="mt-8 pt-5 border-t border-background/15">
              <div className="text-sm font-semibold text-background">{lead.name}</div>
              <div className="text-xs text-background/60 mt-0.5">{lead.role}</div>
            </figcaption>
          </motion.figure>
          {rest.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
              className="rounded-lg border border-background/15 bg-background/[0.04] p-6 sm:p-7 flex flex-col"
            >
              <blockquote className="text-[15px] leading-relaxed text-background/90 flex-1">
                {q.q}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-background/15">
                <div className="text-sm font-medium text-background">{q.name}</div>
                <div className="text-xs text-background/60 mt-1">{q.role}</div>
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
      body: "We sit down with you and map every repetitive workflow costing your team the most time and money. You always leave with a clear, actionable plan.",
    },
    {
      num: "02",
      title: "Build",
      body: "We design and build the automated workflow around your exact process, fully integrated with the tools you already use. CRM, email, accounting, calendar, all wired in.",
    },
    {
      num: "03",
      title: "Launch",
      body: "We deploy the system, train your team in under an hour, and switch it on for you. Every client is fully live in under a week.",
    },
    {
      num: "04",
      title: "Manage",
      body: "We monitor, maintain and actively improve the system every single month at one flat monthly fee. You will never lift a finger to keep it running.",
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 md:py-32 bg-secondary/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-24 max-w-3xl mx-auto text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.045em] leading-[1.0] text-balance text-foreground">
            From first call to live system{" "}
            <span className="font-serif italic font-normal text-muted-foreground">in under a week.</span>
          </h2>
        </div>

        <div className="border-t border-border">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-6 sm:gap-8 py-12 sm:py-14 border-b border-border items-baseline"
            >
              <div className="col-span-2 sm:col-span-1 text-[11px] font-mono text-foreground/40">
                {s.num}
              </div>
              <div className="col-span-10 sm:col-span-3">
                <h4 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-foreground">
                  {s.title}
                </h4>
              </div>
              <div className="col-span-12 sm:col-span-8 sm:pl-8 md:pl-12">
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative bg-foreground text-background py-36 sm:py-44 md:py-48 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_50%,hsl(168_72%_32%/0.10),transparent_65%)]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] uppercase tracking-[0.22em] text-background/55 mb-8"
        >
          Ready when you are
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.045em] leading-[1.0] text-balance text-background mb-12"
        >
          Stop paying for the hours{" "}
          <span className="font-serif italic font-normal text-background/55">you keep losing.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <BookCallDialog>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-8 py-4 text-sm font-medium text-foreground hover:bg-background/90 transition-colors"
            >
              Book a free audit <ArrowRight className="size-4" />
            </button>
          </BookCallDialog>
        </motion.div>
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
    <section id="faq" className="py-24 sm:py-32 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-balance">
            The straight{" "}
            <span className="font-serif italic font-normal text-muted-foreground">answers.</span>
          </h2>
        </div>
        <div>
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
    <div className="border-b border-border/40 group/item">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-9 text-left transition-opacity hover:opacity-70"
      >
        <span className={`font-medium text-base md:text-lg tracking-tight transition-colors ${open ? "text-foreground" : "text-foreground/85"}`}>
          {q}
        </span>
        <Plus
          className={`size-4 shrink-0 transition-all duration-300 ${open ? "rotate-45 text-foreground" : "text-muted-foreground"}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed pb-8 max-w-2xl">{a}</p>
      </motion.div>
    </div>
  );
}
