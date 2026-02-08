"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const singleProjectPlans = [
  {
    title: "Prozess-Analyse",
    desc: " ideal für den Einstieg",
    price: "Individuell",
    cta: "Anfrage stellen",
    features: [
      "Kosten-Nutzen-Rechnung",
      "Automatisierungspotenzial",
      "Zeitfresser identifizieren",
      "1-2 Wochen Dauer",
    ],
    popular: false,
  },
  {
    title: "KI Automatisierung",
    desc: " für schnelle Ergebnisse",
    price: "Individuell",
    cta: "Anfrage stellen",
    features: [
      "Email-Assistenten",
      "Termin-Koordination",
      "Dokumentenerstellung",
      "Mitarbeiter Schulung",
      "2-4 Wochen Dauer",
    ],
    popular: true,
  },
  {
    title: "Maßgeschneiderte Software",
    desc: " für komplexe Anforderungen",
    price: "Individuell",
    cta: "Gespräch vereinbaren",
    features: [
      "CRM-Assistenten",
      "Angebots-Generatoren",
      "Individuelle Entwicklung",
      "Mitarbeiter Schulung",
      "4-8 Wochen Dauer",
    ],
    popular: false,
  },
];

const accompanimentPlans = [
  {
    title: "Laufende Prozess-Optimierung",
    desc: " für nachhaltige Verbesserungen",
    price: "Monatliche Pauschale",
    cta: "Begleitung anfragen",
    features: [
      "Regelmäßige Reviews",
      "Priorisierte Optimierungsliste",
      "Messbare KPI-Updates",
      "Mitarbeiter Schulung",
    ],
    popular: false,
  },
  {
    title: "KI Betrieb & Support",
    desc: " für stabile Automatisierungen",
    price: "Monatliche Pauschale",
    cta: "Support anfragen",
    features: [
      "Monitoring & Fehlerbehebung",
      "Anpassungen bei Bedarf",
      "Sicherheits- und Zugriffscheck",
      "Mitarbeiter Schulung",
    ],
    popular: true,
  },
  {
    title: "Weiterentwicklung",
    desc: " für wachsende Anforderungen",
    price: "Individuell",
    cta: "Roadmap besprechen",
    features: [
      "Backlog & Sprint-Planung",
      "Neue Funktionen nach Bedarf",
      "Quartalsweise Strategie-Review",
      "Mitarbeiter Schulung",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [monthly, setMonthly] = useState(true);
  const plans = monthly ? singleProjectPlans : accompanimentPlans;

  return (
    <section className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            Angebot
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Individuelle KI-Lösungen für Ihren Betrieb
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Jedes Projekt ist anders. In einem kostenlosen Gespräch finden wir
            die passende Lösung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex rounded-lg border border-zinc-700 bg-zinc-900 p-1"
          >
            <button
              type="button"
              onClick={() => setMonthly(true)}
              aria-pressed={monthly}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                monthly ? "bg-violet-600 text-white" : "text-zinc-400"
              }`}
            >
              Einzelprojekt
            </button>
            <button
              type="button"
              onClick={() => setMonthly(false)}
              aria-pressed={!monthly}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                !monthly ? "bg-violet-600 text-white" : "text-zinc-400"
              }`}
            >
              Begleitung
            </button>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className={`relative rounded-2xl border p-6 ${
                plan.popular
                  ? "border-violet-500/50 bg-violet-950/20"
                  : "border-zinc-800 bg-zinc-900/30"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-medium text-white">
                  Beliebt
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{plan.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{plan.desc}</p>
              <p className="mt-4 text-2xl font-bold">{plan.price}</p>
              <Link
                href="https://calendly.com/nicole-thorisch/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block w-full rounded-lg py-3 text-center font-medium transition ${
                  plan.popular
                    ? "bg-violet-600 text-white hover:bg-violet-500"
                    : "border border-zinc-600 text-white hover:border-violet-500/50"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-violet-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
