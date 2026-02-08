"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/nicole-thorisch-logo-komplett-zoomed-1769432467459.png?width=8000&height=8000&resize=contain"
                alt="Nicole Thorisch Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-white">
                Newsletter
              </p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="ihre@email.de"
                  className="min-w-0 flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none"
                />
                <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">
                  Abonnieren
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium text-white">Links</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#leistungen" className="text-sm text-zinc-400 hover:text-white">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#prozess" className="text-sm text-zinc-400 hover:text-white">
                  Prozess
                </Link>
              </li>
              <li>
                <Link href="#beispiele" className="text-sm text-zinc-400 hover:text-white">
                  Beispiele
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-zinc-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-zinc-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Seiten</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#ueber-mich"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-zinc-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-white">Kontakt</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="tel:+4915121343097"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  +49 151 21343097
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Nicole Thorisch · KI & Analytics
          Consulting
        </div>
      </div>
    </footer>
  );
}
