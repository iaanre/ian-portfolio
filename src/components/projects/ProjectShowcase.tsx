import { useState } from "react";
import { Link } from "react-router-dom";
import { homeMedia, mediaShowsFullProduct, projects, projectsByCategory } from "../../data/projects.ts";
import type { Project } from "../../data/projects.ts";
import {
  localizeCategoryLabel,
  localizeDisciplines,
  localizeProjectTitle,
  UI_COPY,
} from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import type { Locale } from "../../context/LanguageContext.tsx";
import { useProjectLaunch } from "../../hooks/useProjectLaunch.ts";
import { cn } from "../../lib/cn.ts";
import { ProjectVisual } from "../media/ProjectVisual.tsx";
import { ImageReveal } from "../motion/ImageReveal.tsx";
import { ParallaxImage } from "../motion/ParallaxImage.tsx";
import { MagneticLink } from "../navigation/MagneticLink.tsx";

export function ProjectShowcase() {
  const { lang } = useLanguage();
  const editorialItems = projectsByCategory("editorial");
  const webItems = projectsByCategory("web");
  const brandingItems = projectsByCategory("branding");

  return (
    <div>
      <EditorialSection items={editorialItems} lang={lang} />
      <WebSection items={webItems} lang={lang} />
      <BrandingSection items={brandingItems} lang={lang} />
      <SeeAllWorksBanner total={projects.length} lang={lang} />
    </div>
  );
}

function SectionHeader({
  number,
  sectionWord,
  title,
  subtitle,
  count,
  rightSlot,
}: {
  number: string;
  sectionWord: string;
  title: string;
  subtitle: string;
  count: number;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="border-t border-[var(--c-line)] pt-8 md:pt-10">
      <div className="grid items-start gap-6 md:grid-cols-12">
        <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
          <span className="inline-block h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
          <span>
            {number} / {sectionWord}
          </span>
        </div>

        <div className="md:col-span-6">
          <h2 className="text-[clamp(2.2rem,4.8vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
            {title}
          </h2>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--c-muted)]">{subtitle}</p>
        </div>

        <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
          {rightSlot}
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--c-muted)]">
            ({String(count).padStart(2, "0")})
          </span>
        </div>
      </div>
    </div>
  );
}

function HaylerCard({
  project,
  lang,
  aspectClass = "aspect-[4/5]",
  reveal = "vertical",
  className,
}: {
  project: Project;
  lang: Locale;
  aspectClass?: string;
  reveal?: "vertical" | "horizontal" | "expand" | "clip";
  className?: string;
}) {
  const { mediaRef, onClick } = useProjectLaunch(project);
  const localizedTitle = localizeProjectTitle(project, lang).title;
  const slot = homeMedia(project);
  const showFull = mediaShowsFullProduct(slot);

  return (
    <article className={cn("group", className)}>
      <Link
        to={`/work/${project.slug}`}
        data-cursor="project"
        onClick={onClick}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8"
      >
        <div
          ref={mediaRef}
          className={cn(
            "w-full overflow-hidden",
            // Landscape frames for product mockups so the object stays large + fully visible.
            showFull ? "aspect-[16/10] bg-[#0a0a0a]" : aspectClass,
          )}
        >
          <ImageReveal variant={reveal} className="h-full w-full">
            {showFull ? (
              <ProjectVisual project={project} slot={slot} className="h-full w-full" />
            ) : (
              <ParallaxImage className="h-full w-full">
                <ProjectVisual
                  project={project}
                  slot={{ ...slot, fit: "cover" }}
                  className="h-full w-full object-cover"
                />
              </ParallaxImage>
            )}
          </ImageReveal>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-transparent pb-1 transition-colors duration-300 group-hover:border-[var(--c-line)]">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              className="h-2 w-2 shrink-0 rounded-[1px] opacity-85 transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: project.banner.accent }}
            />
            <h3 className="truncate text-[16px] font-medium tracking-[-0.02em] sm:text-[18px]">
              {localizedTitle}
            </h3>
          </div>
          <p className="shrink-0 text-[12px] text-[var(--c-muted)] sm:text-[13px]">
            {localizeCategoryLabel(project, lang)}
          </p>
        </div>
      </Link>
    </article>
  );
}

