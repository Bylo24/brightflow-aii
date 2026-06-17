// Meta (Facebook) Pixel helper - shared across landing pages.
// Pixel IDs are public - safe to commit.
export const META_PIXEL_ID = "2085592105635483";

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[] };
    _fbq?: unknown;
  }
}

const initializedPixels = new Set<string>();

export function initMetaPixel(pixelId: string = META_PIXEL_ID) {
  if (typeof window === "undefined") return;
  if (initializedPixels.has(pixelId)) return;
  initializedPixels.add(pixelId);

  if (!window.fbq) {
    /* eslint-disable */
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
  }

  const fbq = window.fbq as unknown as (...args: unknown[]) => void;
  fbq("init", pixelId);
  fbq("track", "PageView");
}

export const CALL_NET_PIXEL_ID = "1028388659517363";

export function trackPixel(
  event: string,
  params?: Record<string, unknown>,
  pixelId?: string
) {
  if (typeof window === "undefined" || !window.fbq) return;
  const fbq = window.fbq as unknown as (...args: unknown[]) => void;
  if (pixelId) {
    if (params) fbq("trackSingle", pixelId, event, params);
    else fbq("trackSingle", pixelId, event);
  } else {
    if (params) fbq("track", event, params);
    else fbq("track", event);
  }
}
