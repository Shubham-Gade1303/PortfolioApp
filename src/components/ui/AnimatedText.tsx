"use client";

import { Children, isValidElement, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type TextElement = keyof typeof motion;

function getTransition(duration: number, delay = 0) {
  return { duration, delay, ease: easeOut };
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
  as?: "h1" | "h2" | "h3" | "h4";
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={getTransition(0.8, delay)}
    >
      {children}
    </MotionTag>
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
  as?: "p" | "span" | "div";
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.p;

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={getTransition(0.6, delay)}
    >
      {children}
    </MotionTag>
  );
}

export function SplitText({
  text,
  className,
  delay = 0,
  as = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.h1;
  const chars = text.split("");

  return (
    <MotionTag className={cn("inline-block", className)}>
      {chars.map((char, index) => {
        const isSpace = char === " ";
        const content = isSpace ? "\u00A0" : char;

        return (
          <motion.span
            key={`${content}-${index}`}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={getTransition(0.45, delay + index * 0.02)}
            className={isSpace ? "inline-block w-[0.35em]" : "inline-block"}
          >
            {content}
          </motion.span>
        );
      })}
    </MotionTag>
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
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        return (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={getTransition(0.6, delay + index * stagger)}
            className="w-full"
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