function EditorialSection({ items, lang }: { items: Project[]; lang: Locale }) {
  const [view, setView] = useState<"gallery" | "index">("gallery");
  const [hoveredSlug, setHoveredSlug] = useState(items[0]?.slug ?? "");
  const activePreview = items.find((item) => item.slug === hoveredSlug) ?? items[0];
  const cat = UI_COPY[lang].categories.editorial;
  const copy = UI_COPY[lang].home;

  return (
    <section
      id="editorial"
      data-header-theme="paper"
      className="hayler-grid-bg px-[5vw] py-[12vh] md:py-[18vh]"
    >
      <SectionHeader
        number="01"
        sectionWord={copy.sectionWord}
        title={cat.label}
        subtitle={cat.subtitle}
        count={items.length}
        rightSlot={
          <div
            role="group"
            aria-label="Editorial layout mode"
            className="inline-flex rounded-full border border-[var(--c-line)] bg-[var(--c-paper)] p-0.5 text-[11px] font-medium"
          >
            <button
              type="button"
              onClick={() => setView("gallery")}
              className={cn(
                "rounded-full px-3 py-1 transition-colors",
                view === "gallery"
                  ? "bg-[#0d0d0d] text-[#f5f4f0]"
                  : "text-[var(--c-muted)] hover:text-[var(--c-ink)]",
              )}
            >
              {copy.gallery}
            </button>
            <button
              type="button"
              onClick={() => setView("index")}
              className={cn(
                "rounded-full px-3 py-1 transition-colors",
                view === "index"
                  ? "bg-[#0d0d0d] text-[#f5f4f0]"
                  : "text-[var(--c-muted)] hover:text-[var(--c-ink)]",
              )}
            >
              {copy.index}
            </button>
          </div>
        }
      />

      {view === "gallery" ? (
        <div className="mt-12 grid items-start gap-y-14 md:mt-16 md:grid-cols-12 md:gap-x-8 md:gap-y-24">
          {items.map((item, idx) => {
            const pattern = idx % 4;
            const colClass =
              pattern === 0
                ? "md:col-span-7"
                : pattern === 1
                  ? "md:col-span-5 md:col-start-8 md:mt-16"
                  : pattern === 2
                    ? "md:col-span-5 md:col-start-2"
                    : "md:col-span-6 md:col-start-7 md:-mt-12";

            const aspectClass = "aspect-[16/10]";

            return (
              <HaylerCard
                key={item.slug}
                project={item}
                lang={lang}
                aspectClass={aspectClass}
                reveal={pattern % 2 === 0 ? "horizontal" : "vertical"}
                className={colClass}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-12">
          <div className="border-t border-[var(--c-line)] md:col-span-7">
            {items.map((item) => (
              <EditorialIndexRow
                key={item.slug}
                project={item}
                lang={lang}
                active={activePreview?.slug === item.slug}
                onHover={() => setHoveredSlug(item.slug)}
              />
            ))}
          </div>
          {activePreview ? (
            <div className="hidden md:col-span-4 md:col-start-9 md:block">
              <div className="sticky top-28">
                <div
                  className={cn(
                    "aspect-[16/10] w-full overflow-hidden",
                    mediaShowsFullProduct(homeMedia(activePreview)) && "bg-[#0a0a0a]",
                  )}
                >
                  <ProjectVisual
                    project={activePreview}
                    slot={homeMedia(activePreview)}
                    className="h-full w-full"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-[12px] text-[var(--c-muted)]">
                  <span>{localizeProjectTitle(activePreview, lang).title}</span>
                  <span>{localizeDisciplines(activePreview, lang)}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}

function EditorialIndexRow({
  project,
  lang,
  active,
  onHover,
}: {
  project: Project;
  lang: Locale;
  active: boolean;
  onHover: () => void;
}) {
  const { mediaRef, onClick } = useProjectLaunch(project);

  return (
    <Link
      to={`/work/${project.slug}`}
      data-cursor="project"
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onClick}
      className={cn(
        "group flex items-baseline justify-between gap-4 border-b border-[var(--c-line)] py-6 transition-opacity duration-300 md:py-8",
        active ? "opacity-100" : "md:opacity-45 hover:opacity-100",
      )}
    >
      <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)]">
          {project.index}
        </span>
        <h3 className="truncate text-[clamp(1.6rem,3.4vw,2.9rem)] font-semibold leading-none tracking-[-0.04em]">
          {localizeProjectTitle(project, lang).title}
        </h3>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="hidden text-[12px] text-[var(--c-muted)] sm:inline">
          {localizeDisciplines(project, lang)}
        </span>
        <span
          className="h-2 w-2 rounded-[1px]"
          style={{ backgroundColor: project.banner.accent }}
        />
      </div>
      <div ref={mediaRef} className="sr-only" />
    </Link>
  );
}

function WebSection({ items, lang }: { items: Project[]; lang: Locale }) {
  const cat = UI_COPY[lang].categories.web;
  const copy = UI_COPY[lang].home;

  return (
    <section
      id="web"
      data-header-theme="paper"
      className="hayler-grid-bg px-[5vw] py-[12vh] md:py-[18vh]"
    >
      <SectionHeader
        number="02"
        sectionWord={copy.sectionWord}
        title={cat.label}
        subtitle={cat.subtitle}
        count={items.length}
      />

      <div className="mt-12 grid items-start gap-y-12 md:mt-16 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
        {items.map((item, idx) => {
          const pattern = idx % 3;
          const colClass =
            pattern === 0
              ? "md:col-span-7"
              : pattern === 1
                ? "md:col-span-5 md:col-start-8 md:mt-16"
                : "md:col-span-10 md:col-start-2";

          // Wide landscape frames — web mockups stay large and fully visible.
          const aspectClass = "aspect-[16/10]";

          return (
            <HaylerCard
              key={item.slug}
              project={item}
              lang={lang}
              aspectClass={aspectClass}
              reveal={pattern === 1 ? "clip" : "horizontal"}
              className={colClass}
            />
          );
        })}
      </div>
    </section>
  );
}

function BrandingSection({ items, lang }: { items: Project[]; lang: Locale }) {
  const cat = UI_COPY[lang].categories.branding;
  const copy = UI_COPY[lang].home;

  return (
    <section
      id="branding"
      data-header-theme="ink"
      className="tone-ink hayler-grid-bg px-[5vw] py-[14vh] md:py-[20vh]"
    >
      <SectionHeader
        number="03"
        sectionWord={copy.sectionWord}
        title={cat.label}
        subtitle={cat.subtitle}
        count={items.length}
      />

      <div className="mt-12 grid items-start gap-y-12 md:mt-16 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const colClass = isEven
            ? "md:col-span-7"
            : "md:col-span-5 md:col-start-8 md:mt-16";
          const aspectClass = "aspect-[16/10]";

          return (
            <HaylerCard
              key={item.slug}
              project={item}
              lang={lang}
              aspectClass={aspectClass}
              reveal={isEven ? "horizontal" : "clip"}
              className={colClass}
            />
          );
        })}
      </div>
    </section>
  );
}

function SeeAllWorksBanner({ total, lang }: { total: number; lang: Locale }) {
  const copy = UI_COPY[lang].home;

  return (
    <section
      data-header-theme="paper"
      className="hayler-grid-bg border-b border-[var(--c-line)] px-[5vw] py-[12vh] md:py-[16vh]"
    >
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <MagneticLink
          to="/work"
          strength={0.14}
          data-cursor="project"
          className="group inline-flex items-start gap-3 sm:gap-5"
        >
          <span className="text-[clamp(2.4rem,6.2vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1">
            {copy.seeAllProjects}
          </span>
          <span className="rounded-[3px] bg-[var(--c-accent)] px-2.5 py-1 text-[clamp(1rem,2vw,1.5rem)] font-semibold leading-none tracking-[-0.03em] text-[#0d0d0d]">
            {String(total).padStart(2, "0")}
          </span>
        </MagneticLink>

        <p className="max-w-xs text-[13px] leading-relaxed text-[var(--c-muted)]">{copy.seeAllDesc}</p>
      </div>
    </section>
  );
}
