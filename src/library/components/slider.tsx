"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "../cn";

export type SliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function Slider({ className, ...props }: SliderProps) {
  return (
    <input
      type="range"
      data-slot="slider"
      className={cn(
        "h-6 w-full cursor-pointer appearance-none bg-transparent",
        "[&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-ink [&::-webkit-slider-runnable-track]:bg-paper-2",
        "[&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-ink [&::-webkit-slider-thumb]:bg-safelight [&::-webkit-slider-thumb]:shadow-[1px_1px_0_0_var(--shadow)]",
        "[&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:border [&::-moz-range-track]:border-ink [&::-moz-range-track]:bg-paper-2",
        "[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-ink [&::-moz-range-thumb]:bg-safelight",
        className,
      )}
      {...props}
    />
  );
}
