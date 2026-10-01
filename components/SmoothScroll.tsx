"use client";

import Lenis from "lenis";
import { useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce !== false) return;

    const lenis = new Lenis({
      duration: 1.1,
      anchors: true,
      respectReducedMotion: true,
    });
    let frame: number;

    const update = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduce]);

  return children;
}
