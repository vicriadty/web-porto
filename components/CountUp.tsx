"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  minDigits?: number;
  className?: string;
};

export function CountUp({
  value,
  prefix = "[",
  suffix = "]",
  minDigits = 1,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) => {
    const current = Math.round(latest).toString().padStart(minDigits, "0");
    return `${prefix}${current}${suffix}`;
  });
  const finalValue = `${prefix}${value.toString().padStart(minDigits, "0")}${suffix}`;

  useEffect(() => {
    if (reduce) {
      count.set(value);
      return;
    }

    if (!inView) return;

    const controls = animate(count, value, {
      duration: 1,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, inView, reduce, value]);

  return (
    <span className={className}>
      <motion.span ref={ref} aria-hidden="true" className="motion-count">
        {formatted}
      </motion.span>
      <span aria-hidden="true" className="motion-count-reduced">
        {finalValue}
      </span>
      <span className="sr-only">{finalValue}</span>
    </span>
  );
}
