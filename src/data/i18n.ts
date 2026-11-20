import type { Locale } from "../context/LanguageContext.tsx";
import type { Project, ProjectCategory } from "./projects.ts";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type EducationItem = {
  title: string;
  institution: string;
  year: string;
  detail?: string;
};

export type ToolGroup = {
  category: string;
  items: string[];
};

export const UI_COPY = {
  en: {
    skipToContent: "Skip to content",
    loadingPage: "Page is Loading...",
    docTitleHome: "Ian Rebuffo — Visual & Digital Designer",
    docTitleWorks: "Works — Ian Rebuffo",
    docTitleAbout: "Studio — Ian Rebuffo",
    docTitleSocial: "Social Media — Ian Rebuffo",
    docTitleNotFound: "Not found — Ian Rebuffo",
    nav: {
      index: "Home",
      works: "Works",
      editorial: "Editorial",
      studio: "Experience",
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
      statementHeading: "Design that goes\nbeyond surface and format.",
      role: "Senior Graphic, Visual & Digital Designer",
      intro:
        "Senior Graphic & Digital Designer holding a B.A. in Graphic Design & Visual Communication, with 6+ years of experience crafting brand identities, editorial systems, websites and digital products.",
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
        "Web Design & Landing Pages",
        "Brand Identity & Visual Systems",
        "Product Design & UX/UI",
        "Art Direction",
        "Digital & Multi-Channel Campaigns",
        "Generative AI & Visual Experimentation",
        "Marketing & B2B Communication",
      ],
    },
    categories: {
      editorial: {
        label: "Editorial Design",
        shortLabel: "Editorial",
        subtitle: "Brochures, catalogs, magazines and print art direction.",
      },
      web: {
        label: "Web & App",
        shortLabel: "Web & App",
        subtitle: "Websites and mobile product experiences.",
      },
      branding: {
        label: "Brand Identity",
        shortLabel: "Branding",
        subtitle: "Brand guidelines, packaging and visual systems.",
      },
      social: {
        label: "Social Media",
        shortLabel: "Social Media",
        subtitle:
          "Reels and posts for Vitrium Capital, Patagonia CNC, BTEC and Perfect Welding.",
      },
    } satisfies Record<ProjectCategory, { label: string; shortLabel: string; subtitle: string }>,
    social: {
      docTitle: "Social Media — Ian Rebuffo",
      label: "Social Media",
      subtitle:
        "Reels and posts for Vitrium Capital, Patagonia CNC, BTEC and Perfect Welding.",
      coverEyebrow: "Clients",
      coverLine: "Reels and posts across brand and B2B accounts.",
      filterAll: "All",
      filterAria: "Filter social work by client",
      reelsLabel: "Reels",
      postsLabel: "Posts",
      empty: "No pieces for this client yet — drop Instagram exports into the brand folder.",
    },
    works: {
      heading: "Selected Works",
      subline: "Editorial · Web & App · Brand Identity · Social Media",
      description:
        "Curated works spanning printed publications, websites, mobile products, brand systems and social content.",
      scrollToExplore: "Scroll to Explore",
      filterAll: "All",
      filterAria: "Filter works by discipline",
      list: "List",
      grid: "Grid",
    },
    about: {
      eyebrow: "Studio · Profile",
      availability:
        "Buenos Aires, Argentina · Open to remote, hybrid & on-site · Freelance / Full-time",
      introTitle: "Profile",
      bioLead:
        "Senior Graphic Designer holding a Bachelor’s Degree in Graphic Design & Visual Communication (UCES), with over 6 years of experience across visual design, branding, editorial design, websites and digital campaigns in the technology, B2B industrial and real estate sectors.",
      bioSecondary:
        "My career combines hands-on visual execution with strategic thinking —evolving from Senior Graphic Designer to Marketing Director—, integrating art direction, team coordination, UX/UI design and generative AI workflows with a focus on visual quality, brand consistency and production efficiency.",
      experienceTitle: "Experience",
      experience: [
        {
          role: "Document Designer",
          company: "Taste Labs",
          period: "Oct 2026 – Nov 2026",
          summary:
            "Designed professional editorial documents in Figma for international clients, developing content structures, typographic hierarchies and grid systems to communicate complex information clearly within strict brand guidelines.",
        },
        {
          role: "Marketing Director",
          company: "Patagonia CNC Machines",
          period: "Jan 2026 – Jun 2026",
          summary:
            "Led brand strategy, visual communication and creative development for a B2B industrial technology company across Latin American markets. Coordinated graphic design and marketing teams across digital campaigns, websites, institutional collateral and commercial presentations.",
        },
        {
          role: "Senior Graphic Designer",
          company: "Patagonia CNC Machines",
          period: "Aug 2023 – Jan 2026",
          summary:
            "Designed technical catalogs, brochures, editorial pieces, presentations, websites and multi-channel digital campaigns, as well as promotional materials and print production for international trade shows.",
        },
        {
          role: "Graphic Designer",
          company: "Vitrium Capital",
          period: "2022 – 2023",
          summary:
            "Created institutional, commercial and advertising assets for the real estate sector, including brochures, sales folders, shopping-center and outdoor signage, web designs and social media content.",
        },
        {
          role: "Graphic Designer",
          company: "Egoforum",
          period: "2021",
          summary:
            "Designed and built websites, digital assets, social media visual content and Google Ads advertising materials for small and medium-sized businesses.",
        },
        {
          role: "Graphic Designer",
          company: "Vitrium Capital",
          period: "2019 – 2021",
          summary:
            "Produced visual content for social media, email marketing campaigns and digital promotional materials aligned with brand identity guidelines.",
        },
      ] satisfies ExperienceItem[],
      educationTitle: "Education",
      education: [
        {
          title: "B.A. in Graphic Design & Visual Communication",
          institution: "Universidad de Ciencias Empresariales y Sociales (UCES)",
          year: "2025",
        },
        {
          title: "UX/UI Design",
          institution: "Coderhouse",
          year: "2025",
          detail: "User research, information architecture, wireframing, prototyping and interface design.",
        },
        {
          title: "Artificial Intelligence Immersion",
          institution: "Google",
          year: "2025",
          detail: "LLMs, content generation, workflow automation and AI assistants with Gemini & Google AI Studio.",
        },
      ] satisfies EducationItem[],
      capabilitiesTitle: "Capabilities",
      toolsTitle: "Tools & Tech",
      toolGroups: [
        {
          category: "Design & Motion",
          items: [
            "Figma",
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Adobe After Effects",
            "Adobe Premiere Pro",
            "Microsoft PowerPoint",
          ],
        },
        {
          category: "AI & Creative Automation",
          items: ["Adobe Firefly", "Google Gemini", "Google AI Studio", "ChatGPT", "Cursor"],
        },
        {
          category: "Marketing & Platforms",
          items: ["Google Ads", "Salesforce", "Google Workspace"],
        },
      ] satisfies ToolGroup[],
      languagesTitle: "Languages",
      languagesList: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Advanced" },
      ],
      contactTitle: "Contact",
      socialsTitle: "Profiles",
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
      directContact: "Direct Contact",
      locationAvailability:
        "Buenos Aires, Argentina · Open to remote, hybrid & on-site · Freelance / Full-time",
      socialsLabel: "Connect",
      disciplines: "Disciplines",
      disciplinesList: ["Editorial Design", "Web & Digital Product", "Brand Identity"],
      sitemap: "Sitemap",
      roleFooter: "Senior Graphic, Visual & Digital Designer",
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
    docTitleSocial: "Redes Sociales — Ian Rebuffo",
    docTitleNotFound: "No encontrado — Ian Rebuffo",
    nav: {
      index: "Inicio",
      works: "Trabajos",
      editorial: "Editorial",
      studio: "Experiencia",
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
      statementHeading: "Diseño que trasciende\nla superficie y el formato.",
      role: "Diseñador Gráfico Senior · Visual y Digital",
      intro:
        "Diseñador Gráfico Senior y Licenciado en Diseño Gráfico y Comunicación Visual, con más de 6 años de experiencia creando identidades de marca, sistemas editoriales, sitios web y productos digitales.",
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
        "Diseño Web y Landing Pages",
        "Identidad de Marca y Sistemas Visuales",
        "Diseño de Producto y UX/UI",
        "Dirección de Arte",
        "Campañas Digitales Multicanal",
        "IA Generativa y Experimentación Visual",
        "Marketing y Comunicación B2B",
      ],
    },
    categories: {
      editorial: {
        label: "Diseño Editorial",
        shortLabel: "Editorial",
        subtitle: "Brochures, catálogos, revistas y dirección de arte impresa.",
      },
      web: {
        label: "Web y App",
        shortLabel: "Web y App",
        subtitle: "Sitios web y experiencias de producto mobile.",
      },
      branding: {
        label: "Identidad de Marca",
        shortLabel: "Branding",
        subtitle: "Manuales de marca, packaging y sistemas visuales.",
      },
      social: {
        label: "Redes Sociales",
        shortLabel: "Redes Sociales",
        subtitle:
          "Reels y posts para Vitrium Capital, Patagonia CNC, BTEC y Perfect Welding.",
      },
    } satisfies Record<ProjectCategory, { label: string; shortLabel: string; subtitle: string }>,
    social: {
      docTitle: "Redes Sociales — Ian Rebuffo",
      label: "Redes Sociales",
      subtitle:
        "Reels y posts para Vitrium Capital, Patagonia CNC, BTEC y Perfect Welding.",
      coverEyebrow: "Clientes",
      coverLine: "Reels y posts para marcas y cuentas B2B.",
      filterAll: "Todos",
      filterAria: "Filtrar piezas de redes por cliente",
      reelsLabel: "Reels",
      postsLabel: "Posts",
      empty: "Todavía no hay piezas de este cliente — subí los exports de Instagram a su carpeta.",
    },
    works: {
      heading: "Trabajos Seleccionados",
      subline: "Editorial · Web y App · Identidad de Marca · Redes Sociales",
      description:
        "Selección curada de publicaciones impresas, sitios web interactivos, productos mobile, sistemas de marca y contenido para redes.",
      scrollToExplore: "Scrolleá para explorar",
      filterAll: "Todos",
      filterAria: "Filtrar trabajos por disciplina",
      list: "Lista",
      grid: "Grilla",
    },
    about: {
      eyebrow: "Estudio · Perfil Profesional",
      availability:
        "Buenos Aires, Argentina · Disponible para remoto, híbrido o presencial · Freelance / Full-time",
      introTitle: "Perfil",
      bioLead:
        "Diseñador Gráfico Senior y Licenciado en Diseño Gráfico y Comunicación Visual (UCES), con más de 6 años de experiencia en diseño visual, branding, diseño editorial, sitios web y campañas digitales en los sectores tecnológico, industrial B2B e inmobiliario.",
      bioSecondary:
        "Mi trayectoria combina ejecución práctica de diseño con visión estratégica —evolucionando desde Diseñador Gráfico Senior hasta Director de Marketing—, integrando dirección de arte, coordinación de equipos, diseño UX/UI y flujos de inteligencia artificial generativa con foco en calidad visual, consistencia de marca y eficiencia productiva.",
      experienceTitle: "Experiencia",
      experience: [
        {
          role: "Diseñador de Documentos",
          company: "Taste Labs",
          period: "Oct 2026 – Nov 2026",
          summary:
            "Diseño y maquetación editorial de documentos profesionales en Figma para clientes internacionales, desarrollando estructuras de contenido, jerarquías tipográficas y sistemas de grillas para comunicar información compleja con claridad y consistencia de marca.",
        },
        {
          role: "Director de Marketing",
          company: "Patagonia CNC Machines",
          period: "Ene 2026 – Jun 2026",
          summary:
            "Dirección de la estrategia de marca, comunicación visual y desarrollo creativo para una empresa de tecnología industrial B2B en mercados latinoamericanos. Coordinación de equipos de diseño y marketing en campañas digitales, sitios web, materiales institucionales y presentaciones comerciales.",
        },
        {
          role: "Diseñador Gráfico Senior",
          company: "Patagonia CNC Machines",
          period: "Ago 2023 – Ene 2026",
          summary:
            "Diseño de catálogos técnicos, folletos, piezas editoriales, presentaciones, sitios web y campañas digitales multicanal, además de materiales promocionales y coordinación de producción gráfica para ferias y eventos internacionales.",
        },
        {
          role: "Diseñador Gráfico",
          company: "Vitrium Capital",
          period: "2022 – 2023",
          summary:
            "Diseño de piezas institucionales, comerciales y publicitarias para el sector inmobiliario: brochures, carpetas comerciales, cartelería para centros comerciales y vía pública, diseños web y contenido digital.",
        },
        {
          role: "Diseñador Gráfico",
          company: "Egoforum",
          period: "2021",
          summary:
            "Diseño y desarrollo de sitios web, piezas digitales, contenido visual para redes sociales y gestión creativa de campañas en Google Ads para PyMEs.",
        },
        {
          role: "Diseñador Gráfico",
          company: "Vitrium Capital",
          period: "2019 – 2021",
          summary:
            "Desarrollo de contenido visual para redes sociales, campañas de email marketing y piezas promocionales digitales aplicando el sistema de identidad de marca.",
        },
      ] satisfies ExperienceItem[],
      educationTitle: "Formación",
      education: [
        {
          title: "Licenciatura en Diseño Gráfico y Comunicación Visual",
          institution: "Universidad de Ciencias Empresariales y Sociales (UCES)",
          year: "2025",
        },
        {
          title: "Diseño UX/UI",
          institution: "Coderhouse",
          year: "2025",
          detail: "Investigación de usuarios, arquitectura de información, wireframes, prototipado y diseño de interfaces.",
        },
        {
          title: "Inmersión en Inteligencia Artificial",
          institution: "Google",
          year: "2025",
          detail: "Modelos de lenguaje, generación de contenido, automatización y asistentes de IA con Gemini y Google AI Studio.",
        },
      ] satisfies EducationItem[],
      capabilitiesTitle: "Capacidades",
      toolsTitle: "Herramientas y Tecnología",
      toolGroups: [
        {
          category: "Diseño y Motion",
          items: [
            "Figma",
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Adobe After Effects",
            "Adobe Premiere Pro",
            "Microsoft PowerPoint",
          ],
        },
        {
          category: "IA y Automatización Creativa",
          items: ["Adobe Firefly", "Google Gemini", "Google AI Studio", "ChatGPT", "Cursor"],
        },
        {
          category: "Marketing y Plataformas",
          items: ["Google Ads", "Salesforce", "Google Workspace"],
        },
      ] satisfies ToolGroup[],
      languagesTitle: "Idiomas",
      languagesList: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado" },
      ],
      contactTitle: "Contacto",
      socialsTitle: "Perfiles",
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
      directContact: "Contacto Directo",
      locationAvailability:
        "Buenos Aires, Argentina · Disponible para remoto, híbrido o presencial · Freelance / Full-time",
      socialsLabel: "Redes y Perfiles",
      disciplines: "Disciplinas",
      disciplinesList: ["Diseño Editorial", "Web y Producto Digital", "Identidad de Marca"],
      sitemap: "Mapa del sitio",
      roleFooter: "Diseñador Gráfico Senior · Visual y Digital",
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
  Catalog: "Catálogo",
  Magazine: "Revista",
  Packaging: "Packaging",
  Industrial: "Industrial",
  "Social Media": "Redes Sociales",
  Motion: "Motion",
  Content: "Contenido",
  "Information Design": "Diseño de Información",
  Stationery: "Papelería",
};

