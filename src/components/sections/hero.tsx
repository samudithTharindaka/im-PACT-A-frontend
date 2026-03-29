"use client";

import { motion } from "framer-motion";
import ShapeGrid from "@/components/bits/ShapeGrid";
import { AnimatedDotGrid } from "@/components/bits/animated-dot-grid";
import { GradientText } from "@/components/bits/gradient-text";
import { Button, ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="product"
      className="relative min-h-screen scroll-mt-24 overflow-hidden border-b border-white/5"
    >
      {/* Shape grid — React Bits: https://www.reactbits.dev/backgrounds/shape-grid */}
      <div className="absolute inset-0 z-0 min-h-full w-full">
        <ShapeGrid
          direction="right"
          speed={0.75}
          borderColor="rgba(34, 211, 238, 0.12)"
          hoverFillColor="rgba(34, 211, 238, 0.2)"
          squareSize={44}
          shape="square"
          hoverTrailAmount={16}
          vignetteEdgeColor="#030712"
          className="min-h-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030712]/65 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pb-10 pt-[calc(8rem+8vh)] sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative h-[min(42vh,22rem)] min-h-[16rem] w-full lg:h-[min(52vh,28rem)]"
        >
          <AnimatedDotGrid className="h-full border-white/10 shadow-2xl shadow-cyan-950/40" />
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
