import { PENDING_COPY } from "./site.ts";

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
    year: "Pending",
    role: "Pending",
    tone: "paper",
    banner: {
      bg: "#0d1220",
      secondary: "#192440",
      glow: "rgba(130, 140, 255, 0.34)",
      accent: "#9aa2ff",
      headerTheme: "ink",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "challenge", title: "Challenge", body: PENDING_COPY },
      { id: "role", title: "My Role", body: PENDING_COPY },
      { id: "thinking", title: "Product Thinking", body: PENDING_COPY },
      { id: "ia", title: "Information Architecture", body: PENDING_COPY },
      { id: "ux", title: "User Experience", body: PENDING_COPY },
      { id: "flows", title: "Key User Flows", body: PENDING_COPY },
      { id: "ui", title: "UI System", body: PENDING_COPY },
      { id: "mobile", title: "Mobile Experience", body: PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: PENDING_COPY },
      { id: "final", title: "Final Product", body: PENDING_COPY },
      { id: "learnings", title: "Learnings", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "TAY cover", "portrait"),
      media("flow.webp", "TAY user flow", "landscape"),
      media("system.webp", "TAY interface system", "landscape"),
      media("mobile-01.webp", "TAY phone screen 01", "phone", "phone"),
      media("mobile-02.webp", "TAY phone screen 02", "phone", "phone"),
      media("mobile-03.webp", "TAY phone screen 03", "phone", "phone"),
      media("walkthrough.mp4", "TAY product film", "landscape", "none", "video"),
    ],
  },
  {
    slug: "nudos",
    index: "02",
    title: "NUDOS",
    lines: ["NUDOS"],
    category: "branding",
    categoryLabel: "Brand Identity",
    featured: true,
    disciplines: ["Brand Identity", "Web Design", "Digital"],
    year: "Pending",
    role: "Pending",
    tone: "ink",
    banner: {
      bg: "#120d1c",
      secondary: "#26193d",
      glow: "rgba(184, 128, 255, 0.38)",
      accent: "#b880ff",
      headerTheme: "ink",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "challenge", title: "Challenge", body: PENDING_COPY },
      { id: "approach", title: "Approach", body: PENDING_COPY },
      { id: "visual", title: "Visual System", body: PENDING_COPY },
      { id: "website", title: "Website", body: PENDING_COPY },
      { id: "process", title: "Process", body: PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Nudos cover", "portrait"),
      media("site-01.webp", "Nudos website frame 01", "landscape", "browser"),
      media("site-02.webp", "Nudos website frame 02", "landscape", "browser"),
      media("brand-01.webp", "Nudos brand element", "square"),
    ],
  },
  {
    slug: "brandingco",
    index: "03",
    title: "BRANDINGCO",
    lines: ["BRANDINGCO"],
    category: "web",
    categoryLabel: "Web Design",
    featured: true,
    disciplines: ["Web Design", "Visual Design"],
    year: "Pending",
    role: "Pending",
    tone: "paper",
    banner: {
      bg: "#e7e3f1",
      secondary: "#d6cee8",
      glow: "rgba(184, 128, 255, 0.32)",
      accent: "#9b5cff",
      headerTheme: "paper",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "challenge", title: "Challenge", body: PENDING_COPY },
      { id: "approach", title: "Approach", body: PENDING_COPY },
      { id: "pages", title: "Website", body: PENDING_COPY },
      { id: "visual", title: "Visual System", body: PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "BrandingCo cover", "landscape"),
      media("home.webp", "BrandingCo homepage", "landscape", "browser"),
      media("page-02.webp", "BrandingCo inner page", "landscape", "browser"),
      media("page-03.webp", "BrandingCo page detail", "portrait", "browser"),
    ],
  },
  {
    slug: "patagonia",
    index: "04",
    title: "PATAGONIA CNC MACHINES",
    lines: ["PATAGONIA", "CNC MACHINES"],
    category: "editorial",
    categoryLabel: "Editorial · B2B",
    featured: true,
    disciplines: ["Editorial", "B2B", "Technical Communication"],
    year: "Pending",
    role: "Pending",
    tone: "ink",
    banner: {
      bg: "#0b151a",
      secondary: "#152b36",
      glow: "rgba(94, 204, 232, 0.30)",
      accent: "#66d2ee",
      headerTheme: "ink",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "challenge", title: "Challenge", body: PENDING_COPY },
      { id: "approach", title: "Approach", body: PENDING_COPY },
      { id: "catalog", title: "Catalog", body: PENDING_COPY },
      { id: "editorial", title: "Editorial", body: PENDING_COPY },
      { id: "product", title: "Product Communication", body: PENDING_COPY },
      { id: "decisions", title: "Key Decisions", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Patagonia CNC cover", "landscape"),
      media("spread-01.webp", "Catalog spread 01", "landscape", "spread"),
      media("spread-02.webp", "Catalog spread 02", "landscape", "spread"),
      media("spread-03.webp", "Catalog spread 03", "landscape", "spread"),
      media("catalog.webp", "Technical catalog", "portrait"),
      media("collateral.webp", "Marketing collateral", "landscape"),
    ],
  },
  {
    slug: "editorial-02",
    index: "05",
    title: "EDITORIAL 02",
    lines: ["EDITORIAL 02"],
    category: "editorial",
    categoryLabel: "Publication · Print",
    placeholder: true,
    disciplines: ["Editorial Design", "Publication", "Print"],
    year: "Pending",
    role: "Pending",
    tone: "paper",
    banner: {
      bg: "#1b1311",
      secondary: "#33201b",
      glow: "rgba(229, 134, 104, 0.30)",
      accent: "#e58668",
      headerTheme: "ink",
    },
    overview: PENDING_COPY,
    sections: [
      { id: "overview", title: "Overview", body: PENDING_COPY },
      { id: "editorial", title: "Editorial System", body: PENDING_COPY },
      { id: "outcome", title: "Final Outcome", body: PENDING_COPY },
    ],
    media: [
      media("cover.webp", "Editorial 02 cover", "portrait"),
      media("spread-01.webp", "Editorial 02 spread 01", "landscape", "spread"),
      media("spread-02.webp", "Editorial 02 spread 02", "landscape", "spread"),
    ],
  },
  {
    slug: "editorial-03",
    index: "06",
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
    index: "07",
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
    index: "08",
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
    index: "09",
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

export function projectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
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

export function disciplineLine(project: Project) {
  return project.disciplines.join(" · ");
}
