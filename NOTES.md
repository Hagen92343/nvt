# NVT — Sava Select Apple-Level Redesign

> Zentrale Projekt-Doku. Pfad: `/Users/hagenmarggraf/Desktop/projects/nvt`
> Angelegt: 2026-04-20 · Live seit 2026-04-20

---

## 0. Links

| Zweck | URL |
|---|---|
| **Live (öffentlich, teilbar)** | **https://nvt-three.vercel.app** |
| Team-Alias (geschützt) | https://nvt-hagen-marggrafs-projects.vercel.app |
| Production Deployment | https://nvt-639yhkiie-hagen-marggrafs-projects.vercel.app |
| Vercel Inspector | https://vercel.com/hagen-marggrafs-projects/nvt |
| Original-Vorlage | https://www.sava-select.de/ |
| Dev lokal | http://localhost:3000 (`npm run dev`) |

---

## 1. Projekt-Überblick

Premium-Nachbau der Website des Vanille-Importeurs **Sava Select** auf Apple-Niveau.
Inhalte, Farbwelt und Features vom Original übernommen, UI/UX kompromisslos gehoben.

- Zielgruppe: Präsentation an einen Freund
- Ursprünglich lokal geplant — live zu Vercel deployt am 2026-04-20 auf Wunsch

---

## 2. Tech Stack

| Layer | Wahl |
|---|---|
| Framework | Next.js 14.2.35 (App Router, TypeScript) |
| Styling | Tailwind CSS mit Custom-Theme |
| Animationen | Framer Motion 12 |
| Smooth Scroll | Lenis |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Fonts | Inter · Inter Tight · Fraunces (Google Fonts) |
| Hosting | Vercel (Production) |

---

## 3. Routen-Struktur

| Route | Datei | Status |
|---|---|---|
| `/` | `src/app/page.tsx` | 200 |
| `/bourbon` | `src/app/bourbon/page.tsx` | 200 |
| `/pompona` | `src/app/pompona/page.tsx` | 200 |
| `/unsere-geschichte` | `src/app/unsere-geschichte/page.tsx` | 200 |
| `/kontakt` | `src/app/kontakt/page.tsx` | 200 |
| `/zertifikate` | `src/app/zertifikate/page.tsx` | 200 |
| `/impressum` | `src/app/impressum/page.tsx` | 200 |
| `/datenschutz` | `src/app/datenschutz/page.tsx` | 200 |

---

## 4. Komponenten-Landkarte

```
src/
├── app/                          # Routen
│   ├── layout.tsx                # Root: Fonts, Header, Footer, Providers
│   ├── page.tsx                  # Startseite (6 Sektionen)
│   └── [route]/page.tsx          # Subpages
├── components/
│   ├── chrome/                   # Layout-Elemente
│   │   ├── Header.tsx            # Sticky Nav mit backdrop-blur + Mobile Fullscreen
│   │   ├── Footer.tsx            # 3-spaltig + Legal
│   │   ├── SmoothScroll.tsx      # Lenis Provider
│   │   ├── CustomCursor.tsx      # Dezenter Cursor mit Magnetic Hover
│   │   └── LoadingScreen.tsx     # 1,8 s Logo-Reveal auf Erstbesuch
│   ├── sections/                 # Startseiten-Sektionen
│   │   ├── Hero.tsx              # Fullscreen Ken-Burns + Parallax + Grain
│   │   ├── StatsPin.tsx          # Pin-Scroll 3-Viewport Count-Up
│   │   ├── Quality.tsx           # Parallax-Produktbild + Floating Badge
│   │   ├── DirectImport.tsx      # Dunkles Panel mit 4er-Grid
│   │   ├── PomponaTeaser.tsx     # <1% Mega-Typo + Parallax
│   │   └── ContactForm.tsx       # 8-Step Multi-Form + Success-State
│   └── ui/                       # Bausteine
│       ├── PageHero.tsx          # Wiederverwendbarer Subpage-Hero
│       ├── Reveal.tsx            # Scroll-triggered Fade-Up
│       ├── MagneticButton.tsx    # Cursor-follow Wrapper
│       └── CountUp.tsx           # Zahl-Animation bei Viewport
└── lib/
    ├── cn.ts                     # clsx + tailwind-merge
    └── site.ts                   # Site-Metadata + Nav + Contact
```

---

## 5. Design-System (`tailwind.config.ts`)

### Farbpalette (aus sava-select.de extrahiert)

