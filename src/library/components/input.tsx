import type { InputHTMLAttributes } from "react";
import { cn } from "../cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full rounded-ob border border-ink bg-paper px-3 text-sm text-ink shadow-stamp placeholder:text-silver",
        "transition-[box-shadow,background-color] duration-150",
        "focus:bg-paper-2 focus:shadow-[3px_3px_0_0_var(--safelight)] focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-40",
        "file:mr-3 file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-ink",
        className,
      )}
      {...props}
    />
  );
}
