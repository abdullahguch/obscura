"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../cn";

export const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-ob border border-ink text-sm font-medium transition-colors disabled:opacity-40 [&_svg]:size-4",
  {
    variants: {
      pressed: {
        true: "bg-safelight text-ink shadow-[1px_1px_0_0_var(--shadow)]",
        false: "bg-paper text-ink hover:bg-paper-2",
      },
      size: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-10 px-3",
        icon: "size-10",
      },
    },
    defaultVariants: {
      pressed: false,
      size: "md",
    },
  },
);

export type ToggleProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof toggleVariants> & {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
  };

export function Toggle({
  className,
  pressed = false,
  onPressedChange,
  size,
  ...props
}: ToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      data-slot="toggle"
      onClick={() => onPressedChange?.(!pressed)}
      className={cn(toggleVariants({ pressed, size }), className)}
      {...props}
    />
  );
}
