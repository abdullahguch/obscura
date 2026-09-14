import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import { cn } from "../cn";

export function Avatar({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="avatar"
      className={cn(
        "relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink bg-paper-2 text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, alt = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      data-slot="avatar-image"
      className={cn("size-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center bg-paper-3 text-ink-soft", className)}
      {...props}
    />
  );
}
