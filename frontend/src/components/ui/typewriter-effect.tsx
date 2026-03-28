import { useEffect, useMemo, useRef, useState } from "react";

type TypewriterWord = {
  text: string;
  className?: string;
};

type TypewriterEffectSmoothProps = {
  words: TypewriterWord[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  showCursor?: boolean;
};

export function TypewriterEffectSmooth({
  words,
  className,
  cursorClassName,
  typingSpeed = 75,
  showCursor = false,
}: TypewriterEffectSmoothProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const totalChars = useMemo(() => {
    if (words.length === 0) return 0;
    const letters = words.reduce((sum, word) => sum + word.text.length, 0);
    const spaces = Math.max(words.length - 1, 0);
    return letters + spaces;
  }, [words]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (totalChars === 0 || !hasStarted) return;

    setVisibleChars(0);

    const interval = window.setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= totalChars) {
          window.clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, typingSpeed);

    return () => window.clearInterval(interval);
  }, [hasStarted, totalChars, typingSpeed]);

  let remaining = visibleChars;

  return (
    <div ref={wrapperRef} className={className}>
      {words.map((word, index) => {
        const shown = Math.max(0, Math.min(word.text.length, remaining));
        const value = word.text.slice(0, shown);
        remaining -= shown;

        const canShowSpace = index < words.length - 1 && remaining > 0;
        if (canShowSpace) {
          remaining -= 1;
        }

        return (
          <span key={`${word.text}-${index}`} className={word.className}>
            {value}
            {canShowSpace ? " " : ""}
          </span>
        );
      })}
      {showCursor && (
        <span
          className={cursorClassName}
          style={{
            marginLeft: "0.1em",
            opacity: 1,
            animation: "tw-caret-blink 1s steps(1) infinite",
          }}
        >
          |
        </span>
      )}
    </div>
  );
}
