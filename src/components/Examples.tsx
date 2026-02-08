"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  "Anfrage analysieren...",
  "Antwort generieren...",
  "Termin bestätigt!",
];

const weeks = ["Start", "Woche 1", "Woche 2", "Woche 3", "Woche 4"];

export default function Examples() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="beispiele" className="border-t border-slate-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Konkrete Automatisierungen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Was virtuelle Mitarbeiter in Ihrem Unternehmen leisten können
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
              Email-Assistent für den Vertrieb
            </p>
            <div className="mt-4">
              <motion.span
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold gradient-text sm:text-5xl"
              >
                70%
              </motion.span>
              <span className="ml-2 text-2xl text-slate-300">
                weniger Email-Aufwand
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Wichtige Emails priorisiert und weitergeleitet",
                "Terminvorschläge werden automatisch erstellt",
                "Standardanfragen automatisch beantwortet",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
          >
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  animate={{
                    opacity: activeStep === i ? 1 : 0.4,
                    x: activeStep === i ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                    activeStep === i ? "bg-cyan-500/10" : ""
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      activeStep === i
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={
                      activeStep === i ? "text-white" : "text-slate-400"
                    }
                  >
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-xs text-slate-500">
                {weeks.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {[
            "Email-Automatisierung",
            "Angebotserstellung",
            "KI-Telefonassistenten",
            "Rechnungsprüfung",
            "Vertragsverwaltung",
            "Vertriebsanalyse",
          ].map((tab) => (
            <span
              key={tab}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400"
            >
              {tab}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
