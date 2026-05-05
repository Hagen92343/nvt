"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";

type Stat = {
  label: string;
  value: number;
  decimals: number;
  suffix: string;
  prefix?: string;
  headline: string;
  body: string;
};

const stats: Stat[] = [
  {
    label: "Vanillin-Gehalt",
    value: 2.3,
    decimals: 1,
    suffix: " %",
    prefix: "1,8 – ",
    headline: "Aromatische Tiefe, messbar.",
    body:
      "Unsere Vanille liegt mit ihrem Vanillin-Gehalt am oberen Ende des internationalen Standards. Vanillin ist der Hauptaromastoff in der Vanilleschote und sorgt für den Geruch sowie Geschmack.",
  },
  {
    label: "Feuchtigkeit",
    value: 38,
    decimals: 0,
    suffix: " %",
    prefix: "36 – ",
    headline: "Geschmeidig statt spröde.",
    body:
      "Die Feuchtigkeit definiert, ob eine Schote biegsam bleibt und ob sie sich auskratzen lässt – also wie intensiv sie ihr Aroma freigibt. Wir halten den Restwassergehalt in einem präzise definierten Korridor.",
  },
  {
    label: "Schotenlänge",
    value: 30,
    decimals: 0,
    suffix: " cm",
    prefix: "18 – ",
    headline: "Handverlesene Formate.",
    body:
      "Länge allein macht keine gute Vanille. Aber erst wenn Länge, Dicke und Reife zusammenstimmen, entsteht die Schote, die wir als Sava Select bezeichnen.",
  },
];

export function StatsPin() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section className="relative bg-cream-50 dark:bg-cocoa-950 text-cocoa-900 dark:text-cream-50">
      <div className="container-page pt-section pb-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          Die Kennzahlen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display font-semibold text-display-lg max-w-[14ch] text-balance"
        >
          Was Spitzenvanille ausmacht.
        </motion.h2>
      </div>

      <div ref={ref} className="relative" style={{ height: `${stats.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container-page w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative">
              {stats.map((stat, i) => (
                <StatNumber key={stat.label} stat={stat} index={i} total={stats.length} progress={scrollYProgress} />
              ))}
              <div className="aspect-square max-h-[60vh]" />
            </div>

            <div className="lg:col-span-5 relative">
              {stats.map((stat, i) => (
                <StatText key={stat.label + "-text"} stat={stat} index={i} total={stats.length} progress={scrollYProgress} />
              ))}
              <div className="h-64" />
            </div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
            {stats.map((stat, i) => (
              <ProgressDot key={stat.label + "-dot"} index={i} total={stats.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useStepOpacity(progress: MotionValue<number>, index: number, total: number) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;
  const fade = segment * 0.22;
  // Clamp auf [0, 1] — sonst crasht das Web Animations API (Offsets müssen ≥ 0 sein).
  // Erste Stat startet sofort sichtbar, letzte bleibt bis zum Ende sichtbar.
  const a = Math.max(0, start - fade);
  const b = Math.min(1, Math.max(a + 0.0001, start + fade));
  const c = Math.max(b + 0.0001, Math.min(1, end - fade));
  const d = Math.min(1, Math.max(c + 0.0001, end + fade));
  return useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
}

function StatNumber({ stat, index, total, progress }: { stat: Stat; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const opacity = useStepOpacity(progress, index, total);
  const scale = useTransform(progress, [start, mid, end], [0.98, 1, 1.02]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex flex-col justify-center">
      <span className="eyebrow text-amber-600 dark:text-amber-400">{stat.label}</span>
      <div className="font-display text-stat leading-none tracking-[-0.05em] mt-3">
        <span className="text-cocoa-800/30 dark:text-cream-100/25">{stat.prefix}</span>
        <CountUp to={stat.value} decimals={stat.decimals} suffix={stat.suffix} duration={1.4} />
      </div>
    </motion.div>
  );
}

function StatText({ stat, index, total, progress }: { stat: Stat; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const opacity = useStepOpacity(progress, index, total);
  const y = useTransform(progress, [start, mid, end], [30, 0, -30]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
      <h3 className="font-display font-semibold text-3xl md:text-4xl text-balance max-w-md">{stat.headline}</h3>
      <p className="mt-5 text-base md:text-lg leading-relaxed text-cocoa-800/80 dark:text-cream-100/75 max-w-md">{stat.body}</p>
    </motion.div>
  );
}

function ProgressDot({ index, total, progress }: { index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const scale = useTransform(progress, [start, mid, end], [1, 1.8, 1]);
  const opacity = useTransform(progress, [start, mid, end], [0.25, 1, 0.25]);
  return <motion.span style={{ scale, opacity }} className="block w-1.5 h-1.5 rounded-full bg-cocoa-700 dark:bg-cream-100" />;
}
