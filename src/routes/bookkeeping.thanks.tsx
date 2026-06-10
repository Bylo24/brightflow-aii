import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { Wordmark, Footer } from "@/components/SiteChrome";

const CAL_NAMESPACE = "15min";
const CAL_LINK_SLUG = "samuel-howell-iwfnp4/15min";
const CAL_BUTTON_PROPS = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK_SLUG,
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
} as const;

export const Route = createFileRoute("/bookkeeping/thanks")({
  head: () => ({
    meta: [
      { title: "Thanks — you're one step away | BrightFlow AI" },
      { name: "description", content: "Check your inbox for your free pilot info, or book a 10-min call now." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThanksPage,
});

function ThanksPage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-display selection:bg-accent/20 flex flex-col">
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Wordmark />
          <Link to="/bookkeeping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back
          </Link>
        </div>
      </nav>

      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.16),transparent_60%)]" />
          <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_50%,transparent_100%)]" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-24 text-center">
          <div className="mx-auto mb-7 size-14 rounded-full border-2 border-accent/50 bg-accent/10 flex items-center justify-center shadow-[0_0_50px_-10px_hsl(168_72%_32%/0.5)]">
            <Check className="size-6 text-accent" strokeWidth={3} />
          </div>

          <h1 className="text-[36px] sm:text-5xl md:text-6xl leading-[1.04] font-semibold tracking-[-0.04em] text-balance">
            Thanks! You're{" "}
            <span className="font-serif italic font-normal text-accent">one step away.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Want to fast-track it? Book a quick 10-min call and we'll start your free pilot this week.
          </p>

          <div className="mt-9">
            <button
              type="button"
              {...CAL_BUTTON_PROPS}
              className="btn btn-lg btn-neutral rounded-full text-base"
            >
              Book my call now <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="mt-12 mx-auto max-w-md rounded-2xl border border-border bg-secondary/40 p-6 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 size-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <Mail className="size-4 text-accent" />
              </div>
              <div>
                <div className="font-semibold tracking-tight">Not ready to book?</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Watch for an email from me in the next few minutes. I'll send you a short video explaining the pilot — and a link to book whenever you're ready.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Free pilot. No card. If you don't save 10 hours, you pay nothing.
          </p>
        </div>
      </main>

      <Footer hideCta />
    </div>
  );
}
