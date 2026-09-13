"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Slides content in once, the first time it reaches the viewport. */
export function FadeIn({
  children,
  delay = 0,
  x = 0,
  y = 28,
  duration = 0.7,
  className = "",
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  duration?: number;
  className?: string;
  /** Animate as soon as it mounts. Use for anything on the first screen: the
   *  scroll trigger's negative margin never fires for elements pinned to the
   *  top, so they would sit at opacity 0 forever. */
  onMount?: boolean;
}) {
  const still = useReducedMotion();
  const shown = { opacity: 1, x: 0, y: 0 };
  return (
    <motion.div
      className={className}
      initial={still ? false : { opacity: 0, x, y }}
      {...(onMount
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: true, margin: "-60px" } })}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reveals a paragraph word by word as it scrolls past, so long copy is read
 * rather than skimmed. Words keep their own spacing so the text still wraps
 * and still selects as one block.
 */
export function RevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const still = useReducedMotion();
  const words = text.split(" ");

  if (still) return <p className={className}>{text}</p>;

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.022 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0.12, y: 6 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}
