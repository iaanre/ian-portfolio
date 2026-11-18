import { getProject, mediaById } from "../../data/projects.ts";
import { UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseMediaGallery } from "../../components/case-study/CaseMediaGallery.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { HorizontalScroll } from "../../components/motion/HorizontalScroll.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function Catalog02Page() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("catalog-02");
  if (!project) return null;

  const pages = ["page-01", "page-02", "page-03", "page-04", "page-05", "page-06", "page-07", "page-08"].map(
    (id) => mediaById(project, id),
  );
  const mockupIds = ["mockup-01", "mockup-stack", "mockup-02", "mockup-03"] as const;

  return (
    <CaseStudyLayout project={project}>
      <section data-header-theme="paper" className="px-[5vw] pt-[6vh] pb-[4vh] md:pt-[8vh] md:pb-[5vh]">
        <CaseStudyLabel>{lang === "es" ? "Resumen" : "Overview"}</CaseStudyLabel>
        <p className="mt-5 max-w-[40rem] text-[1.1rem] md:text-[1.2rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
          {lang === "es"
            ? "Protocolo editorial de comunicación para Millbridge Health System: un documento de governance clínica que organiza intake, triage, escalamiento y cascada de decisiones en ciclos trimestrales de board."
            : "Editorial communication protocol for Millbridge Health System: a clinical-governance document that organizes intake, triage, escalation and decision cascading across quarterly board cycles."}
        </p>
      </section>

      <section data-header-theme="paper" className="px-[5vw] pb-[3vh] md:pb-[4vh]">
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
                <CaseMedia project={project} slot={mediaById(project, "mockup-01")} reveal="horizontal" />
              </div>
              <div className="md:col-span-5 md:mt-[6vh]">
                <CaseMedia project={project} slot={mediaById(project, "mockup-stack")} reveal="clip" />
              </div>
            </div>
            <div className="px-[5vw] pb-[5vh] md:pb-[7vh]">
              <CaseMedia project={project} slot={mediaById(project, "mockup-02")} reveal="vertical" />
            </div>
            <div className="px-[5vw] pb-[6vh] md:pb-[8vh]">
              <CaseMedia project={project} slot={mediaById(project, "mockup-03")} reveal="expand" />
            </div>
          </>
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

      <section data-header-theme="paper" className="px-[5vw] pt-[6vh] pb-[10vh] md:pt-[8vh] md:pb-[14vh]">
        <AnimatedHeading
          as="h2"
          text={lang === "es" ? "Resultado." : "Outcome."}
          className="max-w-[12ch] text-[clamp(2rem,4.8vw,4rem)] font-bold leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-5 max-w-[38rem] text-[1.05rem] md:text-[1.12rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_84%,transparent)]">
          {lang === "es"
            ? "Un protocolo impreso claro y usable: jerarquía tipográfica, diagramas de ritmo trimestral e iconografía geométrica alineada a Millbridge Health System."
            : "A clear, usable printed protocol: typographic hierarchy, quarterly-rhythm diagrams and geometric iconography aligned to Millbridge Health System."}
        </p>
      </section>
    </CaseStudyLayout>
  );
}
