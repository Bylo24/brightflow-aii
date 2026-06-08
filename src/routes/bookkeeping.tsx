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
  Plus,
  Receipt,
  Sparkles,
  Zap,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";
import { BookCallDialog } from "@/components/BookCallDialog";

export const Route = createFileRoute("/bookkeeping")({
  head: () => ({
    meta: [
      {
        title: "BrightFlow AI for Bookkeepers - Close the Books Without Chasing Clients",
      },
      {
        name: "description",
        content:
          "We help bookkeepers stop chasing missing documents and client follow-ups. Finish the books faster, every month, without losing hours to admin.",
      },
      {
        property: "og:title",
        content: "BrightFlow AI for Bookkeepers - Close the Books Without Chasing Clients",
      },
      {
        property: "og:description",
        content:
          "Stop chasing clients for missing documents. We run the follow-ups for you, so the books close on time, every month.",
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
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            Built for bookkeepers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] lg:leading-[1.02] font-semibold tracking-[-0.035em] mb-5 sm:mb-7 max-w-4xl text-balance"
          >
            Close the books without{" "}
            <span className="font-serif italic font-normal text-accent">chasing a single client.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 text-pretty leading-relaxed"
          >
            We take over the client follow-ups draining your month end. Missing receipts, unanswered questions, overdue documents. All handled for you, end to end, so the books close on time.
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
              See what we run
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
    "SOLO BOOKKEEPERS",
    "BOOKKEEPING FIRMS",
    "OUTSOURCED ACCOUNTING",
    "CAS PRACTICES",
    "TAX & COMPLIANCE TEAMS",
    "VIRTUAL CFOs",
    "MULTI-ENTITY CLIENTS",
    "MONTHLY CLOSE TEAMS",
  ];
  return (
    <div className="py-10 sm:py-12 border-y border-border/60 overflow-hidden">
      <div className="text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-6 sm:mb-8 px-4">
        Trusted by bookkeepers done chasing clients to close the books
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
    title: "Month end without the chase.",
    body: "Walk into close week with every receipt, statement and answer already in hand. No reminder emails, no follow-up texts, no waiting on clients. Just the books, ready to finish.",
  };
  const supporting = [
    {
      index: "02",
      icon: <ArrowUpRight className="size-5" />,
      label: "The outcome",
      title: "More clients, same headcount.",
      body: "The hours you used to spend chasing turn into capacity for advisory work, new engagements, and the clients that actually grow your firm.",
    },
    {
      index: "03",
      icon: <Check className="size-5" />,
      label: "The outcome",
      title: "A close that runs on schedule.",
      body: "Books finish on the same day every month. Clients are kept on track without you in the loop. Deadlines stop slipping because someone didn't reply.",
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
            We don't sell tools.{" "}
            <span className="font-serif italic font-normal text-accent">We sell the close.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            What you're really buying is your month end back. The follow-ups handled, the documents in, and a close that finishes on time without you spending the last week of the month chasing clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
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
      title: "Close week, on repeat.",
      caption: "Hours every month spent chasing clients for receipts, statements and answers before the books can close.",
      Visual: BeforePanel,
    },
    {
      tag: "The shift",
      index: "02",
      title: "We take the chasing off you.",
      caption: "We own client follow-ups end to end. Your team stops sending the reminders from day one.",
      Visual: ShiftPanel,
    },
    {
      tag: "After",
      index: "03",
      title: "Books close on time. Every month.",
      caption: "Documents come in without you asking. The close finishes on schedule, and your week ends with the books done.",
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
            From chasing clients to{" "}
            <span className="font-serif italic font-normal text-accent">books closed, on schedule.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Three frames. The exact outcome we deliver to every bookkeeper we work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
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

function BeforePanel() {
  const tasks = [
    { icon: <Receipt className="size-3.5" />, label: "Missing receipt" },
    { icon: <FileText className="size-3.5" />, label: "Bank statement needed" },
    { icon: <AlertCircle className="size-3.5" />, label: "Unexplained transaction" },
    { icon: <Calendar className="size-3.5" />, label: "Close deadline slipping" },
    { icon: <Mail className="size-3.5" />, label: "Client hasn't replied" },
  ];
  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Inbox className="size-3" /> Close queue
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-foreground font-medium tracking-normal normal-case"
        >
          + {tasks.length} open
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

function ShiftPanel() {
  return (
    <div className="absolute inset-0 p-4">
      <div className="absolute inset-0 flex items-center justify-between px-6">
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
        Chasing · Collecting · Filing
      </div>
    </div>
  );
}

function AfterPanel() {
  const done = ["Receipts collected", "Statements in", "Queries answered", "Books reconciled"];
  return (
    <div className="absolute inset-0 p-4 flex flex-col">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
        <span className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-accent" /> Close ready
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-foreground font-medium tracking-normal normal-case flex items-center gap-1"
        >
          <Coffee className="size-3" /> On schedule
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
        <span className="font-semibold text-foreground tracking-tight">+ 12h / month end</span>
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
            What we run for you
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
            The work behind the close.{" "}
            <span className="font-serif italic font-normal text-muted-foreground">Done for you.</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
          Every piece of client communication that stands between you and a finished set of books. Owned and operated by us.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
        <BentoCard
          className="col-span-12 lg:col-span-8"
          tag="Document collection"
          icon={<Receipt className="size-4" />}
          title="Every missing receipt, collected without you asking"
          body="We follow up with your clients for the receipts, statements and supporting documents your books need. Persistently, professionally, and without you sending a single email."
          large
        />

        <BentoCard
          className="col-span-12 lg:col-span-4"
          tag="Client queries"
          icon={<Mail className="size-4" />}
          title="Unexplained transactions, resolved"
          body="When something doesn't reconcile, we go back to the client, get the answer, and bring it back to you ready to post."
          stats={[
            { value: "0", label: "Reminders you send" },
            { value: "Faster", label: "Time to a clean ledger" },
          ]}
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="Month end"
          icon={<Calendar className="size-4" />}
          title="Close-ready, on the same day every month"
          body="Your close calendar runs to a fixed cadence. Clients are kept on track, documents land before deadlines, and the books are ready when you sit down to finish them."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="Onboarding"
          icon={<FileText className="size-4" />}
          title="New clients ready to book on day one"
          body="We collect the access, statements and historical records needed to take on a new client. So you start the engagement with the books, not the chasing."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="Year end & tax"
          icon={<AlertCircle className="size-4" />}
          title="Year end without the fire drill"
          body="We pull every document, signature and confirmation your clients owe before deadlines hit. No last-minute scramble, no extensions to apologise for."
        />

        <div className="col-span-12 bg-foreground p-8 sm:p-10 md:p-12 text-background flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] mb-3 opacity-60">
              Have a different bottleneck?
            </div>
            <h4 className="font-semibold tracking-tight text-xl sm:text-2xl md:text-3xl text-balance">
              If it's standing between you and the close, we'll take it off you.
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
        <div className="size-10 border border-border rounded-md flex items-center justify-center mb-5 sm:mb-6 text-accent group-hover:border-accent/60 transition-colors">
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
      body: "We sit down with you and map exactly where client follow-ups are costing you the most time at month end. You leave with a clear plan, whether or not you work with us.",
    },
    {
      num: "02",
      title: "Build",
      body: "We design the follow-up system around your close process, your clients and the tools you already use. Your ledger, document portal, email and calendar.",
    },
    {
      num: "03",
      title: "Launch",
      body: "We deploy the system, brief your clients, and take ownership of the chasing. Every engagement is live in under a week.",
    },
    {
      num: "04",
      title: "Manage",
      body: "We run, monitor and refine the follow-ups every month at a flat fee. You never send another reminder email.",
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
            From first call to a closing month{" "}
            <span className="font-serif italic font-normal text-muted-foreground">we already run.</span>
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
    { value: "12h+", label: "Saved every month end, per bookkeeper" },
    { value: "On time", label: "Closes finished to schedule, every month" },
    { value: "1-7 days", label: "From kickoff to live, in production" },
    { value: "100%", label: "Run by us. You never chase a client again" },
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
      q: "Why should I trust you over hiring another junior bookkeeper?",
      a: "A junior costs you a salary, takes months to ramp, and still needs managing. We take the chasing off your plate inside a week, run it for you, and never call in sick. Flat fee, no excuses.",
    },
    {
      q: "How do I know my clients won't be annoyed by the follow-ups?",
      a: "Because we write and run them like you would, only more consistently. Polite, on-brand, and timed properly. Clients almost always send things in sooner when the cadence is steady and the asks are clear.",
    },
    {
      q: "What if my client base is messy and every engagement is different?",
      a: "Good. That's the job. If every client closed the same way, you wouldn't need us. We build around your engagements, not a template, which is exactly why generic portals haven't fixed this for you.",
    },
    {
      q: "How fast will I feel the difference?",
      a: "By the next month end. We launch inside a week, and the close that follows is the first one you don't spend chasing. Not next quarter, not after a six-month rollout.",
    },
    {
      q: "What if a client goes silent or something breaks?",
      a: "It doesn't reach you. We monitor every engagement, escalate the right way, and handle anything off the rails before it lands on your desk. That's the entire point of the managed monthly fee.",
    },
    {
      q: "Do I have to learn anything technical?",
      a: "No. You hired us so you wouldn't have to. We build it, we run it, we refine it every month. You stay focused on the books and the clients. We handle everything around them.",
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
