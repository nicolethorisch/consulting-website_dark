"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    category: "Strategie",
    date: "24. Jan 2026",
    title: "KI im Mittelstand: Wo fängt man sinnvoll an?",
    excerpt:
      "Viele Unternehmen stehen vor der Frage: Welche Prozesse eignen sich zuerst für KI? Ein Leitfaden für den pragmatischen Einstieg.",
    href: "/blog/ki-im-mittelstand-einstieg",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  },
  {
    category: "Sicherheit",
    date: "15. Jan 2026",
    title: "Datenschutz & KI: DSGVO-konforme Lösungen",
    excerpt:
      "Wie Sie LLMs und Automatisierungen nutzen können, ohne die Sicherheit Ihrer Unternehmensdaten zu gefährden.",
    href: "/blog/datenschutz-ki-dsgvo",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    category: "Automatisierung",
    date: "08. Jan 2026",
    title: "Die Zukunft der Email-Bearbeitung",
    excerpt:
      "Wie KI-Assistenten die tägliche Flut an Kundenanfragen bändigen und was das für die Effizienz in Ihrem Team bedeutet.",
    href: "/blog/zukunft-email-automatisierung",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="border-t border-zinc-800/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="section-tag">Wissensbasis</span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Einblicke & Expertenwissen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Aktuelle Entwicklungen und praxisnahe Tipps rund um KI im
            Unternehmen
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition hover:border-violet-500/30"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-zinc-800 bg-black/40">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-violet-400">{post.category}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-500">{post.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold transition group-hover:text-violet-400">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-400">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:underline"
              >
                Beitrag lesen →
              </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/blog" className="text-violet-400 hover:underline">
            Alle Beiträge entdecken
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
