"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center gap-2.5 rounded-full font-medium uppercase tracking-widest transition-colors duration-200";

export function PillLink({
  href,
  children,
  tone = "solid",
  size = "md",
  external,
}: {
  href: string;
  children: ReactNode;
  tone?: "solid" | "outline";
  size?: "sm" | "md";
  external?: boolean;
}) {
  const tones = {
    solid: "bg-chalk text-ink hover:bg-white",
    outline: "border border-chalk/35 text-chalk hover:border-chalk hover:bg-chalk/5",
  };
  const sizes = {
    sm: "px-5 py-2 text-[0.7rem]",
    md: "px-7 py-3 text-xs sm:text-sm",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${tones[tone]} ${sizes[size]}`}
    >
      {children}
    </motion.a>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
