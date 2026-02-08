"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  "Sie arbeiten direkt mit mir. Keine Projektmanager, keine Kommunikationsketten, keine versteckten Kosten.",
  "Ich zeige Ihrem Team, wie die neuen Tools funktionieren. Sie sind nicht von mir abhängig.",
  "Erste Ergebnisse in Tagen, nicht Monaten. Transparente Kosten ohne Enterprise-Aufschläge.",
  "Als Forscherin am Max-Planck-Institut arbeite ich methodisch und zuverlässig. Das bringe ich auch in Ihre Projekte mit.",
];

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="border-t border-slate-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
            Warum ich
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Warum Mittelständler mit mir arbeiten
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/30 p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                {i + 1}
              </span>
              <p className="text-slate-300">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
