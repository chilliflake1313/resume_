import Timeline from "../components/Timeline";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div>
      <TypewriterEffectSmooth
        words={[{ text: "Experience", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />
      <Timeline items={experience} />
    </div>
  );
}
