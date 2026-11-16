import { useCallback } from "react";
import type { ComponentProps } from "react";
import { getProject, mediaById } from "../../data/projects.ts";
import { UI_COPY } from "../../data/i18n.ts";
import { taySectionBody } from "../../data/tayCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { PhoneFrame } from "../../components/media/PhoneFrame.tsx";
import { ProjectVisual } from "../../components/media/ProjectVisual.tsx";
import { ImageReveal } from "../../components/motion/ImageReveal.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";
import { PinnedSection } from "../../components/motion/PinnedSection.tsx";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

export default function TayPage() {
  const { lang } = useLanguage();
  const project = getProject("tay");
  if (!project) return null;

  const overview = taySectionBody("overview", lang) ?? "";
  const statement = taySectionBody("statement", lang) ?? "";
  const statementBody = taySectionBody("statementBody", lang) ?? "";

  return (
    <CaseStudyLayout project={project}>
      {/* Short overview — Hayler-simple, not a section list */}
      <section data-header-theme="paper" className="px-[5vw] pt-[8vh] pb-[6vh] md:pt-[10vh] md:pb-[8vh]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
          {lang === "es" ? "Resumen" : "Overview"}
        </p>
        <p className="mt-6 max-w-[40rem] text-[1.15rem] md:text-[1.3rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
          {overview}
        </p>
      </section>

      <TayOverviewFlow />

      {/* One big statement — not five essay blocks */}
      <section data-header-theme="paper" className="px-[5vw] py-[10vh] md:py-[14vh]">
        <AnimatedHeading
          as="h2"
          text={statement}
          className="max-w-[18ch] text-[clamp(2.2rem,5.5vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-8 max-w-[36rem] text-[1.1rem] md:text-[1.2rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {statementBody}
        </p>
      </section>

      <TayDevices />

      <TayFeatureGrid />

      <section data-header-theme="paper" className="px-[5vw] pt-[8vh] pb-[4vh] md:pt-[12vh]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
          {lang === "es" ? "Identidad" : "Identity"}
        </p>
        <h2 className="mt-4 max-w-[12ch] text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          {lang === "es" ? "Marca y sistema." : "Brand and system."}
        </h2>
      </section>

      <TayBrandSystem />

      <section data-header-theme="paper" className="px-[5vw] pt-[6vh] pb-[4vh] md:pt-[10vh]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
          {lang === "es" ? "Producto" : "Product"}
        </p>
        <h2 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          {lang === "es" ? "La app, cerrada." : "The app, complete."}
        </h2>
      </section>

      <div className="px-[4vw] md:px-[5vw] pb-[18vh] md:pb-[26vh]">
        <CaseMedia project={project} slot={mediaById(project, "final")} reveal="clip" />
      </div>
    </CaseStudyLayout>
  );
}

