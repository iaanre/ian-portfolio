import type { Locale } from "../context/LanguageContext.tsx";
import type { Project, ProjectCategory } from "./projects.ts";

export const UI_COPY = {
  en: {
    skipToContent: "Skip to content",
    loadingPage: "Page is Loading...",
    docTitleHome: "Ian Rebuffo — Visual & Digital Designer",
    docTitleWorks: "Works — Ian Rebuffo",
    docTitleAbout: "Studio — Ian Rebuffo",
    docTitleNotFound: "Not found — Ian Rebuffo",
    nav: {
      index: "Index",
      works: "Works",
      editorial: "Editorial",
      studio: "Studio",
      contact: "Contact",
      letsTalk: "Let’s Talk",
      switchLangAria: "Switch website language",
    },
    cursor: {
      view: "View",
      drag: "← Drag →",
      next: "Next →",
    },
    hero: {
      selectedShowcase: "Selected Showcase",
      projectPrefix: "Project",
      dragToExplore: "Drag to Explore",
      navigate: "Navigate",
      featuredProject: "Featured Project",
      openMobile: "Open",
      prevProjectAria: "Previous project",
      nextProjectAria: "Next project",
      chooseProjectAria: "Choose featured project",
      carouselAria: "Featured works showcase",
    },
    home: {
      statementHeading: "Design that goes beyond surface and format.",
      role: "Senior Visual & Digital Designer",
      intro:
        "Ian Rebuffo is a Senior Visual & Digital Designer crafting editorial systems, digital products, websites and brand identities with strong visual direction.",
      readMore: "Read More",
      kineticLabel: "Disciplines",
      kineticPrimary: "EDITORIAL  ·  WEB DESIGN  ·  BRANDING  ·  UX/UI  ·  ",
      kineticSecondary: "PUBLICATIONS  ·  DIGITAL PRODUCTS  ·  VISUAL SYSTEMS  ·  ",
      sectionWord: "Section",
      gallery: "Gallery",
      index: "Index",
      seeAllProjects: "See all Projects",
      seeAllDesc:
        "Filter the full archive across Editorial Design, Web & Digital Product, and Brand Identity.",
      capabilitiesEyebrow: "Capabilities & Craft",
      capabilitiesHeading: "Services, skills and expertise",
      capabilities: [
        "Editorial Design",
        "Web Design",
        "Brand Identity",
        "Product Design",
        "UX/UI",
        "Visual Design",
        "Digital Campaigns",
        "Marketing Design",
      ],
    },
    categories: {
      editorial: {
        label: "Editorial Design",
        shortLabel: "Editorial",
        subtitle: "Catalogs, publications, books, technical literature and print art direction.",
      },
      web: {
        label: "Web & Digital Product",
        shortLabel: "Web & Product",
        subtitle: "Interactive websites, mobile applications, UX/UI systems and digital experiences.",
      },
      branding: {
        label: "Brand Identity",
        shortLabel: "Branding",
        subtitle: "Visual identities, brand worlds, typography systems and guidelines.",
      },
    } satisfies Record<ProjectCategory, { label: string; shortLabel: string; subtitle: string }>,
    works: {
      heading: "Selected Works",
      subline: "Editorial · Web & Product · Brand Identity",
      description:
        "Curated works spanning printed publications, interactive websites, mobile products and brand systems.",
      scrollToExplore: "Scroll to Explore",
      filterAll: "All",
      filterAria: "Filter works by discipline",
      list: "List",
      grid: "Grid",
    },
    about: {
      eyebrow: "Studio · About",
      introTitle: "Introduction",
      introPlaceholder:
        "A longer introduction will be added here. No biography has been invented for this placeholder.",
      experienceTitle: "Experience",
      experiencePlaceholder: "Experience entries will be listed here once they are provided.",
      capabilitiesTitle: "Capabilities",
      toolsTitle: "Tools",
      languagesTitle: "Languages",
      languagesPlaceholder: "Spanish · English",
      contactTitle: "Contact",
      emailPending: "Email pending",
      locationPending: "Location pending",
      openingLink: "Get in touch",
    },
    caseStudy: {
      projectPrefix: "Project",
      discipline: "Discipline",
      year: "Year",
      role: "Role",
      pending: "Pending",
      nextProject: "Next project",
      assetPending: "Asset pending",
      captionPending: "Caption pending.",
      screenPending: "Screen pending",
      screensPending: "Screens pending",
      screenPrefix: "Screen",
      mobileSequence: "Mobile sequence",
      mobileReplaceNote: "Interface files will replace these devices.",
      spreadPrefix: "Spread",
      editorialSpreadsAria: "Editorial spreads",
      identityEyebrow: "Identity",
      nudosKineticLabel: "Brand · Web · Digital",
      nudosKineticPrimary: "BRAND IDENTITY  ·  WEB DESIGN  ·  DIGITAL  ·  ",
      pendingBody:
        "Placeholder. Replace this with the real text. No research, metrics, clients, responsibilities, or outcomes have been written here.",
    },
    footer: {
      eyebrow: "Work with me",
      headlineLines: ["Let’s create", "something", "together."],
      directContact: "Direct Contact",
      emailPending: "Email pending",
      locationPending: "Location pending",
      disciplines: "Disciplines",
      disciplinesList: ["Editorial Design", "Web & Digital Product", "Brand Identity"],
      sitemap: "Sitemap",
      roleFooter: "Visual & Digital Designer",
    },
    notFound: {
      heading: "This page is not in the index.",
      backHome: "Back home",
    },
  },
  es: {
    skipToContent: "Saltar al contenido",
    loadingPage: "Cargando página...",
    docTitleHome: "Ian Rebuffo — Diseñador Visual y Digital",
    docTitleWorks: "Trabajos — Ian Rebuffo",
    docTitleAbout: "Estudio — Ian Rebuffo",
    docTitleNotFound: "No encontrado — Ian Rebuffo",
    nav: {
      index: "Inicio",
      works: "Trabajos",
      editorial: "Editorial",
      studio: "Estudio",
      contact: "Contacto",
      letsTalk: "Hablemos",
      switchLangAria: "Cambiar idioma del sitio",
    },
    cursor: {
      view: "Ver",
      drag: "← Arrastrar →",
      next: "Sig. →",
    },
    hero: {
      selectedShowcase: "Proyectos Destacados",
      projectPrefix: "Proyecto",
      dragToExplore: "Arrastrá para explorar",
      navigate: "Navegar",
      featuredProject: "Ver Proyecto",
      openMobile: "Abrir",
      prevProjectAria: "Proyecto anterior",
      nextProjectAria: "Siguiente proyecto",
      chooseProjectAria: "Elegir proyecto destacado",
      carouselAria: "Carrusel de proyectos destacados",
    },
    home: {
      statementHeading: "Diseño que trasciende la superficie y el formato.",
      role: "Diseñador Senior Visual y Digital",
      intro:
        "Ian Rebuffo es Diseñador Senior Visual y Digital especializado en sistemas editoriales, productos digitales, sitios web e identidades de marca con fuerte dirección visual.",
      readMore: "Conocer más",
      kineticLabel: "Disciplinas",
      kineticPrimary: "EDITORIAL  ·  DISEÑO WEB  ·  BRANDING  ·  UX/UI  ·  ",
      kineticSecondary: "PUBLICACIONES  ·  PRODUCTOS DIGITALES  ·  SISTEMAS VISUALES  ·  ",
      sectionWord: "Sección",
      gallery: "Galería",
      index: "Índice",
      seeAllProjects: "Ver todos los proyectos",
      seeAllDesc:
        "Filtrá el archivo completo entre Diseño Editorial, Web y Producto Digital, e Identidad de Marca.",
      capabilitiesEyebrow: "Capacidades y Oficio",
      capabilitiesHeading: "Servicios, habilidades y especialidad",
      capabilities: [
        "Diseño Editorial",
        "Diseño Web",
        "Identidad de Marca",
        "Diseño de Producto",
        "UX/UI",
        "Diseño Visual",
        "Campañas Digitales",
        "Diseño de Marketing",
      ],
    },
    categories: {
      editorial: {
        label: "Diseño Editorial",
        shortLabel: "Editorial",
        subtitle: "Catálogos, publicaciones, libros, literatura técnica y dirección de arte impresa.",
      },
      web: {
        label: "Web y Producto Digital",
        shortLabel: "Web y Producto",
        subtitle: "Sitios web interactivos, aplicaciones mobile, sistemas UX/UI y experiencias digitales.",
      },
      branding: {
        label: "Identidad de Marca",
        shortLabel: "Branding",
        subtitle: "Identidades visuales, universos de marca, sistemas tipográficos y manuales.",
      },
    } satisfies Record<ProjectCategory, { label: string; shortLabel: string; subtitle: string }>,
    works: {
      heading: "Trabajos Seleccionados",
      subline: "Editorial · Web y Producto · Identidad de Marca",
      description:
        "Selección curada de publicaciones impresas, sitios web interactivos, productos mobile y sistemas de marca.",
      scrollToExplore: "Scrolleá para explorar",
      filterAll: "Todos",
      filterAria: "Filtrar trabajos por disciplina",
      list: "Lista",
      grid: "Grilla",
    },
    about: {
      eyebrow: "Estudio · Sobre mí",
      introTitle: "Introducción",
      introPlaceholder:
        "Aquí se sumará una presentación extendida. No se inventó ninguna biografía en este espacio.",
      experienceTitle: "Experiencia",
      experiencePlaceholder: "La trayectoria profesional se listará aquí cuando se cargue el contenido.",
      capabilitiesTitle: "Capacidades",
      toolsTitle: "Herramientas",
      languagesTitle: "Idiomas",
      languagesPlaceholder: "Español · Inglés",
      contactTitle: "Contacto",
      emailPending: "Email pendiente",
      locationPending: "Ubicación pendiente",
      openingLink: "Contactar",
    },
    caseStudy: {
      projectPrefix: "Proyecto",
      discipline: "Disciplina",
      year: "Año",
      role: "Rol",
      pending: "Pendiente",
      nextProject: "Siguiente proyecto",
      assetPending: "Recurso pendiente",
      captionPending: "Epígrafe pendiente.",
      screenPending: "Pantalla pendiente",
      screensPending: "Pantallas pendientes",
      screenPrefix: "Pantalla",
      mobileSequence: "Secuencia mobile",
      mobileReplaceNote: "Las pantallas reales reemplazarán estos dispositivos.",
      spreadPrefix: "Doble página",
      editorialSpreadsAria: "Dobles páginas editoriales",
      identityEyebrow: "Identidad",
      nudosKineticLabel: "Marca · Web · Digital",
      nudosKineticPrimary: "IDENTIDAD DE MARCA  ·  DISEÑO WEB  ·  DIGITAL  ·  ",
      pendingBody:
        "Espacio reservado. Reemplazar con el texto real del proyecto. No se inventaron métricas, investigación, clientes ni resultados.",
    },
    footer: {
      eyebrow: "Trabajemos juntos",
      headlineLines: ["Creemos", "algo", "juntos."],
      directContact: "Contacto Directo",
      emailPending: "Email pendiente",
      locationPending: "Ubicación pendiente",
      disciplines: "Disciplinas",
      disciplinesList: ["Diseño Editorial", "Web y Producto Digital", "Identidad de Marca"],
      sitemap: "Mapa del sitio",
      roleFooter: "Diseñador Visual y Digital",
    },
    notFound: {
      heading: "Esta página no está en el índice.",
      backHome: "Volver al inicio",
    },
  },
} as const;

