import { PENDING_COPY } from "./site.ts";
import { tayAsset, tayCover } from "./tayAssets.ts";
import { TAY_COPY } from "./tayCopy.ts";
import { nudosAsset, nudosCover } from "./nudosAssets.ts";
import { NUDOS_COPY } from "./nudosCopy.ts";
import { patagoniaAsset, patagoniaCover, patagoniaHomeCover } from "./patagoniaAssets.ts";
import { PATAGONIA_COPY } from "./patagoniaCopy.ts";
import { vilaAsset, vilaCover } from "./vilaAssets.ts";
import { VILA_COPY } from "./vilaCopy.ts";

const tayCovers = tayCover("es");
const tayEn = TAY_COPY.en;
const nudosCovers = nudosCover("es");
const nudosEn = NUDOS_COPY.en;
const patagoniaCovers = patagoniaCover("es");
const patagoniaHomeCovers = patagoniaHomeCover("es");
const patagoniaEn = PATAGONIA_COPY.en;
const vilaCovers = vilaCover("es");
const vilaEn = VILA_COPY.en;

export type MediaFrame = "none" | "browser" | "phone" | "spread";

export type ProjectCategory = "editorial" | "web" | "branding";

export type BannerTheme = {
  /** Base dark or light surface of the project banner */
  bg: string;
  /** Secondary gradient stop */
  secondary: string;
  /** Radial ambient glow color */
  glow: string;
  /** Crisp secondary accent color associated with this project */
  accent: string;
  /** Whether text/header over this banner should be light-on-dark ("ink") or dark-on-light ("paper") */
  headerTheme: "ink" | "paper";
};

export type MediaSlot = {
  id: string;
  /** Suggested filename inside the project asset folder. */
  file: string;
  label: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square" | "phone";
  caption: string;
  kind: "image" | "video";
  frame: MediaFrame;
  /** Set this to an imported asset URL when the real file is added. */
  src?: string;
  /** Optional portrait/mobile crop — used by hero full-bleed covers. */
  srcMobile?: string;
  /** CSS object-position when cropping (e.g. "center 30%"). */
  objectPosition?: string;
};

export type CaseSection = {
  id: string;
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  lines: string[];
  category: ProjectCategory;
  /** Extra sections this project also appears in (beyond `category`). */
  alsoIn?: ProjectCategory[];
  categoryLabel: string;
  featured?: boolean;
  placeholder?: boolean;
  disciplines: string[];
  year: string;
  role: string;
  tone: "paper" | "ink";
  banner: BannerTheme;
  overview: string;
  sections: CaseSection[];
  media: MediaSlot[];
};

const media = (
  file: string,
  label: string,
  aspect: MediaSlot["aspect"],
  frame: MediaFrame = "none",
  kind: MediaSlot["kind"] = "image",
): MediaSlot => ({
  id: file.replace(/\.[a-z0-9]+$/i, ""),
  file,
  label,
  alt: `${label} — asset pending`,
  aspect,
  caption: "Caption pending.",
  kind,
  frame,
});

export const CATEGORY_META: Record<
  ProjectCategory,
  { id: ProjectCategory; label: string; shortLabel: string; subtitle: string }
> = {
  editorial: {
    id: "editorial",
    label: "Editorial Design",
    shortLabel: "Editorial",
    subtitle: "Catalogs, publications, books, technical literature and print art direction.",
  },
  web: {
    id: "web",
    label: "Web & Digital Product",
    shortLabel: "Web & Product",
    subtitle: "Interactive websites, mobile applications, UX/UI systems and digital experiences.",
  },
  branding: {
    id: "branding",
    label: "Brand Identity",
    shortLabel: "Branding",
    subtitle: "Visual identities, brand worlds, typography systems and guidelines.",
  },
};

