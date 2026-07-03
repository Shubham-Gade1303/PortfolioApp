"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimationSystem";
import { PROJECTS } from "@/constants/data";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          index="03."
          label="projects"
          title="Things I've built end to end"
          description="Each project pairs a Spring Boot backend with a proper data layer, and most ship a working frontend on top."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <AnimatedCard key={project.slug} delay={(i % 2) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="glass-panel group h-full overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-[var(--color-accent)]/90 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-[#04140b]">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-accent)]">{project.tagline}</p>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                    {project.description}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-1.5 text-xs text-[var(--color-text-muted)]"
                      >
                        <Check size={13} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 py-2 font-mono text-xs transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-4 py-2 font-mono text-xs text-white transition-transform hover:scale-105"
                      >
                        <ExternalLink size={14} /> Live demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
