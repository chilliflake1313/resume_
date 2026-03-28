import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

type CardContentProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-white/12 bg-white/5 shadow-[0_6px_22px_rgba(0,0,0,0.25)] ${className}`.trim()}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={className} {...props} />;
}
