import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[{ text: "Projects", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="p-2">
              <h4 className="font-semibold text-slate-100">{p.title}</h4>
              <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
              <a href={p.link} className="mt-2 block text-sm text-cyan-300 hover:text-cyan-200">
                View
              </a>
          </div>
        ))}
      </div>
    </div>
  );
}
