"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";
import { useHydrationSafeReducedMotion } from "./useHydrationSafeReducedMotion";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Hero() {
  const reduce = useHydrationSafeReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const reveal = (delay: number) => ({
    initial: reduce === false ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 },
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
          style={{ y: reduce === false ? nameY : 0 }}
          className="relative z-[1]"
        >
          <motion.div
            {...reveal(0.1)}
            data-motion-element
            className="text-center"
          >
            <svg
              viewBox="0 0 1400 200"
              className="hero-name"
              role="img"
              aria-label={site.name}
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <text x="50%" y="150" textAnchor="middle" aria-hidden="true">
                <tspan className="name-outline">
                  {site.firstName.toUpperCase()}
                </tspan>{" "}
                <tspan className="name-solid">
                  {site.lastName.toUpperCase()}
                </tspan>
              </text>
            </svg>
          </motion.div>
        </motion.div>

        <div className="relative z-10 grid items-end gap-10 md:grid-cols-[1fr_minmax(280px,520px)_1fr] md:gap-6">
          <motion.div
            {...reveal(0.26)}
            data-motion-element
            className="relative z-[3] max-w-[320px] md:pb-2"
          >
            <p className="text-[28px] font-semibold leading-tight tracking-[-0.02em]">
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
            style={{ y: reduce === false ? portraitY : 0 }}
            className="hero-photo order-first mx-auto aspect-[1264/1641] w-full max-w-[510px] self-start md:order-none"
          >
            <motion.div
              data-motion-element
              initial={
                reduce === false ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/hero-pic.png"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 967px) 95vw, 600px"
                className="object-contain object-bottom grayscale mix-blend-multiply"
              />
            </motion.div>
          </motion.figure>

          <motion.ul
            {...reveal(0.34)}
            data-motion-element
            aria-label="Social links"
            className="relative z-[3] flex flex-wrap gap-3 md:flex-col md:items-end md:pb-2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="pointer-events-none absolute -top-9 right-2 hidden h-7 w-7 rotate-[15deg] text-ink md:block"
            >
              <path d="M5 3l14 9-7.5 1.2L9 20 5 3z" />
            </svg>
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
