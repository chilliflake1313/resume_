import { Link } from "react-router-dom";

const liveProjects = [
  {
    name: "Portfolio Resume",
    status: "Live",
    href: "/resume",
    internal: true,
  },
  {
    name: "Add your project",
    status: "Coming soon",
    href: "#",
    internal: false,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#03060f] px-6 py-10 text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Live Projects</p>
        <h1 className="mt-3 text-3xl font-bold">Deployments and demos</h1>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {liveProjects.map((project) => (
            <div key={project.name} className="p-1">
              <p className="text-lg font-semibold text-white">{project.name}</p>
              <p className="mt-1 text-sm text-slate-300">{project.status}</p>

              <div className="mt-4">
                {project.internal ? (
                  <Link
                    to={project.href}
                    className="text-sm text-cyan-300 transition hover:text-cyan-200"
                  >
                    Open
                  </Link>
                ) : (
                  <span className="text-sm text-slate-400">Add URL here</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            Back to Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
