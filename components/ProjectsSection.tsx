export type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./FadeIn";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Selected Projects
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            A few things I&apos;ve built — from full-stack apps to dashboards and
            developer tools.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
