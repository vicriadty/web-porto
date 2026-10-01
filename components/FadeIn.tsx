"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useHydrationSafeReducedMotion } from "./useHydrationSafeReducedMotion";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useHydrationSafeReducedMotion();

  return (
    <motion.div
      ref={ref}
      data-motion-element
      initial={reduce === false ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
      animate={reduce === false ? (isInView ? { opacity: 1, y: 0 } : {}) : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
