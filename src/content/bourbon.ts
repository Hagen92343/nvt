import type { ProductData } from "./product-types";

export const bourbon: ProductData = {
  slug: "bourbon",
  tone: "light",
  hero: {
    eyebrow: "Vanilla planifolia",
    title: "Bourbon Vanille",
    titleAccent: "Die Königin Madagaskars",
    subtitle:
      "Cremig, vollmundig, warm-süß. Aus der historischen Wiege der Bourbon-Vanille – Sambava, Madagaskar.",
    image: "/images/hero-vanilla.jpg",
    imageAlt: "Handverlesene Bourbon-Vanilleschoten aus Madagaskar",
  },
  vanille: {
    headline: "Unsere Vanille",
    paragraphs: [
      "Die Königin unter den Bourbon-Vanillesorten, die in Sambava nach traditionellen Methoden angebaut wird. Bourbon-Vanille ist sehr reich an Vanillin und eignet sich perfekt für klassische Desserts. Sie ist die bekannteste und international gefragteste Vanillesorte.",
    ],
    image: "/images/bourbon-product.png",
    imageAlt: "Bourbon-Vanilleschote im Detail",
  },
  herkunft: {
    headline: "Herkunft",
    paragraphs: [
      "Diese Vanilla planifolia stammt direkt aus dem Hochland von Sambava (Madagaskar), der historischen Wiege der Bourbon-Vanille, und ist das Ergebnis eines seit 40 Jahren weitergegebenen handwerklichen Know-hows.",
      "Jede Schote ist das Ergebnis eines zu 100 % natürlichen Prozesses.",
    ],
    image: "/images/bourbon-1.png",
    imageAlt: "Bourbon-Vanilleschoten beim Sortieren",
  },
  aroma: {
    headline: "Aromaprofil",
    paragraphs: [
      "Drei Monate langes langsames Trocknen unter der madagassischen Sonne entwickeln tiefe und komplexe Aromen.",
      "Daraus entsteht eine kräftige und runde Vanille mit charakteristischen Noten:",
    ],
    notes: [
      "Süße, cremige Noten",
      "Schokolade",
      "Karamell",
      "Manchmal leicht holzig",
    ],
  },
  gastronomy: {
    headline: "Gastronomische Einsatzbereiche",
    intro: "Ideal für:",
    items: [
      {
        label: "Klassische Backwaren",
        description: "Crème brûlée, Vanilleeis, Schokoladenganache.",
      },
      {
        label: "Heiße Getränke",
        description: "Goldene Milch, Vanillekaffee, heiße Schokolade.",
      },
      {
        label: "Süß-herzhafte Kreationen",
        description: "Gebratene Arten von Stopfleber, Saucen für Meeresfrüchte.",
      },
    ],
  },
  promise: {
    headline: "Qualitätsversprechen",
    items: [
      {
        title: "100 % natürlich",
        detail: "Manuelle Bestäubung, langsame Trocknung in der Sonne.",
      },
      {
        title: "Vollständige Rückverfolgbarkeit",
        detail: "Von der Vanillepflanze bis in Ihre Küche, ohne Zwischenhändler.",
      },
      {
        title: "Hoher Vanillinanteil",
        detail: "Vanillingehalt",
        highlight: "2,3 %",
      },
      {
        title: "Feuchtigkeitsgehalt",
        detail: "Optimaler Reifegrad",
        highlight: "38 %",
      },
    ],
  },
  cta: {
    eyebrow: "Probe anfragen",
    title: "Teste unsere Bourbon-Vanille.",
    label: "Jetzt kostenlos testen",
  },
};
