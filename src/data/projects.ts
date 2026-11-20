import { PENDING_COPY } from "./site.ts";
import { tayAsset, tayCover } from "./tayAssets.ts";
import { TAY_COPY } from "./tayCopy.ts";
import { nudosAsset, nudosBrandCover, nudosCover } from "./nudosAssets.ts";
import { NUDOS_COPY } from "./nudosCopy.ts";
import { NUDOS_WEB_COPY } from "./nudosWebCopy.ts";
import { patagoniaAsset, patagoniaCover, patagoniaHomeCover } from "./patagoniaAssets.ts";
import { PATAGONIA_COPY } from "./patagoniaCopy.ts";
import { vilaAsset, vilaCover } from "./vilaAssets.ts";
import { VILA_COPY } from "./vilaCopy.ts";
import { catalog02Asset, catalog02Cover } from "./catalog02Assets.ts";
import { nexoAsset, nexoCover } from "./nexoAssets.ts";
import { NEXO_COPY } from "./nexoCopy.ts";
import { packagingAsset, packagingCover } from "./packagingAssets.ts";
import { PACKAGING_COPY } from "./packagingCopy.ts";
import { patagoniaWebAsset, patagoniaWebCover } from "./patagoniaWebAssets.ts";
import { planetaAceroAsset, planetaAceroCover } from "./planetaAceroAssets.ts";
import { PLANETA_ACERO_COPY } from "./planetaAceroCopy.ts";

const tayCovers = tayCover("es");
const tayEn = TAY_COPY.en;
const nudosCovers = nudosCover("es");
const nudosBrandCovers = nudosBrandCover("es");
const nudosEn = NUDOS_COPY.en;
const nudosWebEn = NUDOS_WEB_COPY.en;
const patagoniaCovers = patagoniaCover("es");
const patagoniaHomeCovers = patagoniaHomeCover("es");
const patagoniaEn = PATAGONIA_COPY.en;
const vilaCovers = vilaCover("es");
const vilaEn = VILA_COPY.en;
const catalog02Covers = catalog02Cover("es");
const nexoCovers = nexoCover("es");
const nexoEn = NEXO_COPY.en;
const packagingCovers = packagingCover("es");
const packagingEn = PACKAGING_COPY.en;
const patagoniaWebCovers = patagoniaWebCover("es");
const planetaAceroCovers = planetaAceroCover("es");
const planetaAceroEn = PLANETA_ACERO_COPY.en;

export type MediaFrame = "none" | "browser" | "phone" | "spread";

export type ProjectCategory = "editorial" | "web" | "branding" | "social";

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
  /** cover (default) crops to frame; contain shows the full image. */
  fit?: "cover" | "contain";
  /** Absolute CSS scale inside preview/hero masks. When set, overrides default zoom. */
  scale?: number;
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
    subtitle: "Brochures, catalogs, magazines and print art direction.",
  },
  web: {
    id: "web",
    label: "Web & App",
    shortLabel: "Web & App",
    subtitle: "Websites and mobile product experiences.",
  },
  branding: {
    id: "branding",
    label: "Brand Identity",
    shortLabel: "Branding",
    subtitle: "Brand guidelines, packaging and visual systems.",
  },
  social: {
    id: "social",
    label: "Redes Sociales",
    shortLabel: "Redes Sociales",
    subtitle: "Reels and posts for brand and B2B accounts.",
  },
};

