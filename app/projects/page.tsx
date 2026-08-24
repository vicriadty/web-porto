import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Projects",
  description:
    "Selected projects by Vicri Aditiya — full-stack web developer.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          Projects
        </h1>
        <p className="mt-3 max-w-xl text-zinc-400">
          A closer look at the things I&apos;ve built — from full-stack apps to
          dashboards and developer tools.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
