import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Clock,
  FileText,
  HeartPulse,
  Plus,
  Star,
  UserSearch,
} from "lucide-react";
import { Nav, Footer } from "@/components/SiteChrome";
import { BookCallDialog } from "@/components/BookCallDialog";




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "BrightFlow AI — Fully Automate Repetitive Manual Admin",
      },
      {
        name: "description",
        content:
          "We eliminate the mundane, repetitive manual tasks eating your team's time so you can focus on strategic initiatives that actually grow your business.",
      },
      { property: "og:title", content: "BrightFlow AI — Fully Automate Repetitive Manual Admin" },
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
            Get your week back.{" "}
            <span className="font-serif italic font-normal text-accent">We'll run the rest.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 sm:mb-10 text-pretty leading-relaxed"
          >
            We don't sell workflows — we sell the outcome. Your time back, more capacity for growth, and a business that runs without you in the loop.
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
        Outcomes delivered to operators across
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
    title: "Your week back — every week.",
    body: "Walk into Monday with the repetitive admin already handled. No backlog, no chasing, no friction — just the hours and headspace to do the work only you can do.",
  };
  const supporting = [
    {
      index: "02",
      icon: <ArrowUpRight className="size-5" />,
      label: "The outcome",
      title: "More revenue, same team.",
      body: "Capacity shifts from busywork to the activities that actually grow the business — closing deals, serving clients, building product.",
    },
    {
      index: "03",
      icon: <Check className="size-5" />,
      label: "The outcome",
      title: "A business that scales without you.",
      body: "The routine running of your operation keeps moving whether you're in the office, on holiday, or hiring — without bottlenecks or extra headcount.",
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
          {/* Lead card — spans full row */}
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
                {lead.index} — {lead.label}
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
                  {p.index} — {p.label}
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


/* ---------------- BENTO ---------------- */
function Bento() {
  return (
    <section id="services" className="py-20 sm:py-28 md:py-32 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 sm:mb-5">
            What we build
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
            Real workflows. Real automation.{" "}
            <span className="font-serif italic font-normal text-muted-foreground">No fluff.</span>
          </h2>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed">
          A few examples of what we've automated. Each one removes a repetitive manual task that used
          to eat hours of staff time every week — so your team can focus on strategic work.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-px bg-border/70 border border-border/70 rounded-2xl overflow-hidden">
        <BentoCard
          className="col-span-12 lg:col-span-8"
          tag="For bookkeepers"
          icon={<FileText className="size-4" />}
          title="Automatic document chasing"
          body="The system watches for missing receipts and unexplained transactions, then automatically emails and texts clients until everything is provided, without your team lifting a finger."
          large
        />

        <BentoCard
          className="col-span-12 lg:col-span-4"
          tag="For property managers"
          icon={<Building2 className="size-4" />}
          title="Maintenance intake on autopilot"
          body="Tenants report issues through a smart intake flow that collects details, photos and urgency, then routes to the right contractor automatically."
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
          body="AI screens inbound candidates against your criteria, collects availability, and books interviews into your calendar, 24/7."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="For local businesses"
          icon={<Star className="size-4" />}
          title="Review requests & reputation"
          body="Automatically asks happy customers for reviews at the right moment, and alerts you the second a damaging review appears."
        />

        <BentoCard
          className="col-span-12 md:col-span-6 lg:col-span-4"
          tag="For clinics & service businesses"
          icon={<HeartPulse className="size-4" />}
          title="Client comms & follow-ups"
          body="Handles appointment reminders, intake forms, and follow-up messages so your front desk can focus on people, not admin."
        />

        <div className="col-span-12 bg-foreground p-7 sm:p-9 md:p-10 text-background flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] mb-3 opacity-60">
              Don't see your workflow?
            </div>
            <h4 className="font-semibold tracking-tight text-xl sm:text-2xl md:text-3xl text-balance">
              If it's repetitive, we can probably automate it.
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
      className={`group relative bg-background p-7 sm:p-9 md:p-10 hover:bg-secondary/50 transition-colors flex flex-col justify-between overflow-hidden ${className}`}
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
      body: "We sit down with you and map the repetitive workflows costing the most time and money. You get a clear plan even if you don't move forward.",
    },
    {
      num: "02",
      title: "Build",
      body: "Our team designs and builds the automated workflow around your specific process. We integrate with your existing tools, CRM, email, accounting, calendar, etc.",
    },
    {
      num: "03",
      title: "Launch",
      body: "We deploy the system, train your team in under an hour, and switch it on. Most clients are live in under a week.",
    },
    {
      num: "04",
      title: "Manage",
      body: "We monitor performance, fix edge cases, and improve the system every month, for a flat fee. You never have to maintain it.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 md:py-32 border-y border-border/60 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 sm:mb-5">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
            From first call to running system{" "}
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
              className="bg-background p-6 sm:p-7 md:p-8 min-h-[200px] sm:min-h-[240px] grid grid-rows-[auto_auto_1fr] gap-y-6 group hover:bg-secondary/50 transition-colors"
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
    { value: "14,200+", label: "Hours saved for our clients each year" },
    { value: "100%", label: "Automation accuracy across all systems" },
    { value: "1-7 days", label: "Average time from kickoff to live system" },
    { value: "100%", label: "Managed, we run it so you don't have to" },
  ];
  return (
    <section className="py-20 sm:py-24">
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
      a: "An in-house hire costs you six figures, takes months to ramp, and still gets sick. Other agencies sell you 'AI strategy' decks. We ship a working system inside a week and run it for you — flat fee, no excuses.",
    },
    {
      q: "How do I know it'll actually work in my business?",
      a: "Because we don't guess. We audit your workflow first, scope exactly what we're automating, and only quote once we know it'll work. If we can't deliver the outcome, we tell you upfront — not three months in.",
    },
    {
      q: "What if my processes are too messy or custom to automate?",
      a: "Good. That's our entire job. If your workflow was clean and templated, you wouldn't need us — you'd buy a SaaS tool. Messy, bespoke, glued-together processes are exactly what we're built to fix.",
    },
    {
      q: "How fast will I see results?",
      a: "Most systems are live within 7 days of kickoff. You'll see the time savings the week it switches on — not a quarter from now, not after a 'transformation roadmap'.",
    },
    {
      q: "What happens if it breaks?",
      a: "It won't, because we monitor every workflow 24/7 and most issues self-recover before you'd ever notice. If something real goes wrong, our team handles it — that's the entire point of the managed monthly fee.",
    },
    {
      q: "Do I have to learn anything technical?",
      a: "No. You hired us so you wouldn't have to. We build it, we run it, we improve it. Your job is to keep doing the work only you can do — we'll handle everything else.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4 sm:mb-5">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1.05] text-balance">
            Common{" "}
            <span className="font-serif italic font-normal text-muted-foreground">questions.</span>
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