function TayBrandSystem() {
  const { lang } = useLanguage();
  const project = getProject("tay");
  if (!project) return null;

  const boards = [
    {
      id: "logo-board-positive",
      label: lang === "es" ? "Wordmark · positivo" : "Wordmark · positive",
      span: "md:col-span-6",
    },
    {
      id: "logo-board-negative",
      label: lang === "es" ? "Wordmark · negativo" : "Wordmark · negative",
      span: "md:col-span-6",
    },
    {
      id: "logo-board-icons",
      label: "App icons",
      span: "md:col-span-12",
    },
  ] as const;

  return (
    <section
      className="px-[5vw] pb-[8vh] md:pb-[12vh]"
      aria-label={lang === "es" ? "Identidad de marca TAY" : "TAY brand identity"}
    >
      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
        {boards.map(({ id, label, span }) => {
          const slot = mediaById(project, id);
          return (
            <figure key={id} className={span}>
              <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
                <img
                  src={slot.src}
                  alt={slot.alt}
                  className="aspect-[4/3] w-full object-cover md:aspect-[16/11]"
                />
              </ImageReveal>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
                {label}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <TayColorRow />
    </section>
  );
}

function TayColorRow() {
  const { lang } = useLanguage();
  const swatches = [
    { hex: "#FF570B", name: "Signal Orange" },
    { hex: "#2C343B", name: "Charcoal" },
    { hex: "#0A0A0A", name: "Ink" },
    { hex: "#F5F5F5", name: "Paper" },
  ] as const;

  return (
    <div className="mt-8 md:mt-10">
      <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
        {lang === "es" ? "Color" : "Color"}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((swatch) => (
          <div key={swatch.hex} className="overflow-hidden rounded-[1rem] border border-[var(--c-line)]">
            <div className="aspect-[5/3]" style={{ backgroundColor: swatch.hex }} />
            <div className="flex items-center justify-between gap-2 px-3 py-2.5">
              <span className="text-[12px] font-medium tracking-[-0.01em]">{swatch.name}</span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--c-muted)]">
                {swatch.hex}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TayOverviewFlow() {
  const { lang } = useLanguage();
  const project = getProject("tay");
  if (!project) return null;

  const journey = [
    { id: "mobile-01", label: "Marketplace", step: "01" },
    { id: "mobile-03", label: lang === "es" ? "Búsqueda" : "Search", step: "02" },
    { id: "mobile-02", label: lang === "es" ? "Detalle" : "Detail", step: "03" },
    { id: "mobile-05", label: "Chat", step: "04" },
  ] as const;

  return (
    <section
      className="mb-[4vh] px-[5vw] md:mb-[6vh]"
      aria-label={lang === "es" ? "Recorrido del producto" : "Product journey"}
    >
      <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-none md:gap-6 md:overflow-visible md:justify-between">
        {journey.map(({ id, label, step }) => {
          const slot = mediaById(project, id);
          return (
            <div key={id} className="shrink-0 md:flex-1 md:max-w-[220px] lg:max-w-[240px]">
              <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[var(--c-muted)]">
                {step} · {label}
              </p>
              <PhoneFrame className="w-[200px] sm:w-[210px] md:w-full">
                <ProjectVisual project={project} slot={slot} className="object-top" />
              </PhoneFrame>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TayFeatureGrid() {
  const { lang } = useLanguage();
  const project = getProject("tay");
  if (!project) return null;

  const features = [
    {
      id: "mobile-04",
      title: lang === "es" ? "Publicar" : "Publish",
    },
    {
      id: "mobile-06",
      title: lang === "es" ? "Perfil" : "Profile",
    },
    {
      id: "mobile-07",
      title: lang === "es" ? "Guardados" : "Saved",
    },
  ] as const;

  return (
    <section
      className="px-[5vw] py-[8vh] md:py-[12vh]"
      aria-label={lang === "es" ? "Experiencia mobile" : "Mobile experience"}
    >
      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {features.map(({ id, title }, index) => {
          const slot = mediaById(project, id);
          return (
            <figure key={id} className={cn(index === 1 && "md:mt-14")}>
              <ImageReveal variant="vertical" className="mx-auto w-[min(260px,72vw)] md:w-full md:max-w-[280px]">
                <PhoneFrame className="w-full" label={title}>
                  <ProjectVisual project={project} slot={slot} className="object-top" />
                </PhoneFrame>
              </ImageReveal>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

function TayDevices() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("tay");
  const { mobile, reduced } = usePrefers();
  const setup: NonNullable<ComponentProps<typeof PinnedSection>["setup"]> = useCallback((timeline) => {
    timeline
      .to("[data-phone='0']", { xPercent: -55, yPercent: 4.5, rotate: -6 }, 0)
      .to("[data-phone='1']", { yPercent: -5.5, scale: 1.05 }, 0)
      .to("[data-phone='2']", { xPercent: 55, yPercent: 5.5, rotate: 6 }, 0);
  }, []);

  if (!project) return null;
  const screens = ["mobile-01", "mobile-02", "mobile-05"].map((id) => mediaById(project, id));

  const phones = screens.map((slot, index) => (
    <div key={slot.id} data-phone={index} className="shrink-0">
      <PhoneFrame
        className="w-[260px] sm:w-[270px] md:w-[240px] lg:w-[265px] xl:w-[290px] 2xl:w-[310px]"
      >
        <ProjectVisual project={project} slot={slot} className="object-top" />
      </PhoneFrame>
    </div>
  ));

  if (mobile || reduced) {
    return (
      <section className="px-[5vw] py-14" aria-label={copy.mobileSequence}>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none">{phones}</div>
      </section>
    );
  }

  return (
    <PinnedSection setup={setup} end="+=140%" className="overflow-hidden bg-[var(--c-paper)]">
      <div className="flex h-full flex-col justify-center px-[5vw] py-[5vh]">
        <div className="flex items-center justify-center">{phones}</div>
      </div>
    </PinnedSection>
  );
}
