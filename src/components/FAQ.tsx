"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Was kostet eine KI-Lösung?",
    a: "Die Kosten hängen von Umfang und Komplexität ab. In einem kostenlosen Erstgespräch klären wir Ihre Anforderungen und geben eine transparente Einschätzung.",
  },
  {
    q: "Wie sicher sind meine Daten?",
    a: "Ich arbeite mit DSGVO-konformen Lösungen. Daten können in Ihrer eigenen Infrastruktur oder über sichere Enterprise-Schnittstellen verarbeitet werden.",
  },
  {
    q: "Wie lange dauert es bis zu ersten Ergebnissen?",
    a: "Eine Prozess-Analyse dauert 1-2 Wochen. Erste Automatisierungen können innerhalb von 2-4 Wochen umgesetzt werden.",
  },
  {
    q: "Brauchen wir spezielles IT-Know-how im Team?",
    a: "Nein. Ich schule Ihr Team im Umgang mit den neuen Tools. Sie sind nach der Einführung nicht von mir abhängig.",
  },
  {
    q: "Können bestehende Systeme (CRM, ERP) angebunden werden?",
    a: "Ja. Integration in Ihre bestehende Infrastruktur ist ein zentraler Bestandteil der Lösung.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Häufig gestellte Fragen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-400"
          >
            Schnelle Antworten zu KI-Automatisierung.
          </motion.p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i }}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-zinc-900/50"
              >
                <span className="text-white">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="shrink-0 text-zinc-400"
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
                    className="border-t border-zinc-800 px-6 py-4"
                  >
                    <p className="text-sm text-zinc-400">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
