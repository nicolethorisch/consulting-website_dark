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
          Unternehmen vertrauen auf pragmatische KI-Lösungen
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-8 w-24 rounded bg-zinc-800"
              style={{ minWidth: 80 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
