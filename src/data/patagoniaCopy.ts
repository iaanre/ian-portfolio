import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for Patagonia CNC — first person, design-lead voice. */
export const PATAGONIA_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2025",
    role: "Lead Designer · End-to-end",
    overview:
      "Patagonia CNC Machines is an industrial automation company specializing in laser cutting, welding cells and CNC systems. In 2025 I designed the full visual communication for the brand—website and editorial pieces—building a clear B2B language where precision machinery and technical storytelling meet.",
    challenge:
      "Industrial equipment is complex to explain. The challenge was to translate dense technical offer into a visual system that feels premium, trustworthy and easy to navigate—for both digital channels and printed catalogs used in sales and trade shows.",
    approach:
      "I led design end to end: structure, layout, typography and art direction. Product photography and scene imagery were produced with generative AI tools, then composed into editorial spreads and web mockups so the brand could show scale, process and finish without a traditional photo production.",
    catalog:
      "The Welding Solutions catalog organizes cells, collaborative robots, fixtures and laser welding into a readable sequence. Spreads balance technical hierarchy with large industrial frames—designed to work as a sales leave-behind and as a Behance-ready presentation.",
    editorial:
      "Editorial pieces extend the same system offline: covers, double-page spreads and collateral stay aligned with the digital tone—dark industrial atmosphere, sharp contrast and a disciplined use of accent color.",
    product:
      "Product communication focuses on what buyers need to decide: capability, integration and reliability. Each spread pairs concise claims with cinematic machine imagery so the offer reads fast without losing technical credibility.",
    decisions:
      "Key decisions included a dark cinematic palette for mockups, AI-assisted imagery directed to brand specs, and a consistent editorial grid so website and print feel like one system rather than separate deliverables.",
    outcome:
      "The result is a complete design package—site experience and editorial suite—ready for commercial use. A cohesive visual language for Patagonia CNC across screens and paper, designed entirely under my direction in 2025.",
  },
  es: {
    year: "2025",
    role: "Diseñador Lead · Punta a punta",
    overview:
      "Patagonia CNC Machines es una empresa de automatización industrial especializada en corte láser, celdas de soldadura y sistemas CNC. En 2025 diseñé la comunicación visual completa de la marca—sitio web y piezas editoriales—para construir un lenguaje B2B claro donde la maquinaria de precisión y el storytelling técnico se encuentran.",
    challenge:
      "El equipamiento industrial es difícil de explicar. El desafío fue traducir una oferta técnica densa a un sistema visual premium, confiable y fácil de recorrer—tanto en canales digitales como en catálogos impresos para ventas y ferias.",
    approach:
      "Lideré el diseño de punta a punta: estructura, layout, tipografía y dirección de arte. La fotografía de producto y las escenas se produjeron con herramientas de IA generativa y se compusieron en spreads editoriales y mockups web, para mostrar escala, proceso y terminación sin una producción fotográfica tradicional.",
    catalog:
      "El catálogo Welding Solutions organiza celdas, robots colaborativos, dispositivos y soldadura láser en una secuencia legible. Las dobles páginas equilibran jerarquía técnica con encuadres industriales amplios—pensadas como material comercial y como presentación editorial.",
    editorial:
      "Las piezas editoriales extienden el mismo sistema fuera de pantalla: tapas, dobles páginas y collateral mantienen el tono digital—atmósfera industrial oscura, alto contraste y un uso disciplinado del color de acento.",
    product:
      "La comunicación de producto se centra en lo que el comprador necesita para decidir: capacidad, integración y confiabilidad. Cada spread combina mensajes concisos con imagen cinematográfica de maquinaria, para leer rápido sin perder credibilidad técnica.",
    decisions:
      "Decisiones clave: paleta cinematográfica oscura para mockups, imagen asistida por IA dirigida a specs de marca, y una grilla editorial consistente para que web e impresión se sientan como un solo sistema.",
    outcome:
      "El resultado es un paquete de diseño completo—experiencia web y suite editorial—listo para uso comercial. Un lenguaje visual coherente para Patagonia CNC en pantalla y papel, diseñado íntegramente bajo mi dirección en 2025.",
  },
};

export function patagoniaSectionBody(sectionId: string, lang: Locale): string | undefined {
  return PATAGONIA_COPY[lang][sectionId];
}
