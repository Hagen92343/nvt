"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "light" | "dark";
};

export function PageHero({ eyebrow, title, subtitle, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <section
      className={
        "relative overflow-hidden pt-40 md:pt-48 pb-20 md:pb-28 " +
        (dark
          ? "bg-cocoa-900 text-cream-50"
          : "bg-paper dark:bg-cocoa-950 text-cocoa-900 dark:text-cream-50")
      }
    >
      <div className="container-page">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={"eyebrow " + (dark ? "text-amber-400" : "")}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-display font-semibold text-display-xl text-balance max-w-[20ch]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-current/80"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
