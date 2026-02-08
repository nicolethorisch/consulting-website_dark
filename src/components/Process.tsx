"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

const typingLines = (() => {
  const lines = [
    {
      text: "def get_status(self):",
      content: (
        <>
          <span className="text-violet-400">def</span> get_status(self):
        </>
      ),
    },
    {
      text: '  return f"Status: {self.status}"',
      content: (
        <>
          {"  "}
          <span className="text-violet-400">return</span>{" "}
          <span className="text-green-400">f"Status: {`{self.status}`}"</span>
        </>
      ),
    },
    {
      text: "class AutomationTrigger:",
      content: (
        <>
          <span className="text-violet-400">class</span>{" "}
          <span className="text-amber-400">AutomationTrigger</span>:
        </>
      ),
    },
    {
      text: "  def __init__(self):",
      content: (
        <>
          {"  "}
          <span className="text-violet-400">def</span> __init__(self):
        </>
      ),
    },
    {
      text: '    self.status = "inactive"',
      content: (
        <>
          {"    "}self.status ={" "}
          <span className="text-green-400">"inactive"</span>
        </>
      ),
    },
  ];
  let delay = 0.2;
  return lines.map((line) => {
    const steps = Math.max(line.text.length, 1);
    const duration = Math.max(0.4, steps * 0.035);
    const typedLine = { ...line, steps, duration, delay };
    delay += duration + 0.12;
    return typedLine;
  });
})();

const steps = [
  {
    num: "1",
    title: "Prozess-Analyse",
    desc: "Wir analysieren Ihre Abläufe und identifizieren KI-Lösungen, um Workflows zu optimieren und die Effizienz zu steigern.",
    visual: (
      <div className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0">
            <motion.svg
              className="h-10 w-10 -rotate-90"
              viewBox="0 0 36 36"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2.4,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ transformOrigin: "50% 50%" }}
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#27272a"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeDasharray="35 100"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
          <span className="text-sm text-zinc-400">
            Aktuellen Workflow analysieren...
          </span>
        </div>
        <div className="space-y-2">
          {["System-Check", "Prozess-Check", "Manuelle Arbeit"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs">
              <span className="text-green-500">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "2",
    title: "KI-Entwicklung",
    desc: "Wir entwickeln intelligente Automatisierungssysteme, die auf Ihre Geschäftsprozesse zugeschnitten sind.",
    visual: (
      <motion.div
        initial={{ opacity: 0, y: 14, boxShadow: "0 0 0 rgba(139,92,246,0)" }}
        whileInView={{
          opacity: 1,
          y: 0,
          boxShadow: [
            "0 0 0 rgba(139,92,246,0)",
            "0 0 24px rgba(139,92,246,0.18)",
            "0 0 0 rgba(139,92,246,0)",
          ],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          boxShadow: { duration: 2.4, repeat: Infinity, repeatType: "mirror" },
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs"
      >
        <pre className="text-zinc-400">
          {typingLines.map((line, index) => {
            const typingStyle: CSSProperties = {
              ["--typing-steps" as keyof CSSProperties]: line.steps,
              ["--typing-duration" as keyof CSSProperties]: `${line.duration}s`,
              ["--typing-delay" as keyof CSSProperties]: `${line.delay}s`,
            };
            return (
              <motion.span
                key={`${line.text}-${index}`}
                className="typing-line"
                style={typingStyle}
                initial={{ animationPlayState: "paused" }}
                whileInView={{ animationPlayState: "running" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {line.content}
              </motion.span>
            );
          })}
        </pre>
      </motion.div>
    ),
  },
  {
    num: "3",
    title: "Nahtlose Integration",
    desc: "Wir integrieren KI-Lösungen reibungslos in Ihre bestehende Infrastruktur — mit minimalem Aufwand.",
    visual: (
      <div className="flex items-center justify-center gap-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 8, boxShadow: "0 0 0 rgba(139,92,246,0)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            boxShadow: "0 0 24px rgba(139,92,246,0.35)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="relative rounded-xl border border-violet-500/40 bg-violet-500/10 px-5 py-4 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-violet-300/80">
            AI Layer
          </span>
          <p className="mt-1 text-sm font-semibold text-violet-100">
            Unsere Lösung
          </p>
        </motion.div>
        <div className="relative h-px flex-1">
          <div className="absolute inset-0 border-t-2 border-dashed border-zinc-700/80" />
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.85, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"
          />
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "calc(100% - 0.5rem)" }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true, amount: 0.6 }}
          className="rounded-xl border border-zinc-600/80 bg-zinc-900/40 px-5 py-4 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            Stack
          </span>
          <p className="mt-1 text-sm font-semibold text-zinc-200">Ihr System</p>
        </motion.div>
      </div>
    ),
  },
  {
    num: "4",
    title: "Kontinuierliche Optimierung",
    desc: "Wir verbessern kontinuierlich die Performance, analysieren Erkenntnisse und optimieren die Automatisierung.",
    visual: (
      <div className="h-[162px] overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          className="space-y-3"
        >
          {[
            { name: "Chatbot-System", status: "Effizienz +20%", icon: "↻" },
            { name: "Workflow-System", status: "Update verfügbar", icon: "↑" },
            { name: "Vertriebs-System", status: "Aktuell", icon: "✓" },
            { name: "Support-System", status: "Stabil", icon: "✓" },
            { name: "Reporting-System", status: "Optimiert", icon: "↻" },
            { name: "Chatbot-System", status: "Effizienz +20%", icon: "↻" },
            { name: "Workflow-System", status: "Update verfügbar", icon: "↑" },
            { name: "Vertriebs-System", status: "Aktuell", icon: "✓" },
            { name: "Support-System", status: "Stabil", icon: "✓" },
            { name: "Reporting-System", status: "Optimiert", icon: "↻" },
          ].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-between rounded-lg border border-zinc-800 px-4 py-3"
            >
              <span className="text-sm text-white">{item.name}</span>
              <span className="flex items-center gap-2 text-sm text-zinc-400">
                {item.status}
                <span className="text-violet-400">{item.icon}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    ),
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prozess" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-tag"
          >
            Unser Prozess
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-3xl font-bold sm:text-4xl"
          >
            Unser einfacher, smarter und skalierbarer Prozess
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

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {steps.map((step, i) => {
            const isIntegration = step.num === "3";
            return (
            isIntegration ? (
              <div
                key={step.num}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <span className="section-tag">Schritt {step.num}</span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">{step.desc}</p>
                <div className="mt-6">{step.visual}</div>
              </div>
            ) : (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 * i,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <span className="section-tag">Schritt {step.num}</span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">{step.desc}</p>
                <div className="mt-6">{step.visual}</div>
              </motion.div>
            )
            );
          })}
        </div>
      </div>
    </section>
  );
}
