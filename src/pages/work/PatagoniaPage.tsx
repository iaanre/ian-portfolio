import { getProject, mediaById } from "../../data/projects.ts";
import { UI_COPY } from "../../data/i18n.ts";
import { patagoniaSectionBody } from "../../data/patagoniaCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseMediaGallery } from "../../components/case-study/CaseMediaGallery.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { HorizontalScroll } from "../../components/motion/HorizontalScroll.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function PatagoniaPage() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("patagonia");
  if (!project) return null;

  const t = (id: string) => patagoniaSectionBody(id, lang) ?? "";
  const spreads = ["spread-01", "spread-02", "spread-03"].map((id) => mediaById(project, id));

  return (
    <CaseStudyLayout project={project}>
      <section data-header-theme="paper" className="px-[5vw] pt-[6vh] pb-[4vh] md:pt-[8vh] md:pb-[5vh]">
        <CaseStudyLabel>{lang === "es" ? "Resumen" : "Overview"}</CaseStudyLabel>
        <p className="mt-5 max-w-[40rem] text-[1.1rem] md:text-[1.2rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
          {t("overview")}
        </p>
      </section>

      <section data-header-theme="paper" className="grid gap-8 px-[5vw] pb-[5vh] md:grid-cols-2 md:gap-10 md:pb-[6vh]">
        <div>
          <CaseStudyLabel className="tracking-[0.18em]">
            {lang === "es" ? "Desafío" : "Challenge"}
          </CaseStudyLabel>
          <p className="mt-3 max-w-[34rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
            {t("challenge")}
          </p>
        </div>
        <div>
          <CaseStudyLabel className="tracking-[0.18em]">
            {lang === "es" ? "Enfoque" : "Approach"}
          </CaseStudyLabel>
          <p className="mt-3 max-w-[34rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
            {t("approach")}
          </p>
        </div>
      </section>

      <HorizontalScroll label={copy.editorialSpreadsAria}>
        {spreads.map((slot, index) => (
          <div key={slot.id} className="w-[86vw] shrink-0 md:w-[68vw]">
            <CaseStudyLabel className="mb-3 tracking-[0.18em]">
              {copy.spreadPrefix} 0{index + 1}
            </CaseStudyLabel>
            <CaseMedia project={project} slot={slot} reveal="horizontal" />
          </div>
        ))}
      </HorizontalScroll>

      <section data-header-theme="paper" className="px-[5vw] pt-[5vh] pb-[3vh] md:pt-[6vh] md:pb-[4vh]">
        <CaseStudyLabel>{lang === "es" ? "Catálogo" : "Catalog"}</CaseStudyLabel>
        <p className="mt-4 max-w-[38rem] text-[1.05rem] md:text-[1.12rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_84%,transparent)]">
          {t("catalog")}
        </p>
      </section>

      <CaseMediaGallery
        label={lang === "es" ? "Catálogo y piezas" : "Catalog and collateral"}
        slides={[
          <CaseMedia key="catalog" project={project} slot={mediaById(project, "catalog")} reveal="vertical" />,
          <CaseMedia key="collateral" project={project} slot={mediaById(project, "collateral")} reveal="clip" />,
        ]}
        desktop={
          <div className="grid gap-6 px-[5vw] pb-[5vh] md:grid-cols-12 md:gap-8 md:pb-[7vh]">
            <div className="md:col-span-5">
              <CaseMedia project={project} slot={mediaById(project, "catalog")} reveal="vertical" />
            </div>
            <div className="md:col-span-6 md:col-start-7 md:mt-[6vh]">
              <CaseMedia project={project} slot={mediaById(project, "collateral")} reveal="clip" />
            </div>
          </div>
        }
      />

      <section data-header-theme="paper" className="px-[5vw] pb-[5vh] md:pb-[7vh]">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <CaseStudyLabel className="tracking-[0.18em]">
              {lang === "es" ? "Editorial" : "Editorial"}
            </CaseStudyLabel>
            <p className="mt-3 max-w-[34rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
              {t("editorial")}
            </p>
          </div>
          <div>
            <CaseStudyLabel className="tracking-[0.18em]">
              {lang === "es" ? "Producto" : "Product"}
            </CaseStudyLabel>
            <p className="mt-3 max-w-[34rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
              {t("product")}
            </p>
          </div>
        </div>
      </section>

      <section data-header-theme="paper" className="px-[5vw] pb-[10vh] md:pb-[14vh]">
        <AnimatedHeading
          as="h2"
          text={lang === "es" ? "Resultado." : "Outcome."}
          className="max-w-[12ch] text-[clamp(2rem,4.8vw,4rem)] font-bold leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-5 max-w-[38rem] text-[1.05rem] md:text-[1.12rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_84%,transparent)]">
          {t("outcome")}
        </p>
        <p className="mt-4 max-w-[38rem] text-[0.95rem] md:text-[1.02rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_72%,transparent)]">
          {t("decisions")}
        </p>
      </section>
    </CaseStudyLayout>
  );
}
