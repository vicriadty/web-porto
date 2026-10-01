"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      data-motion-element
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="project-card group h-full rounded-[24px] bg-surface p-3 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
    >
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} source code on GitHub`}
        className="block h-full rounded-[20px]"
      >
        <motion.div
          data-motion-element
          initial={reduce ? { scale: 1 } : { scale: 1.06 }}
          whileInView={{ scale: 1 }}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="project-preview"
          aria-hidden="true"
        >
          <span className="project-preview-grid" />
          <span className="project-preview-index">
            PROJECT / {(index + 1).toString().padStart(2, "0")}
          </span>
          <span className="project-preview-mark">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        </motion.div>

        <div className="p-3 pb-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {project.category} · {project.year}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white"
            >
              ↗
            </span>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-6 text-muted">
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </motion.article>
  );
}
