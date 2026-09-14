"use client";

import { createContext, useContext, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import { cn } from "../cn";
import { useControllableState } from "../hooks";

type AccordionContextValue = {
  value: string[];
  toggle: (item: string) => void;
  type: "single" | "multiple";
};

const AccordionContext = createContext<AccordionContextValue | null>(null);
const ItemContext = createContext<string>("");

export function Accordion({
  type = "single",
  value,
  defaultValue = [],
  onValueChange,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}) {
  const [open, setOpen] = useControllableState(value, defaultValue, onValueChange);

  const toggle = (item: string) => {
    if (type === "single") {
      setOpen(open.includes(item) ? [] : [item]);
      return;
    }
    setOpen(open.includes(item) ? open.filter((entry) => entry !== item) : [...open, item]);
  };

  return (
    <AccordionContext.Provider value={{ value: open, toggle, type }}>
      <div data-slot="accordion" className={cn("divide-y divide-ink border-y border-ink", className)} {...props} />
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { value: string }) {
  return (
    <ItemContext.Provider value={value}>
      <div data-slot="accordion-item" className={cn("py-1", className)} {...props} />
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = useContext(AccordionContext);
  const value = useContext(ItemContext);
  const open = ctx?.value.includes(value);

  return (
    <button
      type="button"
      data-slot="accordion-trigger"
      aria-expanded={open}
      onClick={() => ctx?.toggle(value)}
      className={cn(
        "flex w-full items-center justify-between gap-4 py-3 text-left font-display text-xl",
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={cn(
          "relative size-5 shrink-0",
          "before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-ink",
          !open && "after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-ink",
        )}
      />
    </button>
  );
}

export function AccordionContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ctx = useContext(AccordionContext);
  const value = useContext(ItemContext);
  const open = ctx?.value.includes(value);
  return (
    <div
      className={cn(
        "grid overflow-hidden text-sm text-ink-soft transition-[grid-template-rows] duration-300",
        open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]",
        className,
      )}
    >
      <div className="min-h-0" {...props} />
    </div>
  );
}
