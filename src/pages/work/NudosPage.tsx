import { getProject, mediaById } from "../../data/projects.ts";
import { nudosSectionBody } from "../../data/nudosCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { ImageReveal } from "../../components/motion/ImageReveal.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function NudosPage() {
  const { lang } = useLanguage();
  const project = getProject("nudos");
  if (!project) return null;

  const t = (id: string) => nudosSectionBody(id, lang) ?? "";

  return (
    <CaseStudyLayout project={project}>
      <section data-header-theme="paper" className="px-[5vw] pt-[8vh] pb-[4vh] md:pt-[10vh] md:pb-[5vh]">
        <CaseStudyLabel>{lang === "es" ? "Resumen" : "Overview"}</CaseStudyLabel>
        <p className="mt-6 max-w-[40rem] text-[1.15rem] md:text-[1.3rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
          {t("overview")}
        </p>
      </section>

      <section data-header-theme="paper" className="grid gap-8 px-[5vw] pb-[6vh] md:grid-cols-2 md:gap-10 md:pb-[8vh]">
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

      <section data-header-theme="paper" className="px-[5vw] py-[8vh] md:py-[10vh]">
        <AnimatedHeading
          as="h2"
          text={t("statement")}
          className="max-w-[16ch] text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.045em]"
        />
        <p className="mt-8 max-w-[36rem] text-[1.1rem] md:text-[1.2rem] leading-[1.65] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {t("statementBody")}
        </p>
      </section>

      <NudosMarkConcept />
      <NudosLockups />
      <NudosBrandBoards />
      <NudosTypeAndColor />
      <NudosRules />

      <section data-header-theme="paper" className="px-[5vw] pb-[14vh] md:pb-[20vh]">
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

function NudosMarkConcept() {
  const { lang } = useLanguage();
  const project = getProject("nudos");
  if (!project) return null;

  const markPos = mediaById(project, "logo-mark");
  const markNeg = mediaById(project, "logo-mark-neg");

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Isologo" : "Brand mark"}</CaseStudyLabel>
      <h2 className="mt-4 max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
        {lang === "es" ? "El nudo." : "The knot."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {nudosSectionBody("concept", lang)}
      </p>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-12 md:gap-5">
        <figure className="md:col-span-5">
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
            <div className="flex aspect-square items-center justify-center bg-[#EFEFED] px-[18%]">
              <img src={markPos.src} alt={markPos.alt} className="h-auto w-full object-contain" />
            </div>
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Positivo" : "Positive"}
          </figcaption>
        </figure>
        <figure className="md:col-span-5 md:col-start-7">
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
            <div className="flex aspect-square items-center justify-center bg-[#0A0A0A] px-[18%]">
              <img src={markNeg.src} alt={markNeg.alt} className="h-auto w-full object-contain" />
            </div>
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Negativo" : "Negative"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function NudosLockups() {
  const { lang } = useLanguage();
  const project = getProject("nudos");
  if (!project) return null;

  const horizontal = mediaById(project, "logo-horizontal");
  const horizontalNeg = mediaById(project, "logo-horizontal-neg");
  const vertical = mediaById(project, "logo-vertical");
  const verticalNeg = mediaById(project, "logo-vertical-neg");

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Lockups" : "Lockups"}</CaseStudyLabel>
      <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
        {lang === "es" ? "Horizontal y vertical." : "Horizontal and vertical."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {nudosSectionBody("lockups", lang)}
      </p>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-12 md:gap-5">
        <figure className="md:col-span-7">
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
            <div className="flex aspect-[16/9] items-center justify-center bg-[#EFEFED] px-[12%]">
              <img src={horizontal.src} alt={horizontal.alt} className="h-auto w-full max-w-[28rem] object-contain" />
            </div>
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Horizontal · positivo" : "Horizontal · positive"}
          </figcaption>
        </figure>
        <figure className="md:col-span-5">
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
            <div className="flex aspect-[16/9] items-center justify-center bg-[#0A0A0A] px-[14%] md:aspect-auto md:min-h-full md:py-[18%]">
              <img
                src={horizontalNeg.src}
                alt={horizontalNeg.alt}
                className="h-auto w-full max-w-[22rem] object-contain"
              />
            </div>
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Horizontal · negativo" : "Horizontal · negative"}
          </figcaption>
        </figure>
        <figure className="md:col-span-6">
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
            <div className="flex aspect-[4/5] items-center justify-center bg-[#EFEFED] px-[22%] py-[12%]">
              <img src={vertical.src} alt={vertical.alt} className="h-auto w-full max-w-[14rem] object-contain" />
            </div>
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Vertical · positivo" : "Vertical · positive"}
          </figcaption>
        </figure>
        <figure className="md:col-span-6">
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
            <div className="flex aspect-[4/5] items-center justify-center bg-[#0A0A0A] px-[22%] py-[12%]">
              <img
                src={verticalNeg.src}
                alt={verticalNeg.alt}
                className="h-auto w-full max-w-[14rem] object-contain"
              />
            </div>
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Vertical · negativo" : "Vertical · negative"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function NudosBrandBoards() {
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
      label: lang === "es" ? "Isologo · board" : "Brand mark · board",
      span: "md:col-span-12",
    },
  ] as const;

  return (
    <section
      data-header-theme="paper"
      className="px-[5vw] pb-[8vh] md:pb-[12vh]"
      aria-label={lang === "es" ? "Boards de marca NUDOS" : "NUDOS brand boards"}
    >
      <CaseStudyLabel>{lang === "es" ? "Sistema" : "System"}</CaseStudyLabel>
      <h2 className="mt-4 max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
        {lang === "es" ? "Marca en board." : "Brand on board."}
      </h2>

      <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-12 md:gap-5">
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
    </section>
  );
}

function NudosTypeAndColor() {
  const { lang } = useLanguage();

  const typeRows = [
    { label: "Wordmark", sample: "NUDOS", detail: "Metropolis · Bold · tracking amplio" },
    {
      label: lang === "es" ? "Descriptor" : "Descriptor",
      sample: "DESIGN & TECHNOLOGY",
      detail: lang === "es" ? "Metropolis · Regular · tracking al ancho" : "Metropolis · Regular · width-matched tracking",
    },
    {
      label: lang === "es" ? "UI / cuerpo" : "UI / body",
      sample: "Aa Bb Cc 123",
      detail: lang === "es" ? "Metropolis · Regular / Medium" : "Metropolis · Regular / Medium",
    },
  ] as const;

  const swatches = [
    { hex: "#0A0A0A", name: "Black" },
    { hex: "#FFFFFF", name: "White" },
    { hex: "#EFEFED", name: "Surface" },
  ] as const;

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <CaseStudyLabel>Type</CaseStudyLabel>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(1.8rem,3.8vw,2.8rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            Metropolis.
          </h2>
          <p className="mt-4 max-w-[32rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
            {nudosSectionBody("type", lang)}
          </p>
          <ul className="mt-8 space-y-5 border-t border-[var(--c-line)] pt-6">
            {typeRows.map((row) => (
              <li key={row.label} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
                  {row.label}
                </span>
                <div>
                  <p className="text-[1.35rem] font-bold tracking-[-0.03em] md:text-[1.55rem]">{row.sample}</p>
                  <p className="mt-1 text-[12px] text-[var(--c-muted)]">{row.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <CaseStudyLabel>Color</CaseStudyLabel>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(1.8rem,3.8vw,2.8rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            {lang === "es" ? "Tres valores." : "Three values."}
          </h2>
          <p className="mt-4 max-w-[32rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
            {nudosSectionBody("color", lang)}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {swatches.map((swatch) => (
              <div key={swatch.hex} className="overflow-hidden rounded-[1rem] border border-[var(--c-line)]">
                <div
                  className="aspect-[5/4]"
                  style={{
                    backgroundColor: swatch.hex,
                    boxShadow: swatch.hex === "#FFFFFF" ? "inset 0 0 0 1px rgba(0,0,0,0.06)" : undefined,
                  }}
                />
                <div className="flex flex-col gap-0.5 px-3 py-2.5">
                  <span className="text-[12px] font-medium tracking-[-0.01em]">{swatch.name}</span>
                  <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--c-muted)]">
                    {swatch.hex}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NudosRules() {
  const { lang } = useLanguage();

  const items =
    lang === "es"
      ? [
          { title: "Aire", body: "Clear space alrededor del isologo = grosor del trazo." },
          { title: "Color", body: "Solo negro o blanco. Sin outlines ni recolorados." },
          { title: "Proporción", body: "No estirar ni comprimir lockups ni mark." },
          { title: "Uso solo", body: "Isologo solo cuando el nombre ya está cerca en el layout." },
        ]
      : [
          { title: "Clear space", body: "Keep space around the mark equal to stroke thickness." },
          { title: "Color", body: "Black or white only. No outlines or recolors." },
          { title: "Proportion", body: "Never stretch or compress lockups or the mark." },
          { title: "Mark alone", body: "Use the mark alone only when the name is already nearby." },
        ];

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Uso" : "Usage"}</CaseStudyLabel>
      <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
        {lang === "es" ? "Reglas cortas." : "Short rules."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {nudosSectionBody("rules", lang)}
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
        {items.map((item) => (
          <li key={item.title} className="border-t border-[var(--c-line)] pt-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">{item.title}</p>
            <p className="mt-2 text-[0.98rem] leading-[1.5] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
