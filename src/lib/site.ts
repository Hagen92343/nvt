export const site = {
  name: "Sava Select",
  tagline: "Ihr Importeur für Spitzenvanille",
  description:
    "Premium Bourbon- und Pompona-Vanille. Direktimport aus der Sava-Region Madagaskar – ohne Zwischenhandel.",
  contact: {
    email: "info@sava-select.de",
    phone: "01733661177",
    phoneIntl: "+49 173 366 1177",
    address: {
      company: "Sava Select",
      brand: "Sava Select",
      street: "Richard-Byrd-Straße 33",
      city: "50829 Köln",
      country: "Deutschland",
    },
    privacy: "datenschutz@sava-select.de",
  },
} as const;

export const CONTACT_ANCHOR = "/#kontaktformular" as const;

export const nav = [
  { href: "/bourbon", label: "Bourbon" },
  { href: "/pompona", label: "Pompona" },
  { href: "/unsere-produkte", label: "Unsere Produkte" },
  { href: "/zertifikate", label: "Zertifikate" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerNav = [
  { href: "/", label: "Startseite" },
  { href: "/bourbon", label: "Bourbon" },
  { href: "/pompona", label: "Pompona" },
  { href: "/unsere-produkte", label: "Unsere Produkte" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/zertifikate", label: "Zertifikate" },
] as const;

export const footerLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutzerklärung" },
] as const;
