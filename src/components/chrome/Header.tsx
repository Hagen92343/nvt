"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-apple",
          scrolled
            ? "backdrop-blur-xl bg-cocoa-950/70 border-b border-cream-200/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-page flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            onClick={scrollToTop}
            className="group flex items-center gap-3"
            aria-label={`${site.name} Startseite`}
          >
            <Image
              src="/images/sava-select-logo-light.png"
              alt={site.name}
              width={160}
              height={136}
              priority
              className="h-10 md:h-12 w-auto transition-transform duration-500 ease-apple group-hover:scale-[1.04]"
            />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-cream-100/80 hover:text-cream-50 transition-colors duration-400 ease-apple group"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-apple" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/kontakt"
              className="hidden md:inline-flex btn-apple border border-cream-50/30 text-cream-50 hover:bg-cream-50/10 hover:border-cream-50"
            >
              Probe anfragen
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menü öffnen"
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full text-cream-100 hover:bg-cream-100/10"
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
            className="fixed inset-0 z-[60] bg-cocoa-950 flex flex-col"
          >
            <div className="container-page flex h-16 md:h-20 items-center justify-between">
              <Image
                src="/images/sava-select-logo-light.png"
                alt={site.name}
                width={160}
                height={136}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
                className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-cream-100/10 text-cream-50"
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
                    className="block py-4 text-4xl md:text-6xl font-display font-semibold tracking-tight text-cream-50 hover:text-amber-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-page pb-10 text-sm text-cream-200/60">
              {site.contact.email}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
