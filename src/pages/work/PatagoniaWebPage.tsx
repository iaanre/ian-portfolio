import { getProject, mediaById } from "../../data/projects.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { HorizontalScroll } from "../../components/motion/HorizontalScroll.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function PatagoniaWebPage() {
  const { lang } = useLanguage();
  const project = getProject("patagonia-web");
  if (!project) return null;

  // Full site captures (no mockup) — horizontal carousel, same pattern as Patagonia catalog.
  const screens = [
    { id: "screen-home", label: "Home" },
    { id: "screen-02", label: "02" },
    { id: "screen-03", label: "03" },
    { id: "screen-04", label: "04" },
    { id: "screen-05", label: "05" },
    { id: "screen-06", label: "06" },
    { id: "screen-07", label: "07" },
    { id: "screen-contact", label: lang === "es" ? "Contacto" : "Contact" },
  ];

  const mockups = [
    { id: "mockup-devices", label: lang === "es" ? "Devices" : "Devices" },
    { id: "mockup-02", label: lang === "es" ? "Mockup" : "Mockup" },
  ];

  return (
    <CaseStudyLayout project={project}>
      <section data-header-theme="paper" className="px-[5vw] pt-[8vh] pb-[6vh] md:pt-[10vh] md:pb-[8vh]">
        <CaseStudyLabel>{lang === "es" ? "Resumen" : "Overview"}</CaseStudyLabel>
        <p className="mt-6 max-w-[40rem] text-[1.15rem] md:text-[1.3rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
          {lang === "es"
            ? "Desarrollo web de Patagonia CNC Machines: sitio B2B para automatización, corte láser, soldadura y plegado. Las pantallas van en carrusel horizontal; los mockups, aparte."
            : "Patagonia CNC Machines web development: a B2B site for automation, laser cutting, welding and bending. Screens in a horizontal carousel; mockups separately."}
        </p>
      </section>

      <section data-header-theme="paper" className="px-[5vw] pb-[4vh] md:pb-[5vh]">
        <AnimatedHeading
          as="h2"
          text={lang === "es" ? "Pantallas." : "Screens."}
          className="max-w-[12ch] text-[clamp(2rem,4.8vw,4rem)] font-bold leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-4 max-w-[36rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {lang === "es"
            ? "Capturas originales completas — deslizá el carrusel para ver cada pantalla."
            : "Full original captures — scroll the carousel to browse each screen."}
        </p>
      </section>

      <HorizontalScroll label={lang === "es" ? "Carrusel de pantallas web" : "Web screens carousel"}>
        {screens.map((item, index) => {
          const slot = mediaById(project, item.id);
          if (!slot?.src) return null;
          return (
            <div key={item.id} className="w-[86vw] shrink-0 md:w-[72vw]">
              <CaseStudyLabel className="mb-3 tracking-[0.18em]">
                {lang === "es" ? "Pantalla" : "Screen"} {String(index + 1).padStart(2, "0")} ·{" "}
                {item.label}
              </CaseStudyLabel>
              <div className="overflow-hidden bg-[var(--c-paper)]">
                <img
                  src={slot.src}
                  alt={slot.alt}
                  className="block h-auto max-h-[78svh] w-full object-contain object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          );
        })}
      </HorizontalScroll>

      <section data-header-theme="paper" className="px-[5vw] pt-[6vh] pb-[4vh] md:pt-[8vh] md:pb-[5vh]">
        <AnimatedHeading
          as="h2"
          text={lang === "es" ? "Mockups." : "Mockups."}
          className="max-w-[12ch] text-[clamp(2rem,4.8vw,4rem)] font-bold leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-4 max-w-[36rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {lang === "es"
            ? "Presentación sobre roca para el contexto industrial de la marca."
            : "Rock presentation for the brand’s industrial context."}
        </p>
      </section>

      <div className="flex flex-col gap-8 px-[5vw] pb-[16vh] md:gap-10 md:pb-[22vh]">
        {mockups.map((item, index) => (
          <div key={item.id}>
            <CaseStudyLabel className="mb-3 tracking-[0.18em]">
              Mockup {String(index + 1).padStart(2, "0")} · {item.label}
            </CaseStudyLabel>
            <CaseMedia project={project} slot={mediaById(project, item.id)} reveal="expand" />
          </div>
        ))}
      </div>
    </CaseStudyLayout>
  );
}
