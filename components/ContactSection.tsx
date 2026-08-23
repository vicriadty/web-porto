import { FadeIn } from "./FadeIn";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-zinc-900 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Have a project in mind or want to talk shop? My inbox is always
            open — I&apos;ll get back to you as soon as I can.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-zinc-950 transition-colors hover:bg-cyan-400"
          >
            Let&apos;s Talk
          </a>

          <address className="mt-12 not-italic">
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-zinc-300 transition-colors hover:text-cyan-300"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub: ${site.githubLabel}`}
                  className="text-zinc-300 transition-colors hover:text-cyan-300"
                >
                  {site.githubLabel}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn: ${site.linkedinLabel}`}
                  className="text-zinc-300 transition-colors hover:text-cyan-300"
                >
                  {site.linkedinLabel}
                </a>
              </li>
            </ul>
          </address>
        </FadeIn>
      </div>
    </section>
  );
}