const CATEGORY_LABEL_ES: Record<string, string> = {
  "Product · Mobile": "Producto · Mobile",
  "App · Product": "App · Producto",
  "Brand Identity": "Identidad de Marca",
  "Brand Identity · Web Design": "Identidad de Marca · Diseño Web",
  "Brand Guidelines · Web": "Manual de Marca · Web",
  "Brand Guidelines": "Manual de Marca",
  "Web Design": "Diseño Web",
  "Web Design · B2B": "Diseño Web · B2B",
  "Editorial · B2B": "Editorial · B2B",
  "Editorial · Web Design": "Editorial · Diseño Web",
  "Catalog · Web": "Catálogo · Web",
  "Brochure · Print": "Brochure · Impreso",
  "Catalog · Print": "Catálogo · Impreso",
  "Protocol · Editorial": "Protocolo · Editorial",
  "Magazine · Editorial": "Revista · Editorial",
  "Packaging · Industrial": "Packaging · Industrial",
  "Publication · Print": "Publicación · Impreso",
  "Print & Digital": "Impreso y Digital",
  "Lookbook · Art Direction": "Lookbook · Dirección de Arte",
  "Book · Typography": "Libro · Tipografía",
  "Web Design · UI": "Diseño Web · UI",
  "Visual Identity": "Identidad Visual",
  "Reels · Posts": "Reels · Posts",
  "Redes Sociales": "Redes Sociales",
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
  edge: "Certificación EDGE",
  plans: "Planos",
};