export const projects: Project[] = [
  {
    slug: "tay",
    index: "01",
    title: "TAY",
    lines: ["TAY"],
    category: "web",
    categoryLabel: "Product · Mobile",
    featured: true,
    disciplines: ["Product Design", "UX/UI", "Mobile"],
    year: tayEn.year,
    role: tayEn.role,
    tone: "paper",
    banner: {
      bg: "#12161a",
      secondary: "#2c343b",
      glow: "rgba(255, 87, 11, 0.32)",
      accent: "#ff570b",
      headerTheme: "ink",
    },
    overview: tayEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: tayEn.overview ?? PENDING_COPY },
      { id: "challenge", title: "Challenge", body: tayEn.challenge ?? PENDING_COPY },
      { id: "role", title: "My Role", body: tayEn.role ?? PENDING_COPY },
      { id: "thinking", title: "Product Thinking", body: tayEn.thinking ?? PENDING_COPY },
      { id: "ia", title: "Information Architecture", body: tayEn.ia ?? PENDING_COPY },
      { id: "ux", title: "User Experience", body: tayEn.ux ?? PENDING_COPY },
      { id: "flows", title: "Key User Flows", body: tayEn.flows ?? PENDING_COPY },
      { id: "ui", title: "UI System", body: PENDING_COPY },
      { id: "mobile", title: "Mobile Experience", body: PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: PENDING_COPY },
      { id: "final", title: "Final Product", body: PENDING_COPY },
      { id: "learnings", title: "Learnings", body: PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "TAY cover", "landscape"),
        src: tayCovers.desktop,
        srcMobile: tayCovers.mobile,
        objectPosition: "center center",
        alt: "TAY — Tu Auto Ya. Comprá y vendé autos de forma simple y segura.",
        caption: "Portada",
      },
      {
        ...media("flow", "TAY user flow", "landscape"),
        src: tayAsset("flow"),
        alt: "TAY — recorrido clave: marketplace, búsqueda, detalle y chat.",
        caption: "Key user flow",
      },
      {
        ...media("final", "TAY final product", "landscape"),
        src: tayAsset("final"),
        alt: "TAY — producto final: publicar, perfil y guardados.",
        caption: "Final product",
      },
      {
        ...media("logo-board-positive", "TAY wordmark positive", "landscape"),
        src: tayAsset("logo-board-positive"),
        alt: "TAY — wordmark positivo sobre fondo paper.",
        caption: "Wordmark · positivo",
      },
      {
        ...media("logo-board-negative", "TAY wordmark negative", "landscape"),
        src: tayAsset("logo-board-negative"),
        alt: "TAY — wordmark negativo sobre fondo ink.",
        caption: "Wordmark · negativo",
      },
      {
        ...media("logo-board-icons", "TAY app icons", "landscape"),
        src: tayAsset("logo-board-icons"),
        alt: "TAY — iconos de aplicación dark y orange.",
        caption: "App icons",
      },
      {
        ...media("logo-app-dark", "TAY app icon dark", "square"),
        src: tayAsset("logo-app-dark"),
        alt: "TAY — icono de aplicación, A naranja sobre fondo charcoal.",
        caption: "App icon · dark",
      },
      {
        ...media("logo-app-orange", "TAY app icon orange", "square"),
        src: tayAsset("logo-app-orange"),
        alt: "TAY — icono de aplicación, A blanca sobre fondo naranja.",
        caption: "App icon · orange",
      },
      {
        ...media("mobile-01", "TAY marketplace", "phone", "phone"),
        src: tayAsset("01-marketplace"),
        alt: "TAY — marketplace: listado de autos con filtros y financiación.",
        caption: "Marketplace",
      },
      {
        ...media("mobile-02", "TAY listing detail", "phone", "phone"),
        src: tayAsset("02-detalle"),
        alt: "TAY — detalle del vehículo con precio, specs y contacto al vendedor.",
        caption: "Detalle",
      },
      {
        ...media("mobile-03", "TAY search", "phone", "phone"),
        src: tayAsset("03-busqueda"),
        alt: "TAY — búsqueda y vistos recientemente.",
        caption: "Búsqueda",
      },
      {
        ...media("mobile-04", "TAY publish", "phone", "phone"),
        src: tayAsset("04-publicar"),
        alt: "TAY — publicar auto: fotos e información del vehículo.",
        caption: "Publicar",
      },
      {
        ...media("mobile-05", "TAY chat", "phone", "phone"),
        src: tayAsset("05-chat"),
        alt: "TAY — chat entre comprador y vendedor.",
        caption: "Chat",
      },
      {
        ...media("mobile-06", "TAY profile", "phone", "phone"),
        src: tayAsset("06-perfil"),
        alt: "TAY — perfil de usuario con publicaciones activas.",
        caption: "Perfil",
      },
      {
        ...media("mobile-07", "TAY saved", "phone", "phone"),
        src: tayAsset("07-guardados"),
        alt: "TAY — guardados: autos marcados por el usuario.",
        caption: "Guardados",
      },
    ],
  },
  {
    slug: "nudos",
    index: "02",
    title: "NUDOS",
    lines: ["NUDOS"],
    category: "branding",
    alsoIn: ["web"],
    categoryLabel: "Brand Identity · Web Design",
    featured: true,
    disciplines: ["Brand Identity", "Web Design", "Digital"],
    year: nudosEn.year,
    role: nudosEn.role,
    tone: "ink",
    banner: {
      bg: "#0a0a0a",
      secondary: "#1a1a1a",
      glow: "rgba(255, 255, 255, 0.1)",
      accent: "#0a0a0a",
      headerTheme: "ink",
    },
    overview: nudosEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: nudosEn.overview ?? PENDING_COPY },
      { id: "challenge", title: "Challenge", body: PENDING_COPY },
      { id: "approach", title: "Approach", body: PENDING_COPY },
      { id: "visual", title: "Visual System", body: PENDING_COPY },
      { id: "website", title: "Website", body: PENDING_COPY },
      { id: "process", title: "Process", body: PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "NUDOS cover", "landscape"),
        src: nudosCovers.desktop,
        srcMobile: nudosCovers.mobile,
        objectPosition: "center 42%",
        alt: "NUDOS — Design & Technology. Portada del estudio con sitio en laptop.",
        caption: "Portada",
      },
      {
        ...media("site-home", "NUDOS homepage", "landscape", "browser"),
        src: nudosAsset("site-home"),
        alt: "NUDOS — experiencia principal del sitio: Diseñamos. Desarrollamos. Conectamos.",
        caption: "Homepage",
      },
      {
        ...media("site-system", "NUDOS visual system", "landscape"),
        src: nudosAsset("site-system"),
        alt: "NUDOS — sistema visual: tipografía Metropolis y color monocromo.",
        caption: "Visual system",
      },
      {
        ...media("site-contact", "NUDOS contact", "landscape", "browser"),
        src: nudosAsset("site-contact"),
        alt: "NUDOS — bloque de contacto en superficie oscura.",
        caption: "Contact",
      },
      {
        ...media("site-projects", "NUDOS projects", "landscape", "browser"),
        src: nudosAsset("site-projects"),
        alt: "NUDOS — sección de proyectos en la web.",
        caption: "Projects",
      },
      {
        ...media("site-mobile", "NUDOS mobile", "landscape"),
        src: nudosAsset("site-mobile"),
        alt: "NUDOS — experiencia responsive mobile.",
        caption: "Mobile",
      },
      {
        ...media("logo-board-positive", "NUDOS wordmark positive", "landscape"),
        src: nudosAsset("logo-board-positive"),
        alt: "NUDOS — wordmark positivo.",
        caption: "Wordmark · positivo",
      },
      {
        ...media("logo-board-negative", "NUDOS wordmark negative", "landscape"),
        src: nudosAsset("logo-board-negative"),
        alt: "NUDOS — wordmark negativo.",
        caption: "Wordmark · negativo",
      },
      {
        ...media("logo-board-icons", "NUDOS brand mark", "landscape"),
        src: nudosAsset("logo-board-icons"),
        alt: "NUDOS — isologo positivo y negativo.",
        caption: "Isologo",
      },
    ],
  },
  {
    slug: "patagonia",
    index: "03",
    title: "PATAGONIA CNC MACHINES",
    lines: ["PATAGONIA", "CNC MACHINES"],
    category: "editorial",
    alsoIn: ["web"],
    categoryLabel: "Editorial · Web Design",
    featured: true,
    disciplines: ["Editorial", "Web Design", "B2B"],
    year: patagoniaEn.year,
    role: patagoniaEn.role,
    tone: "ink",
    banner: {
      bg: "#0b151a",
      secondary: "#152b36",
      glow: "rgba(94, 204, 232, 0.30)",
      accent: "#66d2ee",
      headerTheme: "ink",
    },
    overview: patagoniaEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: patagoniaEn.overview ?? PENDING_COPY },
      { id: "challenge", title: "Challenge", body: patagoniaEn.challenge ?? PENDING_COPY },
      { id: "approach", title: "Approach", body: patagoniaEn.approach ?? PENDING_COPY },
      { id: "catalog", title: "Catalog", body: patagoniaEn.catalog ?? PENDING_COPY },
      { id: "editorial", title: "Editorial", body: patagoniaEn.editorial ?? PENDING_COPY },
      { id: "product", title: "Product Communication", body: patagoniaEn.product ?? PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: patagoniaEn.decisions ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: patagoniaEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "Patagonia CNC cover", "landscape"),
        src: patagoniaCovers.desktop,
        srcMobile: patagoniaCovers.mobile,
        objectPosition: "62% 45%",
        alt: "Patagonia CNC Machines — catálogo Welding Solutions sobre roca.",
        caption: "Portada",
      },
      {
        ...media("cover-home", "Patagonia CNC home cover", "landscape"),
        src: patagoniaHomeCovers.desktop,
        srcMobile: patagoniaHomeCovers.mobile,
        objectPosition: "68% 42%",
        alt: "Patagonia CNC Machines — catálogo Welding Solutions sobre roca.",
        caption: "Home cover",
      },
      {
        ...media("spread-01", "Catalog spread 01", "landscape", "spread"),
        src: patagoniaAsset("spread-01"),
        alt: "Patagonia CNC — doble página editorial 12.",
        caption: "Spread 01",
      },
      {
        ...media("spread-02", "Catalog spread 02", "landscape", "spread"),
        src: patagoniaAsset("spread-02"),
        alt: "Patagonia CNC — doble página editorial 13.",
        caption: "Spread 02",
      },
      {
        ...media("spread-03", "Catalog spread 03", "landscape", "spread"),
        src: patagoniaAsset("spread-03"),
        alt: "Patagonia CNC — doble página editorial 14.",
        caption: "Spread 03",
      },
      {
        ...media("catalog", "Technical catalog", "portrait"),
        src: patagoniaAsset("catalog"),
        alt: "Patagonia CNC — pieza editorial 17.",
        caption: "Catálogo",
      },
      {
        ...media("collateral", "Marketing collateral", "landscape"),
        src: patagoniaAsset("collateral"),
        alt: "Patagonia CNC — pieza editorial 16.",
        caption: "Collateral",
      },
    ],
  },
  {
    slug: "editorial-02",
    index: "04",
    title: "BROCHURE 01 VILA",
    lines: ["BROCHURE 01 VILA"],
    category: "editorial",
    categoryLabel: "Publication · Print",
    placeholder: false,
    disciplines: ["Editorial Design", "Art Direction", "Print & Digital"],
    year: vilaEn.year,
    role: vilaEn.role,
    tone: "paper",
    banner: {
      bg: "#1b1311",
      secondary: "#33201b",
      glow: "rgba(229, 134, 104, 0.30)",
      accent: "#e58668",
      headerTheme: "ink",
    },
    overview: vilaEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: vilaEn.overview ?? PENDING_COPY },
      { id: "challenge", title: "Challenge", body: vilaEn.challenge ?? PENDING_COPY },
      { id: "approach", title: "Approach", body: vilaEn.approach ?? PENDING_COPY },
      { id: "editorial", title: "Editorial", body: vilaEn.editorial ?? PENDING_COPY },
      { id: "edge", title: "EDGE Certification", body: vilaEn.edge ?? PENDING_COPY },
      { id: "plans", title: "Plans", body: vilaEn.plans ?? PENDING_COPY },
      { id: "product", title: "Units", body: vilaEn.product ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: vilaEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "Brochure 01 VILA cover", "landscape"),
        src: vilaCovers.desktop,
        srcMobile: vilaCovers.mobile,
        alt: "Brochure 01 VILA — portada sobre piedra y vegetación.",
        caption: "Portada",
      },
      {
        ...media("mockup-spread-01", "VILA mockup spread 01", "landscape", "spread"),
        src: vilaAsset("mockup-spread-01"),
        alt: "Brochure 01 VILA — doble página abierta sobre piedra.",
        caption: "Mockup · Spread",
      },
      {
        ...media("mockup-edge", "VILA mockup Edge", "landscape", "spread"),
        src: vilaAsset("mockup-edge"),
        alt: "Brochure 01 VILA — hoja Certificación Edge sobre piedra.",
        caption: "Mockup · Edge",
      },
      {
        ...media("mockup-planos", "VILA mockup planos", "landscape", "spread"),
        src: vilaAsset("mockup-planos"),
        alt: "Brochure 01 VILA — planos abiertos sobre piedra.",
        caption: "Mockup · Planos",
      },
      {
        ...media("mockup-spread-02", "VILA mockup spread 02", "landscape", "spread"),
        src: vilaAsset("mockup-spread-02"),
        alt: "Brochure 01 VILA — doble página editorial sobre piedra.",
        caption: "Mockup · Spread 02",
      },
      {
        ...media("mockup-stack", "VILA mockup stack", "landscape"),
        src: vilaAsset("mockup-stack"),
        alt: "Brochure 01 VILA — brochure cerrado sobre vegetación.",
        caption: "Mockup · Stack",
      },
      {
        ...media("mockup-angle", "VILA mockup angle", "landscape", "spread"),
        src: vilaAsset("mockup-angle"),
        alt: "Brochure 01 VILA — hoja landscape sobre piedra, otro ángulo.",
        caption: "Mockup · Ángulo",
      },
      {
        ...media("page-03", "VILA page 03", "landscape", "spread"),
        src: vilaAsset("page-03"),
        alt: "Brochure 01 VILA — hoja interior 03.",
        caption: "Hoja 03",
      },
      {
        ...media("page-04", "VILA page 04", "landscape", "spread"),
        src: vilaAsset("page-04"),
        alt: "Brochure 01 VILA — hoja interior 04.",
        caption: "Hoja 04",
      },
      {
        ...media("page-05", "VILA page 05", "landscape", "spread"),
        src: vilaAsset("page-05"),
        alt: "Brochure 01 VILA — hoja interior 05.",
        caption: "Hoja 05",
      },
      {
        ...media("page-08", "VILA page 08", "landscape", "spread"),
        src: vilaAsset("page-08"),
        alt: "Brochure 01 VILA — hoja Certificación Edge.",
        caption: "Hoja 08",
      },
      {
        ...media("page-11", "VILA page 11", "landscape", "spread"),
        src: vilaAsset("page-11"),
        alt: "Brochure 01 VILA — hoja interior 11.",
        caption: "Hoja 11",
      },
      {
        ...media("page-21", "VILA page 21", "landscape", "spread"),
        src: vilaAsset("page-21"),
        alt: "Brochure 01 VILA — plano subsuelo.",
        caption: "Hoja 21",
      },
      {
        ...media("page-22", "VILA page 22", "landscape", "spread"),
        src: vilaAsset("page-22"),
        alt: "Brochure 01 VILA — hoja de planos.",
        caption: "Hoja 22",
      },
      {
        ...media("page-35", "VILA page 35", "landscape", "spread"),
        src: vilaAsset("page-35"),
        alt: "Brochure 01 VILA — hoja interior 35.",
        caption: "Hoja 35",
      },
      {
        ...media("page-76", "VILA page 76", "landscape", "spread"),
        src: vilaAsset("page-76"),
        alt: "Brochure 01 VILA — hoja interior 76.",
        caption: "Hoja 76",
      },
    ],
  },
  {
    slug: "editorial-03",
    index: "05",
    title: "EDITORIAL 03",
    lines: ["EDITORIAL 03"],
    category: "editorial",
    categoryLabel: "Lookbook · Art Direction",
    placeholder: true,
    disciplines: ["Editorial Design", "Art Direction", "Layout"],
    year: "Pending",
    role: "Pending",
    tone: "paper",
    banner: {
      bg: "#e1e6df",
      secondary: "#ced7cb",
      glow: "rgba(104, 148, 118, 0.28)",
      accent: "#537a5f",
      headerTheme: "paper",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "editorial", title: "Editorial System", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Editorial 03 cover", "portrait"),
      media("spread-01.webp", "Editorial 03 spread 01", "landscape", "spread"),
    ],
  },
  {
    slug: "editorial-04",
    index: "06",
    title: "EDITORIAL 04",
    lines: ["EDITORIAL 04"],
    category: "editorial",
    categoryLabel: "Book · Typography",
    placeholder: true,
    disciplines: ["Editorial Design", "Book Design", "Typography"],
    year: "Pending",
    role: "Pending",
    tone: "ink",
    banner: {
      bg: "#171410",
      secondary: "#2c2519",
      glow: "rgba(218, 176, 108, 0.28)",
      accent: "#dab06c",
      headerTheme: "ink",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "editorial", title: "Editorial System", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Editorial 04 cover", "landscape"),
      media("spread-01.webp", "Editorial 04 spread 01", "landscape", "spread"),
    ],
  },
  {
    slug: "web-03",
    index: "07",
    title: "WEB PROJECT 03",
    lines: ["WEB PROJECT 03"],
    category: "web",
    categoryLabel: "Web Design · UI",
    placeholder: true,
    disciplines: ["Web Design", "Interactive", "UI"],
    year: "Pending",
    role: "Pending",
    tone: "paper",
    banner: {
      bg: "#121422",
      secondary: "#212540",
      glow: "rgba(164, 142, 255, 0.32)",
      accent: "#a48eff",
      headerTheme: "ink",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "pages", title: "Website", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Web Project 03 cover", "landscape"),
      media("home.webp", "Web Project 03 homepage", "landscape", "browser"),
    ],
  },
  {
    slug: "branding-02",
    index: "08",
    title: "BRANDING 02",
    lines: ["BRANDING 02"],
    category: "branding",
    categoryLabel: "Visual Identity",
    placeholder: true,
    disciplines: ["Brand Identity", "Visual System", "Guidelines"],
    year: "Pending",
    role: "Pending",
    tone: "paper",
    banner: {
      bg: "#e6e2da",
      secondary: "#d7d1c5",
      glow: "rgba(104, 126, 238, 0.26)",
      accent: "#5e74e8",
      headerTheme: "paper",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "visual", title: "Visual System", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Branding 02 cover", "portrait"),
      media("brand-01.webp", "Branding 02 system", "landscape"),
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function projectBelongsTo(project: Project, category: ProjectCategory) {
  return project.category === category || Boolean(project.alsoIn?.includes(category));
}

export function projectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => projectBelongsTo(project, category));
}

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1 + projects.length) % projects.length];
}

export function mediaById(project: Project, id: string): MediaSlot {
  return project.media.find((slot) => slot.id === id) ?? project.media[0];
}

/** Prefer `cover-home` when present (home slider / listings); else first media. */
export function homeMedia(project: Project): MediaSlot {
  return project.media.find((slot) => slot.id === "cover-home") ?? project.media[0];
}

export function disciplineLine(project: Project) {
  return project.disciplines.join(" · ");
}
