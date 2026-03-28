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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="snap-start"
    >
      <div className="flex h-[calc(100vh-72px)] items-center py-6">
        <div className="max-h-[calc(100vh-140px)] w-full overflow-y-auto rounded-2xl border border-white/12 bg-[#0f1424]/72 p-6 text-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.38)] backdrop-blur-md">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
