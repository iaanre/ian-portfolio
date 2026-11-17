import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for Patagonia CNC welding-wire packaging. */
export const PACKAGING_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2025",
    role: "Packaging Design · Brand Application",
    overview:
      "Packaging design for Patagonia CNC Machines’ robot-grade welding wire. I designed the box system—structure, faces, hierarchy and industrial photography—so the product reads premium and technical on the warehouse floor and in sales presentations.",
    challenge:
      "Industrial packaging has to survive logistics, carry compliance marks and still feel like part of a serious B2B brand. The challenge was to keep Patagonia’s mountain identity clear while making the robotic welding story impossible to miss.",
    approach:
      "I built a clean white carton language with yellow accent, bold product type and a hero robot arm on the front. Side panels hold handling rules, specs and barcodes without competing with the main face.",
    product:
      "Robot Grade Quality Welding Wire: front panel for recognition, side panels for care instructions and certifications, top for brand continuity—designed as a family of views for catalog and e-commerce.",
    outcome:
      "A complete packaging application for Patagonia CNC: coherent from front to sides, ready for production mockups and commercial use.",
  },
  es: {
    year: "2025",
    role: "Diseño de packaging · Aplicación de marca",
    overview:
      "Diseño de packaging para el alambre de soldadura robot-grade de Patagonia CNC Machines. Diseñé el sistema de caja—estructura, caras, jerarquía y fotografía industrial—para que el producto se lea premium y técnico en depósito y en presentaciones comerciales.",
    challenge:
      "El packaging industrial tiene que soportar logística, llevar marcas de cumplimiento y seguir sintiéndose parte de una marca B2B seria. El desafío fue mantener clara la identidad de montaña de Patagonia y, a la vez, hacer imposible de ignorar la historia del brazo robótico.",
    approach:
      "Construí un lenguaje de carton blanco limpio con acento amarillo, tipografía de producto fuerte y un hero del brazo robot en el frente. Los laterales llevan manejo, specs y códigos de barras sin competir con la cara principal.",
    product:
      "Robot Grade Quality Welding Wire: frente para reconocimiento, laterales para cuidados y certificaciones, tapa para continuidad de marca—pensado como familia de vistas para catálogo y e-commerce.",
    outcome:
      "Una aplicación de packaging completa para Patagonia CNC: coherente de frente a laterales, lista para mockups de producción y uso comercial.",
  },
};

export function packagingSectionBody(sectionId: string, lang: Locale): string | undefined {
  return PACKAGING_COPY[lang][sectionId];
}
