"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

const FORCE_LIGHT_ROUTES = new Set<string>(["/pompona"]);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const forceLight = FORCE_LIGHT_ROUTES.has(pathname ?? "") && !scrolled;

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("sava-theme", next ? "dark" : "light");
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-apple",
          scrolled
            ? "backdrop-blur-xl bg-paper/70 dark:bg-cocoa-950/70 border-b border-cocoa-700/10 dark:border-cream-200/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-page flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="group flex items-baseline gap-2 font-display font-semibold text-lg md:text-xl tracking-tight"
            aria-label={`${site.name} Startseite`}
          >
            <span
              className={cn(
                "transition-colors",
                forceLight ? "text-cream-50" : "text-cocoa-800 dark:text-cream-50"
              )}
            >
              SAVA
            </span>
            <span className="text-amber-500 transition-transform duration-500 ease-apple group-hover:translate-x-1">Select</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-400 ease-apple group",
                  forceLight
                    ? "text-cream-100/85 hover:text-cream-50"
                    : "text-cocoa-800/80 hover:text-cocoa-900 dark:text-cream-100/80 dark:hover:text-cream-50"
                )}
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-apple" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Theme wechseln"
              className={cn(
                "hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                forceLight
                  ? "text-cream-100 hover:bg-cream-100/10"
                  : "text-cocoa-700 dark:text-cream-100 hover:bg-cocoa-700/5 dark:hover:bg-cream-100/5"
              )}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              href="/kontakt"
              className={cn(
                "hidden md:inline-flex",
                forceLight
                  ? "btn-apple border border-cream-50/40 text-cream-50 hover:bg-cream-50/10 hover:border-cream-50"
                  : "btn-secondary"
              )}
            >
              Probe anfragen
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menü öffnen"
              className={cn(
                "lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full",
                forceLight
                  ? "text-cream-100 hover:bg-cream-100/10"
                  : "text-cocoa-700 dark:text-cream-100 hover:bg-cocoa-700/5 dark:hover:bg-cream-100/5"
              )}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-paper dark:bg-cocoa-950 flex flex-col"
          >
            <div className="container-page flex h-16 md:h-20 items-center justify-between">
              <span className="font-display font-semibold text-lg">SAVA <span className="text-amber-500">Select</span></span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-cocoa-700/5"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="container-page flex-1 flex flex-col justify-center gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-4xl md:text-6xl font-display font-semibold tracking-tight text-cocoa-800 dark:text-cream-50 hover:text-amber-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-page pb-10 flex items-center justify-between text-sm text-cocoa-700/60 dark:text-cream-200/60">
              <span>{site.contact.email}</span>
              <button onClick={toggleTheme} className="underline underline-offset-4">
                {dark ? "Light" : "Dark"} Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
