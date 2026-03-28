import { EncryptedText } from "../components/ui/encrypted-text";

export default function Bio() {
  return (
    <div className="mx-auto max-w-2xl space-y-3 text-center">
      <h2 className="text-4xl font-bold text-white">
        <EncryptedText text="Hi, I'm Ram." />
      </h2>
      <p className="text-slate-300">
        Backend Developer and Security Engineer with experience in building APIs
        and secure systems. Currently learning and improving skills in backend
        development and cybersecurity. Focused on writing clean and secure code.
      </p>
    </div>
  );
}
