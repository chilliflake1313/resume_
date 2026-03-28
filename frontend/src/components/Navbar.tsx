import { useEffect, useState } from "react";

const sections = ["about", "experience", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-90px 0px -35% 0px",
      }
    );

    const observedElements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    observedElements.forEach((el) => observer.observe(el));

    return () => {
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 pt-4">
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`capitalize transition-colors ${
                active === id ? "text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
