import { AnimatedHeading, AnimatedText } from "./AnimatedText";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <AnimatedText as="p" delay={0.05} className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
        {index} {label}
      </AnimatedText>
      <AnimatedHeading as="h2" delay={0.1} className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        {title}
      </AnimatedHeading>
      {description && (
        <AnimatedText as="p" delay={0.15} className="mt-4 text-[var(--color-text-muted)]">{description}</AnimatedText>
      )}
    </div>
  );
}
