import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 border border-transparent font-medium whitespace-nowrap transition-[transform,box-shadow,background-color,color] duration-150 select-none disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid:
          "bg-ink text-paper shadow-stamp hover:bg-ink-soft active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--shadow)]",
        outline:
          "border-ink bg-paper text-ink shadow-stamp hover:bg-ink hover:text-paper active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--shadow)]",
        ghost: "text-ink hover:bg-paper-2",
        lamp: "bg-safelight text-ink shadow-stamp hover:bg-safelight-soft active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--shadow)]",
        stop: "bg-stop text-paper shadow-stamp hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--shadow)]",
        lens: "bg-lens text-paper shadow-stamp hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_var(--shadow)]",
      },
      size: {
        sm: "h-8 rounded-ob px-3 text-xs",
        md: "h-10 rounded-ob px-4 text-sm",
        lg: "h-12 rounded-ob px-5 text-base",
        icon: "size-10 rounded-ob",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
