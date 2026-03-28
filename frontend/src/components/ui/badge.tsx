import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary";
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClass =
    variant === "secondary"
      ? "border border-white/12 bg-white/8 text-slate-200"
      : "border border-cyan-300/30 bg-cyan-400/15 text-cyan-200";

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${variantClass} ${className}`.trim()}
      {...props}
    />
  );
}
