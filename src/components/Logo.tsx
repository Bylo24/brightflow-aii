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
      <path
        d="M13 11 H22 a5 5 0 0 1 0 10 H13 Z M13 19 H24 a5 5 0 0 1 0 10 H13 Z"
        fill="white"
        fillOpacity="0.96"
      />
      <circle cx="29.5" cy="14.5" r="1.6" fill="white" />
    </svg>
  );
}
