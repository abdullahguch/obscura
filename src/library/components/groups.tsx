import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export function ScrollArea({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="scroll-area"
      className={cn("overflow-auto rounded-ob border border-ink bg-paper-2", className)}
      {...props}
    />
  );
}

export function InputGroup({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "flex overflow-hidden rounded-ob border border-ink bg-paper shadow-stamp focus-within:shadow-[3px_3px_0_0_var(--safelight)]",
        "[&_input]:border-0 [&_input]:shadow-none [&_input]:focus:shadow-none",
        className,
      )}
      {...props}
    />
  );
}

export function InputGroupAddon({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center border-r border-ink bg-paper-2 px-3 text-xs tracking-[0.12em] text-ink-soft uppercase",
        className,
      )}
      {...props}
    />
  );
}
