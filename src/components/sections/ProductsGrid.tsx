"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Tile = {
  name: string;
  tagline: string;
  image: string;
  alt: string;
  href: string;
};

const tiles: Tile[] = [
  {
    name: "Bourbon-Vanille",
    tagline: "Cremig, vollmundig, warm-süß",
    image: "/images/bourbon-product.png",
    alt: "Bourbon-Vanille aus Sambava",
    href: "/unsere-produkte#bourbon-vanille-schoten",
  },
  {
    name: "Pompona-Vanille",
    tagline: "Rar · weniger als 1 % der Weltproduktion",
    image: "/images/pompona-product.png",
    alt: "Pompona-Vanille – die seltene Perle",
    href: "/unsere-produkte#pompona-vanille-schoten",
  },
  {
    name: "Vanillepulver",
    tagline: "100 % gemahlene Madagaskar-Schoten",
    image: "/images/bourbon-2.png",
    alt: "Vanillepulver – fein gemahlen",
    href: "/unsere-produkte#vanillepulver",
  },
  {
    name: "Vanille Kaviar",
    tagline: "Reines Mark der Schote",
    image: "/images/bourbon-1.png",
    alt: "Vanille-Kaviar",
    href: "/unsere-produkte#vanille-kaviar",
  },
];

export function ProductsGrid() {
  return (
    <section className="relative py-section bg-cocoa-950 overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-amber-400">Unsere Produkte</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display font-semibold text-display-lg text-balance text-cream-50 max-w-[16ch]">
                Vanille in jeder Form, die Sie brauchen.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.16}>
              <p className="text-lg leading-relaxed text-cream-100/80 max-w-prose">
                Von der ganzen Schote bis zum konzentrierten Extrakt – jedes Produkt direkt aus Sambava und nach unseren Standards veredelt.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {tiles.map((tile, i) => (
            <Reveal key={tile.name} delay={i * 0.08}>
              <Link
                href={tile.href}
                className="group relative block overflow-hidden rounded-[1.5rem] bg-cocoa-900 aspect-[4/5]"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/95 via-cocoa-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-cream-50 leading-tight">
                    {tile.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-cream-100/70">{tile.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-amber-300/90">
                    Entdecken
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-500 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/unsere-produkte"
              className="btn-apple bg-amber-400 text-cocoa-900 hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-400/20"
            >
              Alle Produkte entdecken
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
