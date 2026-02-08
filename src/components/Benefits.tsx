"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    icon: "⚡",
    title: "Mehr Produktivität",
    desc: "Gewinnen Sie Zeit mit KI-gestützter Analyse und optimieren Sie Entscheidungen und Strategien.",
  },
  {
    icon: "🔄",
    title: "Bessere Kundenerlebnisse",
    desc: "Personalisierte KI-Interaktionen verbessern Reaktionszeiten, Engagement und Zufriedenheit.",
  },
  {
    icon: "🕐",
    title: "24/7 Verfügbarkeit",
    desc: "KI-Systeme arbeiten rund um die Uhr für nahtlosen Support und Ausführung ohne Ausfallzeiten.",
  },
  {
    icon: "💰",
    title: "Kostenreduktion",
    desc: "KI-Automatisierung minimiert manuelle Arbeit, senkt operative Kosten und optimiert Ressourcen.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            Vorteile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Die wichtigsten Vorteile von KI für Ihr Wachstum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Entdecken Sie, wie KI-Automatisierung Effizienz steigert, Kosten
            senkt und Wachstum ermöglicht.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <h3 className="mt-4 font-display text-xl font-bold">
                {benefit.title}
              </h3>
              <p className="mt-2 text-zinc-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
