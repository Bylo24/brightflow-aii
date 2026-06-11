import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useCallback, useState } from "react";
import { ArrowRight, Check, Phone, MessageSquare, Zap, PhoneCall, PhoneOff } from "lucide-react";
import { Wordmark } from "@/components/SiteChrome";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { initMetaPixel, trackPixel } from "@/lib/meta-pixel";

const STRIPE_TRIAL_URL = "https://buy.stripe.com/14A00kdXt50Y93yezT33W03";



export const Route = createFileRoute("/call-net")({
  head: () => ({
    meta: [
      { title: "Call Net — AI receptionist that captures every missed call" },
      {
        name: "description",
        content:
          "Call Net answers your missed calls 24/7, captures the lead's name, number, and need, and texts you instantly. Try free for 14 days.",
      },
      { property: "og:title", content: "Call Net — Never miss a paying customer" },
      {
        property: "og:description",
        content:
          "AI receptionist that turns missed calls into leads. Instant text summaries. $97/mo. 14-day free trial.",
      },
    ],
  }),
  component: CallNetPage,
});

const AGENT_ID = "agent_7001ks6yjp6rfbh9899wpb8kvy7t";

function CallNetPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }
  return (
    <ConversationProvider>
      <CallNetPageInner />
    </ConversationProvider>
  );
}

