"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="relative overflow-hidden rounded-3xl border border-zinc-800"
        style={{
          background:
            "linear-gradient(135deg, rgba(88, 28, 135, 0.5) 0%, rgba(59, 7, 100, 0.5) 100%)",
        }}
      >
        <div className="relative px-8 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Lassen Sie KI die Arbeit übernehmen, damit Sie schneller skalieren
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Buchen Sie noch heute ein Gespräch und starten Sie mit der
            Automatisierung.
          </p>
          <Link
            href="https://calendly.com/nicole-thorisch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
          >
            Kostenloses Gespräch buchen
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
        </div>
      </motion.div>
    </section>
  );
}
