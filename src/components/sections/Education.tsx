import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { EDUCATION } from "@/constants/data";

export function Education() {
  return (
    <section id="education" className="py-24">
      <Container>
        <SectionHeading index="05." label="education" title="Academic background" />

        <ol className="relative border-l border-[var(--color-border)] pl-8">
          {EDUCATION.map((item, i) => (
            <RevealOnScroll key={item.degree} delay={i * 0.1} className="mb-10 last:mb-0">
              <li>
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-[var(--color-primary)]" />
                <p className="font-mono text-xs text-[var(--color-text-muted)]">{item.period}</p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-medium">
                  {item.degree}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {item.institution} · {item.score}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </Container>
    </section>
  );
}
