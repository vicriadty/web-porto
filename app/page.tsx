"use client";

import { useState } from "react";
import { useHasVisited } from "@/hooks/useHasVisited";
import { SplashScreen } from "@/components/SplashScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { hasVisited, markAsVisited } = useHasVisited();
  const [splashDone, setSplashDone] = useState(false);

  const showSplash = hasVisited === false && !splashDone;

  const handleSplashDone = () => {
    markAsVisited();
    setSplashDone(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashDone} />}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
