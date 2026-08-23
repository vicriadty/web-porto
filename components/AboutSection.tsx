import { FadeIn } from "./FadeIn";

const paragraphs = [
  "I'm a full-stack web developer focused on shipping fast, accessible products. I enjoy the whole journey — designing the data model, building the API, and crafting a UI that feels effortless.",
  "My day-to-day work spans TypeScript, React, Next.js on the frontend, and Node.js APIs backed by PostgreSQL on the backend. I care about clean architecture, performance, and writing code that's easy to maintain.",
  "When I'm not coding, I explore new tools, contribute to open source, and look for ways to make developer experiences better. I'm always up for a good collaboration.",
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            About Me
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-zinc-400">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
