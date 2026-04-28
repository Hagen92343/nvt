"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-cocoa-900 text-cream-50">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-0">
        <Image
          src="/images/hero-vanilla.jpg"
          alt="Handverlesene Bourbon-Vanilleschoten aus Madagaskar"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa-950/40 via-cocoa-900/30 to-cocoa-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa-950/60 via-transparent to-transparent" />
      </motion.div>

      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none grain z-[1]" />

      <motion.div style={{ opacity }} className="relative z-10 min-h-[100svh] container-page flex flex-col justify-end pb-24 md:pb-32 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-cream-200"
        >
          Sava-Region · Madagaskar
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display font-semibold text-display-2xl text-balance max-w-[18ch]"
        >
          Willkommen bei <span className="italic font-serif font-light text-amber-400">Sava Select</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-cream-100/90"
        >
          Spitzenvanille direkt aus der Sava-Region. Kein Zwischenhandel, keine Kompromisse – nur Schoten, die jede Prüfung bestehen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="/kontakt">
            <Link href="/kontakt" className="btn-primary bg-amber-400 text-cocoa-900 hover:bg-amber-300">
              Jetzt kostenlose Probe erhalten
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-100/70"
      >
        <span className="eyebrow">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
