"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

const links = [
  { href: "#product", label: "Product" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#login", label: "Login" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          im~PACT-A
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "#product" && pathname === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active ? "text-cyan-400" : "text-zinc-400 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <ButtonLink
          href="#cta"
          variant="secondary"
          className="hidden sm:inline-flex"
        >
          Get Started
        </ButtonLink>
      </div>
    </motion.header>
  );
}
