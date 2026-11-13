import { useCallback } from "react";
import type { ComponentProps } from "react";
import { getProject, mediaById } from "../../data/projects.ts";
import { localizeSectionBody, localizeSectionTitle, UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { CaseStudySection } from "../../components/case-study/CaseStudySection.tsx";
import { PhoneFrame } from "../../components/media/PhoneFrame.tsx";
import { ProjectVisual } from "../../components/media/ProjectVisual.tsx";
import { PinnedSection } from "../../components/motion/PinnedSection.tsx";
import { usePrefers } from "../../hooks/usePrefers.ts";

const TAY_BODY_STYLE =
  "max-w-[42rem] text-[1.125rem] md:text-[1.2rem] leading-[1.68] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]";

const HEADING_LEAD =
  "text-[clamp(2.4rem,5.6vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.05em]";

const HEADING_SUB =
  "text-[clamp(1.9rem,4.2vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.04em]";

const HEADING_FINAL =
  "text-[clamp(2.6rem,6.4vw,5.8rem)] font-medium leading-[0.88] tracking-[-0.055em]";

export default function TayPage() {
  const { lang } = useLanguage();
  const project = getProject("tay");
  if (!project) return null;

  const title = (id: string, fallback: string) => localizeSectionTitle(id, fallback, lang);
  const body = (id: string) =>
    localizeSectionBody(project.sections.find((item) => item.id === id)?.body, lang);

  return (
    <CaseStudyLayout project={project}>
      {/* ── STAGE 1: CONTEXT ── */}
      <CaseStudySection
        id="overview"
        title={title("overview", "Overview")}
        className="pt-[8vh] md:pt-[10vh] pb-[5vh] md:pb-[6vh]"
        headingClassName={HEADING_LEAD}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("overview")}
      </CaseStudySection>

      <div className="px-[5vw] mb-[6vh] md:mb-[8vh]">
        <CaseMedia project={project} slot={mediaById(project, "flow")} reveal="horizontal" />
      </div>

      <CaseStudySection
        id="challenge"
        title={title("challenge", "Challenge")}
        className="pt-[4vh] md:pt-[5vh] pb-[2.5vh] md:pb-[3vh]"
        headingClassName={HEADING_SUB}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("challenge")}
      </CaseStudySection>

      <CaseStudySection
        id="role"
        title={title("role", "My Role")}
        className="pt-[2.5vh] md:pt-[3vh] pb-[9vh] md:pb-[13vh]"
        headingClassName={HEADING_SUB}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("role")}
      </CaseStudySection>

      {/* ── STAGE 2: THINKING ── */}
      <CaseStudySection
        id="thinking"
        title={title("thinking", "Product Thinking")}
        className="pt-[9vh] md:pt-[13vh] pb-[2.5vh] md:pb-[3vh]"
        headingClassName={HEADING_LEAD}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("thinking")}
      </CaseStudySection>

      <CaseStudySection
        id="ia"
        title={title("ia", "Information Architecture")}
        className="pt-[2.5vh] md:pt-[3vh] pb-[9vh] md:pb-[13vh]"
        headingClassName={HEADING_SUB}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("ia")}
      </CaseStudySection>

      {/* ── STAGE 3: EXPERIENCE ── */}
      <CaseStudySection
        id="ux"
        title={title("ux", "User Experience")}
        className="pt-[9vh] md:pt-[13vh] pb-[2.5vh] md:pb-[3vh]"
        headingClassName={HEADING_LEAD}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("ux")}
      </CaseStudySection>

      <CaseStudySection
        id="flows"
        title={title("flows", "Key User Flows")}
        className="pt-[2.5vh] md:pt-[3vh] pb-[6vh] md:pb-[8vh]"
        headingClassName={HEADING_SUB}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("flows")}
      </CaseStudySection>

      <div className="px-[5vw] pb-[6vh] md:pb-[8vh]">
        <CaseMedia project={project} slot={mediaById(project, "system")} reveal="vertical" />
      </div>

      <TayDevices />

      {/* ── STAGE 4: DESIGN ── */}
      <CaseStudySection
        id="ui"
        title={title("ui", "UI System")}
        className="pt-[10vh] md:pt-[14vh] pb-[2.5vh] md:pb-[3vh]"
        headingClassName={HEADING_LEAD}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("ui")}
      </CaseStudySection>

      <CaseStudySection
        id="mobile"
        title={title("mobile", "Mobile Experience")}
        className="pt-[2.5vh] md:pt-[3vh] pb-[2.5vh] md:pb-[3vh]"
        headingClassName={HEADING_SUB}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("mobile")}
      </CaseStudySection>

      <CaseStudySection
        id="decisions"
        title={title("decisions", "Key Decisions")}
        className="pt-[2.5vh] md:pt-[3vh] pb-[10vh] md:pb-[15vh]"
        headingClassName={HEADING_SUB}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("decisions")}
      </CaseStudySection>

      {/* ── STAGE 5: OUTCOME ── */}
      <CaseStudySection
        id="final"
        title={title("final", "Final Product")}
        className="pt-[10vh] md:pt-[14vh] pb-[4vh] md:pb-[6vh]"
        headingClassName={HEADING_FINAL}
        bodyClassName={TAY_BODY_STYLE}
      >
        {body("final")}
      </CaseStudySection>

      <div className="px-[4vw] md:px-[5vw] pb-[18vh] md:pb-[26vh]">
        <CaseMedia project={project} slot={mediaById(project, "walkthrough")} reveal="clip" />
      </div>
    </CaseStudyLayout>
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
  const screens = ["mobile-01", "mobile-02", "mobile-03"].map((id) => mediaById(project, id));

  const phones = screens.map((slot, index) => (
    <div key={slot.id} data-phone={index} className="shrink-0">
      <PhoneFrame
        label={`${copy.screenPrefix} 0${index + 1}`}
        className="w-[260px] sm:w-[270px] md:w-[240px] lg:w-[265px] xl:w-[290px] 2xl:w-[310px]"
      >
        <ProjectVisual project={project} slot={slot} />
      </PhoneFrame>
    </div>
  ));

  if (mobile || reduced) {
    return (
      <section className="px-[5vw] py-14" aria-label={copy.mobileSequence}>
        <p className="mb-8 text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">
          {copy.mobileSequence}
        </p>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none">{phones}</div>
      </section>
    );
  }

  return (
    <PinnedSection setup={setup} end="+=150%" className="overflow-hidden bg-[var(--c-paper)]">
      <div className="flex h-full flex-col justify-between px-[5vw] py-[5vh] md:py-[6vh]">
        <div className="flex items-start justify-between">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">
            {copy.mobileSequence}
          </p>
          <p className="max-w-[18ch] text-right text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
            {copy.screensPending}
          </p>
        </div>
        <div className="my-auto flex items-center justify-center">{phones}</div>
        <p className="max-w-sm text-sm text-[var(--c-muted)]">{copy.mobileReplaceNote}</p>
      </div>
    </PinnedSection>
  );
}
