import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for NEXO magazine — Revista Queer. */
export const NEXO_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2023",
    role: "Art Direction · Editorial Design",
    overview:
      "NEXO is a magazine dedicated to contemporary queer culture, visual arts and performance. I designed the editorial system for the issue—cover, contents, feature layouts and art direction—so the pages feel bold, legible and culturally sharp.",
    challenge:
      "A culture magazine has to hold strong photography, dense reading and a loud brand voice without collapsing into noise. The challenge was to keep NEXO’s yellow identity as a constant while giving each story its own rhythm.",
    approach:
      "I built a clear editorial grid: yellow masthead language, condensed display type, and generous image frames. Features like Resistencia, Arte and Munar sit on the same system so the issue reads as one publication, not a collage of one-offs.",
    editorial:
      "The system balances high-impact covers with quieter reading spreads. Sumario, interviews and photo essays share the same hierarchy—so navigation stays instinctive from cover to back.",
    outcome:
      "A complete NEXO issue design for print: cover, contents and feature pages that celebrate queer art and culture with a consistent, high-contrast editorial voice.",
  },
  es: {
    year: "2023",
    role: "Dirección de arte · Diseño editorial",
    overview:
      "NEXO es una revista dedicada a la cultura queer contemporánea, las artes visuales y la performance. Diseñé el sistema editorial del número—tapa, sumario, notas y dirección de arte—para que las páginas se sientan potentes, legibles y culturalmente afiladas.",
    challenge:
      "Una revista cultural tiene que sostener fotografía fuerte, lectura densa y una voz de marca intensa sin volverse ruido. El desafío fue mantener la identidad amarilla de NEXO como constante y, a la vez, darle a cada historia su propio ritmo.",
    approach:
      "Construí una grilla editorial clara: lenguaje de masthead amarillo, tipografía display condensada y encuadres generosos. Notas como Resistencia, Arte y Munar viven en el mismo sistema para que el número se lea como una sola publicación.",
    editorial:
      "El sistema equilibra tapas de alto impacto con spreads de lectura más calmos. Sumario, entrevistas y ensayos fotográficos comparten la misma jerarquía—para que la navegación sea instintiva de tapa a contratapa.",
    outcome:
      "Un diseño completo de número NEXO para impresión: tapa, sumario y notas que celebran el arte y la cultura queer con una voz editorial consistente y de alto contraste.",
  },
};

export function nexoSectionBody(sectionId: string, lang: Locale): string | undefined {
  return NEXO_COPY[lang][sectionId];
}
