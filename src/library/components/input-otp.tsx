"use client";

import { useMemo, useRef, type ClipboardEvent, type KeyboardEvent } from "react";
import { cn } from "../cn";

export function InputOTP({
  length = 6,
  value,
  onChange,
  className,
}: {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const chars = useMemo(
    () => Array.from({ length }, (_, index) => value[index] ?? ""),
    [length, value],
  );

  const write = (next: string[]) => onChange(next.join("").slice(0, length));

  const onKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !chars[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
    if (event.key === "ArrowLeft") refs.current[index - 1]?.focus();
    if (event.key === "ArrowRight") refs.current[index + 1]?.focus();
  };

  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text").replace(/\s/g, "");
    write(text.split(""));
  };

  return (
    <div data-slot="input-otp" className={cn("flex gap-2", className)}>
      {chars.map((char, index) => (
        <input
          key={index}
          ref={(node) => {
            refs.current[index] = node;
          }}
          inputMode="numeric"
          maxLength={1}
          value={char}
          aria-label={`Digit ${index + 1}`}
          className="size-11 rounded-ob border border-ink bg-paper text-center font-mono text-lg shadow-stamp focus:shadow-[3px_3px_0_0_var(--safelight)] focus:outline-none"
          onPaste={onPaste}
          onKeyDown={(event) => onKeyDown(index, event)}
          onChange={(event) => {
            const next = [...chars];
            next[index] = event.target.value.slice(-1);
            write(next);
            if (event.target.value) refs.current[index + 1]?.focus();
          }}
        />
      ))}
    </div>
  );
}
