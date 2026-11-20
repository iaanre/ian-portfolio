import { getProject } from "../../data/projects.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { SocialFeed } from "../../components/social/SocialSection.tsx";

export default function SocialPage() {
  const { lang } = useLanguage();
  const project = getProject("social");
  if (!project) return null;

  const social = UI_COPY[lang].social;

  return (
    <CaseStudyLayout project={project}>
      <section
        data-header-theme="paper"
        className="px-[5vw] pt-[6vh] pb-[4vh] md:pt-[8vh] md:pb-[5vh]"
      >
        <CaseStudyLabel>{lang === "es" ? "Resumen" : "Overview"}</CaseStudyLabel>
        <p className="mt-5 max-w-[40rem] text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)] md:text-[1.2rem]">
          {social.subtitle}
        </p>
      </section>

      <SocialFeed className="px-[5vw] pb-[12vh] md:pb-[16vh]" />
    </CaseStudyLayout>
  );
}
