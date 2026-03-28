import { useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { profile } from "../data/profile";

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.72.08-.72 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.13-.3-.53-1.54.12-3.2 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.65 1.66.24 2.9.12 3.2.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.63-5.48 5.94.43.38.82 1.11.82 2.24v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function PeerlistIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 4.5h6.4c3 0 5.1 2 5.1 4.8s-2.1 4.7-5.1 4.7H7z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M7 14h7.2a3.8 3.8 0 1 1 0 7.5H7z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [copied, setCopied] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <TypewriterEffectSmooth
        words={[{ text: "Contact", className: "text-white" }]}
        className="mb-4 text-xl font-semibold"
        cursorClassName="text-cyan-300"
      />
      <p className="text-slate-300">
        Let&apos;s connect for backend, security, and collaboration opportunities.
      </p>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-md border border-white/15 bg-[#0c1120] shadow-sm">
            {profile.image ? (
              <img
                src={profile.image}
                alt={`${profile.name} profile`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#11182c] text-lg font-semibold text-slate-300">
                {initials}
              </div>
            )}
          </div>

          <div>
            <p className="text-base font-semibold text-slate-100">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-300">{profile.role}</p>
            <p className="mt-1 text-sm text-slate-400">{profile.location}</p>
          </div>
        </div>

        <div className="relative mt-4 flex items-center gap-4 text-slate-300">
          <button
            type="button"
            aria-label="Show email dialog"
            onClick={() => {
              setShowEmailDialog((prev) => !prev);
              setCopied(false);
            }}
            className="transition-colors hover:text-cyan-300"
          >
            <EmailIcon className="h-6 w-6" />
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <GithubIcon className="h-[22px] w-[22px]" />
          </a>
          <a
            href={profile.Peerlist}
            target="_blank"
            rel="noreferrer"
            aria-label="Peerlist"
            className="transition-colors hover:text-emerald-300"
          >
            <PeerlistIcon className="h-6 w-6" />
          </a>

          {showEmailDialog && (
            <div className="absolute left-0 top-12 z-10 w-[260px] rounded-lg border border-white/15 bg-[#0d1425]/95 p-3 shadow-[0_12px_28px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Email</p>
              <p className="mt-1 text-sm text-slate-200">{profile.email}</p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-md border border-cyan-300/40 px-2.5 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-400/15"
                >
                  {copied ? "Copied" : "Copy email"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowEmailDialog(false)}
                  className="rounded-md border border-white/15 px-2.5 py-1.5 text-xs text-slate-300 transition-colors hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
