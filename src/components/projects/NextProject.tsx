import { Link } from "react-router-dom";
import type { Project } from "../../data/projects.ts";
import { localizeDisciplines, localizeProjectTitle, UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { useProjectLaunch } from "../../hooks/useProjectLaunch.ts";
import { ProjectVisual } from "../media/ProjectVisual.tsx";

export function NextProject({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const { mediaRef, onClick } = useProjectLaunch(project);
  const localizedTitle = localizeProjectTitle(project, lang);

  return (
    <section data-header-theme="paper" className="border-t border-[var(--c-line)] px-[5vw] py-[12vh]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">{copy.nextProject}</p>
      <Link
        to={`/work/${project.slug}`}
        data-cursor="next"
        onClick={onClick}
        className="mt-8 grid items-end gap-8 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 md:grid-cols-12"
      >
        <div className="md:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{project.index}</p>
          <h2 className="mt-3 text-[clamp(2.4rem,8.5vw,8rem)] font-medium leading-[0.82] tracking-[-0.06em]">
            {localizedTitle.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
            {localizeDisciplines(project, lang)}
          </p>
        </div>
        <div ref={mediaRef} className="aspect-[4/5] md:col-span-4 md:col-start-9">
          <ProjectVisual project={project} slot={project.media[0]} />
        </div>
      </Link>
    </section>
  );
}
