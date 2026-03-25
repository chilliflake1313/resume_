import { EncryptedText } from "../components/ui/encrypted-text";

export default function Bio() {
  return (
    <div className="space-y-3">
      <h2 className="text-4xl font-bold">
        <EncryptedText text="Hi, I'm Ram." />
      </h2>
      <p className="text-gray-600">
        Backend Developer and Security Engineer with experience in building APIs
        and secure systems. Currently learning and improving skills in backend
        development and cybersecurity. Focused on writing clean and secure code.
      </p>
    </div>
  );
}
