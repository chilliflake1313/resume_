import { SparklesCore } from "./ui/sparkles";

export default function SparklesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#010104]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(8,10,18,0.92),transparent_38%),radial-gradient(circle_at_78%_0%,rgba(10,12,20,0.94),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(5,6,12,0.96),transparent_44%)]" />
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
