"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "booting jvm...",
  "loading spring context...",
  "compiling portfolio.java",
  "build success.",
];

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < BOOT_LINES.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 320);
      return () => clearTimeout(t);
    }
    const done = setTimeout(() => setVisible(false), 450);
    return () => clearTimeout(done);
  }, [lineIndex]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]"
        >
          <div className="w-72 font-mono text-sm text-[var(--color-text-muted)]">
            {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
              <div key={line} className="flex items-center gap-2 py-0.5">
                <span className="text-[var(--color-accent)]">$</span>
                <span className={i === lineIndex ? "text-[var(--color-text)]" : ""}>
                  {line}
                </span>
              </div>
            ))}
            <span className="caret h-4 align-middle" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
