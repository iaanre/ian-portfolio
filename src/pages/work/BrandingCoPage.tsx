import { getProject, mediaById } from "../../data/projects.ts";
import { localizeSectionBody, localizeSectionTitle } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { CaseStudySection } from "../../components/case-study/CaseStudySection.tsx";

export default function BrandingCoPage() {
  const { lang } = useLanguage();
  const project = getProject("brandingco");
  if (!project) return null;

  const title = (id: string, fallback: string) => localizeSectionTitle(id, fallback, lang);
  const body = (id: string) =>
    localizeSectionBody(project.sections.find((item) => item.id === id)?.body, lang);

  return (
    <CaseStudyLayout project={project}>
      <CaseStudySection id="overview" title={title("overview", "Overview")}>
        {body("overview")}
      </CaseStudySection>
      <div className="px-[5vw]">
        <CaseMedia project={project} slot={mediaById(project, "home")} reveal="vertical" />
      </div>
      <CaseStudySection id="challenge" title={title("challenge", "Challenge")}>
        {body("challenge")}
      </CaseStudySection>
      <CaseStudySection id="approach" title={title("approach", "Approach")}>
        {body("approach")}
      </CaseStudySection>
      <div className="relative px-[5vw] py-[6vh]">
        <div className="md:w-[86%]">
          <CaseMedia project={project} slot={mediaById(project, "page-02")} reveal="vertical" />
        </div>
        <div className="mt-8 md:ml-auto md:mt-[-12vh] md:w-[48%]">
          <CaseMedia project={project} slot={mediaById(project, "page-03")} reveal="horizontal" />
        </div>
      </div>
      <CaseStudySection id="pages" title={title("pages", "Website")}>
        {body("pages")}
      </CaseStudySection>
      <CaseStudySection id="visual" title={title("visual", "Visual System")}>
        {body("visual")}
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
