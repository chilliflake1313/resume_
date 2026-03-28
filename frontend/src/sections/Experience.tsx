import Timeline from "../components/Timeline";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-white">Experience</h3>
      <Timeline items={experience} />
    </div>
  );
}
