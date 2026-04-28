"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function DirectImport() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="relative py-section bg-cocoa-800 text-cream-50 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-amber-400">Sambava · Madagaskar</p>
            </Reveal>
            <motion.h2
              style={{ y: titleY }}
              className="mt-5 font-display font-semibold text-display-xl text-balance"
            >
              Direkt ab Plantage.
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <p className="text-lg md:text-xl leading-relaxed text-cream-100/90 max-w-prose">
                Wir kaufen dort, wo die Vanille wächst – bei Familien, mit denen wir seit Jahrzehnten zusammenarbeiten. Kein Broker, keine anonyme Beschaffung. Wir kennen jedes Feld.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-cocoa-700 border border-cocoa-700 rounded-2xl overflow-hidden">
            {[
              ["01", "Anbau", "Sambava"],
              ["02", "Fermentation", "Traditionell, 3-stufig"],
              ["03", "Qualitätskontrolle", "Vor Ort + in Köln"],
              ["04", "Lieferung", "Direkt an Gastronomie, Handel und Industrie"],
            ].map(([num, title, sub]) => (
              <div key={num} className="bg-cocoa-800 p-8 md:p-10">
                <div className="font-mono text-amber-400 text-sm">{num}</div>
                <div className="mt-6 font-display text-2xl font-semibold">{title}</div>
                <div className="mt-2 text-sm text-cream-100/70">{sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
