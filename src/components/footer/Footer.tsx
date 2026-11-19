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
      className="relative overflow-hidden border-t border-[var(--c-line)] px-[5vw] pb-10 pt-10 md:pt-14"
    >
      {/* Equal 4 columns with the same padding from each divider */}
      <div className="grid gap-10 md:grid-cols-4 md:gap-0">
        <div className="md:pr-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.directContact}</p>
          <MagneticLink
            href={`mailto:${site.email}`}
            className="mt-2 text-2xl font-medium tracking-[-0.03em] transition-colors hover:text-[var(--c-accent)] md:text-[1.65rem] lg:text-4xl"
          >
            {site.email}
          </MagneticLink>
          <MagneticLink
            href={site.phoneHref}
            className="mt-2 block text-[1.05rem] font-medium tracking-[-0.02em] transition-colors hover:text-[var(--c-accent)] md:text-xl"
          >
            {site.phone}
          </MagneticLink>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-[var(--c-muted)]">
            {copy.locationAvailability}
          </p>
        </div>

        <div className="md:border-l md:border-[var(--c-line)] md:px-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.socialsLabel}</p>
          <div className="mt-3 flex flex-col items-start gap-2 text-[14px] font-medium">
            {site.socials.map((social) => (
              <MagneticLink
                key={social.label}
                href={social.href}
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--c-accent)]"
              >
                <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
                <span>{social.label} ↗</span>
              </MagneticLink>
            ))}
          </div>
        </div>

        <div className="md:border-l md:border-[var(--c-line)] md:px-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.disciplines}</p>
          <ul className="mt-3 space-y-1.5 text-[13px] text-[var(--c-muted)]">
            {copy.disciplinesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:border-l md:border-[var(--c-line)] md:pl-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--c-muted)]">{copy.sitemap}</p>
          <div className="mt-3 flex flex-col items-start gap-2 text-[13px] font-medium">
            <MagneticLink to="/">{navCopy.index}</MagneticLink>
            <MagneticLink to="/work">{navCopy.works}</MagneticLink>
            <MagneticLink to="/about">{navCopy.studio}</MagneticLink>
            <MagneticLink to="#contact">{navCopy.contact}</MagneticLink>
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
