import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { impressum } from "@/content/impressum";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Hinweise gemäß §5 TMG der Sava Select / Kasel & Vogt GbR.",
};

export default function ImprintPage() {
  const { provider, blocks } = impressum;
  return (
    <>
      <PageHero eyebrow={impressum.hero.eyebrow} title={impressum.hero.title} />

      <section className="container-page pb-section">
        <div className="mx-auto max-w-[42rem]">
          <Reveal>
            <div className="rounded-[1.5rem] border border-cocoa-700/10 dark:border-cream-200/10 bg-paper dark:bg-cocoa-950/40 p-8 md:p-10">
              <h2 className="eyebrow">{provider.heading}</h2>
              <p className="mt-4 font-display text-xl md:text-2xl font-semibold text-cocoa-900 dark:text-cream-50">
                {provider.brand}
              </p>
              <address className="mt-3 not-italic text-base md:text-lg leading-relaxed text-cocoa-800 dark:text-cream-100">
                {provider.street}
                <br />
                {provider.city}
              </address>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-cocoa-800 dark:text-cream-100">
                {provider.company}
              </p>
              <dl className="mt-6 grid grid-cols-[5rem_1fr] gap-y-2 gap-x-6 text-base md:text-lg text-cocoa-800 dark:text-cream-100">
                <dt className="eyebrow pt-1.5">Tel</dt>
                <dd>
                  <a
                    href={`tel:+49${provider.phone.replace(/^0/, "")}`}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {provider.phone}
                  </a>
                </dd>
                <dt className="eyebrow pt-1.5">E-Mail</dt>
                <dd>
                  <a
                    href={`mailto:${provider.email}`}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {provider.email}
                  </a>
                </dd>
              </dl>
            </div>
          </Reveal>

          <div className="mt-16 md:mt-20">
            <Reveal>
              <h2 className="font-display font-semibold text-display-md text-balance">
                Haftungsausschluss <span className="italic font-serif font-light text-amber-500">(Disclaimer)</span>
              </h2>
            </Reveal>

            <div className="mt-12 space-y-14">
              {blocks.map((b, i) => (
                <Reveal key={b.heading} delay={i * 0.05}>
                  <article>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl text-cocoa-900 dark:text-cream-50 text-balance">
                      {b.heading}
                    </h3>
                    {b.body.split("\n\n").map((para, idx) => (
                      <p
                        key={idx}
                        className="mt-5 text-base md:text-lg leading-[1.75] text-cocoa-800/90 dark:text-cream-100/85"
                      >
                        {para}
                      </p>
                    ))}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20 hairline pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-cocoa-700/70 dark:text-cream-200/70">
              <span>
                Siehe auch unsere{" "}
                <Link href="/datenschutz" className="underline underline-offset-4 hover:text-amber-500">
                  Datenschutzerklärung
                </Link>
                .
              </span>
              <Link href="/" className="hover:text-amber-500 transition-colors">
                ← Zur Startseite
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
