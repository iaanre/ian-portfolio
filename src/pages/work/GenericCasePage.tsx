import { useParams } from "react-router-dom";
import { getProject } from "../../data/projects.ts";
import { localizeSectionBody, localizeSectionTitle } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { CaseStudySection } from "../../components/case-study/CaseStudySection.tsx";
import NotFound from "../NotFound.tsx";

export default function GenericCasePage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const extraMedia = project.media.slice(1);

  return (
    <CaseStudyLayout project={project}>
      {project.sections.map((section, idx) => (
        <div key={section.id}>
          <CaseStudySection
            id={section.id}
            title={localizeSectionTitle(section.id, section.title, lang)}
          >
            {localizeSectionBody(section.body, lang)}
          </CaseStudySection>

          {extraMedia[idx] ? (
            <div className="px-[5vw] py-[4vh]">
              <CaseMedia
                project={project}
                slot={extraMedia[idx]}
                reveal={idx % 2 === 0 ? "horizontal" : "vertical"}
              />
            </div>
          ) : null}
        </div>
      ))}
    </CaseStudyLayout>
  );
}
