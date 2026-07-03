"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, fadeLeft, fadeRight, scaleUp, staggerContainer, staggerItem, splitText, easeOut } from "./animations";

type MotionTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "article" | "form";

function resolveTag(tag: MotionTag) {
  return motion[tag];
}

export function AnimatedHeading({
  children,
  className,
  delay = 0,
  as = "h2",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: MotionTag;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = resolveTag(as) as typeof motion.h2;

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : "visible"}
      variants={fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </Component>
  );
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  as = "p",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: MotionTag;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = resolveTag(as) as typeof motion.p;

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : "visible"}
      variants={fadeUp}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </Component>
  );
}

export function SplitText({
  text,
  className,
  delay = 0,
  as = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: MotionTag;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = resolveTag(as) as typeof motion.span;
  const chars = text.split("");

  return (
    <Component className={cn("inline-block", className)}>
      {chars.map((char, index) => {
        const isSpace = char === " ";
        const content = isSpace ? "\u00A0" : char;

        return (
          <motion.span
            key={`${content}-${index}`}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : "visible"}
            variants={splitText}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: delay + index * 0.025, ease: easeOut }}
            className={isSpace ? "inline-block w-[0.35em]" : "inline-block"}
          >
            {content}
          </motion.span>
        );
      })}
    </Component>
  );
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1 } : "visible"}
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, staggerChildren: stagger }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={staggerItem} className="w-full">
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" } : "hidden"}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" } : "visible"}
      variants={scaleUp}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 45px rgba(2,8,23,0.25)" }}
    >
      {children}
    </motion.div>
  );
}
