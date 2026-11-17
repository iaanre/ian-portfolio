import type { Project } from "../../data/projects.ts";
import {
  localizeDisciplines,
  localizeMetaValue,
  localizeProjectTitle,
  UI_COPY,
} from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { ImageReveal } from "../motion/ImageReveal.tsx";
import { ProjectVisual } from "../media/ProjectVisual.tsx";

export function CaseStudyHero({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const cover = project.media[0];
  const localizedTitle = localizeProjectTitle(project, lang);
  const isTay = project.slug === "tay";
  const isNudos = project.slug === "nudos" || project.slug === "nudos-web";
  const isPatagonia = project.slug === "patagonia" || project.slug === "patagonia-web";
  const isVila = project.slug === "editorial-02";
  const isCatalog02 = project.slug === "catalog-02";
  const isNexo = project.slug === "queer";
  const isPackaging = project.slug === "patagonia-packaging";
  const isMockupHero = isNudos || isPatagonia || isCatalog02 || isNexo || isPackaging;

  const heroFrame = isVila
    ? "relative w-full bg-[#0a0a0a] h-[78svh] sm:h-[86svh] md:h-[94svh]"
    : isMockupHero
      ? "relative w-full bg-[#0a0a0a] aspect-[3/4] sm:aspect-[5/4] md:aspect-[16/10] md:max-h-[92svh]"
      : isTay
        ? "relative w-full bg-[#0a0a0a] aspect-[4/5] sm:aspect-[5/4] md:aspect-auto md:h-[100svh]"
        : "relative h-[72svh] sm:h-[82svh] md:h-[100svh]";

  const objectPosition = isPatagonia
    ? "62% 45%"
    : isCatalog02
      ? "center 40%"
      : isNexo
        ? "center 30%"
        : isPackaging
          ? "center 55%"
          : isVila
            ? "center 55%"
            : isNudos
              ? "center center"
              : isTay
                ? "center center"
                : cover.objectPosition;

  return (
    <header data-header-theme="paper" className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[76svh]"
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, ${project.banner.accent} 14%, var(--c-paper)) 0%, var(--c-paper) 100%)`,
        }}
      />

      {/* Aspect-led heroes for image-heavy case studies; others keep tall cover */}
      <div className={heroFrame}>
        <ImageReveal variant="scale" className="absolute inset-0 h-full w-full">
          <ProjectVisual
            project={project}
            slot={{
              ...cover,
              objectPosition,
            }}
            underNav
            className="block"
          />
        </ImageReveal>

        <div className="absolute bottom-0 left-0 z-[1] bg-[var(--c-paper)] px-[5vw] pb-8 pt-5 md:w-fit md:max-w-[92vw] md:pr-[6vw]">
          <p className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
            <span
              className="inline-block h-2 w-2 rounded-[1px]"
              style={{ backgroundColor: project.banner.accent }}
            />
            <span>
              {copy.projectPrefix} {project.index}
            </span>
          </p>
          <h1 className="mt-2 max-w-[92vw] text-[clamp(1.6rem,4.2vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.045em]">
            {localizedTitle.title}
          </h1>
          <p className="mt-4 text-sm text-[var(--c-muted)]">{localizeDisciplines(project, lang)}</p>
        </div>
      </div>

      <dl className="grid gap-6 border-t border-[var(--c-line)] px-[5vw] py-8 text-[11px] uppercase tracking-[0.16em] sm:grid-cols-3">
        <div>
          <dt className="text-[var(--c-muted)]">{copy.discipline}</dt>
          <dd className="mt-2 text-[15px] normal-case tracking-normal">
            {localizeDisciplines(project, lang)}
          </dd>
        </div>
        <div>
          <dt className="text-[var(--c-muted)]">{copy.year}</dt>
          <dd className="mt-2">{localizeMetaValue(project.year, lang)}</dd>
        </div>
        <div>
          <dt className="text-[var(--c-muted)]">{copy.role}</dt>
          <dd className="mt-2">{localizeMetaValue(project.role, lang)}</dd>
        </div>
      </dl>
    </header>
  );
}
