import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

const certifications = [
  {
    name: "The Fullstack Developer Path",
    org: "Scrimba",
    link: "https://scrimba.com",
    issued: "Mar 2026",
  },
  {
    name: "Cyber Security Analyst",
    org: "IBM Career Education Program",
    issued: "Apr 2025",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    org: "Cisco Networking Academy",
    issued: "Mar 2025",
  },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-2xl">
      <TypewriterEffectSmooth
        words={[{ text: "Education", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />

      <div className="space-y-6">
        <div className="p-1">
          <h4 className="text-lg font-semibold text-slate-100">Vit Bhopal</h4>
          <p className="mt-1 text-sm text-slate-300">
            Bachelor of Technology (BTech), Cybersecurity and Digital Forensic
          </p>
          <p className="mt-1 text-sm text-slate-400">2022 - 2026</p>
        </div>

        <div className="p-1">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
            Certification
          </h4>

          <div className="mt-3 space-y-4">
            {certifications.map((item) => (
              <div key={item.name}>
                <p className="text-sm font-medium text-slate-100">{item.name}</p>
                <p className="mt-1 text-sm text-slate-300">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 hover:text-cyan-200"
                    >
                      {item.link} &nearr;
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
                <p className="mt-1 text-xs text-slate-400">{item.issued}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
