import Link from "next/link";
import { buttonVariants } from "@/library/components/button";
import { siteConfig } from "@/site/config";
import { HeroPlayground } from "@/site/hero-playground";
import { components } from "@/site/registry";

const pillars = [
  {
    number: "I",
    title: "Grain",
    body: "Interfaces don't need to be sterile. Obscura keeps paper tooth, ink weight, and a film of noise on the surface.",
  },
  {
    number: "II",
    title: "Weight",
    body: "Hard borders and letterpress shadows. Buttons yield when pressed. Nothing floats in a nameless gray void.",
  },
  {
    number: "III",
    title: "Light",
    body: "One safelight. Amber for focus, signal, and the moment something matters. Everything else is paper and ink.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <section className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="catalog mb-6">Component library · v{siteConfig.version}</p>
          <h1 className="font-display text-6xl leading-[0.9] tracking-tight italic sm:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">
            {siteConfig.tagline} {siteConfig.componentCount} primitives you copy into your
            repo — not a black box you import and hope survives the next major version.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/docs" className={buttonVariants({ className: "px-6" })}>
              Open the darkroom
            </Link>
            <Link href="/docs/components" className={buttonVariants({ variant: "outline" })}>
              Browse plates
            </Link>
          </div>
        </div>
        <div className="border border-ink bg-paper-2 p-5 font-mono text-xs leading-relaxed text-ink-soft">
          <p className="catalog mb-3 text-ink">installation</p>
          <p>cp -r src/library your-app/src/library</p>
          <p className="mt-2"># own the source</p>
          <p># restyle the tokens</p>
          <p># never wait on a release</p>
        </div>
      </section>

      <section className="mt-20">
        <HeroPlayground />
      </section>

      <section className="mt-24 grid gap-px border border-ink bg-ink sm:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="bg-paper p-6 sm:p-8">
            <p className="catalog">{pillar.number}</p>
            <h2 className="mt-4 font-display text-4xl italic">{pillar.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="catalog">Catalog</p>
            <h2 className="mt-2 font-display text-4xl italic sm:text-5xl">
              {siteConfig.componentCount} plates
            </h2>
          </div>
          <Link href="/docs/components" className="text-sm underline decoration-ink/30 underline-offset-4">
            View all
          </Link>
        </div>
        <div className="grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {components.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/components/${item.slug}`}
              className="flex items-baseline justify-between gap-4 bg-paper px-4 py-4 hover:bg-safelight"
            >
              <span className="font-display text-xl italic">{item.name}</span>
              <span className="catalog">{item.number}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24 border border-ink bg-ink p-8 text-paper sm:p-12">
        <h2 className="max-w-2xl font-display text-4xl italic sm:text-5xl">
          Built to be copied, restyled, and published under your name.
        </h2>
        <p className="mt-4 max-w-xl text-paper/70">
          Obscura is the docs site and the library in one repository. Clone it, keep
          `src/library`, throw away the marketing if you want, and ship.
        </p>
        <div className="mt-8">
          <Link href="/docs/installation" className={buttonVariants({ variant: "lamp" })}>
            Installation notes
          </Link>
        </div>
      </section>
    </main>
  );
}
