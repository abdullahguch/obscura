import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export function Field({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="field" className={cn("flex flex-col gap-2", className)} {...props} />
  );
}

export function FieldHint({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p data-slot="field-hint" className={cn("text-xs text-silver", className)} {...props} />
  );
}

export function FieldError({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      role="alert"
      data-slot="field-error"
      className={cn("text-xs text-stop", className)}
      {...props}
    />
  );
}
