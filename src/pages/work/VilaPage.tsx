import { getProject, mediaById } from "../../data/projects.ts";
import { UI_COPY } from "../../data/i18n.ts";
import { vilaSectionBody } from "../../data/vilaCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { HorizontalScroll } from "../../components/motion/HorizontalScroll.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function VilaPage() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("editorial-02");
  if (!project) return null;

  const t = (id: string) => vilaSectionBody(id, lang) ?? "";
  const mockups = [
    "mockup-spread-01",
    "mockup-edge",
    "mockup-planos",
    "mockup-spread-02",
    "mockup-stack",
    "mockup-angle",
  ].map((id) => mediaById(project, id));
  const pages = ["page-03", "page-04", "page-05", "page-08", "page-11", "page-21", "page-22", "page-35"].map(
    (id) => mediaById(project, id),
  );

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

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh] md:pb-[4vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Mockups" : "Mockups"}
        </CaseStudyLabel>
        <p className="mt-3 max-w-[36rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {lang === "es"
            ? "Piezas presentadas sobre piedra y vegetación, en el mismo clima visual de la portada."
            : "Pieces presented on stone and foliage, matching the cover’s natural atmosphere."}
        </p>
      </section>

      <div className="px-[5vw] pb-[5vh] md:pb-[7vh]">
        <CaseStudyLabel className="mb-3 tracking-[0.18em]">
          {lang === "es" ? "Doble página" : "Spread"}
        </CaseStudyLabel>
        <CaseMedia project={project} slot={mediaById(project, "mockup-spread-01")} reveal="expand" />
      </div>

      <div className="grid gap-6 px-[5vw] pb-[5vh] md:grid-cols-12 md:gap-8 md:pb-[7vh]">
        <div className="md:col-span-7">
          <CaseStudyLabel className="mb-3 tracking-[0.18em]">
            {lang === "es" ? "Certificación EDGE" : "EDGE Certification"}
          </CaseStudyLabel>
          <p className="mb-4 max-w-[34rem] text-[0.95rem] md:text-[1.02rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_78%,transparent)]">
            {t("edge")}
          </p>
          <CaseMedia project={project} slot={mediaById(project, "mockup-edge")} reveal="horizontal" />
        </div>
        <div className="md:col-span-5 md:mt-[8vh]">
          <CaseMedia project={project} slot={mediaById(project, "mockup-stack")} reveal="clip" />
        </div>
      </div>

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Planos" : "Plans"}
        </CaseStudyLabel>
        <p className="mt-3 max-w-[38rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {t("plans")}
        </p>
      </section>

      <div className="px-[5vw] pb-[5vh] md:pb-[7vh]">
        <CaseMedia project={project} slot={mediaById(project, "mockup-planos")} reveal="vertical" />
      </div>

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Unidades" : "Units"}
        </CaseStudyLabel>
        <p className="mt-3 max-w-[38rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {t("product")}
        </p>
      </section>

      <div className="grid gap-6 px-[5vw] pb-[6vh] md:grid-cols-12 md:gap-8 md:pb-[8vh]">
        <div className="md:col-span-5">
          <CaseMedia project={project} slot={mediaById(project, "mockup-angle")} reveal="clip" />
        </div>
        <div className="md:col-span-7 md:mt-[4vh]">
          <CaseMedia project={project} slot={mediaById(project, "mockup-spread-02")} reveal="expand" />
        </div>
      </div>

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Hojas" : "Pages"}
        </CaseStudyLabel>
      </section>

      <HorizontalScroll label={copy.editorialSpreadsAria}>
        {pages.map((slot, index) => (
          <div key={slot.id} className="w-[78vw] shrink-0 md:w-[52vw]">
            <CaseStudyLabel className="mb-3 tracking-[0.18em]">
              {copy.spreadPrefix} {String(index + 1).padStart(2, "0")}
            </CaseStudyLabel>
            <CaseMedia project={project} slot={slot} reveal="horizontal" />
          </div>
        ))}
      </HorizontalScroll>

      <section data-header-theme="paper" className="grid gap-8 px-[5vw] pt-[6vh] pb-[5vh] md:grid-cols-2 md:gap-10 md:pt-[8vh] md:pb-[7vh]">
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
            {lang === "es" ? "Decisiones" : "Decisions"}
          </CaseStudyLabel>
          <p className="mt-3 max-w-[34rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
            {t("decisions")}
          </p>
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {mockups.slice(0, 3).map((slot) => (
            <CaseMedia key={slot.id} project={project} slot={slot} reveal="clip" />
          ))}
        </div>
      </section>
    </CaseStudyLayout>
  );
}
