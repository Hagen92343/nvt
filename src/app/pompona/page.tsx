import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pompona-Vanille",
  description:
    "Pompona-Vanille – weniger als 1 % der Weltproduktion. Fleischiger, komplexer, mit Anklängen von Tabak und Trockenfrucht.",
};

export default function PomponaPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Vanilla pompona · unter 1 % der Weltproduktion"
        title={<>Pompona. <span className="italic font-serif font-light text-amber-400">Die Rare.</span></>}
        subtitle="Fleischiger als Bourbon, deutlich komplexer im Aroma. Pompona bringt Anklänge von Tabak, dunklem Honig und getrockneten Früchten – für Patissiers, die das Außergewöhnliche suchen."
      />

      <section className="container-page py-section-sm grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <figure className="relative aspect-square rounded-[2rem] overflow-hidden bg-cream-100 dark:bg-cocoa-900 shadow-2xl shadow-cocoa-900/10">
              <Image
                src="/images/pompona-product.png"
                alt="Pompona-Vanille"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <p className="eyebrow">Was macht Pompona besonders?</p>
            <h2 className="mt-4 font-display font-semibold text-display-md text-balance">
              Eine Sorte für Kenner.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cocoa-800/80 dark:text-cream-100/80 max-w-prose">
              Pompona-Schoten sind größer, fleischiger und reicher an ätherischen Ölen. Der Geschmack trägt rauchige, erdige Untertöne – ideal für dunkle Schokoladen, karamellisierte Desserts und aromatische Spirituosen.
            </p>
            <ul className="mt-10 space-y-5 border-t border-cocoa-700/10 dark:border-cream-200/10 pt-8">
              {[
                ["Sorte", "Vanilla pompona"],
                ["Aroma", "Tabak · Honig · Trockenfrucht"],
                ["Schotenlänge", "bis 25 cm"],
                ["Verfügbarkeit", "Limitiert pro Ernte"],
              ].map(([k, v]) => (
                <li key={k} className="grid grid-cols-[10rem_1fr] gap-6">
                  <span className="eyebrow pt-0.5">{k}</span>
                  <span className="text-cocoa-800 dark:text-cream-100">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-section-sm">
        <Reveal>
          <div className="rounded-[2rem] border border-cocoa-700/10 dark:border-cream-200/10 p-10 md:p-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <p className="eyebrow">Verfügbarkeit</p>
              <h3 className="mt-3 font-display font-semibold text-display-md text-balance max-w-[18ch]">
                Pompona-Kontingente auf Anfrage.
              </h3>
              <p className="mt-4 max-w-prose text-cocoa-800/80 dark:text-cream-100/80">
                Wir allokieren Pompona-Ernten saisonal und bevorzugt an Stammkunden. Sprich uns früh an.
              </p>
            </div>
            <Link href="/kontakt" className="btn-primary">
              Verfügbarkeit anfragen
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
