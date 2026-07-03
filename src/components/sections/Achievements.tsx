"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";
import { ACHIEVEMENTS } from "@/constants/data";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  return (
    <motion.span
      onViewportEnter={() => setActive(true)}
      viewport={{ once: true }}
      className="font-[family-name:var(--font-display)] text-4xl font-semibold text-gradient sm:text-5xl"
    >
      {count}
      {suffix}
    </motion.span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <Container>
        <SectionHeading index="08." label="achievements" title="Numbers so far" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.label} className="glass-panel rounded-2xl p-6 text-center">
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
