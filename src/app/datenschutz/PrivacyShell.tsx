"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, List } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { datenschutz, type PrivacySection } from "@/content/datenschutz";
import { cn } from "@/lib/cn";

export function PrivacyShell() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const ids = datenschutz.sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => obs.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="container-page pb-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Sticky TOC (Desktop) */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <nav className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-4">
            <p className="eyebrow mb-5">Inhalt</p>
            <ol className="space-y-1.5">
              {datenschutz.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={cn(
                      "group flex gap-3 py-1.5 text-sm leading-snug transition-colors duration-300 ease-apple",
                      activeId === s.id
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-cocoa-700/70 dark:text-cream-200/70 hover:text-cocoa-900 dark:hover:text-cream-50"
                    )}
                  >
                    <span className="font-mono text-[0.7rem] tabular-nums pt-px shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Mobile TOC trigger */}
        <div className="lg:hidden -mt-6">
          <button
            type="button"
            onClick={() => setMobileTocOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-cocoa-700/15 dark:border-cream-200/15 px-5 py-2.5 text-sm font-medium text-cocoa-800 dark:text-cream-100 hover:border-cocoa-700/40 transition-colors"
          >
            <List size={16} /> Inhaltsverzeichnis
          </button>
        </div>

        <div className="lg:col-span-8 xl:col-span-9">
          {/* Intro */}
          <div className="space-y-6 text-base md:text-lg leading-[1.75] text-cocoa-800/90 dark:text-cream-100/85 max-w-prose">
            {datenschutz.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 space-y-20 md:space-y-24">
            {datenschutz.sections.map((s) => (
              <Section key={s.id} section={s} />
            ))}
          </div>

          <Reveal>
            <div className="mt-24 hairline pt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-cocoa-700/70 dark:text-cream-200/70">
              <span>Stand: April 2026 · Quelle: sava-select.de</span>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 hover:text-amber-500 transition-colors"
              >
                Zurück zum Anfang <ArrowUp size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating "back to top" */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Zurück zum Anfang"
            className="fixed bottom-8 right-6 z-40 h-12 w-12 rounded-full bg-cocoa-900 text-cream-50 shadow-2xl shadow-cocoa-900/20 hover:bg-amber-500 hover:text-cocoa-900 transition-colors flex items-center justify-center"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile TOC sheet */}
      <AnimatePresence>
        {mobileTocOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden bg-paper/95 dark:bg-cocoa-950/95 backdrop-blur-xl"
            onClick={() => setMobileTocOpen(false)}
          >
            <motion.nav
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="container-page pt-28 pb-12 max-h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="eyebrow mb-6">Inhalt</p>
              <ol className="space-y-1">
                {datenschutz.sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setMobileTocOpen(false)}
                      className="flex gap-4 py-3 text-base text-cocoa-800 dark:text-cream-100 hover:text-amber-500 border-b border-cocoa-700/10 dark:border-cream-200/10"
                    >
                      <span className="font-mono text-xs tabular-nums pt-1.5 w-6 text-cocoa-700/50 dark:text-cream-200/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <button
                type="button"
                onClick={() => setMobileTocOpen(false)}
                className="mt-10 btn-secondary w-full justify-center"
              >
                Schließen
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Subcomponents ─── */

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p, i) => (
        <PrivacyParagraph key={i} body={p} />
      ))}
    </>
  );
}

function PrivacyParagraph({ body }: { body: string }) {
  // Bullet-Listen erkennen wir an Zeilen, die mit "• " beginnen
  if (body.split("\n").every((line) => line.trim().startsWith("•") || line.trim() === "")) {
    const items = body
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("•"))
      .map((l) => l.slice(1).trim());
    return (
      <ul className="my-6 space-y-3 list-none">
        {items.map((it, i) => (
          <li key={i} className="grid grid-cols-[auto_1fr] gap-3 leading-[1.65]">
            <span aria-hidden className="select-none text-amber-500">
              ›
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  }
  // Normaler Absatz mit \n als Zeilenumbruch (z. B. Adresse)
  return (
    <p className="my-5 whitespace-pre-line">
      {body}
    </p>
  );
}

function Section({ section }: { section: PrivacySection }) {
  return (
    <article id={section.id} className="scroll-mt-28 md:scroll-mt-32">
      <Reveal>
        <h2 className="font-display font-semibold text-display-md text-cocoa-900 dark:text-cream-50 text-balance leading-[1.1]">
          {section.title}
        </h2>
      </Reveal>

      <div className="mt-8 space-y-1 text-base md:text-lg leading-[1.75] text-cocoa-800/90 dark:text-cream-100/85 max-w-prose">
        {section.intro && (
          <Reveal>
            <Wrap>
              <Paragraphs items={section.intro} />
            </Wrap>
          </Reveal>
        )}
        {section.paragraphs && (
          <Reveal delay={0.04}>
            <Wrap>
              <Paragraphs items={section.paragraphs} />
            </Wrap>
          </Reveal>
        )}
        {section.list && (
          <Reveal delay={0.08}>
            <ul className="my-6 space-y-3 list-none">
              {section.list.map((it, i) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                  <span aria-hidden className="select-none text-amber-500">
                    ›
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {section.trailing && (
          <Reveal delay={0.1}>
            <Wrap>
              <Paragraphs items={section.trailing} />
            </Wrap>
          </Reveal>
        )}
      </div>

      {section.children && (
        <div className="mt-10 space-y-12 max-w-prose">
          {section.children.map((c, i) => (
            <Reveal key={c.label} delay={Math.min(0.04 * i, 0.2)}>
              <div>
                <h3 className="font-display font-semibold text-xl md:text-2xl text-cocoa-900 dark:text-cream-50 text-balance">
                  {c.label}
                </h3>
                <div className="mt-4 text-base md:text-lg leading-[1.75] text-cocoa-800/90 dark:text-cream-100/85 space-y-1">
                  <Paragraphs items={c.paragraphs} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </article>
  );
}

function Wrap({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
