import { profile } from "../data/profile";

export default function Sidebar() {
  return (
    <aside className="sticky top-10 flex w-[260px] flex-col gap-6 self-start">
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
