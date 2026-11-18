import { getProject, mediaById } from "../../data/projects.ts";
import { UI_COPY } from "../../data/i18n.ts";
import { nexoSectionBody } from "../../data/nexoCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseMediaGallery } from "../../components/case-study/CaseMediaGallery.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { HorizontalScroll } from "../../components/motion/HorizontalScroll.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function NexoPage() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("queer");
  if (!project) return null;

  const t = (id: string) => nexoSectionBody(id, lang) ?? "";
  const pages = Array.from({ length: 24 }, (_, i) =>
    mediaById(project, `page-${String(i + 1).padStart(2, "0")}`),
  );
  const mockupIds = ["mockup-sumario", "mockup-stack", "mockup-resistencia", "mockup-interior"] as const;

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

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Mockups" : "Mockups"}
        </CaseStudyLabel>
      </section>

      <CaseMediaGallery
        label={lang === "es" ? "Galería de mockups" : "Mockup gallery"}
        slides={mockupIds.map((id) => (
          <CaseMedia key={id} project={project} slot={mediaById(project, id)} reveal="horizontal" />
        ))}
        desktop={
          <>
            <div className="grid gap-6 px-[5vw] pb-[5vh] md:grid-cols-12 md:gap-8 md:pb-[7vh]">
              <div className="md:col-span-7">
                <CaseMedia project={project} slot={mediaById(project, "mockup-sumario")} reveal="horizontal" />
              </div>
              <div className="md:col-span-5 md:mt-[6vh]">
                <CaseMedia project={project} slot={mediaById(project, "mockup-stack")} reveal="clip" />
              </div>
            </div>
            <div className="px-[5vw] pb-[5vh] md:pb-[7vh]">
              <CaseMedia project={project} slot={mediaById(project, "mockup-resistencia")} reveal="vertical" />
            </div>
            <div className="px-[5vw] pb-[6vh] md:pb-[8vh]">
              <CaseMedia project={project} slot={mediaById(project, "mockup-interior")} reveal="expand" />
            </div>
          </>
        }
      />

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Sumario" : "Contents"}
        </CaseStudyLabel>
      </section>

      <CaseMediaGallery
        label={lang === "es" ? "Sumario" : "Contents"}
        slides={[
          <CaseMedia key="indice-02" project={project} slot={mediaById(project, "indice-02")} reveal="clip" />,
          <CaseMedia key="indice-01" project={project} slot={mediaById(project, "indice-01")} reveal="clip" />,
        ]}
        desktop={
          <div className="grid gap-6 px-[5vw] pb-[5vh] md:grid-cols-2 md:gap-8 md:pb-[7vh]">
            <CaseMedia project={project} slot={mediaById(project, "indice-02")} reveal="clip" />
            <CaseMedia project={project} slot={mediaById(project, "indice-01")} reveal="clip" />
          </div>
        }
      />

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh]">
        <CaseStudyLabel className="tracking-[0.18em]">
          {lang === "es" ? "Hojas" : "Pages"}
        </CaseStudyLabel>
      </section>

      <HorizontalScroll label={copy.editorialSpreadsAria}>
        {pages.map((slot, index) => (
          <div key={slot.id} className="w-[62vw] shrink-0 md:w-[36vw]">
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
            {lang === "es" ? "Contratapa" : "Back cover"}
          </CaseStudyLabel>
          <div className="mt-4">
            <CaseMedia project={project} slot={mediaById(project, "back")} reveal="clip" />
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
      </section>
    </CaseStudyLayout>
  );
}
