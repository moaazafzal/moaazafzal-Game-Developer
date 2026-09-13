"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Pulls its child a little way toward the pointer while the pointer is within
 * `radius` of the element's centre, then springs back. Pointer-only: it is
 * skipped for coarse pointers and for reduced motion.
 */
export function Magnet({
  children,
  radius = 180,
  strength = 0.22,
  className = "",
}: {
  children: ReactNode;
  radius?: number;
  strength?: number;
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 140, damping: 18, mass: 0.6 });

  function track(e: React.PointerEvent) {
    if (still || e.pointerType !== "mouse" || !host.current) return;
    const r = host.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) > radius + Math.max(r.width, r.height) / 2) return;
    mx.set(dx * strength);
    my.set(dy * strength);
  }

  const release = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={host}
      onPointerMove={track}
      onPointerLeave={release}
      className={className}
      style={{ padding: radius / 3 }}
    >
      <motion.div style={{ x, y }}>{children}</motion.div>
    </div>
  );
}
