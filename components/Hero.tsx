"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = false; // TEMP: preview animations

  return (
    <section id="home" className="flex min-h-[88vh] items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              {site.role}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl">
              Hi, I&apos;m {site.name}.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <motion.div
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border border-zinc-800"
          >
            <Image
              src="/profile-picture.png"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="160px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
