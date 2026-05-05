import type { ProductData } from "./product-types";

export const pompona: ProductData = {
  slug: "pompona",
  tone: "dark",
  hero: {
    eyebrow: "Vanilla pompona · unter 1 % der Weltproduktion",
    title: "Pompona Vanille",
    titleAccent: "Die seltene Perle Pompona",
    subtitle:
      "Über 22 cm, fleischig, kräftig. Eine südamerikanische Rarität, in Sambava veredelt – für Kreationen mit Charakter.",
    image: "/images/pompona-product.png",
    imageAlt: "Pompona-Vanilleschoten – die seltene Perle",
  },
  vanille: {
    headline: "Unsere Vanille",
    paragraphs: [
      "Die Königin der Vanillesorten, Pompona, auch „Mexikanische Vanille“ genannt, wird in Sambava nach traditionellen Methoden angebaut. Mit einer außergewöhnlichen Größe von über 22 cm und ihren kräftigen, warmen Aromen ist sie aus der Küche großer Konditoren nicht mehr wegzudenken.",
      "Die Pompona bietet ein komplexeres und originelleres Aromaprofil, das für einzigartige Kreationen geschätzt wird.",
    ],
    image: "/images/pompona-product.png",
    imageAlt: "Pompona-Vanilleschote im Detail",
  },
  herkunft: {
    headline: "Herkunft & Seltenheit",
    paragraphs: [
      "Unsere Vanilla Pompona wird in Sambava (Madagaskar) angebaut und ist eine seltene Perle südamerikanischer Herkunft, die heute durch 40 Jahre handwerkliches Know-how veredelt wird.",
      "Ihre langen und fleischigen Schoten (> 22 cm) werden von Hand, aufgrund ihrer einzigartigen Aromaintensität, ausgewählt.",
    ],
    image: "/images/bourbon-3.png",
    imageAlt: "Sortierung der Pompona-Schoten",
  },
  aroma: {
    headline: "Aromaprofil",
    paragraphs: [
      "Pompona-Schoten entwickeln ein komplexes, mehrdimensionales Aromabild – wärmer und tiefer als klassische Bourbon.",
    ],
    notes: [
      "Intensive Aromen",
      "Rauchige und holzige Noten",
      "Würzig und blumig",
      "Manchmal mit Lakritzgeschmack",
    ],
  },
  gastronomy: {
    headline: "Gastronomische Einsatzbereiche",
    intro: "Ideal für:",
    items: [
      {
        label: "In der Patisserie",
        description: "Ganaches, Kompott aus roten Früchten.",
      },
      {
        label: "In der Küche",
        description: "Saucen für Fleisch (Ente, Wild) oder süß-salzige Desserts.",
      },
      {
        label: "In der Mixologie",
        description: "Cocktails auf Rum- oder Whiskybasis.",
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
        title: "Höchster Vanillinanteil",
        detail: "Vanillingehalt",
        highlight: "1,8 %",
      },
      {
        title: "Feuchtigkeitsgehalt",
        detail: "Optimaler Reifegrad",
        highlight: "36 %",
      },
    ],
  },
  cta: {
    eyebrow: "Probe anfragen",
    title: "Teste unsere Pompona-Vanille.",
    label: "Jetzt kostenlos testen",
  },
};
