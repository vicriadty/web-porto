import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const navClass = cn(
  "text-sm text-zinc-400 transition-colors hover:text-zinc-100",
);

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-background/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-100"
        >
          {site.name}
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {pageLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={navClass}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.resumeUrl}
              download="Vicri_Aditiya_Resume.pdf"
              className="rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
