export const site = {
  name: "Sava Select",
  tagline: "Ihr Importeur für Spitzenvanille",
  description:
    "Premium Bourbon- und Pompona-Vanille. Direktimport aus der Sava-Region Madagaskar – ohne Zwischenhandel.",
  contact: {
    email: "info@sava-select.de",
    phone: "+49 (0) 89 00 00 00",
  },
};

export const nav = [
  { href: "/bourbon", label: "Bourbon" },
  { href: "/pompona", label: "Pompona" },
  { href: "/unsere-geschichte", label: "Unsere Geschichte" },
  { href: "/zertifikate", label: "Zertifikate" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/zertifikate", label: "Zertifikate" },
] as const;
