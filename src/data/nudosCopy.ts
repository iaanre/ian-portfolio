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
      "NUDOS is an independent design and technology studio. I built the brand from the mark outward—name, symbol, lockups and a monochrome system—so design and development read as one practice.",
    challenge:
      "The studio needed a mark that could hold both sides of the work: craft and code. Something geometric enough for product UI, calm enough for editorial use, and strong as a single glyph at favicon size.",
    approach:
      "I started from the name. Nudos—knots—became two interlocking loops: a continuous stroke that binds design and technology without illustrating either literally. From there: horizontal and vertical lockups, clear positive/negative rules, Metropolis type and a three-value palette.",
    statement: "Design and technology, in the same place.",
    statementBody:
      "I shaped NUDOS as a clear monochrome system: Metropolis typography, black, white and surface. The guidelines keep the mark consistent from favicon to wordmark, across print and screen.",
    concept:
      "The brand mark is a knot: two open loops sharing one continuous stroke. It suggests connection, continuity and craft—without relying on tech clichés. At small sizes it stays a solid glyph; at large sizes the geometry stays crisp.",
    lockups:
      "Two primary lockups. Horizontal for headers, decks and digital chrome. Vertical for covers, avatars and square formats. Both pair the mark with NUDOS and the line Design & Technology, tracked to the wordmark width.",
    type:
      "Metropolis carries the system—geometric sans, generous tracking on the wordmark, lighter weight on the descriptor. One family across brand and product so UI and identity stay in the same voice.",
    color:
      "Three values only. Black for ink and UI, white for reverse, Surface (#EFEFED) as the quiet paper ground. No accent color in the core identity—contrast does the work.",
    rules:
      "Keep clear space around the mark equal to the loop thickness. Never stretch, outline or recolor outside black/white. Prefer the full lockup when space allows; use the mark alone only when the name is already present nearby.",
    outcome:
      "A compact brand kit: mark, lockups, type and palette ready for the studio site, decks and product work—tight enough to stay consistent, flexible enough to live in digital and print.",
  },
  es: {
    year: "2025 — 2026",
    role: "Fundador · Lead de Marca y Diseño de Producto",
    overview:
      "NUDOS es un estudio independiente de diseño y tecnología. Construí la marca desde el isologo hacia afuera—nombre, símbolo, lockups y un sistema monocromo—para que diseño y desarrollo se lean como una sola práctica.",
    challenge:
      "El estudio necesitaba una marca que sostuviera los dos lados del trabajo: oficio y código. Geométrica para UI de producto, calmada para uso editorial, y firme como glifo único a tamaño favicon.",
    approach:
      "Partí del nombre. Nudos—nudos—se volvió dos bucles entrelazados: un trazo continuo que une diseño y tecnología sin ilustrar ninguno de forma literal. Después: lockups horizontal y vertical, reglas claro/oscuro, tipografía Metropolis y una paleta de tres valores.",
    statement: "Diseño y tecnología, en un mismo lugar.",
    statementBody:
      "Construí NUDOS como un sistema monocromático claro: tipografía Metropolis, negro, blanco y superficie. El manual mantiene el isologo consistente del favicon al wordmark, en print y pantalla.",
    concept:
      "El isologo es un nudo: dos bucles abiertos en un solo trazo continuo. Sugiere conexión, continuidad y oficio—sin clichés tech. En tamaño chico sigue siendo un glifo sólido; en grande la geometría se mantiene nítida.",
    lockups:
      "Dos lockups principales. Horizontal para headers, decks y chrome digital. Vertical para portadas, avatars y formatos cuadrados. Ambos combinan el isologo con NUDOS y la línea Design & Technology, trackeada al ancho del wordmark.",
    type:
      "Metropolis sostiene el sistema—sans geométrica, tracking generoso en el wordmark, peso más liviano en el descriptor. Una sola familia entre marca y producto para que UI e identidad hablen con la misma voz.",
    color:
      "Solo tres valores. Negro para tinta y UI, blanco para negativo, Surface (#EFEFED) como papel quieto. Sin color de acento en la identidad core—el contraste hace el trabajo.",
    rules:
      "Dejar aire alrededor del isologo igual al grosor del trazo. No estirar, outlinear ni recolorear fuera de negro/blanco. Preferir el lockup completo cuando hay espacio; el isologo solo solo cuando el nombre ya está cerca.",
    outcome:
      "Un kit de marca compacto: isologo, lockups, tipo y paleta listos para el sitio del estudio, decks y producto—cerrado para ser consistente, flexible para vivir en digital y print.",
  },
};

export function nudosSectionBody(sectionId: string, lang: Locale): string | undefined {
  return NUDOS_COPY[lang][sectionId];
}
