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
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border border-zinc-900 bg-surface p-6"
    >
      <div
        aria-hidden="true"
        className="flex h-40 items-center justify-center rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-800 to-zinc-950"
      >
        <span className="text-3xl font-bold text-zinc-300">
          {project.title.slice(0, 1)}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-zinc-100">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code on GitHub`}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
        >
          GitHub
        </a>
      </div>
    </motion.article>
  );
}
