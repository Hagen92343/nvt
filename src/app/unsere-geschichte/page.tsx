import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Unsere Geschichte",
  description: "40 Jahre Sava Select – von der Sava-Region bis auf deinen Teller.",
};

const milestones = [
  { year: "1985", title: "Erster Importkontakt", body: "Eine Reise nach Sambava, ein Handschlag – der Beginn einer Partnerschaft, die bis heute hält." },
  { year: "1992", title: "Direkter Import", body: "Umstellung auf Direktimport ohne Zwischenhändler. Qualität und Fairness als Grundprinzip." },
  { year: "2004", title: "Eigenes Lager in München", body: "Klimatisiert, luftgetrocknet, vakuumgeprüft – kontrollierte Reifung vor jedem Versand." },
  { year: "2018", title: "Pompona-Programm", body: "Aufbau eines eigenen Pompona-Kontingents. Weniger als 1 % der Weltproduktion – exklusiv für unsere Partner." },
  { year: "2026", title: "Heute", body: "Mehr als 200 Patisserien, Eismacher und Küchen in Europa setzen auf Sava Select." },
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Seit 1985"
        title={<>40 Jahre <span className="italic font-serif font-light text-amber-500">Vanille.</span></>}
        subtitle="Wir sind kein Konzern. Wir sind Menschen, die seit vier Jahrzehnten Vanille importieren – im direkten Austausch mit madagassischen Produzenten."
      />

      <section className="container-page py-section-sm">
        <ol className="relative">
          {milestones.map((m, i) => (
            <li key={m.year} className="grid grid-cols-[7rem_1fr] md:grid-cols-[10rem_1fr] gap-8 py-12 border-t border-cocoa-700/10 dark:border-cream-200/10 first:border-t-0">
              <Reveal delay={i * 0.05}>
                <span className="font-display font-semibold text-3xl md:text-5xl text-amber-500 tabular-nums">
                  {m.year}
                </span>
              </Reveal>
              <Reveal delay={i * 0.05 + 0.08}>
                <div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-cocoa-900 dark:text-cream-50 text-balance">
                    {m.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-cocoa-800/80 dark:text-cream-100/80 leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
