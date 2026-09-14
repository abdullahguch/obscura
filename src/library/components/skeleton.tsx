import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-ob bg-paper-3", className)}
      {...props}
    />
  );
}
