import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check, Mail } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Wordmark, Footer } from "@/components/SiteChrome";

const CAL_NAMESPACE = "15min";
const CAL_LINK_SLUG = "samuel-howell-iwfnp4/15min";
const META_PIXEL_ID = "2085592105635483";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] };
    _fbq?: unknown;
  }
}

function installAndFirePixel() {
  if (typeof window === "undefined") return;
  if (!window.fbq) {
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
  }
  const fbq = window.fbq as unknown as (...args: unknown[]) => void;
  fbq("track", "PageView");
}

export const Route = createFileRoute("/bookkeeping/thanks")({
  head: () => ({
    meta: [
      { title: "Thanks — book your call | BrightFlow AI" },
      { name: "description", content: "Pick a time below to start your free 2-week pilot." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThanksPage,
});

function ThanksPage() {
  useEffect(() => {
    installAndFirePixel();
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

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-8 text-center">
          <div className="mx-auto mb-6 size-12 rounded-full border-2 border-accent/50 bg-accent/10 flex items-center justify-center shadow-[0_0_50px_-10px_hsl(168_72%_32%/0.5)]">
            <Check className="size-5 text-accent" strokeWidth={3} />
          </div>

          <h1 className="text-[32px] sm:text-5xl leading-[1.04] font-semibold tracking-[-0.04em] text-balance">
            You're in. Now{" "}
            <span className="font-serif italic font-normal text-accent">pick a time.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Pilot info is on its way to your inbox. Grab a 10-min slot below and we'll start this week.
          </p>
        </div>

        {/* Inline Cal.com booking widget */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={CAL_LINK_SLUG}
              style={{ width: "100%", height: "720px", overflow: "scroll", border: "0" }}
              config={{ layout: "month_view" }}
            />
          </div>

          <div className="mt-8 mx-auto max-w-md rounded-2xl border border-border bg-secondary/40 p-5 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 size-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <Mail className="size-4 text-accent" />
              </div>
              <div>
                <div className="font-semibold tracking-tight">Prefer email first?</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  No worries — check your inbox in a few minutes for the pilot details and a short video.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Free for 2 weeks. No card. If you don't save 10 hours, you pay nothing.
          </p>
        </div>
      </main>

      <Footer hideCta />
    </div>
  );
}