const PLACEHOLDER_TITLE_ES: Record<string, { title: string; lines: string[] }> = {
  "catalog-02": { title: "MILLBRIDGE", lines: ["MILLBRIDGE"] },
  queer: { title: "NEXO", lines: ["NEXO"] },
  "patagonia-packaging": { title: "PATAGONIA PACKAGING", lines: ["PATAGONIA", "PACKAGING"] },
  "planeta-acero": { title: "PLANETA ACERO", lines: ["PLANETA ACERO"] },
  kobe: { title: "KOBE", lines: ["KOBE"] },
  social: { title: "REDES SOCIALES", lines: ["REDES SOCIALES"] },
};

const PLACEHOLDER_TITLE_EN: Record<string, { title: string; lines: string[] }> = {
  social: { title: "SOCIAL MEDIA", lines: ["SOCIAL MEDIA"] },
};

export function localizeProjectTitle(project: Project, lang: Locale): { title: string; lines: string[] } {
  const raw =
    lang === "es" && PLACEHOLDER_TITLE_ES[project.slug]
      ? PLACEHOLDER_TITLE_ES[project.slug]
      : lang === "en" && PLACEHOLDER_TITLE_EN[project.slug]
        ? PLACEHOLDER_TITLE_EN[project.slug]
        : { title: project.title, lines: project.lines };
  // Project titles always render in uppercase.
  return {
    title: raw.title.toUpperCase(),
    lines: raw.lines.map((line) => line.toUpperCase()),
  };
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
  // Project meta — keep Spanish when UI lang is ES
  if (lang === "es") {
    if (value === "2025 — 2026") return "2025 — 2026";
    if (value === "2023 — 2026") return "2023 — 2026";
    if (value === "2025") return "2025";
    if (value === "Social Content") return "Contenido para redes";
    if (value === "Product Design Lead · UX/UI") return "Lead de Diseño de Producto · UX/UI";
    if (value === "Founder · Brand & Product Design Lead") {
      return "Fundador · Lead de Marca y Diseño de Producto";
    }
    if (value === "Lead Designer · End-to-end") {
      return "Diseñador Lead · Punta a punta";
    }
    if (value === "Full Design") {
      return "Diseño completo";
    }
    if (value === "Art Direction · Editorial · Renders") {
      return "Dirección de arte · Editorial · Renders";
    }
    if (value === "Art Direction · Editorial Design") {
      return "Dirección de arte · Diseño editorial";
    }
    if (value === "Packaging Design · Brand Application") {
      return "Diseño de packaging · Aplicación de marca";
    }
    if (value === "Brand Identity · Visual System") {
      return "Identidad de marca · Sistema visual";
    }
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
