import { getProject, mediaById } from "../../data/projects.ts";
import { nudosWebSectionBody } from "../../data/nudosWebCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { AnimatedHeading } from "../../components/motion/AnimatedHeading.tsx";

export default function NudosWebPage() {
  const { lang } = useLanguage();
  const project = getProject("nudos-web");
  if (!project) return null;

  const t = (id: string) => nudosWebSectionBody(id, lang) ?? "";

  const decisions =
    lang === "es"
      ? [
          {
            title: "Escala editorial",
            body: "Titulares a escala de estudio, no de template. El aire y la tipografía llevan la jerarquía.",
          },
          {
            title: "Monocromo",
            body: "Black, White, Surface. Sin acento en el chrome: el contraste hace el trabajo.",
          },
          {
            title: "CTA claro",
            body: "Hablemos / Contanos tu proyecto como píldoras sólidas—acción visible sin ruido.",
          },
          {
            title: "Una tipografía",
            body: "Metropolis de marca a producto, para que UI e identidad hablen con la misma voz.",
          },
        ]
      : [
          {
            title: "Editorial scale",
            body: "Studio-scale headlines, not template UI. Space and type carry hierarchy.",
          },
          {
            title: "Monochrome",
            body: "Black, White, Surface. No accent in chrome—contrast does the work.",
          },
          {
            title: "Clear CTAs",
            body: "Hablemos / Contanos tu proyecto as solid pills—visible action without noise.",
          },
          {
            title: "One type family",
            body: "Metropolis from brand to product so UI and identity share one voice.",
          },
        ];

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

      <NudosWebBoard
        label={lang === "es" ? "01 · Homepage" : "01 · Homepage"}
        title={lang === "es" ? "Experiencia principal." : "Primary experience."}
        body={t("home")}
        mediaId="site-home"
      />

      <NudosWebBoard
        label={lang === "es" ? "02 · Sistema" : "02 · System"}
        title={lang === "es" ? "Tipo, color y Nosotros." : "Type, color and About."}
        body={t("system")}
        mediaId="site-system"
      />

      <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
        <CaseStudyLabel>{lang === "es" ? "Decisiones" : "Decisions"}</CaseStudyLabel>
        <h2 className="mt-4 max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[0.92] tracking-[-0.045em]">
          {lang === "es" ? "Qué sostiene el sitio." : "What holds the site."}
        </h2>
        <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
          {t("decisions")}
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
          {decisions.map((item) => (
            <li key={item.title} className="border-t border-[var(--c-line)] pt-4">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">{item.title}</p>
              <p className="mt-2 text-[0.98rem] leading-[1.5] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <NudosWebBoard
        label={lang === "es" ? "03 · Proyectos" : "03 · Work"}
        title={lang === "es" ? "Portfolio como relato." : "Portfolio as narrative."}
        body={t("projects")}
        mediaId="site-projects"
      />

      <NudosWebBoard
        label={lang === "es" ? "04 · Contacto" : "04 · Contact"}
        title={lang === "es" ? "Cierre en oscuro." : "Close in dark."}
        body={t("contact")}
        mediaId="site-contact"
      />

      <NudosWebBoard
        label={lang === "es" ? "05 · Mobile" : "05 · Mobile"}
        title={lang === "es" ? "Misma voz, otro viewport." : "Same voice, new viewport."}
        body={t("mobile")}
        mediaId="site-mobile"
      />

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

function NudosWebBoard({
  label,
  title,
  body,
  mediaId,
}: {
  label: string;
  title: string;
  body: string;
  mediaId: string;
}) {
  const project = getProject("nudos-web");
  if (!project) return null;
  const slot = mediaById(project, mediaId);
  if (!slot?.src) return null;

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[10vh] md:pb-[14vh]">
      <CaseStudyLabel className="tracking-[0.18em]">{label}</CaseStudyLabel>
      <h2 className="mt-4 max-w-[18ch] text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold leading-[0.94] tracking-[-0.04em]">
        {title}
      </h2>
      <p className="mt-4 max-w-[38rem] text-[1.02rem] md:text-[1.08rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {body}
      </p>
      <div className="mt-8 md:mt-10">
        <CaseMedia project={project} slot={slot} reveal="expand" />
      </div>
    </section>
  );
}
