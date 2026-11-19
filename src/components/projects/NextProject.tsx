import { Link } from "react-router-dom";
import type { Project } from "../../data/projects.ts";
import { homeMedia } from "../../data/projects.ts";
import { localizeDisciplines, localizeProjectTitle, UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { useProjectLaunch } from "../../hooks/useProjectLaunch.ts";
import { ProjectVisual } from "../media/ProjectVisual.tsx";

export function NextProject({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const { mediaRef, onClick } = useProjectLaunch(project);
  const localizedTitle = localizeProjectTitle(project, lang);
  // Cover fills the mask (no black letterbox). Position keeps the mockup/product centered.
  const slot = {
    ...homeMedia(project),
    fit: "cover" as const,
    objectPosition: "center center",
  };

  return (
    <section data-header-theme="paper" className="border-t border-[var(--c-line)] px-[5vw] py-[10vh] md:py-[12vh]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">{copy.nextProject}</p>
      <Link
        to={`/work/${project.slug}`}
        data-cursor="next"
        onClick={onClick}
        className="mt-6 grid items-end gap-6 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-8 md:mt-8 md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{project.index}</p>
          <h2 className="mt-3 text-[clamp(2.2rem,5.5vw,5.5rem)] font-medium leading-[0.88] tracking-[-0.055em]">
            {localizedTitle.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
            {localizeDisciplines(project, lang)}
          </p>
        </div>
        <div
          ref={mediaRef}
          className="aspect-[16/11] overflow-hidden md:col-span-8"
        >
          <ProjectVisual
            project={project}
            slot={slot}
            className="h-full w-full origin-center object-cover"
          />
        </div>
      </Link>
    </section>
  );
}
