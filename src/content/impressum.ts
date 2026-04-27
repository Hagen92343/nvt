export type ImprintBlock = {
  heading: string;
  body: string;
};

export const impressum = {
  hero: {
    eyebrow: "§5 TMG · §18 MStV",
    title: "Impressum",
  },
  provider: {
    heading: "Anbieter",
    brand: "Sava Select",
    company: "Kasel & Vogt GbR",
    street: "Richard-Byrd-Straße 33",
    city: "50829 Köln",
    phone: "01733661177",
    email: "info@sava-select.de",
  },
  blocks: [
    {
      heading: "Haftung für Inhalte",
      body:
        "Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.",
    },
    {
      heading: "Haftung für externe Links",
      body:
        "Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Mit Urteil vom 12. Mai 1998 – AZ 312 O 85/98 – „Haftung für Links“ hat das Landgericht (LG) Hamburg entschieden, dass man durch die Anbringung eines Links, die Inhalte der gelinkten Seite mit zu verantworten hat. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.",
    },
    {
      heading: "Urheber- und Leistungsschutzrechte",
      body:
        "Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.\n\nDie Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.",
    },
    {
      heading: "Datenschutzerklärung",
      body:
        "Bei allen Vorgängen der Datenverarbeitung (z. B. Erhebung, Verarbeitung und Übermittlung) verfährt die Kasel & Vogt GbR nach den gesetzlichen Vorschriften. Die nachfolgende Datenschutzerklärung soll Ihnen einen Überblick geben, wie Ihre personenbezogenen Daten behandelt werden, wenn Sie unser Angebot und unsere Webseite nutzen. Ihre bei uns erhobenen Daten werden nicht ohne gesetzliche Grundlage oder Ihre Einwilligung weitergegeben oder für andere als die genannten Zwecke verwendet.",
    },
  ] satisfies ImprintBlock[],
} as const;
