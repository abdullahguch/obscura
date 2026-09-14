import type { HTMLAttributes } from "react";
import { cn } from "../cn";

export function Breadcrumb({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav aria-label="Breadcrumb" data-slot="breadcrumb" className={cn("text-sm", className)} {...props} />
  );
}

export function BreadcrumbList({ className, ...props }: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-2 text-ink-soft", className)} {...props} />
  );
}

export function BreadcrumbItem({ className, ...props }: HTMLAttributes<HTMLLIElement>) {
  return <li className={cn("inline-flex items-center gap-2", className)} {...props} />;
}

export function BreadcrumbSeparator({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span aria-hidden className={cn("text-silver", className)} {...props}>
      /
    </span>
  );
}

export function BreadcrumbPage({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span aria-current="page" className={cn("text-ink", className)} {...props} />;
}
