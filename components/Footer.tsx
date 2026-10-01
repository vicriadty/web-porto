import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-5 px-6 text-sm text-muted sm:flex-row sm:items-center lg:px-12">
        <p>
          &copy; {year} {site.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="#hero"
            className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
