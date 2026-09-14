import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export function Kbd({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex h-6 min-w-6 items-center justify-center rounded-ob border border-ink bg-paper-2 px-1.5 font-mono text-[11px] text-ink shadow-[1px_1px_0_0_var(--shadow)]",
        className,
      )}
      {...props}
    />
  );
}
