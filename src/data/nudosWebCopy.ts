import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for NUDOS Web — separate from brand manual. */
export const NUDOS_WEB_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2025 — 2026",
    role: "Founder · Brand & Product Design Lead",
    overview:
      "I designed and built the NUDOS studio website end to end—structure, UI and responsive system—so the brand reads as a digital product: editorial composition, monochrome UI and a clear path from services to contact.",
    challenge:
      "Translate a new identity into a live site without diluting it. The page had to feel like a design studio, not a template: hierarchy, rhythm and conversion in the same monochrome system as the brand manual.",
    approach:
      "I treated the site as an editorial layout on screen. Large Metropolis headlines, Surface grounds, black CTAs and generous white space. Desktop sets the composition; mobile keeps the same hierarchy without shrinking the voice.",
    statement: "Design and technology, on screen.",
    statementBody:
      "The site carries identity, services, selected work and contact in one continuous read. Every screen decision—type scale, contrast, CTA placement—comes from the same system as the brand kit.",
    home:
      "The homepage opens with a three-line manifesto—Diseñamos. Desarrollamos. Conectamos.—and a short promise. Navigation stays quiet; Hablemos is the primary action. The layout is built for first impact, then scroll into proof.",
    system:
      "Nosotros and the type/color board make the system explicit on the site itself: Metropolis for headlines and body, three values (Black, White, Surface). Digital product and brand kit share one vocabulary.",
    projects:
      "Selected work is framed as editorial cases, not a generic grid. TAY and other projects sit in composed blocks with role tags and a clear Ver proyecto path—portfolio as narrative, not a thumbnail dump.",
    contact:
      "Contact closes on a dark surface: short prompt, structured form, service checkboxes. Same monochrome language, inverted for focus at the end of the journey.",
    mobile:
      "Mobile keeps type hierarchy, sticky actions and project reading intact. Captures show real viewports—home, services, contact and work—so the responsive system is visible, not implied.",
    decisions:
      "Key decisions: editorial scale over card UI, no accent color in chrome, CTAs as solid pills, Surface as page ground, and one type family from brand to product so the studio feels coherent in every breakpoint.",
    outcome:
      "A studio site that presents NUDOS as design and technology in one practice—ready for studionudos.com, aligned with the brand manual, and clear from hero to contact on desktop and mobile.",
  },
  es: {
    year: "2025 — 2026",
    role: "Fundador · Lead de Marca y Diseño de Producto",
    overview:
      "Diseñé y armé el sitio del estudio NUDOS de punta a punta—estructura, UI y sistema responsive—para que la marca se lea como producto digital: composición editorial, UI monocroma y un recorrido claro de servicios a contacto.",
    challenge:
      "Pasar una identidad nueva a un sitio vivo sin diluirla. Tenía que sentirse estudio de diseño, no template: jerarquía, ritmo y conversión en el mismo sistema monocromo del manual de marca.",
    approach:
      "Traté el sitio como un layout editorial en pantalla. Titulares Metropolis grandes, fondos Surface, CTAs negros y aire generoso. Desktop fija la composición; mobile mantiene la misma jerarquía sin achicar la voz.",
    statement: "Diseño y tecnología, en pantalla.",
    statementBody:
      "El sitio lleva identidad, servicios, trabajo seleccionado y contacto en una sola lectura. Cada decisión de pantalla—escala tipográfica, contraste, CTAs—sale del mismo sistema que el kit de marca.",
    home:
      "La home abre con un manifiesto en tres líneas—Diseñamos. Desarrollamos. Conectamos.—y una promesa corta. La navegación queda quieta; Hablemos es la acción principal. Impacto primero, después prueba al scrollear.",
    system:
      "Nosotros y el board de tipo/color hacen explícito el sistema en el sitio: Metropolis en titulares y cuerpo, tres valores (Black, White, Surface). Producto digital y kit de marca comparten el mismo vocabulario.",
    projects:
      "El trabajo seleccionado se enmarca como casos editoriales, no como grilla genérica. TAY y otros proyectos viven en bloques compuestos con tags de rol y un Ver proyecto claro—portfolio como relato, no dump de thumbnails.",
    contact:
      "El contacto cierra en superficie oscura: prompt corto, formulario estructurado, checkboxes de servicio. Misma lengua monocroma, invertida para foco al final del recorrido.",
    mobile:
      "Mobile mantiene jerarquía tipográfica, acciones claras y lectura de proyectos. Las capturas muestran viewports reales—home, servicios, contacto y trabajo—para que el sistema responsive se vea, no se asuma.",
    decisions:
      "Decisiones clave: escala editorial por sobre UI de cards, sin color de acento en el chrome, CTAs en píldora sólida, Surface como fondo de página, y una sola familia tipográfica de marca a producto para que el estudio se sienta coherente en cada breakpoint.",
    outcome:
      "Un sitio de estudio que presenta NUDOS como diseño y tecnología en una sola práctica—listo para studionudos.com, alineado al manual de marca, y claro del hero al contacto en desktop y mobile.",
  },
};

export function nudosWebSectionBody(sectionId: string, lang: Locale): string | undefined {
  return NUDOS_WEB_COPY[lang][sectionId];
}