export const projects: Project[] = [
  {
    slug: "tay",
    index: "01",
    title: "TAY",
    lines: ["TAY"],
    category: "web",
    categoryLabel: "App · Product",
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
    index: "05",
    title: "NUDOS BRAND",
    lines: ["NUDOS BRAND"],
    category: "branding",
    categoryLabel: "Brand Guidelines",
    featured: true,
    disciplines: ["Brand Identity", "Visual System", "Guidelines"],
    year: nudosEn.year,
    role: nudosEn.role,
    tone: "ink",
    banner: {
      bg: "#12161c",
      secondary: "#2a3440",
      glow: "rgba(180, 200, 220, 0.28)",
      accent: "#c8d4e0",
      headerTheme: "ink",
    },
    overview: nudosEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: nudosEn.overview ?? PENDING_COPY },
      { id: "concept", title: "Brand Mark", body: nudosEn.concept ?? PENDING_COPY },
      { id: "lockups", title: "Lockups", body: nudosEn.lockups ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: nudosEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "NUDOS brand cover", "landscape"),
        src: nudosBrandCovers.desktop,
        srcMobile: nudosBrandCovers.mobile,
        fit: "cover",
        objectPosition: "center center",
        alt: "NUDOS — portada del manual de marca, mockup del logo.",
        caption: "Portada",
      },
      {
        ...media("logo-mark", "NUDOS brand mark", "square"),
        src: nudosAsset("logo-mark"),
        alt: "NUDOS — isologo, versión positiva.",
        caption: "Isologo · positivo",
        fit: "cover",
      },
      {
        ...media("logo-mark-neg", "NUDOS brand mark negative", "square"),
        src: nudosAsset("logo-mark-neg"),
        alt: "NUDOS — isologo, versión negativa.",
        caption: "Isologo · negativo",
        fit: "cover",
      },
      {
        ...media("logo-horizontal", "NUDOS horizontal lockup", "landscape"),
        src: nudosAsset("logo-horizontal"),
        alt: "NUDOS — lockup horizontal positivo.",
        caption: "Lockup · horizontal",
        fit: "cover",
      },
      {
        ...media("logo-horizontal-neg", "NUDOS horizontal lockup negative", "landscape"),
        src: nudosAsset("logo-horizontal-neg"),
        alt: "NUDOS — lockup horizontal negativo.",
        caption: "Lockup · horizontal negativo",
        fit: "cover",
      },
      {
        ...media("logo-vertical", "NUDOS vertical lockup", "portrait"),
        src: nudosAsset("logo-vertical"),
        alt: "NUDOS — lockup vertical positivo.",
        caption: "Lockup · vertical",
        fit: "cover",
      },
      {
        ...media("logo-vertical-neg", "NUDOS vertical lockup negative", "portrait"),
        src: nudosAsset("logo-vertical-neg"),
        alt: "NUDOS — lockup vertical negativo.",
        caption: "Lockup · vertical negativo",
        fit: "cover",
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
        ...media("logo-board-icons", "NUDOS brand mark board", "landscape"),
        src: nudosAsset("logo-board-icons"),
        alt: "NUDOS — isologo positivo y negativo.",
        caption: "Isologo · board",
      },
    ],
  },
  {
    slug: "nudos-web",
    index: "09",
    title: "NUDOS WEB",
    lines: ["NUDOS WEB"],
    category: "web",
    categoryLabel: "Web Design",
    featured: true,
    disciplines: ["Web Design", "UI", "Digital"],
    year: nudosWebEn.year,
    role: nudosWebEn.role,
    tone: "ink",
    banner: {
      bg: "#0a0a0a",
      secondary: "#1a1a1a",
      glow: "rgba(255, 255, 255, 0.1)",
      accent: "#c8d4e0",
      headerTheme: "ink",
    },
    overview: nudosWebEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: nudosWebEn.overview ?? PENDING_COPY },
      { id: "home", title: "Homepage", body: nudosWebEn.home ?? PENDING_COPY },
      { id: "system", title: "Digital System", body: nudosWebEn.system ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: nudosWebEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "NUDOS web cover", "landscape"),
        src: nudosCovers.desktop,
        srcMobile: nudosCovers.mobile,
        fit: "cover",
        objectPosition: "center center",
        alt: "NUDOS — Design & Technology. Portada del estudio con sitio en laptop.",
        caption: "Portada",
      },
      {
        ...media("site-home", "NUDOS homepage", "landscape"),
        src: nudosAsset("site-home"),
        fit: "cover",
        alt: "NUDOS — homepage: Diseñamos. Desarrollamos. Conectamos.",
        caption: "Homepage · desktop",
      },
      {
        ...media("site-system", "NUDOS visual system", "landscape"),
        src: nudosAsset("site-system"),
        fit: "cover",
        alt: "NUDOS — Nosotros y sistema tipográfico/color en web.",
        caption: "Sistema digital",
      },
      {
        ...media("site-projects", "NUDOS projects", "landscape"),
        src: nudosAsset("site-projects"),
        fit: "cover",
        alt: "NUDOS — proyectos seleccionados en el sitio (caso TAY).",
        caption: "Proyectos",
      },
      {
        ...media("site-contact", "NUDOS contact", "landscape"),
        src: nudosAsset("site-contact"),
        fit: "cover",
        alt: "NUDOS — bloque de contacto en superficie oscura.",
        caption: "Contacto",
      },
      {
        ...media("site-mobile", "NUDOS mobile", "landscape"),
        src: nudosAsset("site-mobile"),
        fit: "cover",
        alt: "NUDOS — experiencia responsive mobile.",
        caption: "Mobile",
      },
    ],
  },
  {
    slug: "patagonia",
    index: "02",
    title: "PATAGONIA CNC",
    lines: ["PATAGONIA CNC"],
    category: "editorial",
    categoryLabel: "Catalog · Print",
    featured: true,
    disciplines: ["Editorial", "Catalog", "B2B"],
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
        fit: "cover",
        objectPosition: "center 42%",
        alt: "Patagonia CNC Machines — catálogo Welding Solutions sobre roca.",
        caption: "Portada",
      },
      {
        ...media("cover-home", "Patagonia CNC home cover", "landscape"),
        src: patagoniaHomeCovers.desktop,
        srcMobile: patagoniaHomeCovers.mobile,
        fit: "cover",
        objectPosition: "center 42%",
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
    slug: "patagonia-web",
    index: "10",
    title: "PATAGONIA WEB",
    lines: ["PATAGONIA WEB"],
    category: "web",
    categoryLabel: "Web Design · B2B",
    featured: true,
    disciplines: ["Web Design", "UI", "B2B"],
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
      { id: "website", title: "Website", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "Patagonia web cover", "landscape"),
        src: patagoniaWebCovers.desktop,
        srcMobile: patagoniaWebCovers.mobile,
        fit: "cover",
        objectPosition: "center 48%",
        // No extra mask zoom — full laptop + rock framing stays readable.
        scale: 1,
        alt: "Patagonia CNC — homepage en laptop sobre roca.",
        caption: "Portada",
      },
      {
        ...media("cover-home", "Patagonia web home cover", "landscape"),
        src: patagoniaWebCovers.desktop,
        srcMobile: patagoniaWebCovers.mobile,
        fit: "cover",
        objectPosition: "center 48%",
        scale: 1,
        alt: "Patagonia CNC — homepage en laptop sobre roca.",
        caption: "Home cover",
      },
      {
        ...media("mockup-devices", "Patagonia web devices", "landscape"),
        src: patagoniaWebAsset("mockup-devices"),
        alt: "Patagonia CNC — laptop y mobile sobre roca.",
        caption: "Mockup · Devices",
      },
      {
        ...media("mockup-02", "Patagonia web mockup 02", "landscape"),
        src: patagoniaWebAsset("mockup-02"),
        alt: "Patagonia CNC — página web en mockup sobre roca.",
        caption: "Mockup",
      },
      {
        ...media("mockup-contact", "Patagonia web contact mockup", "landscape"),
        src: patagoniaWebAsset("mockup-contact"),
        alt: "Patagonia CNC — contacto web en mockup.",
        caption: "Mockup · Contacto",
      },
      {
        ...media("screen-home", "Patagonia screen home", "landscape"),
        src: patagoniaWebAsset("screen-home"),
        fit: "cover",
        alt: "Patagonia CNC — homepage completa.",
        caption: "Home",
      },
      {
        ...media("screen-02", "Patagonia screen 02", "landscape"),
        src: patagoniaWebAsset("screen-02"),
        fit: "cover",
        alt: "Patagonia CNC — captura web.",
        caption: "Pantalla 02",
      },
      {
        ...media("screen-03", "Patagonia screen 03", "landscape"),
        src: patagoniaWebAsset("screen-03"),
        fit: "cover",
        alt: "Patagonia CNC — captura web.",
        caption: "Pantalla 03",
      },
      {
        ...media("screen-04", "Patagonia screen 04", "landscape"),
        src: patagoniaWebAsset("screen-04"),
        fit: "cover",
        alt: "Patagonia CNC — captura web.",
        caption: "Pantalla 04",
      },
      {
        ...media("screen-05", "Patagonia screen 05", "landscape"),
        src: patagoniaWebAsset("screen-05"),
        fit: "cover",
        alt: "Patagonia CNC — captura web.",
        caption: "Pantalla 05",
      },
      {
        ...media("screen-06", "Patagonia screen 06", "landscape"),
        src: patagoniaWebAsset("screen-06"),
        fit: "cover",
        alt: "Patagonia CNC — captura web.",
        caption: "Pantalla 06",
      },
      {
        ...media("screen-07", "Patagonia screen 07", "landscape"),
        src: patagoniaWebAsset("screen-07"),
        fit: "cover",
        alt: "Patagonia CNC — captura web.",
        caption: "Pantalla 07",
      },
      {
        ...media("screen-contact", "Patagonia screen contact", "landscape"),
        src: patagoniaWebAsset("screen-contact"),
        fit: "cover",
        alt: "Patagonia CNC — contacto.",
        caption: "Contacto",
      },
    ],
  },
  {
    slug: "editorial-02",
    index: "03",
    title: "01 VILA",
    lines: ["01 VILA"],
    category: "editorial",
    categoryLabel: "Brochure · Print",
    featured: true,
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
    slug: "catalog-02",
    index: "04",
    title: "MILLBRIDGE",
    lines: ["MILLBRIDGE"],
    category: "editorial",
    categoryLabel: "Protocol · Editorial",
    placeholder: false,
    disciplines: ["Editorial Design", "Information Design", "Print"],
    year: "Pending",
    role: "Full Design",
    tone: "paper",
    banner: {
      bg: "#dce6f5",
      secondary: "#c5d4ee",
      glow: "rgba(59, 113, 219, 0.28)",
      accent: "#3b71db",
      headerTheme: "paper",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "editorial", title: "Editorial System", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "Millbridge cover", "landscape"),
        src: catalog02Covers.desktop,
        srcMobile: catalog02Covers.mobile,
        fit: "cover",
        objectPosition: "center center",
        alt: "Millbridge — Board Communication Protocol, mockup de portada.",
        caption: "Portada",
      },
      {
        ...media("mockup-01", "Millbridge mockup 01", "landscape"),
        src: catalog02Asset("mockup-01"),
        alt: "Millbridge — hoja Purpose and Scope en mockup.",
        caption: "Mockup 01",
      },
      {
        ...media("mockup-02", "Millbridge mockup 02", "landscape"),
        src: catalog02Asset("mockup-02"),
        alt: "Millbridge — ritmo trimestral en mockup.",
        caption: "Mockup 02",
      },
      {
        ...media("mockup-03", "Millbridge mockup 03", "landscape"),
        src: catalog02Asset("mockup-03"),
        alt: "Millbridge — hojas interiores en mockup.",
        caption: "Mockup 03",
      },
      {
        ...media("mockup-stack", "Millbridge mockup stack", "portrait"),
        src: catalog02Asset("mockup-stack"),
        alt: "Millbridge — protocolo cerrado en mockup.",
        caption: "Mockup · Stack",
      },
      {
        ...media("page-01", "Millbridge page 01", "portrait", "spread"),
        src: catalog02Asset("page-01"),
        alt: "Millbridge — Purpose and Scope.",
        caption: "Hoja 01",
      },
      {
        ...media("page-02", "Millbridge page 02", "portrait", "spread"),
        src: catalog02Asset("page-02"),
        alt: "Millbridge — hoja interior 02.",
        caption: "Hoja 02",
      },
      {
        ...media("page-03", "Millbridge page 03", "portrait", "spread"),
        src: catalog02Asset("page-03"),
        alt: "Millbridge — ritmo trimestral.",
        caption: "Hoja 03",
      },
      {
        ...media("page-04", "Millbridge page 04", "portrait", "spread"),
        src: catalog02Asset("page-04"),
        alt: "Millbridge — hoja interior 04.",
        caption: "Hoja 04",
      },
      {
        ...media("page-05", "Millbridge page 05", "portrait", "spread"),
        src: catalog02Asset("page-05"),
        alt: "Millbridge — hoja interior 05.",
        caption: "Hoja 05",
      },
      {
        ...media("page-06", "Millbridge page 06", "portrait", "spread"),
        src: catalog02Asset("page-06"),
        alt: "Millbridge — hoja interior 06.",
        caption: "Hoja 06",
      },
      {
        ...media("page-07", "Millbridge page 07", "portrait", "spread"),
        src: catalog02Asset("page-07"),
        alt: "Millbridge — hoja interior 07.",
        caption: "Hoja 07",
      },
      {
        ...media("page-08", "Millbridge page 08", "portrait", "spread"),
        src: catalog02Asset("page-08"),
        alt: "Millbridge — hoja interior 08.",
        caption: "Hoja 08",
      },
    ],
  },
  {
    slug: "queer",
    index: "05",
    title: "NEXO",
    lines: ["NEXO"],
    category: "editorial",
    categoryLabel: "Magazine · Editorial",
    placeholder: false,
    disciplines: ["Editorial Design", "Magazine", "Art Direction"],
    year: nexoEn.year,
    role: nexoEn.role,
    tone: "ink",
    banner: {
      bg: "#0d0d0d",
      secondary: "#1a1a1a",
      glow: "rgba(255, 242, 0, 0.28)",
      accent: "#fff200",
      headerTheme: "ink",
    },
    overview: nexoEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: nexoEn.overview ?? PENDING_COPY },
      { id: "challenge", title: "Challenge", body: nexoEn.challenge ?? PENDING_COPY },
      { id: "approach", title: "Approach", body: nexoEn.approach ?? PENDING_COPY },
      { id: "editorial", title: "Editorial", body: nexoEn.editorial ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: nexoEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "NEXO cover", "portrait"),
        src: nexoCovers.desktop,
        srcMobile: nexoCovers.mobile,
        fit: "cover",
        objectPosition: "center center",
        alt: "NEXO — tapa de revista, edición 145.",
        caption: "Portada",
      },
      {
        ...media("mockup-sumario", "NEXO mockup sumario", "landscape"),
        src: nexoAsset("mockup-sumario"),
        alt: "NEXO — sumario en mockup.",
        caption: "Mockup · Sumario",
      },
      {
        ...media("mockup-stack", "NEXO mockup stack", "portrait"),
        src: nexoAsset("mockup-stack"),
        alt: "NEXO — revista cerrada en mockup.",
        caption: "Mockup · Stack",
      },
      {
        ...media("mockup-resistencia", "NEXO mockup spread 112-113", "landscape"),
        src: nexoAsset("mockup-resistencia"),
        alt: "NEXO — doble página Revista 112 y 113.",
        caption: "Mockup · Spread",
      },
      {
        ...media("mockup-interior", "NEXO mockup spread 116-117", "landscape"),
        src: nexoAsset("mockup-interior"),
        alt: "NEXO — doble página Revista 116 y 117.",
        caption: "Mockup · Spread",
      },
      {
        ...media("indice-02", "NEXO staff intro", "portrait", "spread"),
        src: nexoAsset("indice-02"),
        alt: "NEXO — página de staff / intro.",
        caption: "Staff",
      },
      {
        ...media("indice-01", "NEXO sumario", "portrait", "spread"),
        src: nexoAsset("indice-01"),
        alt: "NEXO — sumario.",
        caption: "Sumario",
      },
      {
        ...media("back", "NEXO contratapa", "portrait", "spread"),
        src: nexoAsset("back"),
        alt: "NEXO — contratapa.",
        caption: "Contratapa",
      },
      ...Array.from({ length: 24 }, (_, i) => {
        const n = String(i + 1).padStart(2, "0");
        return {
          ...media(`page-${n}`, `NEXO page ${n}`, "portrait" as const, "spread" as const),
          src: nexoAsset(`page-${n}`),
          alt: `NEXO — hoja ${n}.`,
          caption: `Hoja ${n}`,
        };
      }),
    ],
  },
  {
    slug: "patagonia-packaging",
    index: "06",
    title: "PATAGONIA PACKAGING",
    lines: ["PATAGONIA", "PACKAGING"],
    category: "branding",
    categoryLabel: "Packaging · Industrial",
    placeholder: false,
    disciplines: ["Packaging", "Brand Identity", "Industrial"],
    year: packagingEn.year,
    role: packagingEn.role,
    tone: "ink",
    banner: {
      bg: "#0b151a",
      secondary: "#152b36",
      glow: "rgba(94, 204, 232, 0.28)",
      accent: "#66d2ee",
      headerTheme: "ink",
    },
    overview: packagingEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: packagingEn.overview ?? PENDING_COPY },
      { id: "challenge", title: "Challenge", body: packagingEn.challenge ?? PENDING_COPY },
      { id: "approach", title: "Approach", body: packagingEn.approach ?? PENDING_COPY },
      { id: "product", title: "Product", body: packagingEn.product ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: packagingEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "Patagonia packaging cover", "landscape"),
        src: packagingCovers.desktop,
        srcMobile: packagingCovers.mobile,
        fit: "cover",
        objectPosition: "center center",
        alt: "Patagonia CNC — caja de alambre de soldadura, mockup en fila.",
        caption: "Portada",
      },
      {
        ...media("mockup-01", "Packaging mockup 01", "landscape"),
        src: packagingAsset("mockup-01"),
        fit: "cover",
        alt: "Patagonia CNC — cajas de alambre en perspectiva.",
        caption: "Mockup 01",
      },
      {
        ...media("mockup-02", "Packaging mockup 02", "landscape"),
        src: packagingAsset("mockup-02"),
        fit: "cover",
        alt: "Patagonia CNC — cajas de alambre, vista tres cuartos.",
        caption: "Mockup 02",
      },
      {
        ...media("mockup-03", "Packaging mockup 03", "landscape"),
        src: packagingAsset("mockup-03"),
        fit: "cover",
        alt: "Patagonia CNC — familia de vistas del packaging.",
        caption: "Mockup 03",
      },
    ],
  },
  {
    slug: "planeta-acero",
    index: "07",
    title: "PLANETA ACERO",
    lines: ["PLANETA ACERO"],
    category: "branding",
    categoryLabel: "Brand Identity",
    featured: true,
    disciplines: ["Brand Identity", "Visual System", "Stationery"],
    year: planetaAceroEn.year,
    role: planetaAceroEn.role,
    tone: "ink",
    banner: {
      bg: "#05223A",
      secondary: "#0a3558",
      glow: "rgba(26, 143, 188, 0.32)",
      accent: "#FF7F00",
      headerTheme: "ink",
    },
    overview: planetaAceroEn.overview ?? PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: planetaAceroEn.overview ?? PENDING_COPY },
      { id: "concept", title: "Brand Mark", body: planetaAceroEn.concept ?? PENDING_COPY },
      { id: "lockups", title: "Lockups", body: planetaAceroEn.lockups ?? PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: planetaAceroEn.outcome ?? PENDING_COPY },
    ],
    media: [
      {
        ...media("cover", "Planeta Acero cover", "landscape"),
        src: planetaAceroCovers.desktop,
        srcMobile: planetaAceroCovers.mobile,
        fit: "cover",
        objectPosition: "center center",
        alt: "Planeta Acero — logo completo horizontal con fondo.",
        caption: "Portada",
      },
      // Home hero only — dedicated asset (not the case-study banner).
      {
        ...media("cover-home", "Planeta Acero home hero", "landscape"),
        src: planetaAceroAsset("hero"),
        srcMobile: planetaAceroAsset("hero"),
        fit: "cover",
        objectPosition: "center center",
        alt: "Planeta Acero — imagen de hero.",
        caption: "Hero",
      },
      {
        ...media("iso-pos", "Isotype positive", "square"),
        src: planetaAceroAsset("iso-pos"),
        fit: "contain",
        alt: "Planeta Acero — isologo positivo.",
        caption: "Isologo · positivo",
      },
      {
        ...media("iso-mono", "Isotype negative", "square"),
        src: planetaAceroAsset("iso-mono"),
        fit: "contain",
        alt: "Planeta Acero — isologo negativo.",
        caption: "Isologo · negativo",
      },
      {
        ...media("iso-full", "Isotype full color", "square"),
        src: planetaAceroAsset("iso-full"),
        fit: "contain",
        alt: "Planeta Acero — isologo a color.",
        caption: "Isologo · color",
      },
      {
        ...media("logo-h-pos", "Horizontal positive", "landscape"),
        src: planetaAceroAsset("logo-h-pos"),
        fit: "contain",
        alt: "Planeta Acero — lockup horizontal positivo.",
        caption: "Horizontal · positivo",
      },
      {
        ...media("logo-h-neg", "Horizontal negative", "landscape"),
        src: planetaAceroAsset("logo-h-neg"),
        fit: "contain",
        alt: "Planeta Acero — lockup horizontal negativo.",
        caption: "Horizontal · negativo",
      },
      {
        ...media("logo-h-full", "Horizontal full", "landscape"),
        src: planetaAceroAsset("logo-h-full"),
        fit: "contain",
        alt: "Planeta Acero — lockup horizontal completo.",
        caption: "Horizontal · completo",
      },
      {
        ...media("logo-h-complete", "Horizontal complete", "landscape"),
        src: planetaAceroAsset("logo-h-complete"),
        fit: "contain",
        alt: "Planeta Acero — lockup horizontal completo alternativo.",
        caption: "Horizontal · variantes",
      },
      {
        ...media("logo-h-alt", "Horizontal alt", "landscape"),
        src: planetaAceroAsset("logo-h-alt"),
        fit: "contain",
        alt: "Planeta Acero — lockup horizontal variante.",
        caption: "Horizontal · alt",
      },
      {
        ...media("logo-v", "Vertical lockup", "portrait"),
        src: planetaAceroAsset("logo-v"),
        fit: "contain",
        alt: "Planeta Acero — lockup vertical.",
        caption: "Vertical",
      },
      {
        ...media("logo-v-bg", "Vertical with background", "portrait"),
        src: planetaAceroAsset("logo-v-bg"),
        fit: "contain",
        alt: "Planeta Acero — lockup vertical con fondo.",
        caption: "Vertical · fondo",
      },
      {
        ...media("pattern", "Brand pattern", "landscape"),
        src: planetaAceroAsset("pattern"),
        fit: "cover",
        alt: "Planeta Acero — trama general de marca.",
        caption: "Trama",
      },
      {
        ...media("palette", "Color palette", "landscape"),
        src: planetaAceroAsset("palette"),
        fit: "contain",
        alt: "Planeta Acero — paleta de colores.",
        caption: "Paleta",
      },
      {
        ...media("card-front", "Business card front", "landscape"),
        src: planetaAceroAsset("card-front"),
        fit: "contain",
        alt: "Planeta Acero — tarjeta personal, frente.",
        caption: "Tarjeta · frente",
      },
      {
        ...media("card-back", "Business card back", "landscape"),
        src: planetaAceroAsset("card-back"),
        fit: "contain",
        alt: "Planeta Acero — tarjeta personal, dorso.",
        caption: "Tarjeta · dorso",
      },
      {
        ...media("email-signature", "Email signature", "landscape"),
        src: planetaAceroAsset("email-signature"),
        fit: "contain",
        alt: "Planeta Acero — firma de correo.",
        caption: "Firma de mail",
      },
      {
        ...media("banner-01", "Banner example", "landscape"),
        src: planetaAceroAsset("banner-01"),
        fit: "cover",
        alt: "Planeta Acero — ejemplo de banner.",
        caption: "Banner",
      },
      {
        ...media("social-02", "Social post 02", "square"),
        src: planetaAceroAsset("social-02"),
        fit: "cover",
        alt: "Planeta Acero — post de redes 02.",
        caption: "Post · 02",
      },
      {
        ...media("social-03", "Social post 03", "square"),
        src: planetaAceroAsset("social-03"),
        fit: "cover",
        alt: "Planeta Acero — post de redes 03.",
        caption: "Post · 03",
      },
    ],
  },
  {
    slug: "social",
    index: "12",
    title: "Redes Sociales",
    lines: ["Redes Sociales"],
    category: "social",
    categoryLabel: "Redes Sociales",
    featured: false,
    disciplines: ["Social Media", "Motion", "Content"],
    year: "2023 — 2026",
    role: "Social Content",
    tone: "ink",
    banner: {
      bg: "#121212",
      secondary: "#1c1c1c",
      glow: "rgba(180, 180, 180, 0.18)",
      accent: "#c4f000",
      headerTheme: "ink",
    },
    overview:
      "Reels and posts for Vitrium Capital, Patagonia CNC, BTEC and Perfect Welding.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: "Reels and posts for Vitrium Capital, Patagonia CNC, BTEC and Perfect Welding.",
      },
    ],
    /** Cover is rendered by SocialCoverVisual — no bitmap asset. */
    media: [media("cover", "Social media cover", "landscape")],
  },
];

