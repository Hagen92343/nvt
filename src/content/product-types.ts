export type ProductGastronomy = {
  label: string;
  description: string;
};

export type ProductPromise = {
  title: string;
  detail: string;
  highlight?: string;
};

export type ProductData = {
  slug: "bourbon" | "pompona";
  /** Tone der Hero-Sektion */
  tone: "light" | "dark";
  hero: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  vanille: {
    headline: string;
    subhead?: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  herkunft: {
    headline: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  aroma: {
    headline: string;
    paragraphs: string[];
    notes: string[];
  };
  gastronomy: {
    headline: string;
    intro?: string;
    items: ProductGastronomy[];
  };
  promise: {
    headline: string;
    items: ProductPromise[];
  };
  cta: {
    eyebrow: string;
    title: string;
    label: string;
  };
};