function CallNetPageInner() {


  const [starting, setStarting] = useState(false);
  const conversation = useConversation({
    onError: (err) => console.error("Call Net demo error:", err),
  });
  const status = conversation.status;
  const isActive = status === "connected" || status === "connecting";

  const startDemo = useCallback(async () => {
    if (isActive || starting) return;
    setStarting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId: AGENT_ID, connectionType: "webrtc" });
    } catch (err) {
      console.error("Failed to start demo:", err);
      alert("Couldn't start the demo. Please allow microphone access and try again.");
    } finally {
      setStarting(false);
    }
  }, [conversation, isActive, starting]);

  const endDemo = useCallback(async () => {
    try { await conversation.endSession(); } catch (err) { console.error(err); }
  }, [conversation]);

  useEffect(() => {
    return () => { try { void conversation.endSession(); } catch { /* noop */ } };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Meta Pixel: init on mount, fire InitiateCheckout on any Stripe trial link.
  useEffect(() => {
    initMetaPixel();
  }, []);
  const handleTrialClick = useCallback(() => {
    trackPixel("InitiateCheckout", { value: 97, currency: "USD", content_name: "Call Net 14-day trial" });
  }, []);




  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Wordmark />
        <a
          href={STRIPE_TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={handleTrialClick}
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Start free trial
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-10 pb-16 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Phone className="h-3.5 w-3.5" /> AI receptionist for small business
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Capture every call. Even when you can't answer.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Call Net answers missed calls, collects lead info, and texts you the summary. You call back. You close.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-foreground">
          It doesn't replace you. It only works when you can't.
        </p>
        <a
          href={STRIPE_TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={handleTrialClick}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Start my 14-day free trial <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          Credit card required. You won't be charged until day 14. Cancel anytime in your dashboard.
        </p>
        <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Setup in 2 minutes</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Cancel anytime</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> SSL secured checkout</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Trusted by local trade businesses</span>
        </div>
      </section>

      {/* Try it for yourself */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live demo
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Try a live demo
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Talk to Call Net like a real caller would — ask about pricing, book a job, or leave a message. Hear how it sounds before you sign up.
            </p>
            {!isActive ? (
              <button
                type="button"
                onClick={startDemo}
                disabled={starting}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background shadow-lg hover:opacity-90 disabled:opacity-60"
              >
                <PhoneCall className="h-4 w-4" />
                {starting ? "Connecting…" : "Talk to Call Net now"}
              </button>
            ) : (
              <button
                type="button"
                onClick={endDemo}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-destructive px-6 py-3 text-base font-semibold text-destructive-foreground shadow-lg hover:opacity-90"
              >
                <PhoneOff className="h-4 w-4" />
                End call
              </button>
            )}
            <p className="text-xs text-muted-foreground">
              {starting || status === "connecting"
                ? "Connecting to Call Net…"
                : status === "connected"
                  ? conversation.isSpeaking ? "Call Net is speaking…" : "Listening — go ahead and talk."
                  : "You'll be asked to allow microphone access."}
            </p>

          </div>
        </div>
      </section>

      {/* The Brutal Cost of Missed Calls */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            The math nobody talks about
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The brutal cost of missed calls
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Most owners have no idea how much revenue they lose every week to unanswered calls. Let's do the math.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "62%", label: "of inbound calls to small businesses go unanswered." },
            { stat: "80%", label: "of callers who hit voicemail hang up without leaving a message." },
            { stat: "85%", label: "of people who don't reach you on the first try never call back." },
          ].map((s) => (
            <div key={s.stat} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="text-4xl font-semibold tracking-tight">{s.stat}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight">A missed call isn't a delayed sale. It's a sale handed to your competition.</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            62% of unanswered callers immediately ring a competitor. At a conservative $12.15 in lost revenue per missed call, missing just 2 calls a day costs the average small business <span className="font-semibold text-foreground">$8,800 a year</span>. In home services and trades, with average job values of $500+, the real number is often <span className="font-semibold text-foreground">over $26,000 — and frequently $100,000+</span> annually.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            And speed matters. Respond within 5 minutes and you're <span className="font-semibold text-foreground">21× more likely</span> to convert. Wait 30 and 79% of callers are gone.
          </p>
        </div>
      </section>

      {/* ROI of Call Net */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Call Net pays for itself after 8 calls.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            $97/month. Average missed call costs $12.15 in lost revenue. Catch just 8 a month and Call Net has already paid for itself — every call after that is pure upside.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3 text-left">
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="text-xs font-medium text-muted-foreground">You pay</div>
              <div className="mt-1 text-2xl font-semibold">$97<span className="text-sm text-muted-foreground">/mo</span></div>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="text-xs font-medium text-muted-foreground">Catch 100 missed calls/mo</div>
              <div className="mt-1 text-2xl font-semibold">$1,200+</div>
              <div className="text-xs text-muted-foreground">in recovered revenue</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <div className="text-xs font-medium text-muted-foreground">At $500 avg job value</div>
              <div className="mt-1 text-2xl font-semibold">$5,000+</div>
              <div className="text-xs text-muted-foreground">in closed revenue/mo</div>
            </div>
          </div>
          <a
            href={STRIPE_TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={handleTrialClick}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Start my 14-day free trial <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>











      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Phone, title: "Connect your number", body: "Forward your business line to Call Net when you can't answer — or 24/7." },
            { icon: Zap, title: "AI answers", body: "Our AI greets the caller, asks what they need, and records their name and phone number." },
            { icon: MessageSquare, title: "You get the lead", body: "Instant text with the transcript and callback info. You call back and close." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-4 text-sm font-medium text-muted-foreground">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Why Call Net</h2>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3">
          {[
            "Only works when you miss a call — you stay the main point of contact.",
            "Callers don't get voicemail — they talk to a helpful AI, leave their info, and hang up happy.",
            "You get a text summary — name, number, reason for calling. You call them back.",
            "No setup headaches — forward your existing number in 2 minutes.",
            "Try free for 14 days — cancel anytime in your dashboard, no contract.",
          ].map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Check className="mt-0.5 h-5 w-5 flex-none text-foreground" />
              <span className="text-sm">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">Simple pricing</h2>
        <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
          <div className="text-sm font-medium text-muted-foreground">Single plan — all features</div>
          <div className="mt-2 text-5xl font-semibold tracking-tight">$97<span className="text-lg text-muted-foreground">/month</span></div>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm">
            {[
              "AI answers unlimited calls",
              "Instant text summaries",
              "Custom greeting (your brand voice)",
              "14-day free trial — not charged until day 14",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 flex-none" /> {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Or save 17% annually: <span className="font-medium text-foreground">$970/year</span> ($80.83/month — 2 months free vs. monthly).
          </p>
          <a
            href={STRIPE_TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={handleTrialClick}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Start my 14-day free trial <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Credit card required. You won't be charged until day 14 — cancel anytime in your dashboard and pay nothing.
          </p>
          <p className="mt-4 text-xs italic text-muted-foreground">
            You're still the owner. Call Net is just your backup. When you can't answer, we catch the lead. You call back. You close.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <figure className="rounded-2xl border border-border bg-card p-8 text-center">
          <blockquote className="text-base leading-relaxed sm:text-lg">
            "I was worried about sounding like a robot to my customers. But Call Net only picks up when I'm on the other line or after hours. My callers still talk to me for the real conversation. I've captured 5 new jobs in 2 weeks."
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
            — Dave M., Plumbing Pro (Bristol, UK)
          </figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-center text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-8 space-y-4">
          {[
            {
              q: "Will Call Net replace my receptionist or annoy my callers?",
              a: "No. Call Net only answers when you can't — after hours, during lunch, or when you're already on another call. Your callers get a helpful conversation, leave their info, and you call them back. It's still you they close with.",
            },
            {
              q: "How fast is setup? Do I need technical skills?",
              a: "No tech skills needed. Setup is under 2 minutes — you forward your existing business line to Call Net (24/7 or only when you don't pick up). We email step-by-step instructions the moment you sign up.",
            },
            {
              q: "Why do you require a credit card for the free trial?",
              a: "It keeps the trial free of spam signups so we can give every real business great support. You won't be charged until day 14. Cancel anytime in your dashboard during the trial and you pay nothing.",
            },
            {
              q: "What happens if I forget to cancel before the trial ends?",
              a: "We'll email you 3 days and 1 day before your trial ends so you have time to decide. If you don't cancel and decide later you don't want it, just reply to any of our emails within 7 days of being charged and we'll refund you in full.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. One click in your dashboard. No phone calls, no retention tactics, no contract.",
            },
            {
              q: "Do my callers know they're talking to AI?",
              a: "Call Net introduces itself as your virtual assistant. It sounds natural, takes the caller's details, and reassures them you'll call back personally — which you do.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>




      {/* Final CTA */}
      <section id="trial" className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Stop losing money to missed calls.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Start your 14-day free trial. Setup takes 2 minutes. Cancel anytime in your dashboard.
        </p>
        <a
          href={STRIPE_TRIAL_URL} target="_blank" rel="noopener noreferrer" onClick={handleTrialClick}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
        >
          Start my 14-day free trial <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-3 text-xs text-muted-foreground">Credit card required. You won't be charged until day 14. Cancel anytime.</p>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-muted-foreground">
          Call Net — AI lead capture for small business. © 2026.
        </div>
      </footer>
    </div>
  );
}


