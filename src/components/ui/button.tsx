import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export const buttonClass = (variant: Variant = "primary") => {
  const variants: Record<Variant, string> = {
    primary:
      "bg-cyan-500 text-[#030712] font-semibold glow-button hover:bg-cyan-400 hover:shadow-[0_0_48px_-8px_rgba(34,211,238,0.7)]",
    secondary:
      "border border-cyan-500/50 bg-transparent text-cyan-100 hover:border-cyan-400 hover:bg-cyan-500/10",
    ghost:
      "border border-white/15 bg-white/5 text-zinc-100 hover:border-white/25 hover:bg-white/10",
  };
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition-all duration-300",
    variants[variant],
  );
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonClass(variant), className)}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonClass(variant), className)}>
      {children}
    </Link>
  );
}
