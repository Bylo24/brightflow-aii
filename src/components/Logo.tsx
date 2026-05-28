export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bf-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(165 78% 45%)" />
          <stop offset="100%" stopColor="hsl(180 70% 32%)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#bf-grad)" />
      {/* Flow arrow: two stacked streams converging into a forward arrow */}
      <path
        d="M9 14 H20 a3 3 0 0 1 2.4 1.2 L25 18.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 26 H20 a3 3 0 0 0 2.4 -1.2 L25 21.5"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 20 H31 M27 16 L31 20 L27 24"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
