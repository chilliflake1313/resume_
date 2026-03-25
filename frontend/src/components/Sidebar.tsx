import { profile } from "../data/profile";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

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

      <div className="flex items-center gap-4 text-gray-600">
        <a
          href={`mailto:${profile.email}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          className="transition-colors hover:text-blue-600"
        >
          <MdEmail size={24} />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-black"
        >
          <FaGithub size={22} />
        </a>
        <a
          href={profile.Peerlist}
          target="_blank"
          rel="noreferrer"
          aria-label="Peerlist"
          className="transition-colors hover:text-green-600"
        >
          <SiPeerlist size={22} color="#16a34a" />
        </a>
      </div>
    </aside>
  );
}
