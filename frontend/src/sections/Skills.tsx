import { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiKalilinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

type SkillItem = {
  name: string;
  icon: IconType;
};

const groupedSkills: { title: string; items: SkillItem[] }[] = [
  {
    title: "Lang",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frameworks / Environment",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "React Native", icon: SiReact },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    title: "Tools / Platforms",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
      { name: "AWS", icon: FaAws },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Kali Linux", icon: SiKalilinux },
      { name: "Bash", icon: SiGnubash },
      { name: "Shell", icon: TbTerminal2 },
    ],
  },
];

const skillIconColor: Record<string, string> = {
  JavaScript: "text-yellow-300",
  TypeScript: "text-blue-400",
  Python: "text-blue-300",
  React: "text-cyan-300",
  "Next.js": "text-slate-100",
  "Node.js": "text-green-400",
  "Express.js": "text-slate-100",
  "React Native": "text-cyan-300",
  Redux: "text-violet-400",
  HTML: "text-orange-400",
  CSS: "text-blue-400",
  TailwindCSS: "text-sky-400",
  MongoDB: "text-green-500",
  AWS: "text-orange-300",
  Firebase: "text-amber-300",
  Git: "text-orange-500",
  GitHub: "text-slate-100",
  Figma: "text-pink-400",
  "Kali Linux": "text-blue-300",
  Bash: "text-emerald-400",
  Shell: "text-emerald-300",
};

export default function Skills() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[{ text: "Technical Skills", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />

      <div className="space-y-4">
        {groupedSkills.map((group) => (
          <div key={group.title} className="p-1">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              {group.title}
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-slate-100"
                  >
                    <Icon className={`h-3.5 w-3.5 ${skillIconColor[item.name] ?? "text-slate-300"}`} />
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
