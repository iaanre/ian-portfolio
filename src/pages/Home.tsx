import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { UI_COPY } from "../data/i18n.ts";
import { HaylerHeroSlider } from "../components/hero/HaylerHeroSlider.tsx";
import { AnimatedHeading } from "../components/motion/AnimatedHeading.tsx";
import { KineticTypography } from "../components/motion/KineticTypography.tsx";
import { ProjectShowcase } from "../components/projects/ProjectShowcase.tsx";
import { MagneticLink } from "../components/navigation/MagneticLink.tsx";
import { Footer } from "../components/footer/Footer.tsx";

export default function Home() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].home;

  useEffect(() => {
    document.title = UI_COPY[lang].docTitleHome;
  }, [lang]);

  return (
    <>
      <HaylerHeroSlider />

      {/* Hayler Post-Hero Studio Statement */}
      <section
        data-header-theme="paper"
        className="hayler-grid-bg px-[5vw] pb-[14vh] pt-[16vh] md:pb-[18vh] md:pt-[22vh]"
      >
        <div className="w-full max-w-none">
          <AnimatedHeading
            as="h2"
            mode="line"
            text={copy.statementHeading}
            className="text-[clamp(1.55rem,calc(5.2vw+0.55rem),6.2rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
          />
        </div>

        <div className="mt-12 grid items-end gap-8 border-t border-[var(--c-line)] pt-10 md:mt-20 md:grid-cols-12">
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-4">
            <span className="h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
            <span>{copy.role}</span>
          </div>

          <div className="md:col-span-5">
            <p className="text-[clamp(1.05rem,1.4vw,1.3rem)] font-medium leading-[1.45] tracking-[-0.015em]">
              {copy.intro}
            </p>
          </div>

          <div className="md:col-span-3 md:flex md:justify-end">
            <MagneticLink
              to="/about"
              strength={0.2}
              className="inline-flex items-center gap-2.5 rounded-full border border-black/18 px-5 py-2.5 text-[12px] font-medium tracking-[-0.01em] transition-colors hover:border-[var(--c-accent)]"
            >
              <span>{copy.readMore}</span>
              <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
            </MagneticLink>
          </div>
        </div>
      </section>

      <KineticTypography
        label={copy.kineticLabel}
        primary={copy.kineticPrimary}
        secondary={copy.kineticSecondary}
        span="185vh"
      />

      {/* Categorized Sections: 01 Editorial, 02 Web & Product, 03 Brand Identity */}
      <ProjectShowcase />

      {/* Hayler Services, Skills & Expertise Strip */}
      <section
        data-header-theme="paper"
        className="hayler-grid-bg px-[5vw] py-[12vh] md:py-[16vh]"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)]">
              <span className="h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
              <span>{copy.capabilitiesEyebrow}</span>
            </p>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {copy.capabilitiesHeading}
            </h2>
          </div>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:col-span-8">
            {copy.capabilities.map((cap, idx) => (
              <li
                key={cap}
                className="flex items-baseline justify-between border-b border-[var(--c-line)] pb-3.5 pt-1"
              >
                <span className="text-[16px] font-medium tracking-[-0.02em] sm:text-[18px]">{cap}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
