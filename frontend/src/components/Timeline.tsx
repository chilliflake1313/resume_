type Item = {
  title: string;
  company: string;
  date: string;
  desc: string;
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative flex flex-col gap-8 pl-6">
      <div className="absolute bottom-0 left-[5px] top-2 w-[2px] bg-slate-600/80" />

      {items.map((i, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="mt-1 h-3 w-3 rounded-full border-2 border-cyan-300 bg-[#0e1528]" />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-semibold text-slate-100">{i.title}</span>{" "}
                <span className="text-cyan-300">@ {i.company}</span>
              </div>
              <span className="rounded bg-slate-700/80 px-2 py-1 text-xs text-slate-200">{i.date}</span>
            </div>

            <p className="mt-1 text-sm text-slate-300">{i.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
