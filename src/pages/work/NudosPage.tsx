import { getProject, mediaById } from "../../data/projects.ts";
import { localizeSectionBody, localizeSectionTitle, UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { CaseStudySection } from "../../components/case-study/CaseStudySection.tsx";
import { KineticTypography } from "../../components/motion/KineticTypography.tsx";

export default function NudosPage() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("nudos");
  if (!project) return null;

  const title = (id: string, fallback: string) => localizeSectionTitle(id, fallback, lang);
  const body = (id: string) =>
    localizeSectionBody(project.sections.find((item) => item.id === id)?.body, lang);

  return (
    <CaseStudyLayout project={project}>
      <CaseStudySection id="overview" title={title("overview", "Overview")}>
        {body("overview")}
      </CaseStudySection>
      <section data-header-theme="ink" className="tone-ink py-[8vh]">
        <p className="px-[5vw] text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
          {copy.identityEyebrow}
        </p>
        <h2 className="mt-4 px-[5vw] text-[22vw] font-medium leading-[0.78] tracking-[-0.07em] md:text-[16vw]">
          NUDOS
        </h2>
      </section>
      <KineticTypography
        label={copy.nudosKineticLabel}
        primary={copy.nudosKineticPrimary}
        secondary="NUDOS  ·  NUDOS  ·  NUDOS  ·  "
        span="160vh"
      />
      <CaseStudySection id="challenge" title={title("challenge", "Challenge")}>
        {body("challenge")}
      </CaseStudySection>
      <CaseStudySection id="approach" title={title("approach", "Approach")}>
        {body("approach")}
      </CaseStudySection>
      <div className="grid gap-8 px-[5vw] md:grid-cols-12">
        <div className="md:col-span-7">
          <CaseMedia project={project} slot={mediaById(project, "site-01")} reveal="vertical" />
        </div>
        <div className="md:col-span-5 md:mt-[18vh]">
          <CaseMedia project={project} slot={mediaById(project, "site-02")} reveal="horizontal" />
        </div>
      </div>
      <CaseStudySection id="visual" title={title("visual", "Visual System")} dark>
        {body("visual")}
      </CaseStudySection>
      <div className="px-[5vw] py-[6vh]">
        <CaseMedia project={project} slot={mediaById(project, "brand-01")} reveal="clip" className="md:w-[42vw]" />
      </div>
      <CaseStudySection id="website" title={title("website", "Website")}>
        {body("website")}
      </CaseStudySection>
      <CaseStudySection id="process" title={title("process", "Process")}>
        {body("process")}
      </CaseStudySection>
      <CaseStudySection id="decisions" title={title("decisions", "Key Decisions")}>
        {body("decisions")}
      </CaseStudySection>
      <CaseStudySection id="outcome" title={title("outcome", "Final Outcome")}>
        {body("outcome")}
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
