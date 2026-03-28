import { useNavigate } from "react-router-dom";
import { EncryptedText } from "../components/ui/encrypted-text";
import { profile } from "../data/profile";

type HubItem = {
  title: string;
  path?: string;
  external?: string;
};

const items: HubItem[] = [
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Live Projects",
    path: "/projects",
  },
  {
    title: "GitHub",
    external: profile.github,
  },
];

export default function Hub() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-[#03060f] px-6 py-10 text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center gap-6">
          {items.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => {
                if (item.path) {
                  nav(item.path);
                  return;
                }

                if (item.external) {
                  window.open(item.external, "_blank", "noopener,noreferrer");
                }
              }}
              className="group text-center transition hover:-translate-y-0.5"
            >
              <p className="text-2xl font-semibold text-emerald-300 group-hover:text-emerald-200">
                <EncryptedText text={item.title} durationMs={1000} />
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
