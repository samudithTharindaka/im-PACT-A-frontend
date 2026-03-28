"use client";

import { motion } from "framer-motion";

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-xl font-semibold text-white">Pricing</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
            Enterprise plans with jurisdictional modules, SSO, and dedicated
            audit support. We&apos;ll scope deployment to your TNFD maturity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
