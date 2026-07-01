import type { LegalBlock } from "@/components/blocks/LegalContent";
import { LEGAL, SITE } from "@/lib/constants";

function directorsList(): string {
  if (LEGAL.managingDirectors.length > 0) {
    return LEGAL.managingDirectors.join(", ");
  }
  return LEGAL.pendingNote;
}

export function getImpressumBlocks(): LegalBlock[] {
  const registerBlock = LEGAL.hrbNumber
    ? `HRB-Nr.: ${LEGAL.hrbNumber}<br>Registergericht: ${LEGAL.registerCourt || LEGAL.pendingNote}`
    : `HRB-Nr.: ${LEGAL.pendingNote}<br>Registergericht: ${LEGAL.pendingNote}`;

  const vatBlock = LEGAL.vatId
    ? `USt-IdNr. gem. § 27a UStG: ${LEGAL.vatId}`
    : `USt-IdNr. gem. § 27a UStG: ${LEGAL.pendingNote}`;

  return [
    { type: "h2", text: "Angaben gemäß § 5 TMG" },
    {
      type: "p",
      html: `<strong>${SITE.legalName}</strong><br>
    ${SITE.street}<br>
    ${SITE.zipCity}`,
    },
    {
      type: "p",
      html: `<strong>Vertreten durch:</strong><br>
    Geschäftsführer: ${directorsList()}`,
    },
    { type: "h2", text: "Kontakt" },
    {
      type: "p",
      html: `Telefon: <a href="${SITE.phoneHref}">${SITE.phone}</a><br>
    E-Mail: <a href="mailto:${SITE.email}">${SITE.email}</a><br>
    Web: <a href="${SITE.website}">rohrretter24.de</a>`,
    },
    { type: "h2", text: "Handelsregister" },
    {
      type: "p",
      html: registerBlock,
    },
    { type: "h2", text: "Umsatzsteuer-ID" },
    {
      type: "p",
      html: vatBlock,
    },
    { type: "h2", text: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV" },
    {
      type: "p",
      html: `${SITE.legalName}<br>
    ${SITE.street}<br>
    ${SITE.zipCity}`,
    },
    { type: "h2", text: "Streitschlichtung" },
    {
      type: "p",
      html: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>',
    },
    {
      type: "p",
      html: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    { type: "h2", text: "Haftung für Inhalte" },
    {
      type: "p",
      html: "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
    },
    { type: "h2", text: "Haftung für Links" },
    {
      type: "p",
      html: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    },
    { type: "h2", text: "Urheberrecht" },
    {
      type: "p",
      html: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    },
    { type: "p", html: "Stand: Juli 2026" },
  ];
}
