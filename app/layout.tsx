import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

// Self-hosted variable fonts (no Google Fonts network dependency at build
// or runtime). Weight is omitted so each file serves its full variable
// range; only the latin subset is bundled.
const interTight = localFont({
  src: "./fonts/InterTight-Variable-latin.woff2",
  variable: "--font-inter-tight",
  display: "swap",
});

const display = localFont({
  src: "./fonts/Archivo-Variable-latin.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vicri Aditiya | Full-Stack Developer",
    template: "%s | Vicri Aditiya",
  },
  description:
    "Vicri Aditiya is a full-stack developer building fast, accessible, and polished digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SmoothScroll>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
