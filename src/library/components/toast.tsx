"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cn } from "../cn";

type ToastTone = "plate" | "lamp" | "stop" | "fix";

type ToastItem = {
  id: string;
  title: string;
  description?: string;
  tone?: ToastTone;
};

type ToastContextValue = {
  toast: (item: Omit<ToastItem, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((item: Omit<ToastItem, "id">) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { ...item, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((entry) => entry.id !== id));
    }, 3800);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 bottom-4 z-[70] flex w-80 flex-col gap-2">
        {toasts.map((item) => (
          <div
            key={item.id}
            role="status"
            data-slot="toast"
            className={cn(
              "pointer-events-auto rounded-ob border border-ink bg-paper p-4 shadow-stamp",
              item.tone === "lamp" && "bg-safelight",
              item.tone === "stop" && "border-stop",
              item.tone === "fix" && "border-fix",
            )}
          >
            <p className="font-medium">{item.title}</p>
            {item.description ? (
              <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
