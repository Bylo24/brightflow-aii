import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
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
      { title: "You're in - pick a time | BrightFlow AI" },
      { name: "description", content: "Pick a time below to start your free 2-week pilot." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThanksPage,
});

function ThanksPage() {
  const [prefill, setPrefill] = useState<{ email?: string; name?: string }>({});

  useEffect(() => {
    installAndFirePixel();
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email") ?? undefined;
    const name = params.get("name") ?? undefined;
    setPrefill({ email, name });
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

      <main className="flex-1 relative">
        <div className="absolute inset-x-0 top-0 h-[420px] -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(168_72%_32%/0.18),transparent_65%)]" />
          <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
        </div>

        {/* Header */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-accent">
            <Check className="size-3.5" strokeWidth={3} />
            You're in
          </div>

          <h1 className="mt-5 text-[34px] sm:text-5xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance">
            Let's understand how your workflow runs.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
            Grab a 10-min slot below.
          </p>
        </div>

        {/* Inline Cal.com booking widget */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <Cal
            namespace={CAL_NAMESPACE}
            calLink={CAL_LINK_SLUG}
            style={{ width: "100%", height: "780px", overflow: "scroll" }}
            config={{
              layout: "month_view",
              useSlotsViewOnSmallScreen: "true",
              ...(prefill.email ? { email: prefill.email } : {}),
              ...(prefill.name ? { name: prefill.name } : {}),
            }}
          />

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Free for 2 weeks. No card. If you don't save 10 hours, you pay nothing.
          </p>
        </div>
      </main>

      <Footer hideCta />
    </div>
  );
}
