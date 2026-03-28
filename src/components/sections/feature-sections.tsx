"use client";

import { motion } from "framer-motion";
import { FileText, Square } from "lucide-react";
import { GlobeVisual } from "@/components/bits/globe-visual";
import { FeatureVialVisual } from "@/components/bits/feature-vial-visual";

export function FeatureSections() {
  return (
    <div id="solutions" className="scroll-mt-24 border-b border-white/5">
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <Square className="h-4 w-4 fill-current" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Forecast
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Predictive risk modeling for the{" "}
              <span className="text-cyan-300">unseen</span> future.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Encode nature dependencies into forward curves—heat, water, and
              land-use shocks—so capital and operations teams see exposure
              before it hits the ledger.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <GlobeVisual />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <FeatureVialVisual />
          </motion.div>
          <motion.div
            className="order-1 space-y-5 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <FileText className="h-4 w-4" strokeWidth={1.75} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Disclosure
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Automated TNFD reporting at enterprise scale.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Map LEAP modules to your data estate—policies, geospatial layers,
              and supplier attestations—then export board-ready TNFD metrics
              with audit trails.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
