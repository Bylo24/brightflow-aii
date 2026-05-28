import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  ChevronDown,
  FileText,
  HeartPulse,
  Plus,
  Star,
  UserSearch,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrightFlow AI — Automate the repetitive work that slows you down" },
      {
        name: "description",
        content:
          "BrightFlow AI builds and manages niche-specific automation systems for bookkeepers, property managers, recruiters, clinics, and local businesses. Less manual admin. Cleaner operations.",
      },
      { property: "og:title", content: "BrightFlow AI — Operational Automation Systems" },
      {
        property: "og:description",
        content:
          "Niche-specific AI workflow systems that remove repetitive admin work and stop the manual bleed.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/30">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Bento />
        <Process />
        <Metrics />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="size-4 bg-accent rounded-[2px] shadow-[0_0_12px_hsl(184_100%_50%/0.5)]" />
            <span className="font-black tracking-tighter text-lg uppercase italic">
              BrightFlow
            </span>
          </a>
          <div className="hidden lg:flex gap-1.5 items-center px-3 py-1 bg-white/5 border border-border rounded text-[10px] font-mono text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse-dot" />
            SYSTEM_STATUS: OPTIMAL
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <a href="#systems" className="hover:text-accent transition-colors">
              Systems
            </a>
            <a href="#process" className="hover:text-accent transition-colors">
              Process
            </a>
            <a href="#faq" className="hover:text-accent transition-colors">
              FAQ
            </a>
          </div>
          <a
            href="#cta"
            className="px-4 py-1.5 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-tighter rounded-sm hover:brightness-110 transition-all shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]"
          >
            Initialize Audit
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-20 pb-32 overflow-hidden border-b border-border"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(184_100%_50%/0.10),transparent_55%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-accent/40 via-border/20 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-4"
          >
            <span className="h-px w-8 bg-accent/30" />
            Operational Engineering v4.0
            <span className="h-px w-8 bg-accent/30" />
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-[120px] leading-[0.85] font-black tracking-tighter uppercase mb-12 animate-reveal">
            Logic over <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent/30">
              Manual Labor
            </span>
          </h1>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 w-full max-w-5xl mt-8 text-left border-t border-border pt-12">
            {[
              {
                num: "01 / Purpose",
                body: "We replace fragile human processes with hardened digital logic. No more document chasing, manual triage, or follow-up drift.",
              },
              {
                num: "02 / Strategy",
                body: "Bespoke automation stacks engineered for bookkeepers, property managers, recruiters, clinics, and local operators.",
              },
              {
                num: "03 / Execution",
                cta: true,
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="space-y-4"
              >
                <div className="font-mono text-[10px] text-muted-foreground uppercase">{b.num}</div>
                {b.cta ? (
                  <a
                    href="#cta"
                    className="group flex items-center gap-3 font-bold text-accent text-sm uppercase tracking-tighter"
                  >
                    Book a Discovery Call
                    <span className="size-6 border border-accent/30 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      <ArrowRight className="size-3" />
                    </span>
                  </a>
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {b.body}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "PROPERTY MANAGEMENT",
    "MEDICAL CLINICS",
    "ACCOUNTING FIRMS",
    "RECRUITMENT AGENCIES",
    "E-COMMERCE OPERATIONS",
    "LEGAL SERVICES",
    "DENTAL PRACTICES",
    "REAL ESTATE TEAMS",
  ];
  return (
    <div className="py-10 border-b border-border bg-white/[0.01] overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="text-muted-foreground/70 font-mono uppercase tracking-[0.25em] text-[11px] flex items-center gap-12"
          >
            {it}
            <span className="size-1 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- BENTO ---------------- */
function Bento() {
  return (
    <section id="systems" className="py-24 max-w-[1440px] mx-auto px-6">
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-xl">
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-4">
            // Operator Modules
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Niche pain, <span className="text-accent">solved.</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-sm">
          We don't ship generic chatbots. Each system is a closed-loop logic engine wired to a
          specific industry's most expensive repetitive task.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-px bg-border">
        {/* Large feature */}
        <BentoCard
          className="col-span-12 lg:col-span-8 h-[460px]"
          tag="[UNIT_01 / BOOKKEEPERS]"
          icon={<FileText className="size-4" />}
          title="Document Chase Engine"
          body="Automatically identifies missing receipts, transactions, and explanations. Triggers multi-channel client nudges across SMS and email until the ledger is clean."
          large
        />

        {/* Vertical */}
        <BentoCard
          className="col-span-12 lg:col-span-4"
          tag="[UNIT_02 / PROPERTY MGMT]"
          icon={<Building2 className="size-4" />}
          title="Maintenance Orchestrator"
          body="Instant tenant triage. Assesses urgency, gathers photo evidence, and dispatches contractors without a single manual email."
          stats={[
            { value: "85%", label: "Response time reduction" },
            { value: "0.0", label: "Manual intervention" },
          ]}
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="[UNIT_03 / RECRUITERS]"
          icon={<UserSearch className="size-4" />}
          title="Candidate Screener"
          body="Filters applicants against complex fit criteria, collects availability, and books interviews while you sleep."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="[UNIT_04 / LOCAL BUSINESS]"
          icon={<Star className="size-4" />}
          title="Reputation Flow"
          body="Identifies your happiest customers in real time, secures 5-star reviews, and flags damaging content before it spreads."
        />

        {/* Clinics + CTA combo */}
        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="[UNIT_05 / CLINICS]"
          icon={<HeartPulse className="size-4" />}
          title="Patient Comms Engine"
          body="Organizes admin requests, automates reminders, and orchestrates follow-ups across every channel."
        />

        <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-accent p-8 text-accent-foreground flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest mb-3 opacity-70">
              [READY FOR DEPLOYMENT]
            </div>
            <h4 className="font-black uppercase tracking-tighter text-2xl md:text-3xl">
              Niches optimized: 14 — Capacity: 2 spots remaining.
            </h4>
          </div>
          <a
            href="#cta"
            className="shrink-0 px-6 py-3 bg-background text-foreground font-black uppercase text-[11px] tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-2"
          >
            Begin Initialization <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  className = "",
  tag,
  icon,
  title,
  body,
  large,
  stats,
}: {
  className?: string;
  tag: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  large?: boolean;
  stats?: { value: string; label: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`group relative bg-background p-8 hover:bg-white/[0.02] transition-colors flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-accent/40">{tag}</div>
      <div className="relative z-10 max-w-md">
        <div className="size-9 border border-border rounded flex items-center justify-center mb-6 text-accent group-hover:border-accent/60 transition-colors">
          {icon}
        </div>
        <h3
          className={`${large ? "text-3xl md:text-4xl" : "text-xl"} font-black uppercase tracking-tighter mb-4`}
        >
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
      </div>

      {large && (
        <div className="relative flex-1 mt-8 rounded-sm overflow-hidden border border-border">
          <FlowDiagram />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="w-full h-1/4 bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0 animate-scan-line" />
          </div>
        </div>
      )}

      {stats && (
        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold font-mono">{s.value}</div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function FlowDiagram() {
  // Schematic SVG with flowing dots — pure CSS/SVG, no images needed.
  return (
    <div className="relative w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(240_8%_8%),hsl(240_10%_3%))] grid-bg">
      <svg viewBox="0 0 600 240" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(184 100% 50% / 0)" />
            <stop offset="50%" stopColor="hsl(184 100% 50%)" />
            <stop offset="100%" stopColor="hsl(184 100% 50% / 0)" />
          </linearGradient>
        </defs>
        {[60, 120, 180].map((y, i) => (
          <g key={i}>
            <path
              d={`M0 ${y} C150 ${y}, 200 ${y + (i % 2 ? -40 : 40)}, 350 ${y + (i % 2 ? -40 : 40)} S 500 ${y}, 600 ${y}`}
              fill="none"
              stroke="hsl(240 6% 18%)"
              strokeWidth="1"
            />
            <path
              d={`M0 ${y} C150 ${y}, 200 ${y + (i % 2 ? -40 : 40)}, 350 ${y + (i % 2 ? -40 : 40)} S 500 ${y}, 600 ${y}`}
              fill="none"
              stroke="url(#line)"
              strokeWidth="1.5"
              strokeDasharray="6 200"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-200"
                dur={`${3 + i}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
        {[
          [80, 60],
          [240, 100],
          [360, 140],
          [500, 60],
          [180, 180],
          [440, 180],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x - 6}
              y={y - 6}
              width="12"
              height="12"
              fill="hsl(240 10% 2.5%)"
              stroke="hsl(184 100% 50%)"
              strokeWidth="1"
            />
            <circle cx={x} cy={y} r="1.5" fill="hsl(184 100% 50%)" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest">
        live_pipeline.process · 200ms cycle
      </div>
      <div className="absolute top-3 right-3 font-mono text-[9px] text-accent uppercase tracking-widest flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" /> running
      </div>
    </div>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    {
      num: "01",
      title: "Audit the Friction",
      body: "We map every repeating manual workflow inside your operation and isolate the single highest-cost loop.",
    },
    {
      num: "02",
      title: "Architect the Logic",
      body: "Our engineers design a closed-loop system: every decision node, data point, and fallback path documented.",
    },
    {
      num: "03",
      title: "Automate the Repetition",
      body: "We deploy the AI system into your stack. Your team approves edge cases; the engine handles the rest.",
    },
    {
      num: "04",
      title: "Managed Scaling",
      body: "We run, monitor, and optimize the system monthly — tuning prompts, models, and routing as you grow.",
    },
  ];

  return (
    <section id="process" className="py-24 border-y border-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-4">
            // The Flow Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Four phases. <br />
            One operational outcome.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 min-h-[260px] flex flex-col justify-between group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
                  PHASE / {s.num}
                </span>
                <div className="size-2 bg-accent group-hover:scale-150 transition-transform" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-3">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
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
    { label: "System_Efficiency", value: "14,200h", sub: "RECOVERED_ANNUALLY" },
    { label: "Data_Integrity", value: "99.98%", sub: "ERROR_FREE_EXECUTION" },
    { label: "Margin_Impact", value: "+42%", sub: "NET_PROFIT_LIFT" },
    { label: "Active_Nodes", value: "1,240", sub: "GLOBAL_AUTOMATIONS" },
  ];
  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col"
          >
            <span className="text-[10px] font-mono text-muted-foreground uppercase mb-2">
              {m.label}
            </span>
            <span className="text-3xl md:text-5xl font-black tracking-tighter">{m.value}</span>
            <span className="text-[10px] font-mono text-accent mt-2">{m.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIAL ---------------- */
function Testimonial() {
  return (
    <section className="py-32 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,hsl(184_100%_50%/0.06),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-8">
          // Operator Testimony
        </div>
        <blockquote className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-[1.1] text-balance">
          "We were drowning in client document chasing. BrightFlow built a system that runs without
          us. <span className="text-accent">It paid for itself in 11 days.</span>"
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4 text-left">
          <div className="size-10 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-border" />
          <div>
            <div className="text-sm font-bold">Marcus Holloway</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Managing Partner · Holloway Bookkeeping
            </div>
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
      q: "How is this different from a generic AI agency?",
      a: "We don't sell 'AI strategy.' We pick one painful repeated workflow inside your niche and ship a managed system that runs it forever. Specific in, specific out.",
    },
    {
      q: "What does the engagement look like?",
      a: "A short audit, a fixed build period (typically 2–4 weeks), then a flat monthly fee that covers hosting, monitoring, and continuous optimization.",
    },
    {
      q: "Will this integrate with my existing tools?",
      a: "Yes. We wire into your CRM, accounting platform, comms stack, scheduling, and any internal databases. No rip-and-replace.",
    },
    {
      q: "What happens if the system breaks?",
      a: "We monitor every node 24/7 with alerting on failure modes. Most issues are auto-recovered. Real incidents are handled by our on-call engineers.",
    },
    {
      q: "Do you work with my industry?",
      a: "We focus on bookkeepers, property managers, recruiters, clinics, and local service businesses — but if your operation has a repeating workflow, we'll evaluate it.",
    },
  ];

  return (
    <section id="faq" className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-4">
            // Frequently Queried
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Common <br />
            <span className="text-accent">protocols.</span>
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
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-bold text-base md:text-lg tracking-tight group-hover:text-accent transition-colors">
          {q}
        </span>
        <span className="shrink-0 size-7 border border-border rounded-full flex items-center justify-center text-accent">
          {open ? <ChevronDown className="size-3.5" /> : <Plus className="size-3.5" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-sm text-muted-foreground leading-relaxed pb-6 max-w-2xl">{a}</p>
      </motion.div>
    </div>
  );
}

/* ---------------- FOOTER + CTA ---------------- */
function Footer() {
  return (
    <footer id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(184_100%_50%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_bottom,#000,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-24">
          <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-6">
            // Initialize Sequence
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
            Stop the <span className="text-accent">manual</span> bleed.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Book a 20-minute discovery call. We'll map your highest-cost repetitive workflow and
            tell you — honestly — whether it should be automated.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-black uppercase text-sm tracking-tighter rounded-sm hover:brightness-110 transition-all shadow-[0_0_40px_hsl(184_100%_50%/0.3)]"
          >
            Initialize Audit <ArrowUpRight className="size-4" />
          </a>
          <div className="mt-6 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Accepting 2 new operators · Q4 2026
          </div>
        </div>

        <div className="border-t border-border pt-12 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-3 bg-accent" />
              <span className="font-black uppercase italic tracking-tighter text-lg">
                BrightFlow AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Engineered automation systems for operators who value scale over noise. Part of the
              Bright ecosystem.
            </p>
          </div>
          <FooterCol
            title="Systems"
            links={["Bookkeepers", "Property", "Recruiters", "Clinics", "Local Biz"]}
          />
          <FooterCol title="Company" links={["Process", "Case Studies", "BrightFrame", "Contact"]} />
          <FooterCol title="Legal" links={["Terms", "Privacy", "Security", "SLAs"]} />
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 BrightFlow AI · OP_SYS_CORP · All rights reserved
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-accent uppercase tracking-widest">
            <Boxes className="size-3" /> SYSTEM_BUILD · 4.2.0
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
