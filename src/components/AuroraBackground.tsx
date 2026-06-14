import { motion } from "motion/react";

/**
 * Premium animated hero backdrop:
 * - Soft drifting aurora orbs in the accent color
 * - Subtle grid overlay with radial mask
 * - Conic shimmer ring
 * Drop behind hero content with `relative` parent.
 */
export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {/* base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,hsl(168_72%_32%/0.14),transparent_55%)]" />

      {/* drifting orbs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ opacity: { duration: 1.2 }, x: { duration: 18, repeat: Infinity, ease: "easeInOut" }, y: { duration: 22, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -top-32 left-1/4 size-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(168 72% 42% / 0.32), transparent 65%)" }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, -50, 30, 0], y: [0, 25, -15, 0] }}
        transition={{ opacity: { duration: 1.2, delay: 0.2 }, x: { duration: 24, repeat: Infinity, ease: "easeInOut" }, y: { duration: 19, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -top-20 right-1/4 size-[440px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(195 80% 55% / 0.22), transparent 65%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 size-[680px] rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle, hsl(168 72% 50% / 0.10), transparent 70%)" }}
      />

      {/* grid */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_40%,transparent_100%)] opacity-70" />

      {/* fine top noise line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
