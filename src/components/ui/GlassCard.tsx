import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  withDots = false,
}: {
  children: ReactNode;
  className?: string;
  withDots?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50",
        className
      )}
    >
      {withDots && (
        <div className="mb-4 flex gap-1.5">
          <span className="term-dot bg-[#f87171]" />
          <span className="term-dot bg-[#fbbf24]" />
          <span className="term-dot bg-[#34d399]" />
        </div>
      )}
      {children}
    </div>
  );
}
