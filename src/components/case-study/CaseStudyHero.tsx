import { useEffect, useState } from "react";
import type { Project } from "../../data/projects.ts";
import {
  localizeDisciplines,
  localizeMetaValue,
  localizeProjectTitle,
  UI_COPY,
} from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { homeMedia } from "../../data/projects.ts";
import { runtime } from "../../lib/runtime.ts";
import { cn } from "../../lib/cn.ts";
import { ImageReveal } from "../motion/ImageReveal.tsx";
import { ProjectVisual } from "../media/ProjectVisual.tsx";

export function CaseStudyHero({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const localizedTitle = localizeProjectTitle(project, lang);
  // Same crop as listing / flight overlay — keeps preview → banner continuous.
  const slot = { ...homeMedia(project), fit: "cover" as const };
  const [handoff, setHandoff] = useState(() => runtime.flying || runtime.handoff);

  useEffect(() => {
    setHandoff(runtime.flying || runtime.handoff);
    const onDone = () => setHandoff(false);
    window.addEventListener("ir-handoff-done", onDone);
    return () => window.removeEventListener("ir-handoff-done", onDone);
  }, [project.slug]);

  const media = (
    <ProjectVisual
      project={project}
      slot={slot}
      underNav
      hideOverlayMeta
      className="h-full w-full object-cover"
    />
  );

  return (
    <header className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100svh]"
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, ${project.banner.accent} 14%, var(--c-paper)) 0%, var(--c-paper) 100%)`,
        }}
      />

      {/* Full-viewport cover banner — matches ProjectTransition end state exactly. */}
      <div
        data-header-theme="ink"
        className="relative h-[100svh] w-full overflow-hidden bg-[#0a0a0a]"
      >
        {handoff ? (
          <div className="absolute inset-0">{media}</div>
        ) : (
          <ImageReveal variant="fade" className="absolute inset-0 h-full w-full">
            {media}
          </ImageReveal>
        )}

        <div
          data-header-theme="paper"
          className={cn(
            "absolute bottom-0 left-0 z-[1] bg-[var(--c-paper)] px-[5vw] pb-8 pt-5 transition-opacity duration-500 md:w-fit md:max-w-[92vw] md:pr-[6vw]",
            handoff ? "opacity-0" : "opacity-100",
          )}
        >
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

      <dl
        data-header-theme="paper"
        className={cn(
          "grid gap-6 border-t border-[var(--c-line)] px-[5vw] py-8 text-[11px] uppercase tracking-[0.16em] transition-opacity duration-500 sm:grid-cols-3",
          handoff ? "opacity-0" : "opacity-100",
        )}
      >
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
