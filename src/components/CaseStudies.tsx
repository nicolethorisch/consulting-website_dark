"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const caseStudies = [
  {
    title: "Automatisches Mitarbeiter-Onboarding",
    quote:
      "KI-gestützte Einarbeitung reduzierte die Onboarding-Zeit um 90% für einen mittelständischen Dienstleister.",
    desc: "Neue Mitarbeiter werden durch eine intelligente KI in interne Prozesse eingeführt. Die KI vermittelt Wissen, beantwortet Fragen und begleitet die Einarbeitung — 24/7 verfügbar.",
    impact: [
      "90% schnellere Einarbeitung",
      "0h manueller Aufwand",
      "100% konsistente Vermittlung",
    ],
  },
  {
    title: "Email-Assistent für den Vertrieb",
    quote:
      "70% weniger Aufwand bei der E-Mail-Bearbeitung für ein Vertriebsteam.",
    desc: "Wichtige Emails werden priorisiert, Terminvorschläge automatisch erstellt und Standardanfragen automatisch beantwortet.",
    impact: [
      "70% Zeitersparnis",
      "Schnellere Reaktionszeiten",
      "Mehr Zeit für echte Beratung",
    ],
  },
  {
    title: "Rechnungsprüfung & Freigabe",
    quote:
      "Automatische Prüfung und Workflow verkürzte die Bearbeitungszeit um 60%.",
    desc: "Eingangsrechnungen werden automatisch erfasst, mit Bestellungen abgeglichen und für die Freigabe vorbereitet.",
    impact: [
      "60% schnellere Bearbeitung",
      "Weniger Fehler",
      "Bessere Übersicht",
    ],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const total = caseStudies.length;

  const paginate = (direction: number) => {
    setActive((prev) => (prev + direction + total) % total);
  };

  return (
    <section id="beispiele" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            Praxisbeispiele
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            So transformiert KI Unternehmen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Konkrete Beispiele, wie KI-Automatisierung Abläufe optimiert und
            Wachstum ermöglicht.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="mx-auto h-24 w-24 rounded-full border-2 border-violet-500/30 bg-violet-500/10"
              />
              <p className="mt-4 text-sm text-zinc-500">Projektvisualisierung</p>
            </div>
          </div>
          <div>
            <div className="mb-4 flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    active === i ? "w-8 bg-violet-500" : "w-2 bg-zinc-600"
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -80) {
                    paginate(1);
                    return;
                  }
                  if (offset.x > 80) {
                    paginate(-1);
                  }
                }}
              >
                <h3 className="font-display text-2xl font-bold">
                  &quot;{caseStudies[active].quote}&quot;
                </h3>
                <p className="mt-4 text-zinc-400">{caseStudies[active].desc}</p>
                <p className="mt-4 text-sm font-medium text-white">
                  Auswirkungen:
                </p>
                <ul className="mt-2 space-y-1">
                  {caseStudies[active].impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-zinc-400"
                    >
                      <span className="text-violet-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-zinc-500"
        >
          ← Mehr Beispiele erkunden →
        </motion.p>
      </div>
    </section>
  );
}
