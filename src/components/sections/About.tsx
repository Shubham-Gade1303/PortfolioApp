import { GraduationCap, Target, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCard, AnimatedSection } from "@/components/ui/AnimationSystem";

const CARDS = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.E. in Computer Engineering, with coursework spanning data structures, algorithms, and database systems.",
  },
  {
    icon: Target,
    title: "Objective",
    text: "Looking for a Trainee Java Developer role where I can build production systems and keep learning fast.",
  },
  {
    icon: Code2,
    title: "Approach",
    text: "I like writing code that's easy to read six months later — clear naming, small methods, tested edge cases.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          index="01."
          label="about"
          title="A developer who reads the stack trace before Googling it"
          description="Computer Engineering graduate focused on Java and the Spring ecosystem, with a working comfort across the frontend stack too."
        />

        <AnimatedSection className="grid gap-5 sm:grid-cols-3" stagger={0.08}>
          {CARDS.map((card, index) => (
            <AnimatedCard key={card.title} delay={index * 0.08}>
              <GlassCard className="h-full">
                <card.icon className="text-[var(--color-primary)]" size={22} />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-medium">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{card.text}</p>
              </GlassCard>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
