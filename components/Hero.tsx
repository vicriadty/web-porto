"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const reveal = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="mx-auto w-full max-w-[1432px] px-4 pt-4"
    >
      <div className="[--hero-pad:clamp(24px,4vw,64px)] relative grid min-h-[calc(100svh-32px)] grid-rows-[auto_1fr] overflow-hidden rounded-[28px] bg-card p-[var(--hero-pad)] pt-32 sm:pt-36">
        <motion.div
          data-motion-element
          style={{ y: reduce ? 0 : nameY }}
          className="relative z-0"
        >
          <motion.div
            {...reveal(0.1)}
            data-motion-element
            className="text-center"
          >
            <h1 className="flex flex-col justify-center text-[clamp(3.5rem,12vw,11rem)] font-black uppercase leading-[0.76] tracking-[-0.055em] sm:flex-row sm:gap-[0.08em] sm:whitespace-nowrap">
              <span className="text-outline">{site.firstName}</span>
              <span>{site.lastName}</span>
            </h1>
          </motion.div>
        </motion.div>

        <div className="relative z-10 mt-10 grid items-end gap-10 md:mt-0 md:grid-cols-[1fr_minmax(280px,400px)_1fr] md:gap-6">
          <motion.div
            {...reveal(0.26)}
            data-motion-element
            className="max-w-[320px] md:pb-2"
          >
            <p className="text-2xl font-semibold tracking-[-0.02em]">
              {site.role}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              {site.tagline}
            </p>
            <a href="#contact" className="btn-primary mt-7">
              Let&apos;s collaborate <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <motion.figure
            data-motion-element
            style={{ y: reduce ? 0 : portraitY }}
            className="relative order-first mx-auto h-[min(120vw,520px)] w-full max-w-[400px] md:order-none md:mb-[calc(var(--hero-pad)*-1)] md:h-[min(78vh,760px)]"
          >
            <motion.div
              data-motion-element
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/hero-image.png"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(max-width: 767px) 80vw, 400px"
                className="object-contain object-bottom grayscale mix-blend-multiply"
              />
            </motion.div>
          </motion.figure>

          <motion.ul
            {...reveal(0.34)}
            data-motion-element
            aria-label="Social links"
            className="flex flex-wrap gap-3 md:flex-col md:items-end md:pb-2"
          >
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="btn-ghost min-w-32 justify-between bg-white"
                >
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
