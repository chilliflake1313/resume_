import { useEffect, useMemo, useState } from "react";

type EncryptedTextProps = {
  text: string;
  className?: string;
  durationMs?: number;
};

const RANDOM_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export function EncryptedText({
  text,
  className,
  durationMs = 900,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);

  const steps = useMemo(() => Math.max(text.length, 1), [text]);

  useEffect(() => {
    let step = 0;
    setIsAnimating(true);

    const intervalMs = Math.max(Math.floor(durationMs / steps), 20);

    const id = window.setInterval(() => {
      step += 1;

      const next = text
        .split("")
        .map((char, index) => {
          if (char === " ") {
            return " ";
          }

          if (index < step) {
            return char;
          }

          return RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
        })
        .join("");

      setDisplayText(next);

      if (step >= steps) {
        window.clearInterval(id);
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [durationMs, steps, text]);

  return (
    <span
      aria-label={text}
      className={className}
      style={{
        letterSpacing: isAnimating ? "0.04em" : undefined,
        transition: "letter-spacing 150ms ease",
      }}
    >
      {displayText}
    </span>
  );
}
