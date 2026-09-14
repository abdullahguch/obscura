import type { Metadata } from "next";
import { CodeBlock } from "@/site/code-block";

export const metadata: Metadata = {
  title: "Theming",
};

export default function ThemingPage() {
  return (
    <article className="max-w-2xl">
      <p className="catalog">Docs / 02</p>
      <h1 className="mt-3 font-display text-5xl italic">Theming</h1>
      <p className="mt-6 text-ink-soft">
        Color, radius, and the stamp shadow are CSS variables. Light mode is a studio with
        fiber paper. Dark mode is the darkroom. Toggle with the moon in the header — it
        sets a <code className="font-mono text-ink">.dark</code> class on{" "}
        <code className="font-mono text-ink">html</code>.
      </p>
      <h2 className="mt-10 font-display text-2xl italic">Tokens</h2>
      <CodeBlock
        className="mt-4"
        code={`:root {
  --paper: #f1ebe0;
  --ink: #161310;
  --safelight: #e39b1a;
  --lens: #2f5d5a;
  --stop: #9c3144;
  --radius: 3px;
  --stamp: 3px 3px 0 0 var(--ink);
}`}
      />
      <p className="mt-6 text-ink-soft">
        Rename the palette if you want a different studio. Keep the stamp shadow if you
        want Obscura to still feel like type on paper. Drop it if you don&apos;t.
      </p>
      <h2 className="mt-10 font-display text-2xl italic">Type</h2>
      <p className="mt-4 text-ink-soft">
        Display is Fraunces. Interface is Outfit. Code is IBM Plex Mono. Swap them in{" "}
        <code className="font-mono text-ink">src/app/layout.tsx</code>.
      </p>
    </article>
  );
}
