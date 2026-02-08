import Link from "next/link";
import Navbar from "@/components/Navbar";

const posts = [
  {
    category: "Strategie",
    date: "24. Jan 2026",
    title: "KI im Mittelstand: Wo fängt man sinnvoll an?",
    excerpt:
      "Viele Unternehmen stehen vor der Frage: Welche Prozesse eignen sich zuerst für KI? Ein Leitfaden für den pragmatischen Einstieg.",
    href: "/blog/ki-im-mittelstand-einstieg",
  },
  {
    category: "Sicherheit",
    date: "15. Jan 2026",
    title: "Datenschutz & KI: DSGVO-konforme Lösungen",
    excerpt:
      "Wie Sie LLMs und Automatisierungen nutzen können, ohne die Sicherheit Ihrer Unternehmensdaten zu gefährden.",
    href: "/blog/datenschutz-ki-dsgvo",
  },
  {
    category: "Automatisierung",
    date: "08. Jan 2026",
    title: "Die Zukunft der Email-Bearbeitung",
    excerpt:
      "Wie KI-Assistenten die tägliche Flut an Kundenanfragen bändigen und was das für die Effizienz in Ihrem Team bedeutet.",
    href: "/blog/zukunft-email-automatisierung",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="text-cyan-400 hover:underline">
            ← Zurück zur Übersicht
          </Link>
          <h1 className="mt-8 font-display text-4xl font-bold">
            Blog & Insights
          </h1>
          <p className="mt-4 text-slate-400">
            Aktuelle Entwicklungen, Strategien und Praxisbeispiele rund um
            künstliche Intelligenz im Unternehmen.
          </p>
          <div className="mt-16 space-y-8">
            {posts.map((post) => (
              <article
                key={post.href}
                className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-cyan-400">{post.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-500">{post.date}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold">
                  {post.title}
                </h2>
                <p className="mt-3 text-slate-400">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="mt-4 inline-flex text-cyan-400 hover:underline"
                >
                  Beitrag lesen →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
