import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.tsx";
import { UI_COPY } from "../data/i18n.ts";
import { site } from "../data/site.ts";
import portrait from "../assets/about/ian-rebuffo.jpg";
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
      <article data-header-theme="paper" className="hayler-grid-bg px-[5vw] pb-[10vh] pt-32 md:pt-40">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="aspect-[4/5] w-full max-w-[280px] overflow-hidden md:max-w-none">
              <img
                src={portrait}
                alt={`${site.name} — ${homeCopy.role}`}
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--c-muted)]">
              <span className="h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
              <span>{copy.eyebrow}</span>
            </p>

            <h1 className="mt-4 max-w-[12ch] text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
              {site.name}
            </h1>

            <AnimatedHeading
              as="h2"
              text={homeCopy.role}
              className="mt-8 max-w-[20ch] text-[clamp(1.7rem,3.6vw,3.1rem)] font-medium leading-[1.04] tracking-[-0.04em]"
            />

            <p className="mt-5 text-[13px] font-medium tracking-[-0.01em] text-[var(--c-muted)] md:text-[14px]">
              {copy.availability}
            </p>
          </div>
        </div>

        {/* ── PROFILE / BIO ── */}
        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.introTitle}
          </h2>
          <div className="space-y-6 md:col-span-8">
            <p className="text-[clamp(1.1rem,1.6vw,1.35rem)] font-medium leading-[1.52] tracking-[-0.015em]">
              {copy.bioLead}
            </p>
            <p className="max-w-2xl text-[15px] leading-[1.7] text-[var(--c-muted)] md:text-[16px]">
              {copy.bioSecondary}
            </p>
          </div>
        </section>

        {/* ── WORK EXPERIENCE ── */}
        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.experienceTitle}
          </h2>
          <div className="divide-y divide-[var(--c-line)] md:col-span-9">
            {copy.experience.map((job, idx) => (
              <div
                key={`${job.company}-${job.period}-${idx}`}
                className={idx === 0 ? "pb-8" : "py-8"}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold leading-tight tracking-[-0.03em]">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-[14px] font-medium text-[var(--c-ink)]/85">
                      <span className="inline-block h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
                      <span>{job.company}</span>
                    </p>
                  </div>
                  <span className="shrink-0 text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--c-muted)]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.68] text-[var(--c-muted)] md:text-[15.5px]">
                  {job.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION & TRAINING ── */}
        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.educationTitle}
          </h2>
          <div className="divide-y divide-[var(--c-line)] md:col-span-9">
            {copy.education.map((edu, idx) => (
              <div key={edu.title} className={idx === 0 ? "pb-6" : "py-6"}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-[18px] font-semibold tracking-[-0.025em] md:text-[20px]">
                    {edu.title}
                  </h3>
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--c-muted)]">
                    {edu.year}
                  </span>
                </div>
                <p className="mt-1 text-[14px] font-medium text-[var(--c-ink)]/80">{edu.institution}</p>
                {edu.detail ? (
                  <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-[var(--c-muted)]">
                    {edu.detail}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.capabilitiesTitle}
          </h2>
          <ul className="md:col-span-9">
            {homeCopy.capabilities.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline justify-between gap-6 border-b border-[var(--c-line)] py-4 text-[clamp(1.3rem,2.6vw,2.1rem)] font-medium tracking-[-0.035em]"
              >
                <span>{item}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── TOOLS & TECHNOLOGIES ── */}
        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.toolsTitle}
          </h2>
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-9">
            {copy.toolGroups.map((group) => (
              <div key={group.category}>
                <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--c-muted)]">
                  <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
                  <span>{group.category}</span>
                </p>
                <ul className="mt-4 divide-y divide-[var(--c-line)]">
                  {group.items.map((tool) => (
                    <li key={tool} className="py-2.5 text-[15px] font-medium tracking-[-0.02em]">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── LANGUAGES ── */}
        <section className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.languagesTitle}
          </h2>
          <div className="flex flex-wrap gap-10 md:col-span-9">
            {copy.languagesList.map((item) => (
              <div key={item.name}>
                <p className="text-[18px] font-semibold tracking-[-0.02em]">{item.name}</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
                  {item.level}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIRECT CONTACT & PROFILES ── */}
        <section id="about-contact" className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:grid-cols-12">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            {copy.contactTitle}
          </h2>
          <div className="md:col-span-9">
            <MagneticLink
              href={`mailto:${site.email}`}
              className="text-[clamp(1.5rem,3vw,2.4rem)] font-medium tracking-[-0.035em] transition-colors hover:text-[var(--c-accent)]"
            >
              {site.email}
            </MagneticLink>
            <p className="mt-3 text-[13px] text-[var(--c-muted)]">{copy.availability}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {site.socials.map((social) => (
                <MagneticLink
                  key={social.label}
                  href={social.href}
                  strength={0.2}
                  className="inline-flex items-center gap-2 rounded-full border border-black/16 px-4 py-2 text-[12px] font-medium tracking-[-0.01em] transition-colors hover:border-[var(--c-accent)]"
                >
                  <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
                  <span>{social.label} ↗</span>
                </MagneticLink>
              ))}
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
