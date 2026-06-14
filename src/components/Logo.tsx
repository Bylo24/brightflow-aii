import bfLogo from "@/assets/brightflow-logo.png.asset.json";

export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <img
      src={bfLogo.url}
      alt="BrightFlow AI"
      className={className}
      draggable={false}
    />
  );
}
