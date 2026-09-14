import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-ob border px-2 py-0.5 text-[11px] font-medium tracking-[0.12em] uppercase",
  {
    variants: {
      variant: {
        plate: "border-ink bg-paper-2 text-ink",
        lamp: "border-ink bg-safelight text-ink",
        lens: "border-lens bg-lens text-paper",
        stop: "border-stop bg-stop text-paper",
        fix: "border-fix bg-fix text-paper",
        ghost: "border-ink/30 bg-transparent text-ink-soft",
      },
    },
    defaultVariants: {
      variant: "plate",
    },
  },
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
