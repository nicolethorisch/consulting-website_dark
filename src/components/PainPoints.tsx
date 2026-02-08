"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

const questions = [
  "Ihre Mitarbeiter verbringen Stunden mit Emails, die eine KI in Sekunden beantworten könnte?",
  "Angebote werden noch manuell aus Excel-Tabellen zusammenkopiert?",
  "Kundenanfragen bleiben liegen, weil niemand Zeit hat?",
  "Rechnungen stapeln sich, weil die Prüfung ewig dauert?",
];

export default function PainPoints() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Erkennen Sie sich wieder?
          </h2>
          <p className="mt-4 text-slate-400">
            Welche Prozesse bremsen Sie aus?
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-xl border border-slate-800"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-slate-900/50"
              >
                <span className="text-slate-300">{q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="shrink-0 text-cyan-400"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-800 bg-slate-900/30 px-6 py-4"
                  >
                    <p className="text-sm text-slate-400">
                      Lassen Sie uns gemeinsam schauen, welche Aufgaben Sie
                      automatisieren können. Unverbindlich.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://calendly.com/nicole-thorisch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
          >
            Gratis Potential-Check vereinbaren
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
