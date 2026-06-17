import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Check, Plus, Shield, Mail } from "lucide-react";
import { Wordmark, Footer } from "@/components/SiteChrome";
import { AuroraBackground } from "@/components/AuroraBackground";

// formsubmit.co target - swap this email for the real inbox.
// First submission to a new address triggers a one-time confirmation email from formsubmit.
const FORMSUBMIT_EMAIL = "samuel@brightflowagency.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;

// Meta Pixel
const META_PIXEL_ID = "2085592105635483";


declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] };
    _fbq?: unknown;
  }
}

function installMetaPixel() {
  if (typeof window === "undefined") return;
  if (window.fbq) return;
  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    let n: any;
    let t: any;
    let s: any;
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  const fbq = window.fbq as unknown as (...args: unknown[]) => void;
  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}

function trackPixelFormSubmit() {
  if (typeof window === "undefined" || !window.fbq) return;
  const fbq = window.fbq as unknown as (...args: unknown[]) => void;
  fbq("track", "Lead");
}

export const Route = createFileRoute("/bookkeeping/")({
  head: () => ({
    meta: [
      { title: "Save 10 hours on your month end in 2 weeks - or you don't pay | BrightFlow AI" },
      {
        name: "description",
        content:
          "Free 2-week pilot for bookkeepers. We automate the document chase. If you don't save 10 hours, you pay nothing. No card required.",
      },
      { property: "og:title", content: "Save 10 hours on your month end in 2 weeks - or you don't pay" },
      {
        property: "og:description",
        content: "Free 2-week pilot. We automate the chase. If you don't save 10 hours, you pay nothing.",
      },
    ],
  }),
  component: BookkeepingPage,
});

function BookkeepingPage() {
  useEffect(() => {
    installMetaPixel();
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20">
      <BookkeepingNav />
      <main>
        <Hero />
        <Guarantee />
        <FAQ />
      </main>
      <Footer hideCta />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function BookkeepingNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center">
        <Wordmark />
      </div>
    </nav>
  );
}

/* ---------------- HERO + EMAIL CAPTURE ---------------- */
function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <AuroraBackground />


      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            For bookkeepers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-5xl md:text-6xl leading-[1.04] font-semibold tracking-[-0.04em] text-balance"
          >
            Save 10 hours on your month end in 2 weeks{" "}
            <span className="font-serif italic font-normal text-accent">- or you don't pay.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 rounded-full border-2 border-accent/50 bg-accent/10 px-4 py-2 shadow-[0_0_50px_-10px_hsl(168_72%_32%/0.5)]"
          >
            <Check className="size-4 text-accent shrink-0" strokeWidth={3} />
            <span className="text-sm sm:text-base font-semibold tracking-tight">
              Free for 2 weeks. No credit card. No commitment.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            We build the automation that chases your clients for you - live in under a week. If you don't save 10 hours by week 2, you pay nothing.
          </motion.p>

          <EmailCapture />

          <ul className="mt-7 grid sm:grid-cols-3 gap-4 sm:gap-6 text-left max-w-2xl w-full">
            {[
              "We build the automation around your tools - email, Drive, QBO, Xero.",
              "Live in under a week. Nothing for you to learn.",
              "You stop chasing - we handle reminders & tracking.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <Check className="size-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 text-sm text-muted-foreground italic">
            Already helping bookkeepers save 12+ hours a month.
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold">
            Free pilot - limited to the first 10 bookkeepers.
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thanksOrigin, setThanksOrigin] = useState("");

  useEffect(() => {
    setThanksOrigin(window.location.origin);
  }, []);

  function validate(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (submitting) return;
    setSubmitting(true);
    const form = e.currentTarget;
    trackPixelFormSubmit();
    // Give the pixel a moment to fire before navigating away
    window.setTimeout(() => {
      form.submit();
    }, 400);
  }

  const nextUrl = thanksOrigin
    ? `${thanksOrigin}/bookkeeping/thanks?email=${encodeURIComponent(email)}`
    : "";

  return (
    <form
      id="email-form"
      action={FORMSUBMIT_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      className="mt-8 w-full max-w-md scroll-mt-24"
    >
      {/* formsubmit config */}
      <input type="hidden" name="_subject" value="New bookkeeping pilot lead" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}
      {/* honeypot */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />


      <label htmlFor="bk-email" className="block text-left text-sm font-semibold tracking-tight mb-2 pl-1">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <Mail className="size-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="bk-email"
            type="email"
            name="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="you@yourfirm.com"
            className="w-full h-12 sm:h-14 pl-11 pr-4 rounded-full border border-border bg-background text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
            aria-label="Email address"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-lg btn-neutral rounded-full text-base whitespace-nowrap h-12 sm:h-14 disabled:opacity-60"
        >
          {submitting ? "Sending…" : (
            <>Send me the pilot info <ArrowRight className="size-4" /></>
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 text-left pl-2">{error}</p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        We'll email you the pilot details and a link to book a 10-min call. No spam - ever.
      </p>
    </form>
  );
}


/* ---------------- GUARANTEE ---------------- */
function Guarantee() {
  return (
    <section className="py-14 sm:py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(168_72%_32%/0.14),transparent_60%)]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
          <Shield className="size-3.5" /> 100% risk free
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.04] text-balance">
          Free for 2 weeks.{" "}
          <span className="font-serif italic font-normal text-accent">If you don't save 10 hours, you pay nothing.</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          No contract. No card. No catch. You only pay if you decide to keep the system - and only based on the hours we give back. Otherwise, walk away. Completely up to you.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "What happens after I submit my email?",
      a: "You'll get an email from me with the pilot details and a link to book a 10-min call if you want to start. No call required to learn more.",
    },
    {
      q: "How many hours will I actually save?",
      a: "Every bookkeeper we've worked with has gotten back significant time in the first 2 weeks. If you don't see a real difference, you pay nothing.",
    },
    {
      q: "Will my clients notice?",
      a: "Only that they hear from you faster and more consistently. Follow-ups go out in your tone, on your cadence.",
    },
    {
      q: "Do I have to learn new software?",
      a: "No. We build around your stack - email, Drive, QBO, Xero - and run it for you.",
    },
    {
      q: "What if I want to leave after the trial?",
      a: "Then you leave, and you don't pay a single cent. No contract, no lock-in. Only pay if you decide to keep the system.",
    },
  ];

  return (
    <section className="py-14 sm:py-24 border-t border-border bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-center mb-10">
          Questions?
        </h2>
        <div className="border-t border-border">
          {items.map((it, i) => (
            <FAQItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#email-form"
            className="btn btn-lg btn-neutral rounded-full text-base"
          >
            Start my free pilot <ArrowRight className="size-4" />
          </a>
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

// Link import kept available for future internal nav.
void Link;
