import type { LabelHTMLAttributes } from "react";
import { cn } from "../cn";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-xs font-medium tracking-[0.14em] text-ink-soft uppercase",
        "peer-disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
