import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

export function Empty({
  className,
  icon,
  title,
  description,
  action,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-ob border border-dashed border-ink/40 bg-paper-2 px-6 py-14 text-center",
        className,
      )}
      {...props}
    >
      {icon ? <div className="text-silver">{icon}</div> : null}
      <h3 className="font-display text-2xl">{title}</h3>
      {description ? <p className="max-w-sm text-sm text-ink-soft">{description}</p> : null}
      {action}
    </div>
  );
}
