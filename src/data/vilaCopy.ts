import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for Brochure 01 VILA — Vitrium Capital, Montevideo. */
export const VILA_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2022",
    role: "Art Direction · Editorial · Renders",
    overview:
      "01 VILA is a residential building in Montevideo developed by Vitrium Capital. In 2022 I designed the full sales brochure—print and digital—building a clear editorial language where technology and nature redefine the idea of home.",
    challenge:
      "A sales brochure for real estate has to work hard: explain the building, certify sustainability claims, show floor plans and unit types, and still feel premium enough to leave with a client. The challenge was to hold all of that in one coherent system without overcrowding the page.",
    approach:
      "I led art direction end to end: editorial structure, typography, layout of plans, EDGE certification iconography, and architectural renders. The piece was designed for print production and for digital presentation—same grid, same hierarchy, ready for both channels.",
    editorial:
      "The editorial system balances large architectural frames with calm white space. Type hierarchy carries the narrative—from the cover promise to technical spreads—while Vitrium Capital and 01 VILA branding stay consistent across every sheet.",
    edge:
      "For EDGE environmental certification I designed a dedicated icon set and layout block: façade design, solar control, insulation and lighting controls—so efficiency standards read as design, not as fine print.",
    plans:
      "Floor-plan spreads (basement, ground floor, unit typologies) keep technical clarity: readable drawings, surface data and unit callouts organized for sales conversations, without losing the brochure’s visual tone.",
    product:
      "Unit pages pair isometric and interior renders with concise specs—total area, private space, terrace—so buyers can compare typologies quickly while the art direction keeps the living experience front and center.",
    decisions:
      "Key decisions: a landscape format built for table presentations, a nature-led palette aligned with the building concept, custom EDGE icons, and a dual-use file set prepared for print and screen.",
    outcome:
      "A complete sales brochure for Vitrium Capital’s 01 VILA in Montevideo—art direction, renders, typography and EDGE iconography—designed in 2022 for both print and digital use.",
  },
  es: {
    year: "2022",
    role: "Dirección de arte · Editorial · Renders",
    overview:
      "01 VILA es un edificio residencial en Montevideo desarrollado por Vitrium Capital. En 2022 diseñé la carpeta de ventas completa—impresa y digital—para construir un lenguaje editorial claro donde la tecnología y la naturaleza resignifican la idea de hogar.",
    challenge:
      "Un brochure inmobiliario tiene que hacer mucho: explicar el edificio, sostener la narrativa de sustentabilidad, mostrar planos y tipologías, y seguir sintiéndose premium al dejarlo con un cliente. El desafío fue contener todo eso en un sistema coherente sin saturar la página.",
    approach:
      "Lideré la dirección de arte de punta a punta: estructura editorial, tipografía, diagramación de planos, iconografía de certificación EDGE y renders arquitectónicos. La pieza se pensó para producción impresa y para presentación digital—misma grilla, misma jerarquía, lista para ambos canales.",
    editorial:
      "El sistema editorial equilibra encuadres arquitectónicos amplios con aire blanco. La jerarquía tipográfica sostiene el relato—desde la promesa de portada hasta las hojas técnicas—mientras la marca Vitrium Capital y 01 VILA se mantienen consistentes en cada hoja.",
    edge:
      "Para la certificación ambiental EDGE diseñé un set de íconos y un bloque de layout propio: diseño de fachadas, control solar, aislamiento y controles de iluminación—para que los estándares de eficiencia se lean como diseño, no como letra chica.",
    plans:
      "Las dobles de planos (subsuelo, planta baja, tipologías) cuidan la claridad técnica: dibujos legibles, superficies y llamados de unidades organizados para la conversación comercial, sin perder el tono visual del brochure.",
    product:
      "Las páginas de unidades combinan renders isométricos e interiores con specs concisas—superficie total, propia, terraza—para comparar tipologías rápido, con la experiencia de habitar siempre al frente.",
    decisions:
      "Decisiones clave: formato landscape pensado para mesa de reunión, paleta natural alineada al concepto del edificio, íconos EDGE a medida, y un set de archivos dual listo para impresión y pantalla.",
    outcome:
      "Una carpeta de ventas completa para 01 VILA de Vitrium Capital en Montevideo—dirección de arte, renders, tipografía e iconografía EDGE—diseñada en 2022 para uso impreso y digital.",
  },
};

export function vilaSectionBody(sectionId: string, lang: Locale): string | undefined {
  return VILA_COPY[lang][sectionId];
}
