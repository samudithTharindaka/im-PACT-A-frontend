"use client";

import { motion } from "framer-motion";

const dots = [
  { x: 28, y: 42, r: 2.5 },
  { x: 52, y: 38, r: 2 },
  { x: 68, y: 55, r: 2.5 },
  { x: 44, y: 62, r: 1.8 },
  { x: 76, y: 44, r: 2 },
  { x: 36, y: 58, r: 1.5 },
];

export function GlobeVisual() {
  return (
    <div className="relative mx-auto aspect-square max-w-md">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent blur-2xl"
        animate={{ opacity: [0.5, 0.85, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]"
        aria-hidden
      >
        <defs>
          <radialGradient id="globeGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="rgb(34 211 238 / 0.45)" />
            <stop offset="55%" stopColor="rgb(59 130 246 / 0.2)" />
            <stop offset="100%" stopColor="rgb(3 7 18 / 0.95)" />
          </radialGradient>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(34 211 238 / 0.6)" />
            <stop offset="100%" stopColor="rgb(34 211 238 / 0.05)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="38" fill="url(#globeGrad)" stroke="rgb(34 211 238 / 0.35)" strokeWidth="0.4" />
        <ellipse
          cx="50"
          cy="50"
          rx="38"
          ry="14"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="0.35"
          opacity="0.7"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="14"
          ry="38"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="0.35"
          opacity="0.5"
        />
        <path
          d="M 22 48 Q 50 32 78 52"
          fill="none"
          stroke="rgb(34 211 238 / 0.25)"
          strokeWidth="0.3"
        />
        <path
          d="M 28 58 Q 50 72 72 44"
          fill="none"
          stroke="rgb(34 211 238 / 0.2)"
          strokeWidth="0.3"
        />
        {dots.map((d, i) => (
          <motion.circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill="rgb(34 211 238)"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.55], r: [d.r * 0.85, d.r * 1.15, d.r] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
