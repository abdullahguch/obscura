"use client";

import { useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../cn";
import { useClickOutside } from "../hooks";

export function Tooltip({
  content,
  children,
  className,
}: {
  content: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open ? (
        <span
          role="tooltip"
          data-slot="tooltip"
          className={cn(
            "absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-ob border border-ink bg-ink px-2 py-1 text-xs text-paper shadow-stamp",
            className,
          )}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}

export function Popover({
  trigger,
  children,
  className,
}: {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useClickOutside(root, () => setOpen(false), open);

  return (
    <div ref={root} className="relative inline-flex">
      <span onClick={() => setOpen((prev) => !prev)}>{trigger}</span>
      {open ? (
        <div
          data-slot="popover"
          className={cn(
            "absolute top-full left-0 z-50 mt-2 min-w-56 rounded-ob border border-ink bg-paper p-4 shadow-stamp",
            className,
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function HoverCard({
  trigger,
  children,
  className,
}: {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {trigger}
      {open ? (
        <div
          data-slot="hover-card"
          className={cn(
            "absolute top-full left-0 z-50 mt-2 w-72 rounded-ob border border-ink bg-paper p-4 shadow-stamp",
            className,
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function DropdownMenu({
  trigger,
  items,
  className,
}: {
  trigger: ReactNode;
  items: { label: string; onSelect?: () => void; danger?: boolean; disabled?: boolean }[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useClickOutside(root, () => setOpen(false), open);

  return (
    <div ref={root} className={cn("relative inline-flex", className)}>
      <span onClick={() => setOpen((prev) => !prev)}>{trigger}</span>
      {open ? (
        <div
          role="menu"
          data-slot="dropdown-menu"
          className="absolute top-full left-0 z-50 mt-2 min-w-48 rounded-ob border border-ink bg-paper p-1 shadow-stamp"
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              className={cn(
                "flex w-full px-3 py-2 text-left text-sm hover:bg-paper-2 disabled:opacity-40",
                item.danger && "text-stop",
              )}
              onClick={() => {
                item.onSelect?.();
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function MenuDivider({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("my-1 h-px bg-ink/15", className)} {...props} />;
}
