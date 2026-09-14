import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "../cn";
import { buttonVariants } from "./button";

export function Pagination({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav
      aria-label="Pagination"
      data-slot="pagination"
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    />
  );
}

export function PaginationItem({
  current,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { current?: boolean }) {
  return (
    <button
      type="button"
      aria-current={current ? "page" : undefined}
      className={cn(
        buttonVariants({ variant: current ? "lamp" : "outline", size: "icon" }),
        "size-9 text-sm",
        className,
      )}
      {...props}
    />
  );
}
