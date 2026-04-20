import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bourbon-Vanille",
  description:
    "Madagaskar-Bourbon-Vanille direkt aus der Sava-Region. Handverlesene Schoten mit 1,8–2,3 % Vanillin und 30–38 % Feuchtigkeit.",
};

const tiles = [
  { src: "/images/bourbon-1.png", caption: "Schoten · Premium Grade A" },
  { src: "/images/bourbon-2.png", caption: "Pulver · fein vermahlen" },
  { src: "/images/bourbon-3.png", caption: "Paste · konzentriert" },
  { src: "/images/bourbon-4.png", caption: "Extrakt · doppelt gereift" },
];

export default function BourbonPage() {
  return (
    <>
      <PageHero
        eyebrow="Vanilla planifolia"
        title={<>Bourbon. <span className="italic font-serif font-light text-amber-500">Die Mutter aller Vanillen.</span></>}
        subtitle="Cremig, rund, mit klarer süßer Basis. Unsere Bourbon-Schoten stammen aus Sambava, Antalaha und Andapa – der Kernregion Madagaskars."
      />

      <section className="container-page py-section-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={i * 0.08}>
              <figure className="group relative aspect-square rounded-[1.5rem] overflow-hidden bg-cream-100 dark:bg-cocoa-900">
                <Image
                  src={t.src}
                  alt={t.caption}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-apple group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-paper/90 dark:bg-cocoa-950/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium text-cocoa-800 dark:text-cream-100">
                  <span>{t.caption}</span>
                  <ArrowRight size={14} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cocoa-800 text-cream-50 py-section-sm">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-amber-400">Profil</p>
              <h2 className="mt-4 font-display font-semibold text-display-md text-balance">
                Das Standardmaß – auf höchstem Niveau.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <dl className="divide-y divide-cream-100/10">
                {[
                  ["Herkunft", "Sava-Region · Madagaskar"],
                  ["Sorte", "Vanilla planifolia (Bourbon)"],
                  ["Vanillin-Gehalt", "1,8 – 2,3 %"],
                  ["Feuchtigkeit", "30 – 38 %"],
                  ["Schotenlänge", "18 – 30 cm"],
                  ["Aromaprofil", "Cremig · vollmundig · warm-süß"],
                  ["Einsatz", "Patisserie · Eis · Getränke · Sauce"],
                ].map(([k, v]) => (
                  <div key={k} className="py-5 grid grid-cols-[10rem_1fr] gap-6 items-baseline">
                    <dt className="eyebrow text-cream-100/60">{k}</dt>
                    <dd className="text-lg text-cream-50">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-section-sm">
        <Reveal>
          <div className="rounded-[2rem] bg-amber-400 text-cocoa-900 p-10 md:p-16 flex flex-col md:flex-row md:items-end gap-8 justify-between">
            <div>
              <p className="eyebrow">Probe anfragen</p>
              <h3 className="mt-3 font-display font-semibold text-display-md text-balance max-w-[16ch]">
                Teste unsere Bourbon-Vanille.
              </h3>
            </div>
            <Link href="/kontakt" className="btn-apple bg-cocoa-900 text-cream-50 hover:bg-cocoa-800">
              Jetzt testen
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
