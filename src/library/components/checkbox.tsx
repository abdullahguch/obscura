"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "../cn";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      data-slot="checkbox"
      className={cn(
        "size-4 shrink-0 appearance-none rounded-[2px] border border-ink bg-paper shadow-[1px_1px_0_0_var(--shadow)]",
        "checked:bg-safelight checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22 fill=%22none%22 stroke=%22%23161310%22 stroke-width=%222.2%22%3E%3Cpath d=%22M3.5 8.5 6.5 11.5 12.5 4.5%22/%3E%3C/svg%3E')] checked:bg-contain",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safelight",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
