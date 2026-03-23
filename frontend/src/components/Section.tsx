import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
}
