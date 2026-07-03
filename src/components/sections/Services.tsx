import { Coffee, Cog, Plug, MonitorSmartphone, Database, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SERVICES } from "@/constants/data";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Coffee,
  Cog,
  Plug,
  MonitorSmartphone,
  Database,
  Smartphone,
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading
          index="07."
          label="services"
          title="What I can take off your plate"
          description="Focused on backend systems, but comfortable owning a feature end to end when the project needs it."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <RevealOnScroll key={service.title} delay={(i % 3) * 0.1}>
                <GlassCard className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    {service.description}
                  </p>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
