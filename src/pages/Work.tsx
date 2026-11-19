import { useEffect, useRef, useState } from "react";
import type { MouseEvent, RefObject } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProject, homeMedia, projectBelongsTo, projects } from "../data/projects.ts";
import type { Project, ProjectCategory } from "../data/projects.ts";
import {
  localizeCategoryLabel,
  localizeDisciplines,
  localizeProjectTitle,
  UI_COPY,
} from "../data/i18n.ts";
import { useLanguage } from "../context/LanguageContext.tsx";
import type { Locale } from "../context/LanguageContext.tsx";
import { usePrefers } from "../hooks/usePrefers.ts";
import { useProjectLaunch } from "../hooks/useProjectLaunch.ts";
import { useTransition } from "../context/TransitionContext.tsx";
import { runtime } from "../lib/runtime.ts";
import { cn } from "../lib/cn.ts";
import { Footer } from "../components/footer/Footer.tsx";
import { ProjectVisual } from "../components/media/ProjectVisual.tsx";
import { ImageReveal } from "../components/motion/ImageReveal.tsx";
import { ParallaxImage } from "../components/motion/ParallaxImage.tsx";

type FilterValue = "all" | ProjectCategory;

export default function Work() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].works;
  const cats = UI_COPY[lang].categories;

  const filters: { id: FilterValue; label: string }[] = [
    { id: "all", label: copy.filterAll },
    { id: "editorial", label: cats.editorial.shortLabel },
    { id: "web", label: cats.web.shortLabel },
    { id: "branding", label: cats.branding.shortLabel },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = (searchParams.get("category") as FilterValue | null) ?? "all";
  const validInitial: FilterValue =
    initialCat === "editorial" || initialCat === "web" || initialCat === "branding"
      ? initialCat
      : "all";

  const [filter, setFilter] = useState<FilterValue>(validInitial);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = UI_COPY[lang].docTitleWorks;
  }, [lang]);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => projectBelongsTo(project, filter));

  const current =
    filtered.find((item) => item.slug === activeSlug) ??
    getProject(activeSlug) ??
    filtered[0] ??
    projects[0];

  const handleFilter = (next: FilterValue) => {
    setFilter(next);
    const nextList =
      next === "all" ? projects : projects.filter((p) => projectBelongsTo(p, next));
    if (nextList[0]) setActiveSlug(nextList[0].slug);
    if (next === "all") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: next }, { replace: true });
    }
  };

  return (
    <>
      <section data-header-theme="paper" className="px-[5vw] pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-[clamp(3.2rem,8.4vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              {copy.heading}
            </h1>
            <p className="mt-4 flex items-center gap-2.5 text-[14px] font-medium tracking-[-0.01em] text-[var(--c-muted)] md:text-[16px]">
              <span className="h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
              <span>{copy.subline}</span>
            </p>
          </div>

          <p className="max-w-sm text-[14px] leading-relaxed text-[var(--c-muted)] md:col-span-4">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 border-y border-[var(--c-line)] py-5 md:mt-16 md:grid-cols-12">
          <div className="hidden items-center gap-2 text-[12px] font-medium text-[var(--c-muted)] md:col-span-3 md:flex">
            <span>↓</span>
            <span>{copy.scrollToExplore}</span>
          </div>

          <div
            role="tablist"
            aria-label={copy.filterAria}
            className="flex flex-wrap items-center gap-2 md:col-span-6 md:justify-center"
          >
            {filters.map((item) => {
              const count =
                item.id === "all"
                  ? projects.length
                  : projects.filter((p) =>
                      projectBelongsTo(p, item.id as ProjectCategory),
                    ).length;
              const isSelected = filter === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleFilter(item.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-all",
                    isSelected
                      ? "border-[#0d0d0d] bg-[#0d0d0d] text-[#f5f4f0]"
                      : "border-black/12 bg-transparent text-[var(--c-muted)] hover:border-black/30 hover:text-[var(--c-ink)]",
                  )}
                >
                  {isSelected ? (
                    <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
                  ) : null}
                  <span>{item.label}</span>
                  <span className="text-[10px] opacity-65">{String(count).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-2 md:col-span-3">
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={cn(
                "rounded-full px-3 py-1 text-[12px] font-medium transition-colors",
                viewMode === "list"
                  ? "bg-[#0d0d0d] text-[#f5f4f0]"
                  : "text-[var(--c-muted)] hover:text-[var(--c-ink)]",
              )}
            >
              {copy.list}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={cn(
                "rounded-full px-3 py-1 text-[12px] font-medium transition-colors",
                viewMode === "grid"
                  ? "bg-[#0d0d0d] text-[#f5f4f0]"
                  : "text-[var(--c-muted)] hover:text-[var(--c-ink)]",
              )}
            >
              {copy.grid}
            </button>
          </div>
        </div>
      </section>

      {viewMode === "grid" ? (
        <section
          data-header-theme="paper"
          className="px-[5vw] pb-[16vh] pt-4"
        >
          <div className="grid items-start gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
            {filtered.map((project, idx) => {
              const mod = idx % 4;
              const colClass =
                mod === 0
                  ? "md:col-span-6"
                  : mod === 1
                    ? "md:col-span-5 md:col-start-8 md:mt-16"
                    : mod === 2
                      ? "md:col-span-5 md:col-start-2"
                      : "md:col-span-6 md:col-start-7 md:-mt-8";

              const slot = homeMedia(project);
              const aspect =
                slot.aspect === "landscape" ? "aspect-[16/10]" : "aspect-[4/5]";

              return (
                <WorkGridCard
                  key={project.slug}
                  project={project}
                  lang={lang}
                  aspectClass={aspect}
                  className={colClass}
                />
              );
            })}
          </div>
        </section>
      ) : (
        <section
          data-header-theme="paper"
          className="grid items-start gap-10 px-[5vw] pb-[16vh] pt-4 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            {filtered.map((project) => (
              <WorkRow
                key={project.slug}
                project={project}
                lang={lang}
                sharedRef={visualRef}
                onActivate={setActiveSlug}
                active={activeSlug}
              />
            ))}
          </div>
          <div className="hidden md:col-span-4 md:col-start-9 md:block">
            <div className="sticky top-28">
              <div ref={visualRef} className="aspect-[16/10] overflow-hidden">
                <ProjectVisual
                  project={current}
                  slot={homeMedia(current)}
                  className={cn(
                    "h-full w-full origin-center object-cover",
                    homeMedia(current).scale == null && "scale-[1.14]",
                  )}
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-[12px] text-[var(--c-muted)]">
                <span className="font-medium text-[var(--c-ink)]">
                  {localizeProjectTitle(current, lang).title}
                </span>
                <span>{localizeCategoryLabel(current, lang)}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

function WorkGridCard({
  project,
  lang,
  aspectClass,
  className,
}: {
  project: Project;
  lang: Locale;
  aspectClass: string;
  className?: string;
}) {
  const { mediaRef, onClick } = useProjectLaunch(project);
  const slot = homeMedia(project);

  return (
    <article className={cn("group", className)}>
      <Link
        to={`/work/${project.slug}`}
        data-cursor="project"
        onClick={onClick}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8"
      >
        <div ref={mediaRef} className={cn("w-full overflow-hidden", aspectClass)}>
          <ImageReveal variant="vertical" className="h-full w-full">
            <ParallaxImage className="h-full w-full">
              <ProjectVisual
                project={project}
                slot={slot}
                className={cn(
                  "h-full w-full origin-center object-cover",
                  slot.scale == null && "scale-[1.14]",
                )}
              />
            </ParallaxImage>
          </ImageReveal>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              className="h-2 w-2 shrink-0 rounded-[1px]"
              style={{ backgroundColor: project.banner.accent }}
            />
            <h2 className="truncate text-[17px] font-medium tracking-[-0.02em] sm:text-[19px]">
              {localizeProjectTitle(project, lang).title}
            </h2>
          </div>
          <p className="shrink-0 text-[13px] text-[var(--c-muted)]">
            {localizeCategoryLabel(project, lang)}
          </p>
        </div>
      </Link>
    </article>
  );
}

function WorkRow({
  project,
  lang,
  sharedRef,
  onActivate,
  active,
}: {
  project: Project;
  lang: Locale;
  sharedRef: RefObject<HTMLDivElement | null>;
  onActivate: (slug: string) => void;
  active: string;
}) {
  const localRef = useRef<HTMLDivElement>(null);
  const { launch } = useTransition();
  const { reduced } = usePrefers();

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      reduced ||
      runtime.flying ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const visual = mobile ? localRef.current : sharedRef.current;
    if (!visual) return;
    const rect = visual.getBoundingClientRect();
    if (rect.width < 8) return;
    event.preventDefault();
    visual.setAttribute("data-project-launch-source", "");
    launch({
      slug: project.slug,
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
    });
  };

  return (
    <article className="border-b border-[var(--c-line)] py-7 md:py-9">
      <Link
        to={`/work/${project.slug}`}
        data-cursor="project"
        onMouseEnter={() => onActivate(project.slug)}
        onFocus={() => onActivate(project.slug)}
        onClick={onClick}
        className={cn(
          "block transition-opacity duration-300",
          active === project.slug ? "opacity-100" : "md:opacity-40 hover:opacity-100",
        )}
      >
        <div className="flex items-baseline justify-between gap-4">
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">
            <span
              className="inline-block h-1.5 w-1.5 rounded-[1px]"
              style={{ backgroundColor: project.banner.accent }}
            />
            <span>{project.index}</span>
          </p>
          <p className="text-right text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {localizeDisciplines(project, lang)}
          </p>
        </div>
        <h2 className="mt-3 text-[clamp(2rem,5.2vw,4.4rem)] font-semibold leading-[0.88] tracking-[-0.045em]">
          {localizeProjectTitle(project, lang).title}
        </h2>
        <div ref={localRef} className="mt-6 aspect-[16/10] overflow-hidden md:hidden">
          <ProjectVisual project={project} slot={project.media[0]} />
        </div>
      </Link>
    </article>
  );
}
