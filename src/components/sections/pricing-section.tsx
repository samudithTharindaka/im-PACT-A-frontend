"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type AnimatedPriceProps = {
  price: string;
};

function AnimatedPrice({ price }: AnimatedPriceProps) {
  return (
    <motion.span
      className="inline-block tabular-nums"
      key={price}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {price}
    </motion.span>
  );
}

const pricingTiers = [
  {
    name: "Basic",
    monthlyPrice: "$19",
    yearlyPrice: "$199",
    features: [
      "5 disclosure workspaces",
      "10 GB secure storage",
      "Baseline nature-risk metrics",
      "Community support",
      "Standard export formats",
    ],
    buttonText: "Get started",
    isPopular: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$49",
    yearlyPrice: "$499",
    features: [
      "Unlimited workspaces",
      "50 GB storage",
      "Advanced TNFD-aligned analytics",
      "Priority email support",
      "Custom data domains",
      "Team collaboration",
    ],
    buttonText: "Start free trial",
    isPopular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$99",
    yearlyPrice: "$999",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Real-time risk dashboards",
      "24/7 dedicated support",
      "Account manager",
      "SAML / SSO",
    ],
    buttonText: "Contact sales",
    isPopular: false,
  },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 14,
    },
  },
};

export function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const monthlyButtonRef = useRef<HTMLButtonElement>(null);
  const yearlyButtonRef = useRef<HTMLButtonElement>(null);
  const [activeButtonLeft, setActiveButtonLeft] = useState(0);
  const [activeButtonWidth, setActiveButtonWidth] = useState(0);

  useEffect(() => {
    const updateButtonMetrics = () => {
      if (monthlyButtonRef.current && yearlyButtonRef.current) {
        if (isMonthly) {
          setActiveButtonLeft(monthlyButtonRef.current.offsetLeft);
          setActiveButtonWidth(monthlyButtonRef.current.offsetWidth);
        } else {
          setActiveButtonLeft(yearlyButtonRef.current.offsetLeft);
          setActiveButtonWidth(yearlyButtonRef.current.offsetWidth);
        }
      }
    };

    updateButtonMetrics();
    window.addEventListener("resize", updateButtonMetrics);
    return () => window.removeEventListener("resize", updateButtonMetrics);
  }, [isMonthly]);

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/5 py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgb(34 211 238 / 0.12), transparent 65%), #030712",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-48 w-48 animate-blob rounded-full bg-cyan-500/20 opacity-40 mix-blend-screen blur-3xl" />
      <div className="pointer-events-none animation-delay-4000 absolute bottom-1/4 right-1/4 h-48 w-48 animate-blob rounded-full bg-cyan-600/15 opacity-50 mix-blend-screen blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
            Choose the plan that fits your TNFD journey. No hidden fees—scale
            from pilot to enterprise disclosure.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative flex items-center rounded-full border border-white/15 bg-white/[0.04] p-1 shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)] backdrop-blur-xl">
            <button
              type="button"
              ref={monthlyButtonRef}
              onClick={() => setIsMonthly(true)}
              className={`relative z-10 rounded-full px-6 py-2 text-center text-sm font-medium transition-colors duration-300 ${
                isMonthly
                  ? "text-[#030712]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              ref={yearlyButtonRef}
              onClick={() => setIsMonthly(false)}
              className={`relative z-10 flex items-center justify-center rounded-full px-6 py-2 text-center text-sm font-medium transition-colors duration-300 ${
                !isMonthly
                  ? "text-[#030712]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-cyan-500 px-2 py-0.5 text-xs font-bold text-[#030712]">
                20% off
              </span>
            </button>
            {activeButtonWidth > 0 && (
              <motion.div
                className="absolute inset-y-1 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 shadow-md shadow-cyan-500/30"
                initial={false}
                animate={{
                  left: activeButtonLeft,
                  width: activeButtonWidth,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-colors duration-300 ${
                tier.isPopular
                  ? "border-cyan-500/50 bg-[#030712]/80 shadow-[0_0_48px_-12px_rgba(34,211,238,0.2)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#030712] shadow-lg shadow-cyan-500/25">
                  Most popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">
                  <AnimatedPrice
                    price={isMonthly ? tier.monthlyPrice : tier.yearlyPrice}
                  />
                </span>
                <span className="ml-1 text-xl font-medium text-zinc-500">
                  /{isMonthly ? "month" : "year"}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                {tier.name === "Basic" &&
                  "For teams piloting nature-related disclosure."}
                {tier.name === "Pro" &&
                  "For growing programs that need full TNFD-ready workflows."}
                {tier.name === "Enterprise" &&
                  "For organizations with complex data estates and compliance needs."}
              </p>

              <ul className="mt-8 flex-grow space-y-3" role="list">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
                      strokeWidth={2}
                    />
                    <p className="text-base text-zinc-300">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <motion.button
                  type="button"
                  className={`inline-flex w-full items-center justify-center rounded-xl border py-3 text-base font-medium shadow-sm transition-colors ${
                    tier.isPopular
                      ? "border-transparent bg-cyan-500 text-[#030712] hover:bg-cyan-400"
                      : "border-cyan-500/40 bg-transparent text-cyan-300 hover:bg-cyan-500/10"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {tier.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
