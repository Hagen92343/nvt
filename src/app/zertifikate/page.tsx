import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Zertifikate",
  description: "Unsere Zertifizierungen und Qualitätsnachweise.",
};

const certs = [
  {
    src: "/images/cert-1.jpg",
    title: "Bio-Zertifizierung",
    body: "Regelmäßige Prüfung nach EU-Öko-Verordnung. Transparente Lieferkette von der Pflanze bis zur Schote.",
  },
  {
    src: "/images/cert-2.jpg",
    title: "Direct Trade",
    body: "Langfristige Verträge mit den Produzenten in Sambava. Faire Preise, unabhängig von Spot-Market-Schwankungen.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparenz"
        title={<>Zertifikate & <span className="italic font-serif font-light text-amber-500">Nachweise.</span></>}
        subtitle="Wir lassen uns regelmäßig prüfen – vom Feld bis zur Auslieferung. Die Details findest du hier."
      />

      <section className="container-page py-section-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group">
                <figure className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-cream-100 dark:bg-cocoa-900">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-apple group-hover:scale-[1.03]"
                  />
                </figure>
                <h3 className="mt-6 font-display font-semibold text-2xl md:text-3xl text-cocoa-900 dark:text-cream-50">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-prose text-cocoa-800/80 dark:text-cream-100/80 leading-relaxed">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
