import type { Metadata } from "next";
import { ProductPage } from "@/components/sections/ProductPage";
import { pompona } from "@/content/pompona";

export const metadata: Metadata = {
  title: "Pompona-Vanille",
  description:
    "Pompona-Vanille – über 22 cm lange Schoten aus Sambava. Kräftig, würzig, holzig – die seltene Perle für Patissiers, Köche und Mixologen.",
};

export default function PomponaPage() {
  return <ProductPage data={pompona} />;
}
