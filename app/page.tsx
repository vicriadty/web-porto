"use client";

import { useState } from "react";
import { useHasVisited } from "@/hooks/useHasVisited";
import { SplashScreen } from "@/components/SplashScreen";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

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
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
