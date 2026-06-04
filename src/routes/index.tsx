import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calendar,
  Check,
  Clock,
  Coffee,
  FileText,
  HeartPulse,
  Inbox,
  Mail,
  Plus,
  Sparkles,
  Star,
  UserSearch,
  Zap,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";
import { BookCallDialog } from "@/components/BookCallDialog";




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
        <Marquee />
        <ValueProp />
        <Storyboard />
        <Bento />
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
      className="relative pt-16 sm:pt-24 md:pt-28 pb-16 sm:pb-24 md:pb-28 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.10),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">


          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] lg:leading-[1.02] font-semibold tracking-[-0.035em] mb-5 sm:mb-7 max-w-4xl text-balance"
          >
            Automate the repetitive work{" "}
            <span className="font-serif italic font-normal text-accent">killing your week.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 text-pretty leading-relaxed"
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
        </div>
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
            className="md:col-span-2 bg-background p-8 sm:p-10 md:p-14 hover:bg-secondary/60 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6 sm:mb-7">
              <div className="size-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                {lead.icon}
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {lead.index}. {lead.label}
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] mb-4 sm:mb-5 max-w-2xl">
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
              <p className="text-[15px] text-muted-foreground leading-relaxed">{p.body}</p>
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
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
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


/* ---------------- BENTO ---------------- */
function Bento() {
  return (
    <section id="services" className="py-24 sm:py-32 md:py-40 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5 sm:mb-6">
            What we build
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            Live systems.{" "}
            <span className="font-serif italic font-normal text-muted-foreground">Built in days, not quarters.</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
          A sample of what we've already deployed. Each one hands 10+ hours a week back to the business. Capacity redirected to the work that actually drives growth.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
        <BentoCard
          className="col-span-12 lg:col-span-8"
          tag="For bookkeepers"
          icon={<FileText className="size-4" />}
          title="Automatic document chasing"
          body="The system spots missing receipts and unexplained transactions, then emails and texts clients until everything is provided. Your team never touches it."
          large
        />

        <BentoCard
          className="col-span-12 lg:col-span-4"
          tag="For property managers"
          icon={<Building2 className="size-4" />}
          title="Maintenance intake on autopilot"
          body="Tenants report issues through a smart intake flow that captures details, photos and urgency, then routes the job to the right contractor automatically."
          stats={[
            { value: "85%", label: "Faster response time" },
            { value: "0", label: "Manual triage needed" },
          ]}
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="For recruiters"
          icon={<UserSearch className="size-4" />}
          title="Candidate screening & scheduling"
          body="Inbound candidates are screened against your exact criteria, availability is collected, and interviews land in your calendar. 24/7, no recruiter required."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="For local businesses"
          icon={<Star className="size-4" />}
          title="Review requests & reputation"
          body="Happy customers are asked for reviews at the exact right moment. Damaging reviews trigger an instant alert. Before they cost you another booking."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="For clinics & service businesses"
          icon={<HeartPulse className="size-4" />}
          title="Client comms & follow-ups"
          body="Appointment reminders, intake forms and follow-up messages handled end to end. Your front desk gets its day back to focus on people, not admin."
        />

        <div className="col-span-12 bg-foreground p-8 sm:p-10 md:p-12 text-background flex flex-col md:flex-row md:items-center justify-between gap-6">
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
      className={`group relative bg-background p-8 sm:p-10 md:p-12 hover:bg-secondary/50 transition-colors flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div className="absolute top-5 right-6 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
        {tag}
      </div>
      <div className="relative z-10 max-w-md pt-6">
        <div className="size-9 border border-border rounded-md flex items-center justify-center mb-5 sm:mb-6 text-accent group-hover:border-accent/60 transition-colors">
          {icon}
        </div>
        <h3
          className={`${large ? "text-2xl sm:text-3xl md:text-4xl" : "text-lg sm:text-xl"} font-semibold tracking-tight mb-3 sm:mb-4 text-balance`}
        >
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>

      {stats && (
        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
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
    <section className="py-24 sm:py-28 md:py-32">
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

