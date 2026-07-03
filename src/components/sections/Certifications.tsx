import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CERTIFICATIONS } from "@/constants/data";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <Container>
        <SectionHeading index="06." label="certifications" title="Certifications" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => (
            <RevealOnScroll key={cert.name} delay={(i % 4) * 0.08}>
              <GlassCard className="h-full">
                <BadgeCheck className="text-[var(--color-accent)]" size={22} />
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-base font-medium">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{cert.issuer}</p>
                <p className="mt-2 font-mono text-xs text-[var(--color-text-muted)]">{cert.year}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
