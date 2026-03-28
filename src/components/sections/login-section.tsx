"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";

export function LoginSection() {
  return (
    <section id="login" className="scroll-mt-24 border-t border-white/5 py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm text-zinc-500">Console access</p>
          <ButtonLink href="#cta" variant="secondary" className="mt-4">
            Request login
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
