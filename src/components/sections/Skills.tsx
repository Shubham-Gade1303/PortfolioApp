"use client";

import { LayoutTemplate, Server, Database, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCard } from "@/components/ui/AnimationSystem";
import { SKILL_CATEGORIES } from "@/constants/data";
import { motion } from "framer-motion";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  LayoutTemplate,
  Server,
  Database,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading
          index="02."
          label="skills"
          title="Comfortable across the whole stack"
          description="Java and Spring on the backend, React and TypeScript on the frontend, tied together with SQL and the tools that keep a team moving."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, i) => {
            const Icon = ICONS[category.icon];
            return (
              <AnimatedCard key={category.title} delay={(i % 2) * 0.08}>
                <GlassCard>
                  <div className="mb-5 flex items-center gap-3">
                    {Icon && <Icon size={20} />}
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-medium">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex justify-between font-mono text-xs text-[var(--color-text-muted)]">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-bg-elevated)]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
