import type { Metadata } from "next";
import { Inter, Inter_Tight, Fraunces } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/chrome/SmoothScroll";
import { Header } from "@/components/chrome/Header";
import { Footer } from "@/components/chrome/Footer";
import { CustomCursor } from "@/components/chrome/CustomCursor";
import { LoadingScreen } from "@/components/chrome/LoadingScreen";
import { PageTransition } from "@/components/chrome/PageTransition";
import { site } from "@/lib/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" async={false} />
      </head>
      <body
        className={`${sans.variable} ${display.variable} ${serif.variable} antialiased bg-paper text-ink dark:bg-cocoa-950 dark:text-cream-100`}
      >
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main id="top" className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
