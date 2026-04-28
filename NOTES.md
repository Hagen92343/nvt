# NVT — Sava Select Apple-Level Redesign

> Zentrale Projekt-Doku. Pfad: `/Users/hagenmarggraf/Desktop/projects/nvt`
> Angelegt: 2026-04-20 · Live seit 2026-04-20 · Letztes Update: 2026-04-28

---

## 0. Links

| Zweck | URL |
|---|---|
| **Live (öffentlich, teilbar)** | **https://nvt-three.vercel.app** |
| Letztes Production-Deployment | https://nvt-ipiz9q782-hagen-marggrafs-projects.vercel.app |
| Vercel Inspector | https://vercel.com/hagen-marggrafs-projects/nvt |
| GitHub-Repo | https://github.com/Hagen92343/nvt |
| Original-Vorlage | https://www.sava-select.de/ |
| Dev lokal | http://localhost:3000 (`npm run dev`) |

---

## 1. Projekt-Überblick

Premium-Nachbau der Website des Vanille-Importeurs **Sava Select** auf Apple-Niveau.
Inhalte, Farbwelt und Features vom Original übernommen, UI/UX kompromisslos gehoben.

- Zielgruppe: Präsentation an einen Freund
- Ursprünglich lokal geplant — live zu Vercel deployt am 2026-04-20 auf Wunsch
- 2026-04-27: Komplette Unterseiten-Suite ausgebaut (Bourbon, Pompona, Geschichte, Impressum, Datenschutz)
- 2026-04-28: Update-Suite – Header-Polish, Pompona-Light-Mode, Zertifikate-Lightbox, Datenschutz/Impressum von „Kasel & Vogt GbR" auf „Sava Select" umgestellt

---

## 2. Tech Stack

| Layer | Wahl |
|---|---|
| Framework | Next.js 14.2.35 (App Router, TypeScript) |
| Styling | Tailwind CSS mit Custom-Theme |
| Animationen | Framer Motion 12 (`AnimatePresence`-Page-Transitions) |
| Smooth Scroll | Lenis |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Fonts | Inter · Inter Tight · Fraunces (Google Fonts) |
| Hosting | Vercel (Production, Fluid Compute) |

---

## 3. Routen-Struktur

