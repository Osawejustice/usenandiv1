"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in seconds, for sequencing siblings. */
  delay?: number;
  /** Vertical travel in px. Kept small so motion reads as a settle, not a slide. */
  y?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fade + slight upward entrance, fired once when the element scrolls into view.
 * Falls back to a plain fade-free render when the user prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Container variants for lists that should reveal their children in sequence. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Wrapper that reveals children in sequence. Used for card grids where a single
 * Reveal per card would mean a lot of observers.
 */
export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
