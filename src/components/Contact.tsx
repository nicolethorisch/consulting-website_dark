"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 sm:p-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="mt-4 text-zinc-400">
            Lassen Sie uns in einem 30-minütigen Gespräch herausfinden, wie KI
            Automatisierungen Ihr Unternehmen voranbringen können.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
            <a
              href="#contact-form"
              className="rounded-lg border border-zinc-600 px-6 py-3 font-medium text-white transition hover:border-violet-500/50 hover:text-violet-400"
            >
              Anfrage per Email
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-zinc-800 pt-12">
            <a
              href="tel:+4915121343097"
              className="flex items-center gap-3 text-zinc-400 hover:text-white"
            >
              <span className="text-2xl">📞</span>
              +49 151 21343097
            </a>
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="text-2xl">📍</span>
              Unite Office, Rosenheimer Str. 116A, 81669 München
            </div>
          </div>
        </motion.div>

        <motion.form
          id="contact-form"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8"
        >
          <h3 className="font-display text-xl font-semibold">
            Kontaktformular
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400">
                E-Mail
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none"
                placeholder="ihre@email.de"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400">
                Nachricht
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none"
                placeholder="Wie kann ich Ihnen helfen?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              Nachricht senden
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
