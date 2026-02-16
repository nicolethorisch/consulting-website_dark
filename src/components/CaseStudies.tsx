"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const industries = [
  {
    name: "Immobilien",
    cases: [
      {
        title: "De-Eskalations-Agent für wütende Mails",
        problem: "Viele verärgerte Nachrichten belasten das Team und verschlechtern die Kommunikation.",
        solution: "Ein KI-Agent filtert, de-eskaliert und beantwortet Standardfälle sachlich; kritische Fälle werden priorisiert an Sie weitergeleitet.",
        value: [
          "Weniger Stress im Team",
          "Schnellere Reaktionszeiten",
          "Weniger Eskalationen",
        ],
      },
      {
        title: "Schadensmeldungen automatisch triagieren",
        problem: "Schadensmeldungen kommen unstrukturiert an und die Koordination dauert.",
        solution: "Automatische Klassifizierung, Handwerker-Zuweisung und Status-Updates an Mieter und Eigentümer.",
        value: [
          "Kürzere Downtime",
          "Weniger Koordinationsaufwand",
        ],
      },
      {
        title: "Fristen & Verträge überwachen",
        problem: "Kündigungsfristen und Vertragslaufzeiten werden verpasst.",
        solution: "Automatische Fristenüberwachung und Erinnerungen, damit nichts durchrutscht.",
        value: [
          "Weniger Risiko",
          "Weniger Umsatzverlust",
        ],
      },
      {
        title: "Rechnungsprüfung automatisieren",
        problem: "Rechnungsprüfung dauert zu lange und bindet Kapazität.",
        solution: "Belege werden extrahiert und gegen Bestellungen bzw. Verträge geprüft; Freigabe-Workflow wird unterstützt.",
        value: [
          "Schnellere Freigabe",
          "Weniger Fehler",
        ],
      },
    ],
  },
  {
    name: "Banken & Finanz",
    cases: [
      {
        title: "KYC-Onboarding beschleunigen",
        problem: "KYC-Onboarding dauert Wochen und Kunden brechen ab.",
        solution: "Dokumente werden automatisch geprüft, fehlende Unterlagen werden angefordert.",
        value: [
          "Schnellerer Umsatzstart",
          "Weniger Abbruchquote",
        ],
      },
      {
        title: "Kreditvorprüfung entlasten",
        problem: "Kreditvorprüfung bindet Analysten und verzögert Entscheidungen.",
        solution: "Daten extrahieren, Plausibilitätschecks und Risiko-Summary automatisch erstellen.",
        value: [
          "Kürzere Time-to-Decision",
          "Höhere Produktivität",
        ],
      },
      {
        title: "Compliance-Reporting automatisieren",
        problem: "Compliance-Reporting ist manuell und fehleranfällig.",
        solution: "Berichte automatisch generieren und prüfen.",
        value: [
          "Weniger Fehlerrisiko",
          "Geringere Audit-Kosten",
        ],
      },
    ],
  },
  {
    name: "Versicherungen",
    cases: [
      {
        title: "Schadenbearbeitung beschleunigen",
        problem: "Schadenbearbeitung stockt, Regulierung dauert.",
        solution: "Aufnahme, Dokumentenprüfung und Priorisierung automatisieren.",
        value: [
          "Schnellere Regulierung",
          "Geringere Kosten pro Fall",
        ],
      },
      {
        title: "Rückfragenflut im Service reduzieren",
        problem: "Viele Rückfragen zu Status und FAQs überlasten den Service.",
        solution: "Status-Updates und FAQs automatisieren.",
        value: [
          "Weniger Tickets",
          "Bessere Kundenzufriedenheit",
        ],
      },
    ],
  },
  {
    name: "Industrie",
    cases: [
      {
        title: "Wartungstickets & Störungen strukturieren",
        problem: "Wartungstickets und Störungen kommen unstrukturiert (E-Mail, Anruf) an.",
        solution: "Automatische Ticket-Erstellung und Priorisierung, klare SLAs.",
        value: [
          "Weniger Stillstand",
          "Klare SLAs",
        ],
      },
      {
        title: "Qualitätsberichte automatisch erstellen",
        problem: "Qualitätsberichte werden manuell aus Daten erstellt.",
        solution: "Daten bündeln und Reports automatisch generieren.",
        value: [
          "Schnellere Freigaben",
          "Weniger Ausschuss",
        ],
      },
    ],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeCase, setActiveCase] = useState(0);

  const currentIndustry = industries[activeIndustry];
  const currentCase = currentIndustry.cases[activeCase];
  const totalCases = currentIndustry.cases.length;

  const paginateCase = (direction: number) => {
    setActiveCase((prev) => (prev + direction + totalCases) % totalCases);
  };

  const handleIndustryChange = (index: number) => {
    setActiveIndustry(index);
    setActiveCase(0);
  };

  const renderVisualization = () => {
    if (activeIndustry === 0) {
      return (
        <div className="grid h-full grid-rows-[auto_1fr] gap-4">
          <div className="flex items-center justify-between rounded-xl border border-zinc-800/70 bg-zinc-900/60 px-4 py-3">
            <div>
              <p className="text-xs text-zinc-400">Posteingang</p>
              <p className="text-sm text-zinc-200">De-Eskalation aktiv</p>
            </div>
            <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
              KI Antwort
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Mieteranfrage Heizung", tag: "dringend" },
              { title: "Eigentümer Rückfrage", tag: "neutral" },
              { title: "Beschwerde Lärm", tag: "eskaliert" },
              { title: "Termin Wartung", tag: "beantwortet" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-800/70 bg-black/40 p-3"
              >
                <p className="text-sm text-zinc-200">{item.title}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-zinc-500">vor 2h</span>
                  <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeIndustry === 1) {
      return (
        <div className="grid h-full grid-rows-[auto_1fr] gap-4">
          <div className="rounded-xl border border-zinc-800/70 bg-black/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              KYC-Prüfung
            </p>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { label: "Ausweis", status: "ok" },
                { label: "Einkommensnachweis", status: "ok" },
                { label: "Adressnachweis", status: "fehlt" },
              ].map((step) => (
                <div
                  key={step.label}
                  className="flex items-center justify-between rounded-lg border border-zinc-800/70 bg-zinc-900/70 px-3 py-2"
                >
                  <span className="text-zinc-200">{step.label}</span>
                  <span
                    className={
                      step.status === "ok"
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }
                  >
                    {step.status === "ok" ? "✓" : "anfordern"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-xs text-violet-200">
            KI prüft Dokumente und fordert Fehlendes automatisch an
          </div>
        </div>
      );
    }

    if (activeIndustry === 2) {
      const columns = [
        { col: "Eingegangen", count: "3", items: ["#1044", "#1043", "#1042"] },
        { col: "In Prüfung", count: "2", items: ["#1041", "#1040"] },
        { col: "Reguliert", count: "5", items: ["#1039", "#1038"] },
      ];
      return (
        <div className="grid h-full grid-cols-3 gap-2">
          {columns.map((c) => (
            <div
              key={c.col}
              className="flex flex-col rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-3"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                {c.col}
              </p>
              <p className="mt-2 text-2xl font-bold text-zinc-100">{c.count}</p>
              <div className="mt-2 space-y-1">
                {c.items.map((id) => (
                  <div
                    key={id}
                    className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-300"
                  >
                    Schaden {id}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid h-full grid-rows-[auto_1fr] gap-4">
        <div className="rounded-xl border border-zinc-800/70 bg-black/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
            Wartungs-Tickets
          </p>
          <div className="mt-4 space-y-2">
            {[
              { title: "Anlage 3 – Druckluft", priority: "Hoch", sla: "2h" },
              { title: "Anlage 1 – Förderband", priority: "Mittel", sla: "8h" },
              { title: "Anlage 2 – Kühlung", priority: "Niedrig", sla: "24h" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-lg border border-zinc-800/70 bg-zinc-900/70 px-3 py-2 text-sm"
              >
                <span className="text-zinc-200">{item.title}</span>
                <div className="flex gap-2">
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-xs text-zinc-300">
                    {item.priority}
                  </span>
                  <span className="text-xs text-violet-400">SLA {item.sla}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-xs text-violet-200">
          KI erstellt Tickets automatisch und priorisiert nach SLA
        </div>
      </div>
    );
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
            Beispiele pro Branche
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Konkrete Lösungen für Ihre Branche
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-zinc-400"
          >
            Wählen Sie Ihre Branche und sehen Sie, wie KI-Automatisierung
            typische Probleme löst.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {industries.map((ind, i) => (
            <button
              key={ind.name}
              onClick={() => handleIndustryChange(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeIndustry === i
                  ? "bg-violet-500 text-white"
                  : "border border-zinc-600 bg-zinc-900/50 text-zinc-300 hover:border-violet-500/50 hover:text-white"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div className="flex aspect-video items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`viz-${activeIndustry}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="h-full w-full rounded-2xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/80 via-black/60 to-black/80 p-5"
              >
                {renderVisualization()}
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            <div className="mb-4 flex gap-2">
              {currentIndustry.cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeCase === i ? "w-8 bg-violet-500" : "w-2 bg-zinc-600"
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeIndustry}-${activeCase}`}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -80) paginateCase(1);
                  if (offset.x > 80) paginateCase(-1);
                }}
              >
                <h3 className="font-display text-2xl font-bold">
                  {currentCase.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-400">
                  Problem
                </p>
                <p className="mt-1 text-zinc-300">{currentCase.problem}</p>
                <p className="mt-3 text-sm font-medium text-zinc-400">
                  Lösung
                </p>
                <p className="mt-1 text-zinc-300">{currentCase.solution}</p>
                <p className="mt-4 text-sm font-medium text-white">
                  Nutzen:
                </p>
                <ul className="mt-2 space-y-1">
                  {currentCase.value.map((item) => (
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
          ← Wischen oder Tab wechseln für weitere Beispiele →
        </motion.p>
      </div>
    </section>
  );
}
