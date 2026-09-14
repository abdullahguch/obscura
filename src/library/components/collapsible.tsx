"use client";

import {
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../cn";

const CollapsibleContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function Collapsible({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
  className,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolled;
  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolled(next);
    onOpenChange?.(next);
  };

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, setOpen }}>
      <div data-slot="collapsible" className={className}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({ className, ...props }: HTMLAttributes<HTMLButtonElement>) {
  const ctx = useContext(CollapsibleContext);
  return (
    <button
      type="button"
      aria-expanded={ctx?.open}
      className={className}
      onClick={() => ctx?.setOpen(!ctx.open)}
      {...props}
    />
  );
}

export function CollapsibleContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ctx = useContext(CollapsibleContext);
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-[grid-template-rows] duration-300",
        ctx?.open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        className,
      )}
    >
      <div className="min-h-0" {...props} />
    </div>
  );
}
