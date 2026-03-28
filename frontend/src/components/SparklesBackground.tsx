import { SparklesCore } from "./ui/sparkles";

export default function SparklesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020307]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_78%_0%,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(14,116,144,0.2),transparent_42%)]" />
      <SparklesCore
        id="site-sparkles"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={120}
        className="h-full w-full"
        particleColor="#ffffff"
      />
    </div>
  );
}
