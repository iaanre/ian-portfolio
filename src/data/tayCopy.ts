import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for TAY — first person, design-lead voice. Kept short for a visual-led page. */
export const TAY_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2025 — 2026",
    role: "Product Design Lead · UX/UI",
    overview:
      "TAY is a mobile marketplace for buying and selling cars with clarity and trust. I led the design and creation of the product end to end—from concept and flows to UI system and brand.",
    statement:
      "What if buying a car online felt as clear as holding the keys?",
    statementBody:
      "I designed TAY to cut noise: scannable listings, honest detail, and contact that starts in one tap. Marketplace, search, detail, publish, chat, profile and saved—built as one continuous mobile experience.",
  },
  es: {
    year: "2025 — 2026",
    role: "Lead de Diseño de Producto · UX/UI",
    overview:
      "TAY es un marketplace mobile para comprar y vender autos con claridad y confianza. Lideré el diseño y la creación del producto de punta a punta—del concepto y los flujos al sistema UI y la marca.",
    statement:
      "¿Y si comprar un auto online se sintiera tan claro como tener las llaves?",
    statementBody:
      "Diseñé TAY para sacar ruido: avisos escaneables, detalle honesto y contacto en un toque. Marketplace, búsqueda, ficha, publicar, chat, perfil y guardados—una sola experiencia mobile continua.",
  },
};

export function taySectionBody(sectionId: string, lang: Locale): string | undefined {
  return TAY_COPY[lang][sectionId];
}
