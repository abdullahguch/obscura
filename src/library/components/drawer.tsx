"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../cn";
import { useControllableState, useEscape, useFocusTrap, useLockBody } from "../hooks";

export function Drawer({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
  side = "right",
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  side?: "left" | "right" | "bottom";
}) {
  const [isOpen, setOpen] = useControllableState(open, defaultOpen, onOpenChange);
  const panel = useRef<HTMLDivElement>(null);
  useLockBody(isOpen);
  useEscape(() => setOpen(false), isOpen);
  useFocusTrap(panel, isOpen);

  if (!isOpen) return null;

  const sideClass = {
    right: "inset-y-0 right-0 w-full max-w-md border-l",
    left: "inset-y-0 left-0 w-full max-w-md border-r",
    bottom: "inset-x-0 bottom-0 max-h-[80vh] border-t",
  }[side];

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close drawer"
        className="absolute inset-0 bg-overlay"
        onClick={() => setOpen(false)}
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        data-slot="drawer"
        className={cn("absolute overflow-auto bg-paper p-6 shadow-stamp", sideClass, "border-ink")}
      >
        {children}
      </div>
    </div>
  );
}

export function DrawerHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function DrawerTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("font-display text-3xl", className)} {...props} />;
}
