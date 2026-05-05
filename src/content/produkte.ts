export type ProduktImage = { src: string; alt: string };

export type Produkt = {
  slug: string;
  name: string;
  /** Kurzer Untertitel direkt unter dem Produktnamen */
  tagline: string;
  /** Längere Beschreibung unter der Bilderreihe */
  description: string;
  aroma: string[];
  einsatz: string[];
  /** Optionale Detail-Daten (Herkunft, Anteil, Hinweis) */
  details?: { label: string; value: string }[];
  images: ProduktImage[];
  /** Optionaler Link zu einer ausführlichen Unterseite */
  detailHref?: string;
  detailLabel?: string;
};

export const produkte: Produkt[] = [
  {
    slug: "bourbon-vanille-schoten",
    name: "Bourbon Vanille Schoten",
    tagline: "Vanilla planifolia · Sambava, Madagaskar",
    description:
      "Die Königin unter den Bourbon-Vanillesorten, in Sambava nach traditioneller Methode angebaut. Reich an Vanillin, mit einem cremig-süßen, runden Aromaprofil. Drei Monate langsamer Sonnentrocknung verleihen ihr Tiefe und Komplexität – die international gefragteste Vanillesorte.",
    aroma: [
      "Süße, cremige Noten",
      "Schokolade",
      "Karamell",
      "Manchmal leicht holzig",
    ],
    einsatz: [
      "Klassische Backwaren – Crème brûlée, Vanilleeis, Schokoladenganache",
      "Heiße Getränke – Goldene Milch, Vanillekaffee, heiße Schokolade",
      "Süß-herzhafte Kreationen – Saucen, Geflügel, Meeresfrüchte",
    ],
    details: [
      { label: "Herkunft", value: "Sambava, Madagaskar" },
      { label: "Vanillingehalt", value: "2,3 %" },
      { label: "Feuchtigkeit", value: "38 %" },
      { label: "Länge", value: "18 – 22 cm" },
    ],
    images: [
      { src: "/images/bourbon-product.png", alt: "Bourbon-Vanilleschoten gebündelt" },
      { src: "/images/bourbon-1.png", alt: "Bourbon-Vanilleschoten beim Sortieren" },
      { src: "/images/bourbon-2.png", alt: "Detail einer Bourbon-Schote" },
      { src: "/images/bourbon-3.png", alt: "Bourbon-Vanille im Trocknungsprozess" },
    ],
    detailHref: "/bourbon",
    detailLabel: "Bourbon im Detail",
  },
  {
    slug: "pompona-vanille-schoten",
    name: "Pompona Vanille Schoten",
    tagline: "Vanilla pompona · weniger als 1 % der Weltproduktion",
    description:
      "Eine Rarität südamerikanischen Ursprungs, in Sambava veredelt. Schoten von über 22 cm, fleischig und kräftig. Ihr Aromabild ist wärmer und tiefer als klassische Bourbon – mit komplexen, mehrdimensionalen Noten, die handverlesen für die anspruchsvollste Patisserie und Mixologie ausgewählt werden.",
    aroma: [
      "Intensive Aromen",
      "Rauchige und holzige Noten",
      "Würzig und blumig",
      "Manchmal mit Lakritzgeschmack",
    ],
    einsatz: [
      "Patisserie – Ganaches, Kompott aus roten Früchten",
      "Küche – Saucen für Fleisch (Ente, Wild) oder süß-salzige Desserts",
      "Mixologie – Cocktails auf Rum- oder Whiskybasis",
    ],
    details: [
      { label: "Herkunft", value: "Sambava, Madagaskar (südam. Ursprung)" },
      { label: "Vanillingehalt", value: "1,8 %" },
      { label: "Feuchtigkeit", value: "36 %" },
      { label: "Länge", value: "über 22 cm" },
    ],
    images: [
      { src: "/images/pompona-product.png", alt: "Pompona-Vanilleschoten – die seltene Perle" },
      { src: "/images/bourbon-4.png", alt: "Pompona-Schoten im Detail" },
      { src: "/images/hero-vanilla.jpg", alt: "Vanilleblüte und Schoten" },
    ],
    detailHref: "/pompona",
    detailLabel: "Pompona im Detail",
  },
  {
    slug: "vanillepulver",
    name: "Vanillepulver",
    tagline: "Aus 100 % gemahlenen Madagaskar-Schoten",
    description:
      "Vanillepulver wird aus getrockneten Vanilleschoten gewonnen, die fein gemahlen werden. Es bietet eine intensive, gleichmäßige Vanille-Note ohne Zusatzstoffe und lässt sich präzise dosieren – ideal überall dort, wo das Mark allein nicht reicht und das volle Aroma der gesamten Schote in eine Rezeptur eingehen soll.",
    aroma: [
      "Intensiv und vollmundig",
      "Tiefe Karamell-Noten",
      "Konzentriert",
    ],
    einsatz: [
      "Desserts & Gebäck – Kuchen, Kekse, Brote, Cremes, Pralinen",
      "Getränke – Heiße Schokolade, Kaffee, Cappuccino, Smoothies",
      "Küche & Industrie – Süße Saucen, Marinaden, Eiscreme",
    ],
    details: [
      { label: "Form", value: "Feines Pulver, 100 % gemahlene Schote" },
      { label: "Zutaten", value: "Reine Vanille – ohne Zucker, ohne Aromen" },
      { label: "Anwendung", value: "Hitzestabil, perfekt zum Backen" },
    ],
    images: [
      { src: "/images/bourbon-2.png", alt: "Vanillepulver – fein gemahlen" },
      { src: "/images/bourbon-3.png", alt: "Vanillepulver in der Schale" },
    ],
  },
  {
    slug: "vanille-kaviar",
    name: "Vanille Kaviar",
    tagline: "Das pure Mark der Schote",
    description:
      "Vanille Kaviar besteht aus dem reinen Mark der Schote – jenen winzigen schwarzen Kügelchen, die das eigentliche Aroma tragen. Ohne Holzanteil, sofort einsetzbar, mit höchster Aromendichte. Die elegante Wahl überall dort, wo sich der Geschmack der Vanille direkt entfalten soll, ohne dass die Schote selbst sichtbar wird.",
    aroma: [
      "Konzentriertes Vanillemark",
      "Cremig-rund",
      "Reines Bourbon-Profil",
    ],
    einsatz: [
      "Crèmes & Mousses – Crème pâtissière, Mousse au chocolat",
      "Eiscreme & Sorbets – sofort einsetzbar",
      "Saucen – schnelle Verarbeitung ohne Auskratzen",
    ],
    details: [
      { label: "Form", value: "Reines Mark, ohne Schale" },
      { label: "Zutaten", value: "100 % Vanillemark" },
      { label: "Anwendung", value: "Direkt einrühren, keine Vorbereitung" },
    ],
    images: [
      { src: "/images/bourbon-product.png", alt: "Vanille-Kaviar – das pure Mark" },
      { src: "/images/bourbon-1.png", alt: "Vanille-Kaviar im Glas" },
    ],
  },
  {
    slug: "vanille-extrakt",
    name: "Vanille Extrakt",
    tagline: "40 % reine Vanille – unsere konzentrierte Essenz",
    description:
      "Unser Vanille Extrakt enthält einen Anteil von 40 % reiner Vanille – deutlich über dem Standard. Aromatisch tief, dunkel und vielschichtig, gewonnen durch die Mazeration unserer Madagaskar-Schoten. Die flüssige Form ist die schnellste Art, Vanille in Rezepturen einzubringen, ohne Geschmackseinbußen oder Kompromisse. Der hohe Anteil bedeutet: weniger reicht, das Aroma bleibt rund und natürlich – ohne synthetische Streckung.",
    aroma: [
      "Tief, warm, dunkel",
      "Bourbon-typische Cremigkeit",
      "Lange Aromakurve",
    ],
    einsatz: [
      "Backwaren – Teige, Cremes, Glasuren",
      "Eis & Desserts – flüssig dosierbar, sofort verfügbar",
      "Getränke & Cocktails – Kaffee, Schokolade, Spirituosen",
    ],
    details: [
      { label: "Anteil reine Vanille", value: "40 %" },
      { label: "Form", value: "Flüssiger Extrakt" },
      { label: "Anwendung", value: "Tropfengenau dosierbar" },
    ],
    images: [
      { src: "/images/pompona-product.png", alt: "Vanille-Extrakt – konzentriert" },
      { src: "/images/hero-vanilla.jpg", alt: "Vanille-Extrakt aus Madagaskar" },
    ],
  },
];