const DISCIPLINE_ES: Record<string, string> = {
  "Product Design": "Diseño de Producto",
  "UX/UI": "UX/UI",
  Mobile: "Mobile",
  "Brand Identity": "Identidad de Marca",
  "Web Design": "Diseño Web",
  Digital: "Digital",
  "Visual Design": "Diseño Visual",
  Editorial: "Editorial",
  B2B: "B2B",
  "Technical Communication": "Comunicación Técnica",
  "Editorial Design": "Diseño Editorial",
  Publication: "Publicación",
  Print: "Impreso",
  "Art Direction": "Dirección de Arte",
  Layout: "Maquetación",
  "Book Design": "Diseño de Libros",
  Typography: "Tipografía",
  Interactive: "Interactivo",
  UI: "UI",
  "Visual System": "Sistema Visual",
  Guidelines: "Manual de Marca",
};

const CATEGORY_LABEL_ES: Record<string, string> = {
  "Product · Mobile": "Producto · Mobile",
  "Brand Identity": "Identidad de Marca",
  "Web Design": "Diseño Web",
  "Editorial · B2B": "Editorial · B2B",
  "Publication · Print": "Publicación · Impreso",
  "Lookbook · Art Direction": "Lookbook · Dirección de Arte",
  "Book · Typography": "Libro · Tipografía",
  "Web Design · UI": "Diseño Web · UI",
  "Visual Identity": "Identidad Visual",
};

