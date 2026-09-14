"use client";

import { useRef, useState, type ReactNode, type SelectHTMLAttributes } from "react";
import { cn } from "../cn";
import { useClickOutside, useEscape } from "../hooks";

export type SelectOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = {
  value?: string;
  placeholder?: string;
  options: SelectOption[];
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
};

export function Select({
  value,
  placeholder = "Select…",
  options,
  onValueChange,
  disabled,
  className,
  id,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value);

  useClickOutside(root, () => setOpen(false), open);
  useEscape(() => setOpen(false), open);

  return (
    <div ref={root} className={cn("relative", className)}>
      <button
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        data-slot="select"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-10 w-full items-center justify-between gap-3 rounded-ob border border-ink bg-paper px-3 text-sm shadow-stamp",
          "disabled:opacity-40",
          open && "shadow-[3px_3px_0_0_var(--safelight)]",
        )}
      >
        <span className={selected ? "text-ink" : "text-silver"}>
          {selected?.label ?? placeholder}
        </span>
        <span className="text-[10px] tracking-widest">{open ? "▲" : "▼"}</span>
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-ob border border-ink bg-paper p-1 shadow-stamp"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                disabled={option.disabled}
                className={cn(
                  "flex w-full items-center px-3 py-2 text-left text-sm",
                  option.value === value ? "bg-safelight text-ink" : "hover:bg-paper-2",
                  option.disabled && "opacity-40",
                )}
                onClick={() => {
                  onValueChange?.(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function NativeSelect({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { children?: ReactNode }) {
  return (
    <select
      data-slot="native-select"
      className={cn(
        "h-10 w-full rounded-ob border border-ink bg-paper px-3 text-sm shadow-stamp",
        "focus:shadow-[3px_3px_0_0_var(--safelight)] focus:outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
