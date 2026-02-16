import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <p className="text-zinc-400 mb-8">Seite nicht gefunden</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 hover:underline font-medium transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
