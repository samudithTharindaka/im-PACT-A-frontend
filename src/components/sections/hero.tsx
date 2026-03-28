"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { AnimatedDotGrid } from "@/components/bits/animated-dot-grid";
import { GradientText } from "@/components/bits/gradient-text";
import { Button, ButtonLink } from "@/components/ui/button";

const Antigravity = dynamic(() => import("@/components/bits/Antigravity"), {
  ssr: false,
  loading: () => (
    <div
      className="h-full min-h-[400px] w-full animate-pulse rounded-2xl bg-cyan-950/15"
      aria-hidden
    />
  ),
});

export function Hero() {
  return (
    <section
      id="product"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/5 pt-28 pb-20"
    >
      {/* Antigravity — React Bits: https://www.reactbits.dev/animations/antigravity */}
      <div
        className="pointer-events-none absolute inset-0 z-0 min-h-[480px] w-full"
        aria-hidden
      >
        <div className="absolute inset-0 h-full w-full opacity-90">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/85 to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-[#030712]/90" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <AnimatedDotGrid className="min-h-[280px] border-white/10 shadow-2xl shadow-cyan-950/40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            SYSTEM SENTINEL V4.0
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
            im~PACT-A: Synthesizing{" "}
            <GradientText>Nature-Risk</GradientText> into Material Insight.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-400">
            Automated accountability pipelines for nature-related financial
            disclosure. Streamline TNFD-aligned reporting with auditable data
            lineage and scenario-ready outputs.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#cta" variant="primary">
              Get the Audit Automation
            </ButtonLink>
            <Button variant="ghost">Review LEAP Specs</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
