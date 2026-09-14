"use client";

import { demos } from "@/site/demos";

export function ComponentDemo({ slug }: { slug: string }) {
  const Demo = demos[slug];
  if (!Demo) return <p className="text-sm text-silver">No proof for this plate yet.</p>;
  return <Demo />;
}
