"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#prozess", label: "Prozess" },
  { href: "#beispiele", label: "Beispiele" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800/50 bg-black/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ebddd4d1-529f-4f5c-8cf9-5c0783c3927a/nicole-thorisch-logo-komplett-zoomed-1769432467459.png?width=8000&height=8000&resize=contain"
            alt="Nicole Thorisch Logo"
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/nicole-thorisch/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            Gespräch vereinbaren
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-6 w-6 items-center justify-center md:hidden"
          aria-label="Menu"
        >
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-zinc-800 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://calendly.com/nicole-thorisch/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-violet-600 py-3 text-center font-medium text-white"
              >
                Gespräch vereinbaren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
