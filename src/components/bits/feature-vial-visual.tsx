"use client";

import { motion } from "framer-motion";
import { Cloud, FileText, Settings } from "lucide-react";

export function FeatureVialVisual() {
  return (
    <div className="relative flex min-h-[280px] items-center justify-center">
      <motion.div
        className="absolute h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="relative">
        <motion.div
          className="relative z-10 flex h-36 w-24 flex-col items-center rounded-b-3xl rounded-t-lg border border-cyan-400/40 bg-gradient-to-b from-cyan-500/30 to-blue-900/40 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="mt-2 h-3 w-10 rounded-full bg-cyan-400/50" />
          <div className="mt-4 flex-1 w-[70%] rounded-lg bg-gradient-to-b from-cyan-400/60 to-cyan-600/20" />
        </motion.div>
        {[
          { Icon: FileText, x: -80, y: -30, delay: 0 },
          { Icon: Cloud, x: 85, y: 10, delay: 0.15 },
          { Icon: Settings, x: -60, y: 90, delay: 0.3 },
        ].map(({ Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-md"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay }}
          >
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
