import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0.35, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, amount: 0.45 }}
      className="snap-start"
    >
      <div className="flex min-h-[calc(100vh-72px)] items-center py-6">
        <div className="w-full rounded-2xl border border-white/12 bg-[#0f1424]/72 p-6 text-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.38)] backdrop-blur-md">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
