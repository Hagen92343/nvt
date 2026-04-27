export type StoryParagraph = {
  body: string;
};

export const geschichte = {
  hero: {
    eyebrow: "Unsere Geschichte",
    title: "Von Deutschland über Frankreich",
    titleAccent: "bis nach Madagaskar",
    subtitle:
      "Eine Freundschaft, ein Onkel mit Mut, ein Kontinent voller Vanille – und eine Marke, die direkt zu den Produzenten zurückgeht.",
  },
  paragraphs: [
    {
      body:
        "Manuel und Niklas kennen sich seit über 15 Jahren – eine Freundschaft, die so eng geworden ist, dass Niklas schon früh eine natürliche Verbundenheit zu Manuels Familie entwickelte. Da Manuel Halb-Franzose ist, verbrachten die beiden viele gemeinsame Zeiten in Frankreich, oft bei Manuels Onkel, der für Niklas schnell zu einer Art Familienmitglied wurde. Diese enge Beziehung legte den Grundstein für eine Geschichte, die später ihren Weg bis nach Madagaskar fand.",
    },
    {
      body:
        "Als Manuels Onkel vor einigen Jahren nach Madagaskar auswanderte, lernte er dort Schritt für Schritt das traditionelle Vanillehandwerk kennen. Über die Jahre baute er enge Beziehungen zu lokalen Produzenten auf, gewann ihr Vertrauen und tauchte immer tiefer in die Welt der Vanille ein – von der Bestäubung der Blüten bis zur Fermentation und Sortierung der Schoten. Aus dieser Erfahrung entstand nicht nur ein tiefes Verständnis, sondern auch ein eigenes Engagement im Vanillebusiness vor Ort.",
    },
    {
      body:
        "Durch die Verbindung zu Manuels Onkel erhielten auch Manuel und Niklas einen authentischen Einblick in diese Welt. Sie sahen, wie viel Handarbeit, Wissen und Geduld in jeder einzelnen Schote steckt und wie wertvoll die Beziehungen zu den Produzenten sind. Aus dieser gemeinsamen Perspektive entwickelte sich eine klare Idee: Die besondere Vanille aus Madagaskar direkt und fair nach Europa zu bringen.",
    },
    {
      body:
        "Gemeinsam mit Manuels Onkel beschlossen sie schließlich, genau das zu tun – ohne Zwischenhändler, mit voller Transparenz und mit echtem Respekt für die Menschen, die die Vanille anbauen und veredeln.",
    },
  ] satisfies StoryParagraph[],
  closing: "So entstand SAVA SELECT.",
} as const;
