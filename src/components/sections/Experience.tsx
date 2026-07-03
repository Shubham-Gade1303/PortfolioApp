import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { EXPERIENCE } from "@/constants/data";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          index="04."
          label="experience"
          title="Where the hands-on hours went"
        />

        <ol className="relative border-l border-[var(--color-border)] pl-8">
          {EXPERIENCE.map((item, i) => (
            <RevealOnScroll key={item.role} delay={i * 0.1} className="mb-10 last:mb-0">
              <li>
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                <p className="font-mono text-xs text-[var(--color-text-muted)]">{item.period}</p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-medium">
                  {item.role}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {item.organization} · {item.location}
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--color-text-muted)]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </Container>
    </section>
  );
}
