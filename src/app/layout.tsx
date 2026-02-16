import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KI & Analytics Consulting | Nicole Thorisch",
  description:
    "KI-Automatisierung für Immobilienverwaltungen, Banken, Versicherungen und Industrie. Prozesse automatisieren, Mitarbeiter entlasten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${outfit.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
