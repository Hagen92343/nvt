"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Certificate = {
  src: string;
  alt: string;
  variety: string;
  date: string;
  vanillin: string;
  moisture: string;
};

const certificates: Certificate[] = [
  {
    src: "/zertifikate/zertifikat-1.png",
    alt: "Laborzertifikat Bourbon-Vanille – Februar 2026",
    variety: "Bourbon-Vanille",
    date: "Februar 2026",
    vanillin: "Vanillin 2,3 %",
    moisture: "Feuchtigkeit 38 %",
  },
  {
    src: "/zertifikate/zertifikat-2.png",
    alt: "Laborzertifikat Pompona-Vanille – März 2026",
    variety: "Pompona-Vanille",
    date: "März 2026",
    vanillin: "Vanillin 1,8 %",
    moisture: "Feuchtigkeit 36 %",
  },
];

export function CertificateGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? certificates[activeIndex] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <section className="container-page py-section-sm">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Laborergebnisse · Madagaskar</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-cocoa-800/85 dark:text-cream-100/85">
              Jede Charge wird im akkreditierten Labor in Antananarivo geprüft. Vanillingehalt, Feuchtigkeit und mikrobiologische Qualität werden bei jedem Import dokumentiert – transparent, nachvollziehbar, ohne Umwege.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {certificates.map((cert, i) => (
            <Reveal key={cert.src} delay={i * 0.1}>
              <motion.button
                type="button"
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group block w-full text-left rounded-[1.75rem] bg-paper dark:bg-cocoa-950 border border-cocoa-700/8 dark:border-cream-200/8 shadow-xl shadow-cocoa-700/8 hover:shadow-2xl hover:shadow-cocoa-700/15 transition-shadow duration-700 ease-apple p-6 md:p-8 cursor-zoom-in"
                aria-label={`${cert.variety} – Zertifikat in Großansicht öffnen`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-5">
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-cocoa-900 dark:text-cream-50">
                    {cert.variety}
                  </h3>
                  <span className="font-mono text-xs tracking-wider text-cocoa-700/60 dark:text-cream-200/60 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-cocoa-800/75 dark:text-cream-100/75 mb-6">
                  <span>{cert.vanillin}</span>
                  <span aria-hidden className="text-cocoa-700/30 dark:text-cream-200/30">·</span>
                  <span>{cert.moisture}</span>
                </div>
                <figure className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-cream-50 dark:bg-cocoa-900">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-contain transition-transform duration-700 ease-apple group-hover:scale-[1.015]"
                  />
                </figure>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] bg-cocoa-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.variety} – Zertifikat`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
              aria-label="Schließen"
              className="absolute top-6 right-6 md:top-10 md:right-10 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 hover:bg-cream-50/20 transition-colors"
            >
              <X size={22} />
            </button>

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <div className="relative w-full aspect-[3/4] max-h-[85vh] mx-auto">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  priority
                  className="object-contain"
                />
              </div>
              <div className="mt-5 text-center text-cream-100/85">
                <p className="font-display font-semibold text-lg md:text-xl text-cream-50">
                  {active.variety}
                </p>
                <p className="mt-1 text-sm">
                  {active.date} · {active.vanillin} · {active.moisture}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
