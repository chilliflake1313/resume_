import { Card, CardContent } from "../components/ui/card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold">Projects</h3>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-gray-500">{p.desc}</p>
              <a href={p.link} className="mt-2 block text-sm text-blue-500">
                View
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
