import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
  children: ReactNode;
};

export function GlassCard({
  className,
  glow,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-shadow duration-300",
        glow && "hover:glow-border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
