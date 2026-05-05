import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductsCatalog } from "@/components/sections/ProductsCatalog";
import { produkte } from "@/content/produkte";

export const metadata: Metadata = {
  title: "Unsere Produkte",
  description:
    "Unsere Madagaskar-Vanille im Überblick: Bourbon, Pompona, Vanillepulver, Vanille Kaviar und Vanille Extrakt – jedes Produkt mit Aromaprofil, Einsatzgebieten und Eckdaten.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sortiment"
        title={
          <>
            Unsere{" "}
            <span className="italic font-serif font-light text-amber-500">Produkte.</span>
          </>
        }
        subtitle={`${produkte.length} sorgfältig kuratierte Vanille-Produkte aus Sambava – von ganzer Schote bis zum hochkonzentrierten Extrakt.`}
      />
      <ProductsCatalog />
    </>
  );
}
