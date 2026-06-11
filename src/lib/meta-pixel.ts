// Meta (Facebook) Pixel helper.
// Replace META_PIXEL_ID with your real Pixel ID from Events Manager.
// Pixel IDs are public — safe to commit.
export const META_PIXEL_ID = "REPLACE_WITH_YOUR_PIXEL_ID";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
    _fbq?: unknown;
  }
}

let initialized = false;

export function initMetaPixel() {
  if (typeof window === "undefined") return;
  if (initialized) return;
  if (!META_PIXEL_ID || META_PIXEL_ID === "REPLACE_WITH_YOUR_PIXEL_ID") return;
  initialized = true;

  /* eslint-disable */
  // Standard Meta Pixel base code
  (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  window.fbq?.("init", META_PIXEL_ID);
  window.fbq?.("track", "PageView");
}

export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.fbq) return;
  if (params) window.fbq("track", event, params);
  else window.fbq("track", event);
}
