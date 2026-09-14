import Link from "next/link";
import { components, docsNav, groups } from "@/site/registry";

export function DocsSidebar() {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto pr-4">
        <p className="catalog mb-3">Start here</p>
        <ul className="mb-8 space-y-1 text-sm">
          {docsNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-ink-soft hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {groups.map((group) => (
          <div key={group} className="mb-6">
            <p className="catalog mb-2">{group}</p>
            <ul className="space-y-1 text-sm">
              {components
                .filter((item) => item.group === group)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/docs/components/${item.slug}`}
                      className="text-ink-soft hover:text-ink"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
