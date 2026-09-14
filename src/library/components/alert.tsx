import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export const alertVariants = cva("relative w-full rounded-ob border border-ink p-4 shadow-stamp", {
  variants: {
    tone: {
      plate: "bg-paper-2 text-ink",
      lamp: "bg-safelight/30 text-ink",
      lens: "border-lens bg-lens/10 text-ink",
      stop: "border-stop bg-stop/10 text-ink",
    },
  },
  defaultVariants: {
    tone: "plate",
  },
});

export type AlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert({ className, tone, ...props }: AlertProps) {
  return (
    <div role="alert" data-slot="alert" className={cn(alertVariants({ tone }), className)} {...props} />
  );
}

export function AlertTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h5 data-slot="alert-title" className={cn("font-display text-lg", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="alert-description"
      className={cn("mt-1 text-sm text-ink-soft", className)}
      {...props}
    />
  );
}
