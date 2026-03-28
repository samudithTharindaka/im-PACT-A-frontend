import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "success" | "danger" | "neutral";

const tones: Record<Tone, string> = {
  success: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
  danger: "border-orange-500/40 bg-orange-500/15 text-orange-300",
  neutral: "border-zinc-600 bg-zinc-800/80 text-zinc-300",
};

export function Badge({
  tone,
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone: Tone; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
