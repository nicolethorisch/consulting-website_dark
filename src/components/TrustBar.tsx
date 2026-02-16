"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="border-t border-zinc-800/50 py-12"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-zinc-400">
          Hausverwaltungen, Banken und Industrieunternehmen vertrauen auf pragmatische KI-Lösungen
        </p>
      </div>
    </motion.section>
  );
}
