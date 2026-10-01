import { site } from "@/lib/site";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main"
        className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-border bg-white/85 p-1.5 pl-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        <a
          href="#hero"
          className="status-badge border-0 bg-transparent px-2 sm:px-3"
        >
          <span className="status-dot" aria-hidden="true" />
          <span className="hidden sm:inline">{site.availability}</span>
          <span className="sm:hidden">Available</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary min-h-11 px-4 sm:px-5">
          Let&apos;s Talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
