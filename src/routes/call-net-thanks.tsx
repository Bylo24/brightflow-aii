import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check, Mail, PhoneForwarded, Sparkles } from "lucide-react";
import { Wordmark } from "@/components/SiteChrome";
import { initMetaPixel, trackPixel, CALL_NET_PIXEL_ID } from "@/lib/meta-pixel";

export const Route = createFileRoute("/call-net-thanks")({
  head: () => ({
    meta: [
      { title: "You're in — next steps for your Call Net trial" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "Your Call Net 14-day free trial is starting. Here's what happens next." },
    ],
  }),
  component: CallNetThanksPage,
});

function CallNetThanksPage() {
  useEffect(() => {
    initMetaPixel(CALL_NET_PIXEL_ID);
    trackPixel("Purchase", { value: 97, currency: "USD", content_name: "Call Net 14-day trial" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Wordmark />
      </header>

      <section className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
            <Check className="h-7 w-7 text-emerald-600" />
          </div>
          <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            You're in. Welcome to Call Net.
          </h1>
          <p className="mt-4 text-balance text-muted-foreground">
            Your 14-day free trial is active. We'll email you shortly to get your AI receptionist
            set up and answering calls for your business.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            What happens next
          </h2>

          <Step
            icon={<Mail className="h-5 w-5" />}
            title="Check your inbox"
            body="Within the next few minutes you'll get a welcome email from samuel@brightflowagency.com with a short onboarding form (business name, hours, services, FAQs)."
          />
          <Step
            icon={<Sparkles className="h-5 w-5" />}
            title="We build your AI receptionist"
            body="Once you send the form back, our team trains your custom agent on your business and voice. Most setups are live within 24 hours."
          />
          <Step
            icon={<PhoneForwarded className="h-5 w-5" />}
            title="Forward your line and go live"
            body="We'll send you a dedicated number and a 2-minute call-forwarding guide. Your AI starts catching missed calls immediately — no calls slip through."
          />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">
            You won't be charged until day 14. Cancel anytime by replying to the welcome email.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Questions in the meantime?{" "}
            <a className="font-medium text-foreground underline" href="mailto:samuel@brightflowagency.com">
              samuel@brightflowagency.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

function Step({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
