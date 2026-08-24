import Image from "next/image";
import { FadeIn } from "./FadeIn";

type Skill = { name: string; icon: string; invert?: boolean };
type Group = { title: string; skills: Skill[] };

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const groups: Group[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs", invert: true },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express", invert: true },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "Prisma", icon: "prisma" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", invert: true },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel", invert: true },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Skills & Tools
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            The stack I work with most, grouped by area.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <FadeIn key={group.title}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 transition duration-200 hover:scale-105 hover:border-cyan-400 hover:bg-zinc-800"
                    >
                      <Image
                        src={devicon(skill.icon)}
                        alt=""
                        aria-hidden
                        width={18}
                        height={18}
                        unoptimized
                        className={skill.invert ? "invert" : undefined}
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
