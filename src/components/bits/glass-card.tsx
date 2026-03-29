import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import BorderGlow from "@/components/bits/BorderGlow";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
  /** React Bits border glow — https://www.reactbits.dev/components/border-glow */
  borderGlow?: boolean;
  children: ReactNode;
};

export function GlassCard({
  className,
  glow,
  borderGlow,
  children,
  ...props
}: GlassCardProps) {
  if (borderGlow) {
    return (
      <BorderGlow
        className={cn("border-white/10 backdrop-blur-xl", className)}
        borderRadius={16}
        edgeSensitivity={26}
        backgroundColor="rgba(3, 7, 18, 0.78)"
        glowColor="185 70 58"
        glowRadius={26}
        glowIntensity={0.85}
        coneSpread={24}
        colors={[
          "rgba(34, 211, 238, 0.65)",
          "rgba(56, 189, 248, 0.4)",
          "rgba(167, 139, 250, 0.5)",
        ]}
        fillOpacity={0.42}
      >
        <div className="p-6">{children}</div>
      </BorderGlow>
    );
  }

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
