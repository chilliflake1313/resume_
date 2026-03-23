type Item = {
  title: string;
  company: string;
  date: string;
  desc: string;
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative flex flex-col gap-8 pl-6">
      <div className="absolute bottom-0 left-[5px] top-2 w-[2px] bg-gray-300" />

      {items.map((i, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="mt-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-white" />

          <div>
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <span className="font-semibold">{i.title}</span>{" "}
                <span className="text-blue-500">@ {i.company}</span>
              </div>
              <span className="rounded bg-gray-200 px-2 py-1 text-xs">{i.date}</span>
            </div>

            <p className="mt-1 text-sm text-gray-500">{i.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
