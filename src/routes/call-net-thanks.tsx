import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check } from "lucide-react";
import { Wordmark } from "@/components/SiteChrome";
import { initMetaPixel, trackPixel } from "@/lib/meta-pixel";

export const Route = createFileRoute("/call-net-thanks")({
  head: () => ({
    meta: [
      { title: "Thanks — your Call Net trial is starting" },
      { name: "robots", content: "noindex" },
      { name: "description", content: "Your Call Net 14-day free trial is on its way." },
    ],
  }),
  component: CallNetThanksPage,
});

function CallNetThanksPage() {
  useEffect(() => {
    initMetaPixel();
    // Fire a Purchase event for Meta. Stripe payment links don't pass
    // the amount to the success URL, so we use the plan price.
    trackPixel("Purchase", { value: 97, currency: "USD", content_name: "Call Net 14-day trial" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Wordmark />
      </header>

      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
          <Check className="h-7 w-7 text-emerald-600" />
        </div>
        <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          You're in. Your Call Net trial is starting.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Check your email for setup instructions — it takes under 2 minutes to forward your line.
          You won't be charged until day 14, and you can cancel anytime from your dashboard.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          Questions? Reply to the welcome email or message{" "}
          <a className="underline" href="mailto:samuel@brightflowagency.com">samuel@brightflowagency.com</a>.
        </p>
      </section>
    </div>
  );
}
