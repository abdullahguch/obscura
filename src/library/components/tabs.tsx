"use client";

import { createContext, useContext, type ButtonHTMLAttributes, type HTMLAttributes } from "react";
import { cn } from "../cn";
import { useControllableState } from "../hooks";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({
  value,
  defaultValue = "",
  onValueChange,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}) {
  const [current, setCurrent] = useControllableState(value, defaultValue, onValueChange);
  return (
    <TabsContext.Provider value={{ value: current, setValue: setCurrent }}>
      <div data-slot="tabs" className={cn("flex flex-col gap-4", className)} {...props} />
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tablist"
      className={cn("inline-flex w-fit rounded-ob border border-ink bg-paper-2 p-1", className)}
      {...props}
    />
  );
}

export function TabsTrigger({
  value,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = useContext(TabsContext);
  const active = ctx?.value === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => ctx?.setValue(value)}
      className={cn(
        "rounded-[2px] px-3 py-1.5 text-sm transition-colors",
        active ? "bg-safelight text-ink" : "text-ink-soft hover:text-ink",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  value,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = useContext(TabsContext);
  if (ctx?.value !== value) return null;
  return <div role="tabpanel" className={className} {...props} />;
}
