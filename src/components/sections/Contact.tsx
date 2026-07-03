"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedCard, AnimatedText } from "@/components/ui/AnimationSystem";
import { SITE } from "@/constants/data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          index="09."
          label="contact"
          title="Let's build something"
          description="Open to Trainee Java Developer roles and freelance full-stack work. I usually reply within a day."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <AnimatedCard delay={0.05} className="glass-panel flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">Email</p>
                <p className="text-sm">{SITE.email}</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.12} className="glass-panel flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--color-text-muted)]">Location</p>
                <p className="text-sm">{SITE.location}</p>
              </div>
            </AnimatedCard>
          </div>

          <AnimatedCard delay={0.1} className="glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="What's this about?"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-[var(--color-text-muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-primary)]"
                  placeholder="Tell me a bit about the role or project..."
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full sm:w-auto"
            >
              <Send size={15} />
              {status === "loading" ? "Sending..." : "Send message"}
            </Button>

            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-[var(--color-bg)]/95 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <CheckCircle2 className="text-[var(--color-accent)]" size={48} />
                  </motion.div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-medium">
                    Message sent
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            </form>
          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}
