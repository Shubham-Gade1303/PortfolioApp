"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { SITE, SOCIAL_LINKS } from "@/constants/data";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { AnimatedHeading, AnimatedText, SplitText } from "@/components/ui/AnimationSystem";

const ROLES = [
  "Java Full Stack Developer",
  "Spring Boot Engineer",
  "REST API Builder",
  "React & TypeScript Developer",
];

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: FaGithub,
  Linkedin: FaLinkedin,
  LeetCode: SiLeetcode,
  Mail: FaEnvelope,
};

export function Hero() {
  const typed = useTypingEffect({ words: ROLES });
  const [imageSrc, setImageSrc] = useState<string>("/profile.png");
  const [resumeSrc, setResumeSrc] = useState<string>("/resume.pdf");

  useEffect(() => {
    const candidates = ["/profile.png", "/profile-photo.png", "/profile-photo.jpg", "/profile-photo.jpeg", "/profile-photo.webp", "/profile-photo.svg", "/me.png", "/me.jpg", "/me.jpeg", "/me.webp", "/my-photo.png", "/my-photo.jpg", "/my-photo.jpeg", "/my-photo.webp"];
    const resumeCandidates = ["/resume.pdf", "/Resume.pdf", "/cv.pdf", "/CV.pdf", "/my-resume.pdf"];

    const checkAsset = async (src: string) => {
      const response = await fetch(src, { method: "HEAD" });
      return response.ok;
    };

    void (async () => {
      for (const src of candidates) {
        if (await checkAsset(src)) {
          setImageSrc(src);
          break;
        }
      }

      for (const src of resumeCandidates) {
        if (await checkAsset(src)) {
          setResumeSrc(src);
          break;
        }
      }
    })();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="grid-fade absolute inset-0" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <AnimatedText as="p" delay={0.05} className="font-mono text-sm text-[var(--color-accent)]">
            hello, world
          </AnimatedText>

          <AnimatedHeading as="h1" delay={0.1} className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            <SplitText text={`I'm ${SITE.name.split(" ")[0]},`} as="span" delay={0.1} />
            <br />
            <span className="text-gradient"><SplitText text="building" as="span" delay={0.24} /></span> with Java.
          </AnimatedHeading>

          <div className="mt-5 h-8 font-mono text-lg text-[var(--color-text-muted)] sm:text-xl">
            <span>{typed}</span>
            <span className="caret ml-0.5 h-5" />
          </div>

          <AnimatedText delay={0.2} className="mt-6 max-w-lg text-[var(--color-text-muted)]">
            {SITE.tagline}
          </AnimatedText>

          <AnimatedText delay={0.3} className="mt-8 flex flex-wrap items-center gap-4">
            <LinkButton href={resumeSrc} download variant="primary">
              <Download size={16} /> Download resume
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              Hire me
            </LinkButton>
          </AnimatedText>

          <AnimatedText delay={0.4} className="mt-8 flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {Icon ? <Icon size={17} /> : null}
                </a>
              );
            })}
          </AnimatedText>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel rounded-2xl p-4 shadow-2xl shadow-black/40"
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-2">
            <div className="overflow-hidden rounded-[14px] bg-[var(--color-bg)]">
              <img
                src={imageSrc}
                alt={SITE.name}
                className="h-[420px] w-full rounded-[14px] object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-muted)]"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
