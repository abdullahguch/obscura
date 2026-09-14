"use client";

import { createContext, useContext, type HTMLAttributes, type InputHTMLAttributes } from "react";
import { cn } from "../cn";

type RadioContextValue = {
  name: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

const RadioContext = createContext<RadioContextValue | null>(null);

export type RadioGroupProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

export function RadioGroup({
  className,
  name,
  value,
  onValueChange,
  ...props
}: RadioGroupProps) {
  return (
    <RadioContext.Provider value={{ name, value, onValueChange }}>
      <div
        role="radiogroup"
        data-slot="radio-group"
        className={cn("flex flex-col gap-2", className)}
        {...props}
      />
    </RadioContext.Provider>
  );
}

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  value: string;
};

export function Radio({ className, value, ...props }: RadioProps) {
  const ctx = useContext(RadioContext);
  return (
    <input
      type="radio"
      name={ctx?.name}
      value={value}
      checked={ctx?.value !== undefined ? ctx.value === value : undefined}
      onChange={() => ctx?.onValueChange?.(value)}
      data-slot="radio"
      className={cn(
        "size-4 shrink-0 appearance-none rounded-full border border-ink bg-paper shadow-[1px_1px_0_0_var(--shadow)]",
        "checked:border-[5px] checked:border-safelight checked:bg-ink",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safelight",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}
