import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CertificateGallery } from "./CertificateGallery";

export const metadata: Metadata = {
  title: "Zertifikate",
  description:
    "Lab-Zertifikate für Bourbon- und Pompona-Vanille aus Madagaskar. Vanillingehalt, Feuchtigkeit und mikrobiologische Qualität – akkreditiert geprüft.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparenz"
        title={
          <>
            Zertifikate &{" "}
            <span className="italic font-serif font-light text-amber-500">Nachweise.</span>
          </>
        }
        subtitle="Wir lassen jede Charge in einem akkreditierten Labor in Madagaskar prüfen. Die aktuellen Ergebnisse findest du hier."
      />
      <CertificateGallery />
    </>
  );
}
