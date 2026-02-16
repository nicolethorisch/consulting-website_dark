"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";

const line1 = "KI-Automatisierung";
const line2 = "für Ihre Branche.";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <ParticleBackground />
      {/* Single structured purple form */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[48%] opacity-90"
        animate={{
          x: [0, -18, -36, -18, 0],
          y: [-20, 0, 20, 0, -20],
          rotate: [0, 1.5, 0, -1.5, 0],
          opacity: [0.78, 0.86, 0.9, 0.86, 0.78],
        }}
        transition={{
          duration: 3.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.95) 0%, rgba(124, 58, 237, 0.75) 42%, rgba(76, 29, 149, 0.35) 68%, rgba(0, 0, 0, 0) 80%)",
          boxShadow:
            "0 0 0 2px rgba(168, 85, 247, 0.55), 0 0 24px 6px rgba(139, 92, 246, 0.45), inset 0 0 30px rgba(255, 255, 255, 0.08)",
        }}
      />
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">
        {/* Optional badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/50 bg-violet-950/50 px-4 py-1.5"
        >
          <span className="rounded bg-violet-600 px-2 py-0.5 text-xs font-semibold text-white">
            Fokus
          </span>
          <span className="text-sm text-zinc-300">
            KI für Immobilien, Finanz, Versicherung & Industrie
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {mounted && (
            <>
              <span className="block text-white">{line1}</span>
              <span className="block text-white">{line2}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400"
        >
            Von De-Eskalation bei Mieteranfragen bis zur automatischen
            Dokumentenprüfung – maßgeschneiderte KI für Immobilien, Finanz,
            Versicherung und Industrie.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="https://calendly.com/nicole-thorisch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Gespräch vereinbaren
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </Link>
          <Link
            href="#leistungen"
            className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 font-medium text-white transition hover:border-violet-500/50 hover:text-violet-400"
          >
            Leistungen ansehen
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
