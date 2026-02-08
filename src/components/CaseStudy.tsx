"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const onboardingSteps = [
  "Neuer Mitarbeiter registriert",
  "KI erstellt Einarbeitungsplan",
  "Zugriff auf Wissensdatenbank",
  "Onboarding abgeschlossen",
];

export default function CaseStudy() {
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
            Praxis-Beispiel
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Automatisches Mitarbeiter-Onboarding
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-center text-slate-400"
        >
          Stellen Sie sich vor, neue Mitarbeiter werden durch eine intelligente
          KI in Ihre internen Prozesse eingeführt. Die KI vermittelt Wissen,
          beantwortet Fragen zu Abläufen und begleitet die Einarbeitung –
          konsistent, geduldig und 24/7 verfügbar. So entlasten Sie Ihr Team ab
          dem ersten Tag.
        </motion.p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-8 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-5xl font-bold gradient-text"
            >
              90%
            </motion.span>
            <p className="mt-2 text-slate-400">Schnellere Einarbeitung</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
          >
            <div className="space-y-4">
              {onboardingSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-400">
                    {i + 1}
                  </span>
                  <span className="text-slate-300">{step}</span>
                  {i < onboardingSteps.length - 1 && (
                    <span className="ml-auto text-cyan-500">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-8 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-5xl font-bold gradient-text"
            >
              0h
            </motion.span>
            <p className="mt-2 text-slate-400">Manueller Aufwand</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
