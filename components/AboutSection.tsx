import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

const paragraphs = [
  "I'm a full-stack web developer focused on shipping fast, accessible products. I enjoy the whole journey — designing the data model, building the API, and crafting a UI that feels effortless.",
  "My day-to-day work spans TypeScript, React, Next.js on the frontend, and Node.js APIs backed by PostgreSQL on the backend. I care about clean architecture, performance, and writing code that's easy to maintain.",
  "When I'm not coding, I explore new tools, contribute to open source, and look for ways to make developer experiences better. I'm always up for a good collaboration.",
];

export function AboutSection() {
  return (
    <section id="about">
      <div className="section-shell">
        <FadeIn>
          <div className="section-heading">
            <div>
              <p className="section-kicker">Profile</p>
              <h2 className="section-title">
                About <span className="section-count">[01]</span>
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.5fr]">
          <FadeIn>
            <aside className="flex h-full min-h-80 flex-col justify-between rounded-[24px] bg-ink p-8 text-white sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-white/60">
                Based in {site.location}
              </p>
              <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                I turn complex systems into products people can use with ease.
              </p>
              <a
                href={site.resumeUrl}
                download="Vicri_Aditiya_Resume.pdf"
                className="btn-light mt-10 self-start"
              >
                Download CV <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </FadeIn>

          <div className="rounded-[24px] bg-card p-8 sm:p-10 lg:p-12">
            <FadeIn delay={0.08}>
              <p className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                From the data model to the final interaction, I care about the
                whole product.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <FadeIn key={paragraph.slice(0, 24)} delay={0.08 * index}>
                  <p className="text-[15px] leading-7 text-muted">{paragraph}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
