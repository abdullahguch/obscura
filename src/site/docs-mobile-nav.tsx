"use client";

import { useRouter } from "next/navigation";
import { components, docsNav } from "@/site/registry";

export function DocsMobileNav() {
  const router = useRouter();

  return (
    <label className="mb-8 block lg:hidden">
      <span className="catalog mb-2 block">On this site</span>
      <select
        className="h-10 w-full rounded-ob border border-ink bg-paper px-3 text-sm shadow-stamp"
        defaultValue=""
        onChange={(event) => {
          if (event.target.value) router.push(event.target.value);
        }}
      >
        <option value="" disabled>
          Jump to a plate…
        </option>
        {docsNav.map((item) => (
          <option key={item.href} value={item.href}>
            {item.label}
          </option>
        ))}
        {components.map((item) => (
          <option key={item.slug} value={`/docs/components/${item.slug}`}>
            {item.number} {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}
