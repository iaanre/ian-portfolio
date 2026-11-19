import type { Locale } from "../context/LanguageContext.tsx";

/** Case-study copy for Planeta Acero — industrial brand, first person. */
export const PLANETA_ACERO_COPY: Record<
  Locale,
  Partial<Record<string, string>> & { year: string; role: string }
> = {
  en: {
    year: "2025",
    role: "Brand Identity · Visual System",
    overview:
      "Planeta Acero is an industrial brand around steel, orbit and precision. I designed the full identity—mark, lockups, pattern, palette and applications—so it holds from favicon to large format, metallic and technical without feeling generic.",
    challenge:
      "The brand needed to feel industrial without looking generic: metallic, technical and memorable.",
    approach:
      "I started from the name: planet + steel became interlocking orbits with a central spark. From there: isotypes, lockups, a navy pattern, Axiforma + MuseoModerno, and pieces for card, email signature, social and banner.",
    statement: "Steel with an orbit.",
    statementBody:
      "The system pairs a deep navy ground with cyan and copper accents. MuseoModerno carries the wordmark; Axiforma handles contact and UI text. Pattern, stationery and digital pieces reuse the same geometry.",
    concept:
      "The isotype is two interlocking orbits around a four-point spark—planet and steel in one glyph. It stays crisp as a mono mark and gains heat when the cyan–orange gradient is applied.",
    lockups:
      "Horizontal lockups for headers, signatures and digital chrome. Vertical lockups for covers, avatars and stacked formats. Positive, negative and full-color versions keep the mark readable on light and dark grounds.",
    pattern:
      "A navy field tiled with the mark, with a single gradient accent that breaks the grid. Used as envelope liner energy, social backgrounds and brand atmosphere without competing with the logo.",
    stationery:
      "Business card front and back: contact hierarchy on a light face, full brand lockup on the reverse gradient. Email signature as a compact two-block unit for everyday outbound mail.",
    applications:
      "Social posts and a wide banner example show how the system scales—gradient fields, mark placement and type rhythm stay consistent across formats.",
    type:
      "MuseoModerno for the wordmark and display line. Axiforma for titles, body and contact details—geometric, clear at small sizes, aligned to the industrial voice.",
    color:
      "Five values: vibrant orange, sky cyan, deep navy, near-black charcoal and white. Navy carries the system; cyan and orange add the metallic heat.",
    outcome:
      "A complete brand kit: mark versions, pattern, palette, type, business card, email signature and social/banner applications—ready for print and screen.",
  },
  es: {
    year: "2025",
    role: "Identidad de marca · Sistema visual",
    overview:
      "Planeta Acero es una marca industrial alrededor del acero, la órbita y la precisión. Diseñé la identidad completa—isologo, lockups, trama, paleta y aplicaciones—para que se sostenga del favicon al formato grande, con un tono metálico y técnico sin caer en lo genérico.",
    challenge:
      "La marca tenía que sentirse industrial sin verse genérica: metálica, técnica y memorable.",
    approach:
      "Partí del nombre: planeta + acero se volvió órbitas entrelazadas con una chispa central. De ahí salieron isologos, lockups, trama navy, tipografía Axiforma + MuseoModerno, y piezas para tarjeta, firma de mail, redes y banner.",
    statement: "Acero con órbita.",
    statementBody:
      "El sistema combina un fondo navy profundo con acentos cyan y cobre. MuseoModerno lleva el wordmark; Axiforma, el texto de contacto y UI. Trama, papelería y piezas digitales reutilizan la misma geometría.",
    concept:
      "El isologo son dos órbitas entrelazadas con una chispa de cuatro puntas—planeta y acero en un solo glifo. Se mantiene nítido en mono y gana calor cuando entra el degradé cyan–naranja.",
    lockups:
      "Lockups horizontales para headers, firmas y chrome digital. Verticales para portadas, avatars y formatos apilados. Versiones positivo, negativo y color completo mantienen el isologo legible en fondos claros y oscuros.",
    pattern:
      "Un campo navy teselado con el isologo, con un acento en degradé que rompe la grilla. Sirve de atmósfera de marca en fondos, redes y papelería sin competir con el logo.",
    stationery:
      "Tarjeta frente y dorso: jerarquía de contacto en cara clara, lockup completo en el reverso con degradé. Firma de correo como unidad compacta de dos bloques para el mail diario.",
    applications:
      "Posts de redes y un banner de ejemplo muestran cómo escala el sistema—campos en degradé, ubicación del isologo y ritmo tipográfico consistentes entre formatos.",
    type:
      "MuseoModerno para el wordmark y la línea display. Axiforma para títulos, cuerpo y datos de contacto—geométrica, clara en tamaño chico, alineada a la voz industrial.",
    color:
      "Cinco valores: naranja vibrante, cyan cielo, navy profundo, carbón casi negro y blanco. El navy sostiene el sistema; cyan y naranja aportan el calor metálico.",
    outcome:
      "Un kit de marca completo: versiones del isologo, trama, paleta, tipografía, tarjeta, firma de correo y aplicaciones para redes/banner—listo para print y pantalla.",
  },
};

export function planetaAceroSectionBody(sectionId: string, lang: Locale): string | undefined {
  return PLANETA_ACERO_COPY[lang][sectionId];
}
