import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BookCallDialog } from "./BookCallDialog";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight">
        BrightFlow <span className="text-muted-foreground/70 font-normal">AI</span>
      </span>
    </Link>
  );
}

function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Back arrow, dark, offset up-left */}
      <path
        d="M10 22 L22 10 M14 10 H22 V18"
        stroke="hsl(220 20% 8%)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front arrow, teal accent, offset down-right */}
      <path
        d="M14 30 L30 14 M18 14 H30 V26"
        stroke="hsl(168 72% 32%)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
        <Wordmark />

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="/#services" className="hover:text-foreground transition-colors">
              What we build
            </a>
            <a href="/#process" className="hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="/#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
          <BookCallDialog>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 sm:px-5 h-9 sm:h-10 text-[13px] font-medium text-background hover:bg-foreground/90 transition-colors whitespace-nowrap"
            >
              Book a free audit <ArrowRight className="size-3.5" />
            </button>
          </BookCallDialog>
        </div>
      </div>
    </nav>
  );
}

export function Footer({ hideCta = false }: { hideCta?: boolean } = {}) {
  return (
    <footer id="cta" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(168_72%_32%/0.10),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_bottom,#000,transparent_70%)]" />

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${hideCta ? "pt-16 sm:pt-16" : "pt-24 sm:pt-32 md:pt-32"} pb-12 sm:pb-16`}>
        {!hideCta && (
          <div className="text-center mb-24 sm:mb-24 max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6 sm:mb-6">
              Ready when you are
            </div>
            <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.05] lg:leading-[1.02] mb-6 sm:mb-8 text-balance">
              Reclaim the hours your business is losing{" "}
              <span className="font-serif italic font-normal text-accent">to manual admin.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto">
              Book a 20-minute workflow audit. We'll find the highest-cost repetitive task in your business and show you exactly how we'll automate it. At a fixed price, live in under a week.
            </p>
            <BookCallDialog>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors">
                Book your free audit <ArrowUpRight className="size-4" />
              </button>
            </BookCallDialog>

            <div className="mt-6 text-sm text-muted-foreground">
              No risk. Free pilot. You only pay once we've saved you time.
            </div>
          </div>
        )}

        <div className="border-t border-border pt-12 sm:pt-12 grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8 sm:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Wordmark />
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              We fully automate the repetitive manual admin running inside service businesses so leadership and teams get their hours back for the work that actually moves the business forward.
            </p>
          </div>
          <FooterCol
            title="Company"
            links={[
              { label: "How it works", href: "/#process" },
              { label: "FAQ", href: "/#faq" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { label: "Terms", to: "/terms" },
              { label: "Privacy", to: "/privacy" },
              { label: "Security", to: "/security" },
            ]}
          />
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 text-xs text-muted-foreground">
          <div>© 2026 BrightFlow AI. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = { label: string; to?: "/contact" | "/terms" | "/privacy" | "/security"; href?: string };

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
        {title}
      </div>
      <ul className="space-y-2">
        {links.map((l) =>
          l.to ? (
            <li key={l.label}>
              <Link to={l.to} className="text-sm hover:text-accent transition-colors">
                {l.label}
              </Link>
            </li>
          ) : (
            <li key={l.label}>
              <a href={l.href} className="text-sm hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