| Token | Hex | Verwendung |
|---|---|---|
| `cocoa-700` | `#503613` | Primär, Text, Buttons |
| `cream-200` | `#ede9d0` | Flächen, BG |
| `amber-400` | `#f1aa4c` | Akzent, CTAs, Highlights |
| `palm-600` | `#1a6c32` | Reserve (Natur-Akzent) |
| `paper` / `ink` | `#fbf9f1` / `#0f0a05` | Basis Light/Dark |

### Typografie

- **Display:** Inter Tight (fett, tight tracking)
- **Body:** Inter
- **Serif-Akzent:** Fraunces (Italic-Highlights wie *„Rar."*)
- Fluid sizes via `clamp()` — Hero 4–10 rem, Stats 4–14 rem

### Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple-Standard)
- Durations: 400 / 600 / 800 / 1200 ms Tailwind-Tokens
- `prefers-reduced-motion` → Lenis & Cursor deaktiviert, Transitions auf 0,01 ms

---

## 6. Assets (`public/images/`)

Originalbilder von sava-select.de gescrapt (16 UUIDs → 9 relevante Dateien):

| Datei | Einsatz |
|---|---|
| `hero-vanilla.jpg` | Startseite Hero (144 KB) |
| `bourbon-product.png` | Quality-Sektion (1,4 MB) |
| `pompona-product.png` | Pompona-Teaser + Pompona-Seite (1,5 MB) |
| `bourbon-1.png` bis `bourbon-4.png` | Bourbon-Seite Tiles |
| `cert-1.jpg`, `cert-2.jpg` | Zertifikate-Seite |

---

## 7. Formular-Logik

Multi-Step unter `src/components/sections/ContactForm.tsx`:

1. Name → 2. Geschäft → 3. Lieferadresse → 4. PLZ →
5. Erfahrung *(Choice)* → 6. Verwendungszweck →
7. Sorte *(Choice: Bourbon/Pompona/Beides)* → 8. DSGVO-Consent

Validation via `zod`, inkl. PLZ-Regex `^\d{4,5}$`.
Success-State animiert, Progress-Bar mit Amber-Fill.

---

## 8. Deployment

### Vercel
- **Account:** `hagenmarggraf-1178`
- **Projekt:** `nvt`
- **Öffentlicher Alias:** `nvt-three.vercel.app` ← **diesen teilen**
- **Trigger:** manuell via `vercel --prod --yes`
- **Build:** `next build`, Node 24, Fluid Compute

### Lokal
```bash
npm run dev       # localhost:3000
npm run build     # Production-Build
```

---

## 9. Git

- **Branch:** `main`
- **Remote:** noch nicht auf GitHub gepusht (Repo lokal bei `create-next-app` initialisiert)
- **Commits:**
  - `ae6ea2d` — Initial commit from Create Next App
  - (nächster) — komplette Sava-Select-Implementierung

---

## 10. Entscheidungen

| Datum | Entscheidung | Warum |
|---|---|---|
| 2026-04-20 | Originalbilder scrapen (statt Stock) | Authentizität — echte Vanilleschoten-Fotografie |
| 2026-04-20 | Framer Motion statt GSAP | Leichter, gut mit React, reicht für Motion-Bedarf |
| 2026-04-20 | Inter Tight statt SF Pro | Rechtliche Einschränkungen bei SF Pro außerhalb Apple, Inter Tight deckt den Look ab |
| 2026-04-20 | Public-Deploy auf Vercel (ursprünglich „kein Deployment") | User wollte extern teilen |
| 2026-04-20 | Prod-Deploy für öffentlichen Zugang | Preview-URLs sind hinter Team-Auth (401) |
| 2026-04-20 | Theme-Init via externem `/public/theme-init.js` | Sauberer als Inline-Script; keine Hydration-Flash-Probleme |

---

## 11. Bekannte To-dos

- [ ] GitHub-Repo erstellen (`gh repo create nvt --public --source=. --remote=origin`) und pushen
- [ ] Favicon ersetzen (aktuell Next.js-Default)
- [ ] Impressum mit echten Firmendaten befüllen (aktuell Platzhalter)
- [ ] Optional: Supabase als Form-Backend anbinden
- [ ] Optional: Page-Transition zwischen Routen (aktuell nur Per-Section-Reveals)

---

## 12. Changelog

- **2026-04-20** — Projekt gebootstrappt, Design-System, alle 8 Routen, Vercel-Deploy live auf `nvt-three.vercel.app`
