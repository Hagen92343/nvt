"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function PomponaTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={ref} className="relative py-section bg-paper dark:bg-cocoa-950 overflow-hidden">
      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Exklusive Produkte</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance">
              Pompona. <span className="italic font-serif font-light text-amber-500">Rar.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-cocoa-800/80 dark:text-cream-100/80">
              Weniger als 1 % der weltweiten Vanilleproduktion. Fleischiger, komplexer, mit Anklängen von Tabak und Trockenfrucht. Für Patissiers, die das Außergewöhnliche suchen.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/pompona"
                className="group inline-flex items-center gap-2 font-display text-xl font-semibold text-cocoa-800 dark:text-cream-50 hover:text-amber-500 transition-colors"
              >
                Pompona entdecken
                <ArrowUpRight className="transition-transform duration-500 ease-apple group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 relative">
          <motion.div style={{ y: imageY }} className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-cream-100 dark:bg-cocoa-900">
            <Image
              src="/images/pompona-product.png"
              alt="Pompona-Vanille aus Madagaskar"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: numberY }}
            aria-hidden
            className="pointer-events-none absolute -top-8 -right-4 lg:-right-12 font-display font-semibold text-[clamp(6rem,16vw,14rem)] leading-none tracking-[-0.05em] text-amber-400/70 mix-blend-multiply dark:mix-blend-screen"
          >
            &lt;1%
          </motion.div>
        </div>
      </div>
    </section>
  );
}
