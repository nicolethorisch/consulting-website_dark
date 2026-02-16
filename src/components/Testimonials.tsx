"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Der De-Eskalations-Agent nimmt uns die wütenden Mails ab — unser Team ist deutlich entspannter und reagiert schneller.",
    name: "Hausverwaltung, München",
  },
  {
    quote:
      "Fristen und Rechnungsprüfung laufen automatisch. Keine verpassten Kündigungen mehr, weniger Fehler.",
    name: "Immobilien-Asset-Manager, WEG",
  },
  {
    quote:
      "Pragmatisch, schnell, ohne IT-Overhead. Genau was wir als Mittelstand gebraucht haben.",
    name: "Geschäftsführer, Logistik",
  },
  {
    quote:
      "Erste Ergebnisse in Wochen statt Monaten. Die Integration in unser bestehendes System war reibungslos.",
    name: "IT-Leiter, Handwerk",
  },
];

export default function Testimonials() {
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
            Erfahrungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Warum Mittelständler mit mir arbeiten
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Direkte Zusammenarbeit, keine Projektmanager, transparente Kosten.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <div className="mb-4 flex text-amber-400">★★★★★</div>
              <p className="text-zinc-300">&quot;{t.quote}&quot;</p>
              <p className="mt-4 text-sm text-zinc-500">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
