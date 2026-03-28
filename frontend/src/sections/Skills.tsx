import { ComponentType } from "react";
import { Badge } from "../components/ui/badge";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-white">Skills</h3>
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
