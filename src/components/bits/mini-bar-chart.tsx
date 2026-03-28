"use client";

import { motion } from "framer-motion";

const bars = [32, 48, 28, 62, 44, 55, 38, 50];

export function MiniBarChart() {
  return (
    <div className="flex h-12 items-end gap-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-2 origin-bottom rounded-sm bg-gradient-to-t from-cyan-600/40 to-cyan-400"
          animate={{ scaleY: [0.55, 1, 0.72] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
