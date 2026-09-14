import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/site/code-block";
import { CropFrame } from "@/site/crop-frame";
import { ComponentDemo } from "@/site/component-demo";
import { examples } from "@/site/demos";
import { components, getComponent } from "@/site/registry";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return components.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getComponent(slug);
  return { title: item?.name ?? "Component" };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const item = getComponent(slug);
  if (!item) notFound();

  return (
    <article className="max-w-3xl">
      <p className="catalog">
        {item.group} / {item.number}
      </p>
      <h1 className="mt-3 font-display text-5xl italic">{item.name}</h1>
      <p className="mt-4 text-lg text-ink-soft">{item.description}</p>
      <p className="mt-2 font-mono text-xs text-silver">{item.file}</p>

      <h2 className="mt-10 mb-4 font-display text-2xl italic">Proof</h2>
      <CropFrame className="p-6 sm:p-8">
        <ComponentDemo slug={item.slug} />
      </CropFrame>

      <h2 className="mt-10 mb-4 font-display text-2xl italic">Usage</h2>
      <CodeBlock code={examples[item.slug] ?? `import { ${item.name.replace(" ", "")} } from "@/library"`} />
    </article>
  );
}
