import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check, Mail, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { Wordmark, Footer } from "@/components/SiteChrome";

const CAL_NAMESPACE = "15min";
const CAL_LINK_SLUG = "samuel-howell-iwfnp4/15min";
const META_PIXEL_ID = "2085592105635483";
const META_PIXEL_EVENT = "Form: 2085592105635483";

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
  fbq("trackCustom", META_PIXEL_EVENT);
  fbq("track", "Lead");
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
    let opened = false;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      // Auto-open the booking modal after a short delay so users land on the calendar.
      setTimeout(() => {
        if (opened) return;
        opened = true;
        cal("modal", {
          calLink: CAL_LINK_SLUG,
          config: { layout: "month_view" },
        });
      }, 400);
    })();
  }, []);

  async function openCal() {
    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal("modal", {
      calLink: CAL_LINK_SLUG,
      config: { layout: "month_view" },
    });
  }

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
            You're in. Now{" "}
            <span className="font-serif italic font-normal text-accent">pick a time.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            The booking calendar is opening now. If it doesn't, tap the button below.
          </p>

          <div className="mt-9">
            <button
              type="button"
              onClick={openCal}
              className="btn btn-lg btn-neutral rounded-full text-base"
            >
              <Calendar className="size-4" /> Open booking calendar
            </button>
          </div>

          <div className="mt-12 mx-auto max-w-md rounded-2xl border border-border bg-secondary/40 p-6 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 size-9 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <Mail className="size-4 text-accent" />
              </div>
              <div>
                <div className="font-semibold tracking-tight">Pilot info on its way</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Check your inbox in a few minutes for the pilot details and a short video.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Free for 2 weeks. No card. If you don't save 10 hours, you pay nothing.
          </p>
        </div>
      </main>

      <Footer hideCta />
    </div>
  );
}
