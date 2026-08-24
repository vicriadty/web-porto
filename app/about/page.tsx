import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "About",
  description: "About Vicri Aditiya — full-stack web developer.",
};

const paragraphs = [
  "I'm Vicri Aditiya, a full-stack web developer based in Indonesia. I care about shipping fast, accessible products that feel effortless to use — the whole journey from database to pixel-perfect UI.",
  "My work spans TypeScript, React, and Next.js on the frontend, and Node.js APIs backed by PostgreSQL on the backend. I care about clean architecture, performance, and code that stays easy to maintain as a product grows.",
  "I enjoy problem-solving at both ends of the stack: designing the data model, building the API, then crafting the interface people actually interact with. To me, the best features are the ones you don't have to think about.",
  "When I'm not coding, I explore new tools, contribute to open source, and look for ways to make developer experiences better. I'm always up for a good collaboration.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <FadeIn>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          About Me
        </h1>
        <div className="mt-8 space-y-5 text-zinc-400">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