const SECTION_TITLE_ES: Record<string, string> = {
  overview: "Resumen",
  challenge: "Desafío",
  role: "Mi Rol",
  thinking: "Pensamiento de Producto",
  ia: "Arquitectura de Información",
  ux: "Experiencia de Usuario",
  flows: "Flujos de Usuario Clave",
  ui: "Sistema UI",
  mobile: "Experiencia Mobile",
  decisions: "Decisiones Clave",
  final: "Producto Final",
  learnings: "Aprendizajes",
  approach: "Enfoque",
  visual: "Sistema Visual",
  website: "Sitio Web",
  pages: "Sitio Web",
  process: "Proceso",
  outcome: "Resultado Final",
  catalog: "Catálogo",
  editorial: "Sistema Editorial",
  product: "Comunicación de Producto",
};

const PLACEHOLDER_TITLE_ES: Record<string, { title: string; lines: string[] }> = {
  "web-03": { title: "PROYECTO WEB 03", lines: ["PROYECTO WEB 03"] },
};

export function localizeProjectTitle(project: Project, lang: Locale): { title: string; lines: string[] } {
  if (lang === "es" && PLACEHOLDER_TITLE_ES[project.slug]) {
    return PLACEHOLDER_TITLE_ES[project.slug];
  }
  return { title: project.title, lines: project.lines };
}

export function localizeCategoryLabel(project: Project, lang: Locale): string {
  if (lang === "en") return project.categoryLabel;
  return CATEGORY_LABEL_ES[project.categoryLabel] ?? project.categoryLabel;
}

export function localizeDisciplines(project: Project, lang: Locale): string {
  if (lang === "en") return project.disciplines.join(" · ");
  return project.disciplines.map((d) => DISCIPLINE_ES[d] ?? d).join(" · ");
}

export function localizeMetaValue(value: string, lang: Locale): string {
  if (value === "Pending") {
    return UI_COPY[lang].caseStudy.pending;
  }
  return value;
}

export function localizeSectionTitle(sectionId: string, fallbackTitle: string, lang: Locale): string {
  if (lang === "en") return fallbackTitle;
  return SECTION_TITLE_ES[sectionId] ?? fallbackTitle;
}

export function localizeSectionBody(body: string | undefined, lang: Locale): string {
  if (!body) return UI_COPY[lang].caseStudy.pendingBody;
  if (body.startsWith("Placeholder. Replace this with the real text.")) {
    return UI_COPY[lang].caseStudy.pendingBody;
  }
  return body;
}
