import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

type SkillItem = {
  name: string;
  logoUrl: string;
};

const groupedSkills: { title: string; items: SkillItem[] }[] = [
  {
    title: "Lang",
    items: [
      { name: "JavaScript", logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", logoUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Python", logoUrl: "https://cdn.simpleicons.org/python/3776AB" },
    ],
  },
  {
    title: "Frameworks / Environment",
    items: [
      { name: "React", logoUrl: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", logoUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "Node.js", logoUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Express.js", logoUrl: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "React Native", logoUrl: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Redux", logoUrl: "https://cdn.simpleicons.org/redux/764ABC" },
    ],
  },
  {
    title: "Tools / Platforms",
    items: [
      { name: "HTML", logoUrl: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", logoUrl: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "TailwindCSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "MongoDB", logoUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "AWS", logoUrl: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Firebase", logoUrl: "https://cdn.simpleicons.org/firebase/DD2C00" },
      { name: "Git", logoUrl: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Figma", logoUrl: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Kali Linux", logoUrl: "https://cdn.simpleicons.org/kalilinux/557C94" },
      { name: "Bash", logoUrl: "https://cdn.simpleicons.org/gnubash/4EAA25" },
      { name: "Shell", logoUrl: "https://cdn.simpleicons.org/gnometerminal/4A86CF" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-3xl">
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
                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-slate-100"
                  >
                    <img
                      src={item.logoUrl}
                      alt={`${item.name} logo`}
                      className="h-3.5 w-3.5"
                      loading="lazy"
                      decoding="async"
                    />
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