| Route | Datei | Status | Inhalt |
|---|---|---|---|
| `/` | `src/app/page.tsx` | 200 | Hero · Stats · Quality · DirectImport · PomponaTeaser · ContactForm (`#kontaktformular`) |
| `/bourbon` | `src/app/bourbon/page.tsx` | 200 | `<ProductPage data={bourbon}>` – 5-Sektionen-Produktseite |
| `/pompona` | `src/app/pompona/page.tsx` | 200 | `<ProductPage data={pompona}>` – identische Struktur, dunkler Hero |
| `/unsere-geschichte` | `src/app/unsere-geschichte/page.tsx` | 200 | Long-Read ohne Zeitstrahl, „So entstand SAVA SELECT." als Closer |
| `/impressum` | `src/app/impressum/page.tsx` | 200 | Pflichtangaben Sava Select („Vertreten durch: Niklas Vogt") + 4-teiliger Disclaimer |
| `/datenschutz` | `src/app/datenschutz/page.tsx` | 200 | Volltext (a–k, a–i) auf Sava Select umgestellt + Sticky-Desktop-TOC + Mobile-Sheet + Back-to-Top |
| `/zertifikate` | `src/app/zertifikate/page.tsx` | 200 | Lab-Zertifikate (Bourbon/Pompona) als Cards mit Framer-Motion-Lightbox |
| `/kontakt` | `src/app/kontakt/page.tsx` | 200 | Wrapper um `<ContactForm>` — primärer Einstieg über Header-Menü „Kontakt" und Probe-Button |

---

## 4. Komponenten-Landkarte

```
src/
├── app/                          # Routen
│   ├── layout.tsx                # Root: Fonts, Header, Footer, PageTransition
│   ├── page.tsx                  # Startseite (6 Sektionen)
│   ├── bourbon/page.tsx          # ProductPage(bourbon)
│   ├── pompona/page.tsx          # ProductPage(pompona)
│   ├── unsere-geschichte/page.tsx
│   ├── impressum/page.tsx
│   ├── datenschutz/
│   │   ├── page.tsx              # Server-Komponente: Hero + PrivacyShell
│   │   └── PrivacyShell.tsx      # Client: Sticky-TOC + IO-Highlight + Mobile-Sheet
│   ├── kontakt/page.tsx
│   └── zertifikate/
│       ├── page.tsx              # Server: PageHero + CertificateGallery
│       └── CertificateGallery.tsx # Client: Cards + Framer-Motion-Lightbox (Esc/Klick-außerhalb)
│
├── components/
│   ├── chrome/                   # Layout-Elemente
│   │   ├── Header.tsx            # Sticky Nav, Probe-CTA → /kontakt; Force-Light-Mode auf /pompona
│   │   ├── Footer.tsx            # 3-spaltig + echte Kontaktdaten + Legal
│   │   ├── SmoothScroll.tsx      # Lenis Provider
│   │   ├── CustomCursor.tsx      # Magnetic-Cursor
│   │   ├── LoadingScreen.tsx     # 1,8s Logo-Reveal
│   │   └── PageTransition.tsx    # AnimatePresence mit prefers-reduced-motion
│   │
│   ├── sections/                 # Sektions-Komponenten
│   │   ├── Hero.tsx
│   │   ├── StatsPin.tsx
│   │   ├── Quality.tsx
│   │   ├── DirectImport.tsx
│   │   ├── PomponaTeaser.tsx
│   │   ├── ContactForm.tsx       # id="kontaktformular" + scroll-mt-24
│   │   └── ProductPage.tsx       # Generic: Hero + 5 Sektionen + CTA
│   │
│   └── ui/                       # Bausteine
│       ├── PageHero.tsx
│       ├── Reveal.tsx
│       ├── MagneticButton.tsx
│       └── CountUp.tsx
│
├── content/                      # ⭐ Typisierte Inhalte (NEU 2026-04-27)
│   ├── product-types.ts          # ProductData-Schema
│   ├── bourbon.ts                # Bourbon-Inhalte 1:1 aus Brief
│   ├── pompona.ts                # Pompona-Inhalte 1:1 aus Brief
│   ├── geschichte.ts             # 4 Erzählabsätze + Closing
│   ├── impressum.ts              # Echte Pflichtangaben + Disclaimer
│   └── datenschutz.ts            # Volltext-Sections (14 Abschnitte)
│
└── lib/
    ├── cn.ts                     # clsx + tailwind-merge
    └── site.ts                   # Site-Metadata, CONTACT_ANCHOR, nav, footerNav, footerLinks
```

---

## 5. Design-System (`tailwind.config.ts`)

### Farbpalette

| Token | Hex | Verwendung |
|---|---|---|
| `cocoa-700` | `#503613` | Primär, Text, Buttons |
| `cream-200` | `#ede9d0` | Flächen, BG |
| `amber-400` / `500` | `#f1aa4c` / `#e08a1d` | Akzent, CTAs, Highlights |
| `palm-600` | `#1a6c32` | Reserve (Natur-Akzent) |
| `paper` / `ink` | `#fbf9f1` / `#0f0a05` | Basis Light/Dark |

### Typografie

- **Display:** Inter Tight (fett, tight tracking)
- **Body:** Inter
- **Serif-Akzent:** Fraunces (Italic-Highlights wie *„Die Königin Madagaskars."*)
- Fluid sizes via `clamp()` — Hero 4–10 rem, Stats 4–14 rem

### Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple-Standard)
- Durations: 400 / 600 / 800 / 1200 ms Tailwind-Tokens
- Page-Transition: 0.55 s fade+slide via `AnimatePresence`
- `prefers-reduced-motion` → Lenis, Cursor und Page-Transition deaktiviert; Transitions auf 0,01 ms

---

## 6. Assets (`public/images/`)

| Datei | Einsatz |
|---|---|
| `hero-vanilla.jpg` | Startseite Hero, Bourbon-Hero, Geschichte-Hero (Parallax-BG) |
| `bourbon-product.png` | Quality-Sektion, Bourbon „Unsere Vanille" |
| `pompona-product.png` | Pompona-Teaser, Pompona-Hero, Pompona „Unsere Vanille" |
| `bourbon-1.png`–`bourbon-4.png` | Optionale Bourbon-Tiles, Pompona-Herkunft |
| `zertifikate/zertifikat-1.png` | Lab-Zertifikat Bourbon (Vanillin 2,3 % · Feuchtigkeit 38 % · Februar 2026) |
| `zertifikate/zertifikat-2.png` | Lab-Zertifikat Pompona (Vanillin 1,8 % · Feuchtigkeit 36 % · März 2026) |

---

## 7. Inhalte (Content-Layer)

Alle Marketing-Texte und Legal-Inhalte liegen typisiert unter `src/content/`. Vorteile:

- JSX bleibt strukturell sauber, keine Text-Wartung im Component-Code
- Tippfehler oder Inhaltsanpassungen treffen nur eine einzige Datei
- TypeScript erzwingt das `ProductData`-Schema → Bourbon und Pompona bleiben strukturgleich

**`bourbon.ts` / `pompona.ts`** – Schema:
```ts
hero { eyebrow, title, titleAccent, subtitle, image, imageAlt }
vanille { headline, paragraphs, image }
herkunft { headline, paragraphs, image }
aroma { headline, paragraphs, notes[] }
gastronomy { headline, intro, items[{ label, description }] }
promise { headline, items[{ title, detail, highlight? }] }
cta { eyebrow, title, label }
```

**`datenschutz.ts`** – 14 anchorbare Sektionen (`PrivacySection[]`), darunter alle 11 Begriffsbestimmungen (a–k) und alle 9 Rechte (a–i) im Originalwortlaut von sava-select.de.

---

## 8. Formular-Logik

Multi-Step unter `src/components/sections/ContactForm.tsx`:

1. Name → 2. Geschäft → 3. Lieferadresse → 4. PLZ →
5. Erfahrung *(Choice)* → 6. Verwendungszweck →
7. Sorte *(Choice: Bourbon/Pompona/Beides)* → 8. DSGVO-Consent

- Validation via `zod`, inkl. PLZ-Regex `^\d{4,5}$`
- Success-State animiert, Progress-Bar mit Amber-Fill
- Section-Anchor `#kontaktformular`, `scroll-mt-24 md:scroll-mt-28`
- Wird von Header-CTA, Footer-Link und beiden ProductPage-CTAs angesprungen

---

## 9. Page-Transitions

- `src/components/chrome/PageTransition.tsx` umhüllt `<main>` im Root-Layout
- `AnimatePresence mode="wait"` mit Pathname-Key
- `initial={{ opacity: 0, y: 18 }}` → `animate={{ opacity: 1, y: 0 }}` → `exit={{ opacity: 0, y: -12 }}`
- 0,55 s, Apple-Easing
- Bei `prefers-reduced-motion: reduce` wird die Transition komplett übersprungen

---

## 10. Datenschutz-TOC (Besonderheit)

`PrivacyShell` ist die einzige Sub-Page mit komplexem Client-State:

- **Desktop:** Sticky-TOC links (`top-28`), `IntersectionObserver` markiert die aktive Sektion
- **Mobile:** Trigger-Button öffnet ein Fullscreen-Sheet mit allen 14 Anchors
- **Floating FAB:** „Zurück zum Anfang" erscheint ab `scrollY > 600`
- Smooth-Scroll zu `<section id="...">` mit `scroll-mt-28 md:scroll-mt-32`

---

## 11. Deployment

### Vercel
- **Account:** `hagenmarggraf-1178`
- **Projekt:** `nvt`
- **Öffentlicher Alias:** `nvt-three.vercel.app` ← **diesen teilen**
- **Trigger:** manuell via `vercel --prod --yes`
- **Build:** `next build`, Node 24, Fluid Compute, ~33 s deploy
- **Aktueller Build (2026-04-27):** 12 Routen statisch, /bourbon 150 B First Load, /datenschutz 15.6 kB

### Lokal
```bash
npm run dev       # localhost:3000
npm run build     # Production-Build
```

---

## 12. Git

- **Branch:** `main`
- **Remote:** `https://github.com/Hagen92343/nvt` (öffentlich, gepusht 2026-04-27)
- **Commits:**
  - `ae6ea2d` — Initial commit from Create Next App
  - `c921db6` — feat: Sava Select Apple-Level redesign
  - `60cc22a` — feat: Unterseiten – Bourbon, Pompona, Geschichte, Impressum, Datenschutz
  - `7f3c7ec` — docs: NOTES.md auf Stand 2026-04-27
  - `9cf0d72` — feat: Update-Suite – Header/Footer-Polish, Pompona-Header-Light-Mode, Zertifikate-Lightbox

---

## 13. Entscheidungen

| Datum | Entscheidung | Warum |
|---|---|---|
| 2026-04-20 | Originalbilder scrapen (statt Stock) | Authentizität — echte Vanilleschoten-Fotografie |
| 2026-04-20 | Framer Motion statt GSAP | Leichter, gut mit React, reicht für Motion-Bedarf |
| 2026-04-20 | Inter Tight statt SF Pro | Rechtliche Einschränkungen bei SF Pro außerhalb Apple, Inter Tight deckt den Look ab |
| 2026-04-20 | Public-Deploy auf Vercel (ursprünglich „kein Deployment") | User wollte extern teilen |
| 2026-04-27 | Generische `<ProductPage>`-Komponente statt zwei separater Seiten | Bourbon und Pompona sind strukturell identisch — Daten-Trennung macht Pflege trivial |
| 2026-04-27 | Keine `/kontakt`-Route entfernt, aber primärer CTA → `/#kontaktformular` | Brief verlangt Anchor zur Startseite, alte Route bleibt als Fallback |
| 2026-04-27 | Datenschutz-Volltext via `curl` von sava-select.de | Brief erlaubt explizit; gehört Kasel & Vogt selbst (Verantwortlicher = Brand) |
| 2026-04-27 | TOC mit IntersectionObserver statt Hash-Tracking | Robuster, weil scroll-Position-aware (Aktive Sektion folgt Sicht, nicht nur Klicks) |
| 2026-04-27 | „Unsere Geschichte" ohne Zeitstrahl | Brief verlangt Long-Read; Apple Newsroom-Ästhetik passt besser als Timeline |
| 2026-04-27 | GitHub-Push auf `Hagen92343/nvt` | Standard-Setup laut CLAUDE.md, nachgeholt |
| 2026-04-28 | Force-Light-Mode-Liste (`FORCE_LIGHT_ROUTES`) statt globalem Theme-Override | Self-contained im Header, kein Provider-Boilerplate; nur eine Stelle bei neuen dunklen Heroes erweitern |
| 2026-04-28 | Probe-Anfrage und Header-Kontakt jetzt auf `/kontakt` (statt Anker zur Startseite) | Brief-Wunsch — eigene Kontaktseite ist die kanonische Anlaufstelle; Anker bleibt auf Startseite verfügbar |
| 2026-04-28 | Datenschutz: globaler Replace „Kasel & Vogt GbR" → „Sava Select" inkl. Grammatikglättung | Brief verlangt Marken-Auftritt unter Sava Select; Genitiv/Dativ-Kollisionen (`bei von` etc.) wurden manuell korrigiert |
| 2026-04-28 | Zertifikate als Lightbox statt seitenbreiter Hochformate | Lab-PDFs sind hoch und detailreich — Card-Preview + Großansicht skaliert besser auf Mobile und wirkt nicht aufdringlich |

---

## 14. Bekannte To-dos

- [x] ~~GitHub-Repo erstellen und pushen~~ → 2026-04-27 erledigt
- [ ] Favicon ersetzen (aktuell Next.js-Default)
- [ ] Optional: Supabase als Form-Backend anbinden (Form sendet aktuell nur ein Mock-Promise)
- [ ] Optional: OG-Images pro Route generieren (aktuell nur Default-Title-Template)

---

## 15. Changelog

- **2026-04-20** — Projekt gebootstrappt, Design-System, alle 8 Routen-Stubs, Vercel-Deploy live auf `nvt-three.vercel.app`
- **2026-04-27** — Komplette Unterseiten-Suite ausgebaut: ProductPage-Komponente, 5 Content-Files unter `src/content/`, Bourbon/Pompona neu gerendert, Geschichte als Long-Read ohne Zeitstrahl, Impressum mit Pflichtangaben, Datenschutz-Volltext mit Sticky-TOC, AnimatePresence-Page-Transitions, GitHub-Push auf `Hagen92343/nvt`
- **2026-04-28** — Update-Suite:
  - Nav: Kontakt-Menüpunkt + Probe-Button → `/kontakt`
  - Hero: zweiter CTA „Sorten entdecken" entfernt
  - Stats: Feuchtigkeit `36 – 38 %`
  - Quality: 40-Jahre-Eyebrow + 40+-Schwebebox raus
  - DirectImport: Sambava (statt Antalaha/Andapa), Köln (statt München), Industrie ergänzt
  - Footer: Spacer raus, „seit über 40 Jahren" entfernt, Firmenname `Sava Select`
  - Bourbon-Hero: „Die Perle Madagaskars"
  - Pompona-Hero: „Die seltene Perle Pompona"; orange Subhead in Sektion 01 entfernt; Vanillingehalt-Label; Feuchtigkeit `36 %`
  - Pompona: Header-Light-Mode-Override (Force-Light-Liste), scrollt sanft in Standardmodus
  - Zertifikate: komplett neu — Lab-Cards (Bourbon/Pompona) mit Framer-Motion-Lightbox (Esc, Klick-außerhalb, Hover-Scale 1.02)
  - Impressum: „Vertreten durch: Niklas Vogt" statt „Kasel & Vogt GbR"
  - Datenschutz: globaler Replace + Grammatikglättung; Subtitle leicht überarbeitet
  - `site.ts`: Firmenname auf `Sava Select`
