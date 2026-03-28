import Timeline from "../components/Timeline";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl">
      <TypewriterEffectSmooth
        words={[{ text: "Experience", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />
      <div className="mx-auto max-w-2xl text-left">
        <Timeline items={experience} />
      </div>
    </div>
  );
}
