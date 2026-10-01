export type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "./FadeIn";
import { CountUp } from "./CountUp";

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-shell">
        <FadeIn>
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2 className="section-title">
                Work{" "}
                <CountUp value={1} minDigits={1} className="section-count" />
              </h2>
            </div>
            <p className="hidden max-w-sm text-right text-[15px] leading-7 text-muted md:block">
              Full-stack products shaped from system architecture through the
              final interface.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
