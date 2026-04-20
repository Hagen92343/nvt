import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImprintPage() {
  return (
    <>
      <PageHero eyebrow="§5 TMG" title="Impressum" />
      <section className="container-page py-section-sm max-w-3xl space-y-10 text-cocoa-800 dark:text-cream-100 leading-relaxed">
        <div>
          <h2 className="eyebrow">Anbieter</h2>
          <p className="mt-3">
            Sava Select GmbH<br />
            Musterstraße 1<br />
            80331 München
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Kontakt</h2>
          <p className="mt-3">
            Telefon: +49 (0) 89 00 00 00<br />
            E-Mail: info@sava-select.de
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Vertretungsberechtigt</h2>
          <p className="mt-3">Geschäftsführung: Max Mustermann</p>
        </div>
        <div>
          <h2 className="eyebrow">Handelsregister</h2>
          <p className="mt-3">Amtsgericht München · HRB 000000</p>
        </div>
        <div>
          <h2 className="eyebrow">Umsatzsteuer-ID</h2>
          <p className="mt-3">DE000000000</p>
        </div>
        <div>
          <h2 className="eyebrow">Verantwortlich i. S. d. § 18 Abs. 2 MStV</h2>
          <p className="mt-3">Max Mustermann, Anschrift wie oben</p>
        </div>
        <div>
          <h2 className="eyebrow">Haftungshinweis</h2>
          <p className="mt-3 max-w-prose">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
      </section>
    </>
  );
}
