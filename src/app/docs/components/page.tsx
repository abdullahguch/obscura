import type { Metadata } from "next";
import Link from "next/link";
import { components, groups } from "@/site/registry";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentsIndexPage() {
  return (
    <article>
      <p className="catalog">Docs / catalog</p>
      <h1 className="mt-3 font-display text-5xl italic">All plates</h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Every component is a page with a live proof, a usage sketch, and a path to the
        source file in this repo.
      </p>
      <div className="mt-10 space-y-12">
        {groups.map((group) => (
          <section key={group}>
            <h2 className="catalog mb-4">{group}</h2>
            <div className="grid gap-px border border-ink bg-ink sm:grid-cols-2">
              {components
                .filter((item) => item.group === group)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/docs/components/${item.slug}`}
                    className="bg-paper p-5 hover:bg-safelight"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl italic">{item.name}</h3>
                      <span className="catalog">{item.number}</span>
                    </div>
                    <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
