import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Datenschutz",
};

const sections = [
  {
    h: "1. Verantwortlicher",
    p: "Sava Select GmbH, Musterstraße 1, 80331 München. Kontakt: info@sava-select.de.",
  },
  {
    h: "2. Erhebung und Verarbeitung personenbezogener Daten",
    p:
      "Wir verarbeiten ausschließlich solche Daten, die du uns aktiv über das Kontaktformular oder per E-Mail zukommen lässt: Name, Firma, Lieferadresse, PLZ, Angaben zum Einsatzzweck sowie deine Kommunikation. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.",
  },
  {
    h: "3. Speicherdauer",
    p: "Wir speichern deine Anfragedaten so lange, wie es zur Abwicklung der Anfrage erforderlich ist und gesetzliche Aufbewahrungspflichten es verlangen.",
  },
  {
    h: "4. Weitergabe an Dritte",
    p: "Eine Weitergabe an Dritte findet nicht statt, ausgenommen an Logistikpartner im Rahmen der Probe-Zustellung.",
  },
  {
    h: "5. Deine Rechte",
    p:
      "Du hast jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Beschwerden kannst du an die zuständige Aufsichtsbehörde richten.",
  },
  {
    h: "6. Cookies & Tracking",
    p: "Diese lokale Vorschau-Version der Website setzt keine Tracking-Cookies und verwendet keine Analyse-Tools.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="DSGVO" title="Datenschutzerklärung" />
      <section className="container-page py-section-sm max-w-3xl space-y-12 text-cocoa-800 dark:text-cream-100 leading-relaxed">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display font-semibold text-xl md:text-2xl text-cocoa-900 dark:text-cream-50">
              {s.h}
            </h2>
            <p className="mt-4 max-w-prose">{s.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}
