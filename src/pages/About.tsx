import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { UI_COPY } from "../data/i18n.ts";
import { site } from "../data/site.ts";
import { Footer } from "../components/footer/Footer.tsx";
import { AnimatedHeading } from "../components/motion/AnimatedHeading.tsx";
import { MagneticLink } from "../components/navigation/MagneticLink.tsx";

export default function About() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].about;
  const homeCopy = UI_COPY[lang].home;

  useEffect(() => {
    document.title = UI_COPY[lang].docTitleAbout;
  }, [lang]);

  return (
    <>
      <article data-header-theme="paper" className="hayler-grid-bg px-[5vw] pb-[8vh] pt-32 md:pt-40">
        <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--c-muted)]">
          <span className="h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
          <span>{copy.eyebrow}</span>
        </p>
        <h1 className="mt-4 max-w-[12ch] text-[clamp(3.2rem,8vw,7.2rem)] font-medium leading-[0.86] tracking-[-0.06em]">
          {site.name}
        </h1>
        <AnimatedHeading
          as="h2"
          text={homeCopy.role}
          className="mt-8 max-w-[16ch] text-[clamp(1.8rem,4vw,3.4rem)] font-medium leading-[1] tracking-[-0.045em]"
        />

        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.introTitle}
          </h2>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed">{homeCopy.intro}</p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--c-muted)]">
              {copy.introPlaceholder}
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.experienceTitle}
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed md:col-span-7">
            {copy.experiencePlaceholder}
          </p>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.capabilitiesTitle}
          </h2>
          <ul className="md:col-span-8">
            {homeCopy.capabilities.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline justify-between gap-6 border-b border-[var(--c-line)] py-4 text-[clamp(1.4rem,3vw,2.3rem)] tracking-[-0.04em]"
              >
                <span>{item}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.toolsTitle}
          </h2>
          <ul className="grid gap-y-3 md:col-span-6">
            {site.tools.map((tool) => (
              <li key={tool} className="border-b border-[var(--c-line)] py-3 text-lg tracking-[-0.03em]">
                {tool}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.languagesTitle}
          </h2>
          <p className="md:col-span-6">
            {site.languages.length ? site.languages.join(" · ") : copy.languagesPlaceholder}
          </p>
        </section>

        <section id="about-contact" className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.contactTitle}
          </h2>
          <div className="md:col-span-6">
            <p className="text-2xl tracking-[-0.04em]">{site.email ?? copy.emailPending}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
              {site.location ?? copy.locationPending}
            </p>
            <MagneticLink to="/#contact" className="mt-8 text-[11px] uppercase tracking-[0.18em]">
              {copy.openingLink}
            </MagneticLink>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
