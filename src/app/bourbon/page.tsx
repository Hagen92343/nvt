import type { Metadata } from "next";
import { ProductPage } from "@/components/sections/ProductPage";
import { bourbon } from "@/content/bourbon";

export const metadata: Metadata = {
  title: "Bourbon-Vanille",
  description:
    "Bourbon-Vanille aus Sambava (Madagaskar). 100 % natürlich, 2,3 % Vanillingehalt, 38 % Feuchtigkeit – cremig, vollmundig, warm-süß.",
};

export default function BourbonPage() {
  return <ProductPage data={bourbon} />;
}
