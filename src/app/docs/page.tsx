import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/library/components/button";
import { siteConfig } from "@/site/config";

export const metadata: Metadata = {
  title: "Introduction",
};

export default function DocsIndexPage() {
  return (
    <article className="max-w-2xl">
      <p className="catalog">Docs / 00</p>
      <h1 className="mt-3 font-display text-5xl italic">A library with a darkroom, not a dashboard.</h1>
      <p className="mt-6 text-lg text-ink-soft">
        {siteConfig.name} is a set of {siteConfig.componentCount} React components with a
        visual language of its own: fiber paper, letterpress shadows, catalog type, and a
        safelight used only when something needs to signal.
      </p>
      <p className="mt-4 text-ink-soft">
        Buttons, dialogs, inputs, tables — every primitive is written in this repository,
        with accessible HTML, so you can read it, change it, and publish it as yours.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/docs/installation" className={buttonVariants()}>
          Install
        </Link>
        <Link href="/docs/components" className={buttonVariants({ variant: "outline" })}>
          Components
        </Link>
      </div>
      <h2 className="mt-14 font-display text-3xl italic">What you get</h2>
      <ul className="mt-4 space-y-2 text-ink-soft">
        <li>Copy-paste source under <code className="font-mono text-ink">src/library</code></li>
        <li>Token-driven theming in CSS variables (studio light and darkroom)</li>
        <li>A promotional docs site you can deploy next to the GitHub repo</li>
        <li>Accessible primitives you can read and change</li>
      </ul>
    </article>
  );
}
