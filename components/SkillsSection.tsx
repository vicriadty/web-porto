import { FadeIn } from "./FadeIn";
import { CountUp } from "./CountUp";

type Group = { title: string; description: string; skills: string[] };

const groups: Group[] = [
  {
    title: "Frontend",
    description: "Responsive interfaces with clear states, robust semantics, and thoughtful interaction.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Maintainable APIs and application logic designed around real product workflows.",
    skills: [
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "Prisma",
    ],
  },
  {
    title: "Database",
    description: "Practical data models, reliable persistence, and performance-aware querying.",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    description: "Tooling and delivery practices that keep releases repeatable and teams moving.",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Linux"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-shell">
        <FadeIn>
          <div className="section-heading">
            <div>
              <p className="section-kicker">How I Build</p>
              <h2 className="section-title">
                Skills &amp; Tools{" "}
                <CountUp
                  value={3}
                  minDigits={2}
                  className="section-count"
                />
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="border-y border-border">
          {groups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.05}>
              <article className="group grid gap-5 border-b border-border px-2 py-8 transition-colors last:border-b-0 hover:bg-white sm:px-6 lg:grid-cols-[64px_0.8fr_1.2fr] lg:items-start lg:gap-8">
                <p className="text-sm text-muted">
                  {(index + 1).toString().padStart(2, "0")}
                </p>
                <h3 className="text-[clamp(1.65rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.035em]">
                  {group.title}
                </h3>
                <div>
                  <p className="max-w-xl text-[15px] leading-7 text-muted">
                    {group.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors group-hover:bg-surface"
                    >
                      {skill}
                    </li>
                  ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
