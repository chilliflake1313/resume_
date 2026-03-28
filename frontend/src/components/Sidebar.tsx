import { profile } from "../data/profile";

export default function Sidebar() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside className="sticky top-10 flex w-[260px] flex-col gap-6 self-start">
      <div className="h-28 w-28 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
        {profile.image ? (
          <img
            src={profile.image}
            alt={`${profile.name} profile`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xl font-semibold text-gray-600">
            {initials}
          </div>
        )}
      </div>
    </aside>
  );
}
