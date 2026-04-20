import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Fordere eine kostenlose Probe an oder schreib uns direkt.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Wir freuen uns"
        title={<>Sprich mit uns.</>}
        subtitle={
          <>
            Anfragen an <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4">{site.contact.email}</a> oder
            telefonisch unter {site.contact.phone}. Für eine kostenlose Probe nutze das Formular unten.
          </>
        }
      />
      <ContactForm />
    </>
  );
}
