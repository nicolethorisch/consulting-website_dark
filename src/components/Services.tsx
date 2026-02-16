"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const tasks = [
  { label: "De-Eskalations-Mail", status: "antwortet ruhig, priorisiert", icon: "check" },
  { label: "Anruf", status: "an zuständige Person weitergeleitet", icon: "check" },
  { label: "Schadensmeldung", status: "Handwerker zugewiesen", icon: "check" },
  { label: "Kündigungsfrist", status: "Fällig 15. März", icon: "clock" },
  { label: "Rechnungsprüfung", status: "gegen Bestellung geprüft", icon: "check" },
  { label: "Mieteranfrage", status: "in Bearbeitung", icon: "gear" },
];

export default function Services() {
  const scrollingTasks = [...tasks, ...tasks];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leistungen" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            Unsere Leistungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            KI-Lösungen für Immobilien, Finanz und Industrie
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Wir designen, entwickeln und implementieren Automatisierungstools,
            damit Sie smarter arbeiten – nicht härter.
          </motion.p>
        </div>

        {/* Workflow Automation - mock UI + text */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <div className="mb-4 flex gap-2">
                <span className="rounded-t border-b-2 border-violet-500 px-3 py-2 text-sm text-white">
                  Alle Aufgaben
                </span>
                <span className="px-3 py-2 text-sm text-zinc-500">
                  Warten auf Freigabe
                </span>
              </div>
              <div className="relative h-60 overflow-hidden">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 14, ease: "linear", repeat: Infinity }}
                  className="space-y-3"
                >
                  {scrollingTasks.map((task, i) => (
                    <div
                      key={`${task.label}-${i}`}
                      className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm text-white">{task.label}</p>
                        <p className="text-xs text-zinc-500">{task.status}</p>
                      </div>
                      <span className="text-violet-400">
                        {task.icon === "check" && "✓"}
                        {task.icon === "gear" && "⚙"}
                        {task.icon === "clock" && "🕐"}
                        {task.icon === "x" && "✕"}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <span className="section-tag">Prozess-Automatisierung</span>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Für Immobilienverwaltungen
            </h3>
            <p className="mt-4 text-zinc-400">
              Weniger Stress, weniger Fehler: De-Eskalation bei Mails, Telefon-Agenten
              leiten Anrufe an die für die Immobilie zuständige Person weiter,
              Schadensmeldungen triagieren, Fristen überwachen, Rechnungen prüfen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                De-Eskalations-Agent
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Telefon-Agent / Weiterleitung
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Schadensmeldungen
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Fristen & Verträge
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Rechnungsprüfung
              </span>
            </div>
          </motion.div>
        </div>

        {/* AI Assistant - text + mock UI */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <span className="section-tag">KI-Assistent</span>
            <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Immobilien-Alltag entlasten
            </h3>
            <p className="mt-4 text-zinc-400">
              Mieter- und Eigentümeranfragen sachlich beantworten, Anrufe an die
              zuständige Person für die Immobilie weiterleiten, kritische Fälle
              priorisieren – Ihr Team behält den Überblick ohne Dauerstress.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Sachliche Antworten
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Telefon-Weiterleitung
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Priorisierung & Eskalation
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-white">
                Schnellere Reaktionszeiten
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <div className="mb-4 flex justify-center">
              <motion.div
                aria-hidden="true"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.6, 1, 0.6],
                  boxShadow: [
                    "0 0 0 0 rgba(139, 92, 246, 0.4)",
                    "0 0 16px 4px rgba(139, 92, 246, 0.35)",
                    "0 0 0 0 rgba(139, 92, 246, 0.4)",
                  ],
                }}
                transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
                className="h-16 w-16 rounded-full border-2 border-violet-500/50 bg-violet-500/20"
              />
            </div>
            <p className="text-center text-lg font-medium text-white">
              Womit kann ich helfen?
            </p>
            <p className="mt-2 text-center text-sm text-zinc-500">
              Ob Kundenbetreuung oder Änderungen im System — geben Sie mir einfach
              Ihre Anweisung.
            </p>
            <div className="mt-4 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3">
              <span className="text-sm text-zinc-500">30-Min Call planen</span>
              <span className="float-right text-violet-400">→</span>
            </div>
            <p className="mt-3 text-center text-sm text-zinc-500">
              + Dokument hinzufügen
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <span className="text-xs text-zinc-500">Analysieren</span>
              <span className="text-xs text-zinc-500">Generieren</span>
              <span className="text-xs text-zinc-500">Recherche</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="https://calendly.com/nicole-thorisch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-zinc-600 px-6 py-3 font-medium text-white transition hover:border-violet-500/50 hover:text-violet-400"
          >
            Individuelle Lösung anfragen
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
