"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Hydration-safe reduced-motion flag.
 *
 * `useReducedMotion()` resolves during render, so branching on it directly
 * makes SSR output (unknown preference) differ from the first client render
 * and logs a hydration mismatch. This hook reports `true` only after mount,
 * keeping server and first client render identical (both take the animated
 * branch). Under `prefers-reduced-motion: reduce` the CSS fallback for
 * `[data-motion-element]` already paints the final state, so the one-commit
 * delay before switching to the static branch is invisible.
 */
export function useHydrationSafeReducedMotion() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mounted gate intentionally re-renders once post-hydration so SSR and first client render stay identical
    setMounted(true);
  }, []);

  return mounted && reduce === true;
}
