/**
 * Intentional, restrained hero backdrop.
 * Static fine grid with a soft radial wash. No drifting orbs, no animation noise.
 */
export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* faint radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_-5%,hsl(168_78%_26%/0.06),transparent_70%)]" />
      {/* precise grid, masked */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_30%,transparent_85%)] opacity-60" />
      {/* hairline top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
}
