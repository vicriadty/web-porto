import { FadeIn } from "./FadeIn";

const groups = [
  {
    title: "Frontend",
    skills: [
      "HTML / CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Prisma", "GraphQL"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Vercel", "Linux"],
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
                      key={skill}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
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
