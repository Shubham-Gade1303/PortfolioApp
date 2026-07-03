import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-mono text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50";

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white px-6 py-3 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/30",
  secondary:
    "border border-[var(--color-border)] text-[var(--color-text)] px-6 py-3 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost:
    "text-[var(--color-text-muted)] px-4 py-2 hover:text-[var(--color-text)]",
};

type Variant = keyof typeof variants;

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = "primary",
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
