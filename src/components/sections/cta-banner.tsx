"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="cta" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 via-[#0a1628] to-[#030712] px-8 py-14 text-center sm:px-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10 opacity-40"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-500/20 opacity-30"
            aria-hidden
          />
          <h2 className="relative text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to automate your environmental intelligence?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm text-zinc-400">
            Join resilient enterprises that operationalize nature-risk insight
            with protocol-grade automation.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="#product" variant="primary">
              Schedule a Protocol Audit
            </ButtonLink>
            <Button variant="ghost">View Solution Guide</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
