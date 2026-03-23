import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

type CardContentProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`.trim()}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={className} {...props} />;
}