/** Display order inside each home / work category section. */
const CATEGORY_ORDER: Record<ProjectCategory, string[]> = {
  editorial: ["editorial-02", "patagonia", "catalog-02", "queer"],
  branding: ["planeta-acero", "nudos", "patagonia-packaging"],
  web: ["nudos-web", "tay", "patagonia-web"],
  social: ["social"],
};

const FEATURED_ORDER = ["tay", "patagonia", "editorial-02", "planeta-acero"];

export const featuredProjects = FEATURED_ORDER.map((slug) =>
  projects.find((project) => project.slug === slug),
).filter((project): project is Project => Boolean(project));

export function projectBelongsTo(project: Project, category: ProjectCategory) {
  return project.category === category || Boolean(project.alsoIn?.includes(category));
}

export function projectsByCategory(category: ProjectCategory) {
  const order = CATEGORY_ORDER[category];
  return projects
    .filter((project) => projectBelongsTo(project, category))
    .sort((a, b) => {
      const ai = order.indexOf(a.slug);
      const bi = order.indexOf(b.slug);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
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

/** Prefer `cover-home` when present (home slider / listings); else first media.
 *  Listings always fill the frame — never letterbox with black bars. */
export function homeMedia(project: Project): MediaSlot {
  const slot = project.media.find((s) => s.id === "cover-home") ?? project.media[0];
  return { ...slot, fit: "cover" };
}

/** True when a slot should show the full product without cropping. */
export function mediaShowsFullProduct(slot: MediaSlot | undefined): boolean {
  return slot?.fit === "contain";
}

export function disciplineLine(project: Project) {
  return project.disciplines.join(" · ");
}
