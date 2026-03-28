import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#03060f] px-6 py-10 text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Blog</p>
        <h1 className="mt-3 text-3xl font-bold">Coming Soon</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          This page is reserved for technical articles, security notes, and development logs.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            Back to Hub
          </Link>
          <Link
            to="/resume"
            className="text-sm text-slate-200 transition hover:text-white"
          >
            Open Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
