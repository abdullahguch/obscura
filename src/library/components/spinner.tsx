import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "size-4 border-[1.5px]",
  md: "size-6 border-2",
  lg: "size-9 border-[2.5px]",
};

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      data-slot="spinner"
      className={cn(
        "inline-block animate-spin rounded-full border-ink border-t-transparent",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
