"use client";

import {
  createContext,
  useContext,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../cn";
import { useControllableState, useEscape, useFocusTrap, useLockBody } from "../hooks";

type DialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog components must be used within <Dialog>");
  return ctx;
}

export function Dialog({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  const [isOpen, setOpen] = useControllableState(open, defaultOpen, onOpenChange);
  return (
    <DialogContext.Provider value={{ open: isOpen, setOpen }}>{children}</DialogContext.Provider>
  );
}

export function DialogTrigger({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const { setOpen } = useDialog();
  return (
    <button type="button" className={className} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function DialogContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen } = useDialog();
  const panel = useRef<HTMLDivElement>(null);
  useLockBody(open);
  useEscape(() => setOpen(false), open);
  useFocusTrap(panel, open);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-overlay"
        onClick={() => setOpen(false)}
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        data-slot="dialog"
        className={cn(
          "relative z-10 w-full max-w-lg rounded-ob border border-ink bg-paper p-6 shadow-stamp",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex flex-col gap-1", className)} {...props} />;
}

export function DialogTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("font-display text-3xl", className)} {...props} />;
}

export function DialogDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-ink-soft", className)} {...props} />;
}

export function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-6 flex justify-end gap-3", className)} {...props} />;
}

export function DialogClose({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  const { setOpen } = useDialog();
  return (
    <button type="button" className={className} onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  );
}
