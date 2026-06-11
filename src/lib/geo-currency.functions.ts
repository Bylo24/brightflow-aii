import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";

type CurrencyInfo = { currency: string; symbol: string };

const EURO_COUNTRIES = [
  "AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT",
  "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES", "HR",
];

const COUNTRY_CURRENCY: Record<string, CurrencyInfo> = {
  US: { currency: "USD", symbol: "$" },
  CA: { currency: "CAD", symbol: "C$" },
  GB: { currency: "GBP", symbol: "£" },
  AU: { currency: "AUD", symbol: "A$" },
  NZ: { currency: "NZD", symbol: "NZ$" },
  CH: { currency: "CHF", symbol: "CHF " },
  SE: { currency: "SEK", symbol: "kr" },
  NO: { currency: "NOK", symbol: "kr" },
  DK: { currency: "DKK", symbol: "kr" },
  PL: { currency: "PLN", symbol: "zł" },
  CZ: { currency: "CZK", symbol: "Kč" },
  JP: { currency: "JPY", symbol: "¥" },
  IN: { currency: "INR", symbol: "₹" },
  BR: { currency: "BRL", symbol: "R$" },
  MX: { currency: "MXN", symbol: "MX$" },
  ZA: { currency: "ZAR", symbol: "R" },
  SG: { currency: "SGD", symbol: "S$" },
  HK: { currency: "HKD", symbol: "HK$" },
  AE: { currency: "AED", symbol: "AED " },
};

for (const c of EURO_COUNTRIES) {
  COUNTRY_CURRENCY[c] = { currency: "EUR", symbol: "€" };
}

export type GeoCurrency = {
  country: string;
  currency: string;
  symbol: string;
  rate: number; // 1 USD = rate * currency
};

export const getLocaleCurrency = createServerFn({ method: "GET" }).handler(
  async (): Promise<GeoCurrency> => {
    const country = (
      getRequestHeader("cf-ipcountry") ||
      getRequestHeader("x-vercel-ip-country") ||
      "US"
    ).toUpperCase();

    const info = COUNTRY_CURRENCY[country] ?? { currency: "USD", symbol: "$" };

    if (info.currency === "USD") {
      return { country, currency: "USD", symbol: "$", rate: 1 };
    }

    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD", {
        // cache at the edge for an hour
        headers: { "cache-control": "max-age=3600" },
      });
      const data = (await res.json()) as { rates?: Record<string, number> };
      const rate = data.rates?.[info.currency];
      if (typeof rate === "number" && rate > 0) {
        return { country, currency: info.currency, symbol: info.symbol, rate };
      }
    } catch {
      // fall through to USD fallback
    }
    return { country, currency: "USD", symbol: "$", rate: 1 };
  },
);
