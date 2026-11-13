import { getProject, mediaById } from "../../data/projects.ts";
import { localizeSectionBody, localizeSectionTitle, UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { CaseStudySection } from "../../components/case-study/CaseStudySection.tsx";
import { HorizontalScroll } from "../../components/motion/HorizontalScroll.tsx";

export default function PatagoniaPage() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const project = getProject("patagonia");
  if (!project) return null;

  const title = (id: string, fallback: string) => localizeSectionTitle(id, fallback, lang);
  const body = (id: string) =>
    localizeSectionBody(project.sections.find((item) => item.id === id)?.body, lang);
  const spreads = ["spread-01", "spread-02", "spread-03"].map((id) => mediaById(project, id));

  return (
    <CaseStudyLayout project={project}>
      <CaseStudySection id="overview" title={title("overview", "Overview")}>
        {body("overview")}
      </CaseStudySection>
      <CaseStudySection id="challenge" title={title("challenge", "Challenge")}>
        {body("challenge")}
      </CaseStudySection>
      <CaseStudySection id="approach" title={title("approach", "Approach")}>
        {body("approach")}
      </CaseStudySection>
      <HorizontalScroll label={copy.editorialSpreadsAria}>
        {spreads.map((slot, index) => (
          <div key={slot.id} className="w-[86vw] shrink-0 md:w-[68vw]">
            <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">
              {copy.spreadPrefix} 0{index + 1}
            </p>
            <CaseMedia project={project} slot={slot} reveal="horizontal" />
          </div>
        ))}
      </HorizontalScroll>
      <CaseStudySection id="catalog" title={title("catalog", "Catalog")}>
        {body("catalog")}
      </CaseStudySection>
      <div className="grid gap-8 px-[5vw] md:grid-cols-12">
        <div className="md:col-span-5">
          <CaseMedia project={project} slot={mediaById(project, "catalog")} reveal="vertical" />
        </div>
        <div className="md:col-span-6 md:col-start-7 md:mt-[12vh]">
          <CaseMedia project={project} slot={mediaById(project, "collateral")} reveal="clip" />
        </div>
      </div>
      <CaseStudySection id="editorial" title={title("editorial", "Editorial")}>
        {body("editorial")}
      </CaseStudySection>
      <CaseStudySection id="product" title={title("product", "Product Communication")}>
        {body("product")}
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
