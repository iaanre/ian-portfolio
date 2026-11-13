import { useEffect } from "react";
import type { ReactNode } from "react";
import type { Project } from "../../data/projects.ts";
import { getNextProject } from "../../data/projects.ts";
import { localizeProjectTitle } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseStudyHero } from "./CaseStudyHero.tsx";
import { NextProject } from "../projects/NextProject.tsx";
import { Footer } from "../footer/Footer.tsx";

export function CaseStudyLayout({ project, children }: { project: Project; children: ReactNode }) {
  const { lang } = useLanguage();
  const localizedTitle = localizeProjectTitle(project, lang).title;

  useEffect(() => {
    document.title = `${localizedTitle} — Ian Rebuffo`;
  }, [localizedTitle]);

  return (
    <article>
      <CaseStudyHero project={project} />
      {children}
      <NextProject project={getNextProject(project.slug)} />
      <Footer />
    </article>
  );
}
