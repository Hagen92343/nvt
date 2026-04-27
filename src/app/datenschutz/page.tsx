import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PrivacyShell } from "./PrivacyShell";
import { datenschutz } from "@/content/datenschutz";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Kasel & Vogt GbR (Sava Select). Informationen zu Verarbeitung, Rechten der betroffenen Person und Rechtsgrundlagen nach DSGVO.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={datenschutz.hero.eyebrow}
        title={datenschutz.hero.title}
        subtitle={datenschutz.hero.subtitle}
      />
      <PrivacyShell />
    </>
  );
}
