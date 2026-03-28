"use client";

import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import { GlassCard } from "@/components/bits/glass-card";
import { LivePulse } from "@/components/bits/live-pulse";
import { MiniBarChart } from "@/components/bits/mini-bar-chart";
import { Sparkline } from "@/components/bits/sparkline";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { ledgerRows, type LedgerRow } from "@/data/ledger";

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
};

export function AuditConsole() {
  return (
    <section className="scroll-mt-24 border-b border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Audit Command Console
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Live synthesis of revenue exposure, horizons, and physical risk
              vectors—ready for governance review.
            </p>
          </div>
          <LivePulse />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div {...cardMotion}>
            <GlassCard glow className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Revenue Impact Analysis
              </p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <span className="text-4xl font-bold tabular-nums text-red-400">
                  -14.2%
                </span>
                <MiniBarChart />
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Baseline stress vs. portfolio mean. Optimized scenario below.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs uppercase text-zinc-500">
                  Optimized scenario
                </span>
                <span className="text-lg font-semibold tabular-nums text-cyan-400">
                  +4.8%
                </span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div {...cardMotion} transition={{ duration: 0.45, delay: 0.05 }}>
            <GlassCard glow className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Time Horizons
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex justify-between gap-2 border-b border-white/5 pb-3">
                  <span className="text-zinc-300">Short (1–2y)</span>
                  <span className="text-emerald-400/90">STABLE</span>
                </li>
                <li className="flex justify-between gap-2 border-b border-white/5 pb-3">
                  <span className="text-zinc-300">Medium (5–10y)</span>
                  <span className="text-red-400">ELEVATED</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span className="text-zinc-300">Long (20y+)</span>
                  <span className="text-red-400">CRITICAL</span>
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          <motion.div {...cardMotion} transition={{ duration: 0.45, delay: 0.1 }}>
            <GlassCard glow className="h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Physical Risk Vector
              </p>
              <p className="mt-4 text-5xl font-bold tabular-nums text-white">
                82.1
              </p>
              <div className="mt-4">
                <Sparkline />
              </div>
              <p className="mt-3 text-xs text-zinc-500">
                Composite hazard index (0–100) with forward-looking drivers.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DataTable<LedgerRow>
            title={
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ScrollText className="h-4 w-4 text-cyan-400" />
                TNFD Reporting Ledger
              </div>
            }
            rowKey={(r) => r.id}
            rows={ledgerRows}
            columns={[
              { key: "id", header: "Ledger", cell: (r) => r.id },
              { key: "location", header: "Location", cell: (r) => r.location },
              { key: "sector", header: "Sector / Jurisdiction", cell: (r) => r.sector },
              {
                key: "status",
                header: "Data Audit Status",
                cell: (r) =>
                  r.status === "COMPLETE" ? (
                    <Badge tone="success">COMPLETE</Badge>
                  ) : (
                    <Badge tone="danger">INCOMPLETE</Badge>
                  ),
              },
              {
                key: "complexity",
                header: "Complexity (%)",
                cell: (r) => (
                  <span className="tabular-nums text-zinc-200">{r.complexity}%</span>
                ),
              },
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
