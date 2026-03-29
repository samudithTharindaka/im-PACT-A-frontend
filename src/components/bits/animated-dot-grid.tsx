"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

type AnimatedDotGridProps = {
  rows?: number;
  cols?: number;
  className?: string;
};

export function AnimatedDotGrid({
  rows = 14,
  cols = 20,
  className,
}: AnimatedDotGridProps) {
  const cells = useMemo(() => {
    const out: { id: string; accent: "cyan" | "red" | "dim" }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const n = (r * 13 + c * 7) % 17;
        let accent: "cyan" | "red" | "dim" = "dim";
        if (n === 3 || n === 11) accent = "cyan";
        if (n === 5 || n === 14) accent = "red";
        out.push({ id: `${r}-${c}`, accent });
      }
    }
    return out;
  }, [rows, cols]);

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[12rem] flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#030712] to-[#030712] p-4",
        className,
      )}
    >
      <div
        className="grid min-h-0 min-w-0 flex-1 gap-1.5"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((cell, i) => (
          <div
            key={cell.id}
            className="flex min-h-0 min-w-0 items-center justify-center"
          >
            <motion.span
              className={
                cell.accent === "cyan"
                  ? "block h-2 w-2 max-h-full max-w-full shrink-0 rounded-sm bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  : cell.accent === "red"
                    ? "block h-2 w-2 max-h-full max-w-full shrink-0 rounded-sm bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]"
                    : "block h-2 w-2 max-h-full max-w-full shrink-0 rounded-sm bg-zinc-700/60"
              }
              initial={{ opacity: 0.35 }}
              animate={{ opacity: [0.35, 0.95, 0.45] }}
              transition={{
                duration: 3 + (i % 5) * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i % 17) * 0.05,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
