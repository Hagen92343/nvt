"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
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
import { produkte, type Produkt } from "@/content/produkte";

function iconForNote(note: string): LucideIcon {
  const n = note.toLowerCase();
  if (/(rauchig|holzig|tabak|wald)/.test(n)) return TreePine;
  if (/(blumig|blüte|floral)/.test(n)) return Flower2;
  if (/(intensiv|kräftig|warm|tief|konzentriert|reich|voll)/.test(n)) return Flame;
  if (/(lakritz|gewürz|würzig)/.test(n)) return Sparkles;
  if (/(creme|süß|sahne|cremig|rund|bourbon)/.test(n)) return IceCream;
  if (/(schokolade|kakao)/.test(n)) return Cookie;
  if (/(karamell|honig)/.test(n)) return Candy;
  return Leaf;
}

export function ProductsCatalog() {
  return (
    <div className="relative">
      {produkte.map((p, i) => (
        <ProductSection key={p.slug} produkt={p} index={i} total={produkte.length} />
      ))}
    </div>
  );
}

function ProductSection({
  produkt,
  index,
  total,
}: {
  produkt: Produkt;
  index: number;
  total: number;
}) {
  const [active, setActive] = useState(0);
  const isLast = index === total - 1;
  const altRow = index % 2 === 1;

  return (
    <section
      id={produkt.slug}
      className={`relative scroll-mt-28 ${
        altRow ? "bg-cocoa-900/40" : ""
      }`}
    >
      <div className="container-page py-section-sm">
        {/* Produkt-Header */}
        <Reveal>
          <p className="font-mono text-xs tracking-[0.25em] text-amber-400/80">
            0{index + 1} · PRODUKT
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-3 font-display font-semibold text-display-lg text-balance text-cream-50 max-w-[18ch]">
            {produkt.name}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-2xl text-lg text-cream-100/75">
            {produkt.tagline}
          </p>
        </Reveal>

        {/* Hauptgrid: links Galerie / rechts Aromaprofil + Einsatz */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <ProductGallery
              images={produkt.images}
              active={active}
              setActive={setActive}
            />
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-prose text-base md:text-lg leading-relaxed text-cream-100/85">
                {produkt.description}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <Reveal delay={0.1}>
              <div>
                <h3 className="eyebrow text-cream-200/80">Aromaprofil</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {produkt.aroma.map((note) => {
                    const Icon = iconForNote(note);
                    return (
                      <li
                        key={note}
                        className="inline-flex items-center gap-2 rounded-full border border-cream-200/15 bg-cocoa-950/40 px-4 py-2 text-sm font-medium text-cream-100"
                      >
                        <Icon size={15} className="text-amber-400 shrink-0" strokeWidth={2} />
                        {note}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div>
                <h3 className="eyebrow text-cream-200/80">Einsatzbereiche</h3>
                <ul className="mt-5 space-y-3">
                  {produkt.einsatz.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-3 text-cream-100/85 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {produkt.details && (
              <Reveal delay={0.22}>
                <div>
                  <h3 className="eyebrow text-cream-200/80">Eckdaten</h3>
                  <dl className="mt-5 divide-y divide-cream-200/10 border-y border-cream-200/10">
                    {produkt.details.map((d) => (
                      <div
                        key={d.label}
                        className="grid grid-cols-[10rem_1fr] gap-4 py-3 text-sm"
                      >
                        <dt className="text-cream-200/60">{d.label}</dt>
                        <dd className="text-cream-50">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            )}

            {produkt.detailHref && (
              <Reveal delay={0.28}>
                <Link
                  href={produkt.detailHref}
                  className="group inline-flex items-center gap-2 font-display text-lg font-semibold text-cream-50 hover:text-amber-400 transition-colors"
                >
                  {produkt.detailLabel ?? "Mehr erfahren"}
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-500 ease-apple group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="container-page">
          <div className="h-px bg-cream-200/10" />
        </div>
      )}
    </section>
  );
}

function ProductGallery({
  images,
  active,
  setActive,
}: {
  images: Produkt["images"];
  active: number;
  setActive: (i: number) => void;
}) {
  const main = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-cocoa-900 shadow-2xl shadow-cocoa-950/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={main.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-5 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Bild ${i + 1} anzeigen`}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl transition-all duration-500 ease-apple ${
                i === active
                  ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-cocoa-950"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="15vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
