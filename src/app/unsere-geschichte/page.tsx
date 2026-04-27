"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { geschichte } from "@/content/geschichte";

export default function StoryPage() {
  return (
    <article className="relative">
      <StoryHero />
      <StoryNarrative />
      <StoryClosing />
      <StoryCta />
    </article>
  );
}

function StoryHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper text-cocoa-900 dark:bg-cocoa-950 dark:text-cream-50"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-0 opacity-20 dark:opacity-25"
      >
        <Image
          src="/images/hero-vanilla.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/60 to-paper dark:from-cocoa-950/30 dark:via-cocoa-950/60 dark:to-cocoa-950" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-[100svh] container-page flex flex-col justify-end pb-24 md:pb-32 pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          {geschichte.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display font-semibold text-display-2xl text-balance max-w-[20ch] leading-[0.95]"
        >
          {geschichte.hero.title}
          <br />
          <span className="italic font-serif font-light text-amber-500">
            {geschichte.hero.titleAccent}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-cocoa-800/80 dark:text-cream-100/80"
        >
          {geschichte.hero.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cocoa-700/70 dark:text-cream-100/70"
      >
        <span className="eyebrow">Die Geschichte</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StoryNarrative() {
  return (
    <section className="relative pt-section-sm pb-section">
      <div className="container-page">
        <div className="mx-auto max-w-prose space-y-32 md:space-y-40">
          {geschichte.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-12 md:-left-20 top-1 font-serif italic text-cocoa-700/20 dark:text-cream-200/20 text-2xl tabular-nums select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl md:text-[1.5rem] leading-[1.7] text-cocoa-900 dark:text-cream-50 text-pretty">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryClosing() {
  return (
    <section className="relative py-section bg-cocoa-900 text-cream-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grain z-[1]" />
      <div className="relative z-10 container-page flex flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow text-amber-400">2026 · Heute</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display font-semibold text-display-xl md:text-display-2xl text-balance max-w-[18ch] leading-[0.95]">
            {geschichte.closing}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <span className="mt-12 inline-block h-px w-24 bg-amber-400" />
        </Reveal>
      </div>
    </section>
  );
}

function StoryCta() {
  return (
    <section className="container-page py-section-sm">
      <Reveal>
        <div className="rounded-[2rem] border border-cocoa-700/10 dark:border-cream-200/10 p-10 md:p-16 flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <div>
            <p className="eyebrow">Weiter entdecken</p>
            <h3 className="mt-3 font-display font-semibold text-display-md text-balance max-w-[18ch]">
              Jetzt unsere Vanille entdecken.
            </h3>
          </div>
          <Link href="/bourbon" className="btn-primary inline-flex items-center gap-2">
            Zur Bourbon-Vanille <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
