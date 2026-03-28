import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn("text-gradient-accent font-semibold", className)}>
      {children}
    </span>
  );
}
