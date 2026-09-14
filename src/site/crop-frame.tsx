import type { ReactNode } from "react";
import { cn } from "@/library/cn";

export function CropFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("crop-frame relative border border-ink bg-paper-2", className)}>
      <span className="crop-frame-tr" />
      <span className="crop-frame-bl" />
      {label ? (
        <span className="catalog absolute -top-6 left-0">{label}</span>
      ) : null}
      {children}
    </div>
  );
}
