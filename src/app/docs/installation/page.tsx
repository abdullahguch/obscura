import type { Metadata } from "next";
import { CodeBlock } from "@/site/code-block";

export const metadata: Metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <article className="max-w-2xl">
      <p className="catalog">Docs / 01</p>
      <h1 className="mt-3 font-display text-5xl italic">Installation</h1>
      <p className="mt-6 text-ink-soft">
        Obscura is the repository. Clone it to run the site, then copy the library into any
        React app that already has Tailwind CSS v4.
      </p>
      <h2 className="mt-10 font-display text-2xl italic">Run this site</h2>
      <CodeBlock
        className="mt-4"
        code={`git clone https://github.com/abdullahguc/obscura.git
cd obscura
npm install
npm run dev`}
      />
      <h2 className="mt-10 font-display text-2xl italic">Use the components</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-soft">
        <li>
          Copy <code className="font-mono text-ink">src/library</code> into your project.
        </li>
        <li>
          Copy the CSS tokens from <code className="font-mono text-ink">src/app/globals.css</code>{" "}
          into your global stylesheet (the <code className="font-mono text-ink">:root</code>,{" "}
          <code className="font-mono text-ink">.dark</code>, and{" "}
          <code className="font-mono text-ink">@theme inline</code> blocks).
        </li>
        <li>
          Install the small runtime helpers:
        </li>
      </ol>
      <CodeBlock
        className="mt-4"
        code={`npm install clsx tailwind-merge class-variance-authority`}
      />
      <p className="mt-6 text-ink-soft">
        Then import from the barrel:
      </p>
      <CodeBlock
        className="mt-4"
        code={`import { Button, Input, Dialog } from "@/library"

export function Proof() {
  return <Button variant="lamp">Expose</Button>
}`}
      />
    </article>
  );
}
