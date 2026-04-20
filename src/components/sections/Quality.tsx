"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Quality() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section ref={ref} className="relative py-section container-page">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow">40 Jahre · Handwerkliches Know-how</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[12ch]">
              Höchste Qualität.<br />
              <span className="text-amber-500">Ohne Kompromiss.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-prose text-lg leading-relaxed text-cocoa-800/80 dark:text-cream-100/80">
              Vier Jahrzehnte partnerschaftliche Arbeit mit madagassischen Produzent&#39;innen. Jede Ernte wird kuratiert, jede Schote manuell sortiert. Wir wählen aus, was wir selbst verwenden würden – und reichen nichts weiter, was dem nicht entspricht.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-10 space-y-5 border-t border-cocoa-700/10 dark:border-cream-200/10 pt-8">
              {[
                ["Fermentation", "Dreistufiger Prozess nach traditionellem Verfahren in Sambava."],
                ["Sortierung", "Kaliber, Farbe, Elastizität – drei Kriterien, alle müssen stimmen."],
                ["Transport", "Klimatisiert, vakuumversiegelt, direkt nach Europa."],
              ].map(([k, v]) => (
                <li key={k} className="grid grid-cols-[9rem_1fr] gap-6">
                  <span className="eyebrow pt-0.5">{k}</span>
                  <span className="text-cocoa-800 dark:text-cream-100">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <motion.div
            style={{ y, scale }}
            className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden bg-cream-100 dark:bg-cocoa-900 shadow-2xl shadow-cocoa-700/10"
          >
            <Image
              src="/images/bourbon-product.png"
              alt="Bourbon-Vanille aus Madagaskar"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <Reveal delay={0.3}>
            <div className="absolute -left-4 lg:-left-10 bottom-8 lg:-bottom-6 bg-paper dark:bg-cocoa-900 rounded-2xl px-6 py-5 shadow-2xl shadow-cocoa-700/10 border border-cocoa-700/5 dark:border-cream-200/5 max-w-[18rem]">
              <div className="font-display font-semibold text-3xl">40+</div>
              <div className="mt-1 text-sm text-cocoa-800/70 dark:text-cream-100/70">
                Jahre Erfahrung im direkten Import aus der Sava-Region.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
