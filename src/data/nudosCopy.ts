import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for NUDOS — first person, design-lead voice. Visual-led length. */
export const NUDOS_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2025 — 2026",
    role: "Founder · Brand & Product Design Lead",
    overview:
      "NUDOS is an independent design and technology studio. I created the brand and designed the digital presence end to end—identity, visual system and website—so design and development read as one practice.",
    statement: "Design and technology, in the same place.",
    statementBody:
      "I shaped NUDOS as a clear monochrome system: Metropolis typography, black, white and surface. The site articulates identity, services, projects and contact in an editorial composition—desktop and mobile as one continuous experience.",
  },
  es: {
    year: "2025 — 2026",
    role: "Fundador · Lead de Marca y Diseño de Producto",
    overview:
      "NUDOS es un estudio independiente de diseño y tecnología. Creé la marca y diseñé la presencia digital de punta a punta—identidad, sistema visual y sitio web—para que diseño y desarrollo se lean como una sola práctica.",
    statement: "Diseño y tecnología, en un mismo lugar.",
    statementBody:
      "Construí NUDOS como un sistema monocromático claro: tipografía Metropolis, negro, blanco y superficie. El sitio articula identidad, servicios, proyectos y contacto en una composición editorial—desktop y mobile como una sola experiencia continua.",
  },
};

export function nudosSectionBody(sectionId: string, lang: Locale): string | undefined {
  return NUDOS_COPY[lang][sectionId];
}
