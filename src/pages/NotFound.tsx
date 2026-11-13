import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.tsx";
import { UI_COPY } from "../data/i18n.ts";

export default function NotFound() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].notFound;

  useEffect(() => {
    document.title = UI_COPY[lang].docTitleNotFound;
  }, [lang]);

  return (
    <section data-header-theme="paper" className="flex min-h-[100svh] flex-col justify-end px-[5vw] pb-[10vh] pt-32">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">404</p>
      <h1 className="mt-4 max-w-[10ch] text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.86] tracking-[-0.06em]">
        {copy.heading}
      </h1>
      <Link to="/" className="mt-8 text-[11px] uppercase tracking-[0.18em]">
        {copy.backHome}
      </Link>
    </section>
  );
}
