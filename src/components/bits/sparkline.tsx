"use client";

import { motion } from "framer-motion";

const points = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38, 35, 42, 40, 48, 52];

export function Sparkline() {
  const w = 160;
  const h = 40;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * (h - 4);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-10 w-full max-w-[10rem] text-cyan-400"
      aria-hidden
    >
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(34 211 238 / 0.2)" />
          <stop offset="100%" stopColor="rgb(34 211 238 / 0.9)" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        fill="none"
        stroke="url(#sparkGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}
