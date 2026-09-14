"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/library/cn";

export function CodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-ob border border-ink bg-ink text-paper", className)}>
      <button
        type="button"
        className="absolute top-2 right-2 inline-flex size-8 items-center justify-center rounded-ob border border-paper/20 text-paper/80 hover:bg-paper/10"
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        }}
        aria-label="Copy code"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
