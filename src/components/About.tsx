"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ueber-mich" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Über mich</span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Nicole Thorisch
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Physikerin & KI/ML Engineer | Expertin für Deep Learning &
              Software Entwicklung
            </p>
            <div className="mt-6 space-y-4 text-zinc-400">
              <p>
                Als KI Ingenieurin am Max-Planck-Institut für Quantenoptik
                entwickle ich hochpräzise Machine Learning Architekturen in der
                Gruppe von Nobelpreisträger Prof. Ferenc Krausz.
              </p>
              <p>
                Nach meiner Forschung an der Harvard Medical School und bei
                TUM.ai verbinde ich heute wissenschaftliche Exzellenz mit
                professioneller Software Entwicklung: Von der Daten-Pipeline bis
                zum fertigen LLM-System.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                LinkedIn
              </a>
              <a href="#" className="text-violet-400 hover:underline">
                ITCS Podcast
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/image-1769616082980.png?width=8000&height=8000&resize=contain"
                alt="Nicole Thorisch"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
