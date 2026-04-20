import Link from "next/link";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-section border-t border-cocoa-700/10 dark:border-cream-200/10 bg-cream-100/60 dark:bg-cocoa-900/60">
      <div className="container-page py-20 md:py-28 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-cocoa-800 dark:text-cream-50 max-w-xl">
            Vanille, wie sie sein soll.
            <br />
            <span className="text-amber-500">Direkt aus Sambava.</span>
          </div>
          <p className="mt-6 max-w-prose text-cocoa-700/80 dark:text-cream-200/80 leading-relaxed">
            Wir importieren Vanille seit über 40 Jahren – handverlesen, fermentiert nach traditionellem Verfahren, transportiert ohne Zwischenhändler.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Navigation</h4>
          <ul className="space-y-3 text-cocoa-800 dark:text-cream-100">
            <li><Link href="/bourbon" className="hover:text-amber-500 transition-colors">Bourbon-Vanille</Link></li>
            <li><Link href="/pompona" className="hover:text-amber-500 transition-colors">Pompona-Vanille</Link></li>
            <li><Link href="/unsere-geschichte" className="hover:text-amber-500 transition-colors">Unsere Geschichte</Link></li>
            <li><Link href="/kontakt" className="hover:text-amber-500 transition-colors">Kontakt</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Kontakt</h4>
          <ul className="space-y-3 text-cocoa-800 dark:text-cream-100">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-amber-500 transition-colors">
                {site.contact.email}
              </a>
            </li>
            <li>{site.contact.phone}</li>
          </ul>
        </div>
      </div>

      <div className="hairline">
        <div className="container-page py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-cocoa-700/60 dark:text-cream-200/60">
          <span>© {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.</span>
          <ul className="flex gap-6">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cocoa-900 dark:hover:text-cream-50 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
