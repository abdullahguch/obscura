"use client";

import { createContext, useContext, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../cn";
import { Toggle } from "./toggle";

type ToggleGroupContextValue = {
  value: string[];
  type: "single" | "multiple";
  onValueChange?: (value: string[]) => void;
};

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

export type ToggleGroupProps = HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple";
  value?: string[];
  onValueChange?: (value: string[]) => void;
};

export function ToggleGroup({
  className,
  type = "single",
  value = [],
  onValueChange,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupContext.Provider value={{ value, type, onValueChange }}>
      <div
        role="group"
        data-slot="toggle-group"
        className={cn("inline-flex overflow-hidden rounded-ob border border-ink", className)}
        {...props}
      />
    </ToggleGroupContext.Provider>
  );
}

export function ToggleGroupItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children?: ReactNode;
}) {
  const ctx = useContext(ToggleGroupContext);
  const pressed = ctx?.value.includes(value) ?? false;

  return (
    <Toggle
      pressed={pressed}
      size="sm"
      className={cn("rounded-none border-0 border-r border-ink last:border-r-0", className)}
      onPressedChange={() => {
        if (!ctx) return;
        if (ctx.type === "single") {
          ctx.onValueChange?.(pressed ? [] : [value]);
          return;
        }
        ctx.onValueChange?.(
          pressed ? ctx.value.filter((item) => item !== value) : [...ctx.value, value],
        );
      }}
    >
      {children}
    </Toggle>
  );
}
