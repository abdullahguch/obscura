import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export type AspectRatioProps = HTMLAttributes<HTMLDivElement> & {
  ratio?: number;
};

export function AspectRatio({ className, ratio = 16 / 9, style, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative w-full", className)}
      style={{ aspectRatio: String(ratio), ...style }}
      {...props}
    />
  );
}
