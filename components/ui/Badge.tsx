import type { ReactNode } from "react";

export type BadgeKind = "blue" | "green" | "amber" | "red" | "gray" | "ai";

export interface BadgeProps {
  children: ReactNode;
  kind?: BadgeKind;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, kind = "gray", dot = false, className = "" }: BadgeProps) {
  return (
    <span className={`badge badge-${kind} ${className}`}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}

export default Badge;
