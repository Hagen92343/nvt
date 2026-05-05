"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  ChevronDown,
  Flame,
  TreePine,
  Flower2,
  Sparkles,
  IceCream,
  Cookie,
  Candy,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CONTACT_ANCHOR } from "@/lib/site";
import type { ProductData } from "@/content/product-types";

type Props = {
  data: ProductData;
};

export function ProductPage({ data }: Props) {
  return (
    <article className="relative">
      <Hero data={data} />
      <SectionVanille data={data} />
      <SectionHerkunft data={data} />
      <SectionAroma data={data} />
      <SectionGastronomy data={data} />
      <SectionPromise data={data} />
      <CtaBlock data={data} />
    </article>
  );
}

/* ─────────────  Hero  ───────────── */

function Hero({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-cocoa-900 text-cream-50"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-0">
        <Image
          src={data.hero.image}
          alt={data.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa-950/40 via-cocoa-900/30 to-cocoa-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa-950/60 via-transparent to-transparent" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none grain z-[1]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-[100svh] container-page flex flex-col justify-end pb-24 md:pb-32 pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-cream-200"
        >
          {data.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display font-semibold text-display-2xl text-balance max-w-[18ch]"
        >
          {data.hero.title}
          {data.hero.titleAccent && (
            <>
              <br />
              <span className="italic font-serif font-light text-amber-400">
                {data.hero.titleAccent}
              </span>
            </>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-cream-100/90"
        >
          {data.hero.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-100/70"
      >
        <span className="eyebrow">Scroll</span>
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

/* ─────────────  Sektion 1 · Unsere Vanille  ───────────── */

function SectionVanille({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section ref={ref} className="relative py-section container-page">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow">01 · Unsere Vanille</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[14ch]">
              {data.vanille.headline}
            </h2>
          </Reveal>
          {data.vanille.subhead && (
            <Reveal delay={0.14}>
              <p className="mt-4 font-serif italic text-amber-600 dark:text-amber-400 text-xl md:text-2xl">
                {data.vanille.subhead}
              </p>
            </Reveal>
          )}
          {data.vanille.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.16 + i * 0.06}>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-cocoa-800/85 dark:text-cream-100/85">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <motion.div
            style={{ y, scale }}
            className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-cream-100 dark:bg-cocoa-900 shadow-2xl shadow-cocoa-700/15"
          >
            <Image
              src={data.vanille.image}
              alt={data.vanille.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  Sektion 2 · Herkunft  ───────────── */

function SectionHerkunft({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      className="relative py-section bg-cream-100 dark:bg-cocoa-900 overflow-hidden"
    >
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 relative">
          <motion.div
            style={{ y }}
            className="relative aspect-[5/4] w-full rounded-[2rem] overflow-hidden bg-paper dark:bg-cocoa-950 shadow-2xl shadow-cocoa-700/15"
          >
            <Image
              src={data.herkunft.image}
              alt={data.herkunft.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <Reveal delay={0.2}>
            <div className="absolute -right-2 lg:-right-8 -bottom-6 bg-paper dark:bg-cocoa-950 rounded-2xl px-6 py-5 shadow-2xl shadow-cocoa-700/15 border border-cocoa-700/5 dark:border-cream-200/5 max-w-[18rem]">
              <div className="font-display font-semibold text-3xl">Sambava</div>
              <div className="mt-1 text-sm text-cocoa-800/70 dark:text-cream-100/70">
                Madagaskar · Herzregion der weltbesten Vanille.
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">02 · Herkunft</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[14ch]">
              {data.herkunft.headline}
            </h2>
          </Reveal>
          {data.herkunft.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.14 + i * 0.06}>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-cocoa-800/85 dark:text-cream-100/85">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  Sektion 3 · Aromaprofil  ───────────── */

function SectionAroma({ data }: Props) {
  return (
    <section className="relative py-section container-page">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">03 · Aromaprofil</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[14ch]">
              {data.aroma.headline}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          {data.aroma.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="mt-0 mb-6 max-w-prose text-lg leading-relaxed text-cocoa-800/85 dark:text-cream-100/85">
                {p}
              </p>
            </Reveal>
          ))}

          <div className="mt-10 flex flex-wrap gap-3">
            {data.aroma.notes.map((note, i) => {
              const Icon = iconForNote(note);
              return (
                <Reveal key={note} delay={0.2 + i * 0.06}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cocoa-700/15 dark:border-cream-200/15 bg-paper dark:bg-cocoa-950/50 px-5 py-2.5 text-sm font-medium text-cocoa-800 dark:text-cream-100 shadow-sm">
                    <Icon size={16} className="text-amber-500 shrink-0" strokeWidth={2} />
                    {note}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function iconForNote(note: string): LucideIcon {
  const n = note.toLowerCase();
  if (/(rauchig|holzig|tabak|wald)/.test(n)) return TreePine;
  if (/(blumig|blüte|floral)/.test(n)) return Flower2;
  if (/(intensiv|kräftig|warm)/.test(n)) return Flame;
  if (/(lakritz|gewürz|würzig)/.test(n)) return Sparkles;
  if (/(creme|süß|sahne|vanille)/.test(n)) return IceCream;
  if (/(schokolade|kakao|mocca)/.test(n)) return Cookie;
  if (/(karamell|honig|sirup)/.test(n)) return Candy;
  return Leaf;
}

/* ─────────────  Sektion 4 · Gastronomie  ───────────── */

function SectionGastronomy({ data }: Props) {
  return (
    <section className="relative py-section bg-cocoa-900 text-cream-50">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-amber-400">04 · Anwendung</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[16ch]">
                {data.gastronomy.headline}
              </h2>
            </Reveal>
          </div>
          {data.gastronomy.intro && (
            <div className="lg:col-span-6 lg:flex lg:items-end">
              <Reveal delay={0.16}>
                <p className="font-serif italic text-2xl md:text-3xl text-amber-400">
                  {data.gastronomy.intro}
                </p>
              </Reveal>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {data.gastronomy.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="group h-full rounded-[1.75rem] border border-cream-100/10 bg-cocoa-800/40 p-8 md:p-9 backdrop-blur-sm transition-colors duration-500 ease-apple hover:border-amber-400/40 hover:bg-cocoa-800/70">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 font-display text-sm font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display font-semibold text-2xl md:text-3xl text-cream-50 text-balance">
                  {item.label}
                </h3>
                <p className="mt-3 text-cream-100/75 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  Sektion 5 · Qualitätsversprechen  ───────────── */

function SectionPromise({ data }: Props) {
  return (
    <section className="relative py-section container-page">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">05 · Qualität</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[14ch]">
              {data.promise.headline}
            </h2>
          </Reveal>
        </div>
      </div>

      <ul className="divide-y divide-cocoa-700/10 dark:divide-cream-200/10 border-y border-cocoa-700/10 dark:border-cream-200/10">
        {data.promise.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 0.06}>
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-7 md:py-9">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-cocoa-900">
                  <Check size={18} strokeWidth={3} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-cocoa-900 dark:text-cream-50 text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-cocoa-800/75 dark:text-cream-100/75 leading-relaxed max-w-prose">
                    {item.detail}
                  </p>
                </div>
                {item.highlight && (
                  <span className="font-display font-semibold text-3xl md:text-5xl text-amber-500 tabular-nums whitespace-nowrap">
                    {item.highlight}
                  </span>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─────────────  CTA  ───────────── */

function CtaBlock({ data }: Props) {
  return (
    <section className="container-page py-section-sm">
      <Reveal>
        <div className="rounded-[2rem] bg-amber-400 text-cocoa-900 p-10 md:p-16 flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <div>
            <p className="eyebrow">{data.cta.eyebrow}</p>
            <h3 className="mt-3 font-display font-semibold text-display-md text-balance max-w-[18ch]">
              {data.cta.title}
            </h3>
          </div>
          <MagneticButton href={CONTACT_ANCHOR}>
            <Link
              href={CONTACT_ANCHOR}
              className="btn-apple bg-cocoa-900 text-cream-50 hover:bg-cocoa-800"
            >
              {data.cta.label}
            </Link>
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
