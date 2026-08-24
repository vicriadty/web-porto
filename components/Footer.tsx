import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-400 sm:flex-row">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/about" className="transition-colors hover:text-zinc-200">
            About
          </Link>
          <Link href="/projects" className="transition-colors hover:text-zinc-200">
            Projects
          </Link>
          <Link href="/blog" className="transition-colors hover:text-zinc-200">
            Blog
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
