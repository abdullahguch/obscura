import Link from "next/link";
import { siteConfig } from "@/site/config";
import { Logo } from "@/site/logo";
import { ThemeToggle } from "@/site/theme-toggle";

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/components", label: "Components" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl italic">
          <Logo className="size-6" />
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden px-2 text-sm text-ink-soft hover:text-ink sm:inline"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.github}
            className="hidden px-2 text-sm text-ink-soft hover:text-ink sm:inline"
          >
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-silver sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-display text-lg italic text-ink">{siteConfig.name}</p>
        <p>v{siteConfig.version} · copy the source · you own the negatives</p>
      </div>
    </footer>
  );
}
