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

      <div>
        <p className="text-sm text-gray-500">Name - {profile.name}</p>
        <p className="text-sm text-gray-500">Email - {profile.email}</p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-500">
        <span>Role - {profile.role}</span>
        <span>Location - {profile.location}</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub - {profile.github}
        </a>
        <a href={profile.Peerlist} target="_blank" rel="noreferrer">
          Peerlist - {profile.Peerlist}
        </a>
      </div>
    </aside>
  );
}
