import type { TextareaHTMLAttributes } from "react";
import { cn } from "../cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full rounded-ob border border-ink bg-paper px-3 py-2 text-sm text-ink shadow-stamp placeholder:text-silver",
        "transition-[box-shadow,background-color] duration-150",
        "focus:bg-paper-2 focus:shadow-[3px_3px_0_0_var(--safelight)] focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
