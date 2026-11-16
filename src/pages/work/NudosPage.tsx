import { getProject, mediaById } from "../../data/projects.ts";
import { nudosSectionBody } from "../../data/nudosCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { ImageReveal } from "../../components/motion/ImageReveal.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function NudosPage() {
  const { lang } = useLanguage();
  const project = getProject("nudos");
  if (!project) return null;

  const overview = nudosSectionBody("overview", lang) ?? "";
  const statement = nudosSectionBody("statement", lang) ?? "";
  const statementBody = nudosSectionBody("statementBody", lang) ?? "";

  return (
    <CaseStudyLayout project={project}>
      <section data-header-theme="paper" className="px-[5vw] pt-[8vh] pb-[6vh] md:pt-[10vh] md:pb-[8vh]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
          {lang === "es" ? "Resumen" : "Overview"}
        </p>
        <p className="mt-6 max-w-[40rem] text-[1.15rem] md:text-[1.3rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
          {overview}
        </p>
      </section>

      <div className="px-[5vw] py-[6vh] md:py-[8vh]">
        <CaseMedia project={project} slot={mediaById(project, "site-home")} reveal="horizontal" />
      </div>

      <section data-header-theme="paper" className="px-[5vw] py-[10vh] md:py-[14vh]">
        <AnimatedHeading
          as="h2"
          text={statement}
          className="max-w-[16ch] text-[clamp(2.2rem,5.5vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-8 max-w-[36rem] text-[1.1rem] md:text-[1.2rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {statementBody}
        </p>
      </section>

      <div className="grid gap-8 px-[5vw] pb-[8vh] md:grid-cols-12 md:pb-[12vh]">
        <div className="md:col-span-7">
          <CaseMedia project={project} slot={mediaById(project, "site-system")} reveal="vertical" />
        </div>
        <div className="md:col-span-5 md:mt-[14vh]">
          <CaseMedia project={project} slot={mediaById(project, "site-contact")} reveal="horizontal" />
        </div>
      </div>

      <div className="px-[5vw] pb-[8vh] md:pb-[12vh]">
        <CaseMedia project={project} slot={mediaById(project, "site-projects")} reveal="clip" />
      </div>

      <div className="px-[5vw] pb-[8vh] md:pb-[12vh]">
        <CaseMedia project={project} slot={mediaById(project, "site-mobile")} reveal="horizontal" />
      </div>

      <section data-header-theme="paper" className="px-[5vw] pt-[4vh] pb-[4vh] md:pt-[8vh]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">
          {lang === "es" ? "Identidad" : "Identity"}
        </p>
        <h2 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,5vw,4.2rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          {lang === "es" ? "Marca y sistema." : "Brand and system."}
        </h2>
      </section>

      <NudosBrandSystem />
    </CaseStudyLayout>
  );
}

function NudosBrandSystem() {
  const { lang } = useLanguage();
  const project = getProject("nudos");
  if (!project) return null;

  const boards = [
    {
      id: "logo-board-positive",
      label: lang === "es" ? "Wordmark · positivo" : "Wordmark · positive",
      span: "md:col-span-6",
    },
    {
      id: "logo-board-negative",
      label: lang === "es" ? "Wordmark · negativo" : "Wordmark · negative",
      span: "md:col-span-6",
    },
    {
      id: "logo-board-icons",
      label: lang === "es" ? "Isologo" : "Brand mark",
      span: "md:col-span-12",
    },
  ] as const;

  const swatches = [
    { hex: "#0A0A0A", name: "Black" },
    { hex: "#FFFFFF", name: "White" },
    { hex: "#EFEFED", name: "Surface" },
  ] as const;

  return (
    <section
      className="px-[5vw] pb-[16vh] md:pb-[22vh]"
      aria-label={lang === "es" ? "Identidad de marca NUDOS" : "NUDOS brand identity"}
    >
      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
        {boards.map(({ id, label, span }) => {
          const slot = mediaById(project, id);
          return (
            <figure key={id} className={span}>
              <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
                <img
                  src={slot.src}
                  alt={slot.alt}
                  className="aspect-[4/3] w-full object-cover md:aspect-[16/11]"
                />
              </ImageReveal>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
                {label}
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="mt-8 md:mt-10">
        <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">Color</p>
        <div className="grid grid-cols-3 gap-3">
          {swatches.map((swatch) => (
            <div key={swatch.hex} className="overflow-hidden rounded-[1rem] border border-[var(--c-line)]">
              <div className="aspect-[5/3]" style={{ backgroundColor: swatch.hex }} />
              <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                <span className="text-[12px] font-medium tracking-[-0.01em]">{swatch.name}</span>
                <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--c-muted)]">
                  {swatch.hex}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
