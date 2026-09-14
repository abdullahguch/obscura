import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  value?: number;
  max?: number;
};

export function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      data-slot="progress"
      className={cn("h-2.5 w-full overflow-hidden rounded-ob border border-ink bg-paper-2", className)}
      {...props}
    >
      <div
        className="h-full bg-safelight transition-[width] duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
