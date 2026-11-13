import { useLanguage } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { site } from "../../data/site.ts";
import { MagneticLink } from "../navigation/MagneticLink.tsx";

export function Footer() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].footer;
  const navCopy = UI_COPY[lang].nav;

  return (
    <footer
      id="contact"
      data-header-theme="paper"
      className="hayler-grid-bg relative overflow-hidden border-t border-[var(--c-line)] px-[5vw] pb-10 pt-[14vh] md:pt-[18vh]"
    >
      <p className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--c-muted)]">
        <span className="h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
        <span>{copy.eyebrow}</span>
      </p>

      <h2 className="mt-6 max-w-[12ch] text-[clamp(3.2rem,10.5vw,9.6rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
        {copy.headlineLines.map((line, idx) => (
          <span key={line}>
            {line}
            {idx < copy.headlineLines.length - 1 ? <br /> : null}
          </span>
        ))}
      </h2>

      <div className="mt-16 grid gap-10 border-t border-[var(--c-line)] pt-10 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.directContact}</p>
          {site.email ? (
            <MagneticLink
              href={`mailto:${site.email}`}
              className="mt-2 text-2xl font-medium tracking-[-0.03em] md:text-4xl"
            >
              {site.email}
            </MagneticLink>
          ) : (
            <p className="mt-2 text-2xl font-medium tracking-[-0.03em] md:text-4xl">{copy.emailPending}</p>
          )}
          <p className="mt-3 text-[12px] text-[var(--c-muted)]">
            {site.location ?? copy.locationPending}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.disciplines}</p>
          <ul className="mt-3 space-y-1.5 text-[13px] text-[var(--c-muted)]">
            {copy.disciplinesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.sitemap}</p>
          <div className="mt-3 flex flex-col items-start gap-2 text-[13px] font-medium">
            <MagneticLink to="/">{navCopy.index}</MagneticLink>
            <MagneticLink to="/work">{navCopy.works}</MagneticLink>
            <MagneticLink to="/#editorial">{navCopy.editorial}</MagneticLink>
            <MagneticLink to="/about">{navCopy.studio}</MagneticLink>
          </div>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-between border-t border-[var(--c-line)] pt-6 text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
        <span>© {site.name}</span>
        <span>{copy.roleFooter}</span>
      </div>
    </footer>
  );
}
