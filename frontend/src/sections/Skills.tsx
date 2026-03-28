import { ComponentType } from "react";
import { Badge } from "../components/ui/badge";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[{ text: "Skills", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => {
          const Icon = s.icon as ComponentType<{ className?: string }>;

          return (
            <Badge key={s.name} variant="secondary" className="inline-flex items-center gap-2">
              <Icon className={s.color} />
              {s.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
