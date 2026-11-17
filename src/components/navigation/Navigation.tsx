import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.tsx";
import type { Locale } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { site } from "../../data/site.ts";
import { cn } from "../../lib/cn.ts";
import { MagneticLink } from "./MagneticLink.tsx";

export function Navigation() {
  const { pathname, hash } = useLocation();
  const { lang, setLang } = useLanguage();
  const copy = UI_COPY[lang].nav;
  const [ink, setInk] = useState(pathname === "/");

  const evaluateTheme = useCallback(() => {
    const y = 36;
    const x = Math.round(window.innerWidth / 2);
    if (typeof document.elementsFromPoint === "function") {
      const stack = document.elementsFromPoint(x, y);
      for (const el of stack) {
        if (el.closest?.("header[data-site-nav], .cursor-ball, .grain")) continue;
        const themeNode = el.closest<HTMLElement>("[data-header-theme], .tone-ink");
        if (themeNode) {
          const theme = themeNode.getAttribute("data-header-theme");
          if (theme === "ink" || themeNode.classList.contains("tone-ink")) {
            setInk(true);
            return;
          }
          if (theme === "paper") {
            setInk(false);
            return;
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(evaluateTheme);

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-header-theme]"));
    const observer = new IntersectionObserver(
      () => evaluateTheme(),
      { rootMargin: "-4% 0px -90% 0px", threshold: [0, 0.25, 0.6, 1] },
    );
    nodes.forEach((node) => observer.observe(node));

    window.addEventListener("scroll", evaluateTheme, { passive: true });
    window.addEventListener("resize", evaluateTheme, { passive: true });
    window.addEventListener("ir-theme-change", evaluateTheme);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", evaluateTheme);
      window.removeEventListener("resize", evaluateTheme);
      window.removeEventListener("ir-theme-change", evaluateTheme);
    };
  }, [pathname, evaluateTheme]);

  const contactTo = `${pathname}#contact`;

  const navItems = [
    { label: copy.index, to: "/" },
    { label: copy.works, to: "/work" },
    { label: copy.studio, to: "/about" },
    { label: copy.contact, to: contactTo, isContact: true },
  ] as const;

  const scrollToContact = () => {
    const node = document.getElementById("contact");
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
      if (hash !== "#contact") {
        window.history.replaceState(null, "", contactTo);
      }
    }
  };

  return (
    <header
      data-site-nav
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex flex-col gap-2.5 px-4 py-3.5 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:px-[5vw] sm:py-5"
    >
      {/* Left: Brand Mark + Name (plus Mobile Language + CTA) */}
      <div className="flex items-center justify-between gap-2 sm:justify-start">
        <MagneticLink
          to="/"
          strength={0.22}
          className={cn(
            "pointer-events-auto inline-flex items-center gap-2.5 transition-colors duration-300",
            ink ? "text-[#f5f4f0]" : "text-[#0d0d0d]",
          )}
          aria-current={pathname === "/" && !hash ? "page" : undefined}
        >
          <BrandMark className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
          <span className="text-[14px] font-medium tracking-[-0.02em] sm:hidden xl:inline">
            {site.name}
          </span>
        </MagneticLink>

        {/* Mobile Language Switcher + CTA */}
        <div className="flex items-center gap-1.5 sm:hidden">
          <LanguageSwitch
            lang={lang}
            setLang={setLang}
            ink={ink}
            ariaLabel={copy.switchLangAria}
            compact
          />
          <MagneticLink
            to={contactTo}
            strength={0.18}
            onClick={scrollToContact}
            className={cn(
              "pointer-events-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[-0.01em] transition-colors duration-300",
              ink
                ? "border-white/20 bg-white/8 text-[#f5f4f0]"
                : "border-black/15 bg-black/4 text-[#0d0d0d]",
            )}
          >
            <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
            <span>{copy.letsTalk}</span>
          </MagneticLink>
        </div>
      </div>

      {/* Center: Hayler Floating Frosted Pill Nav */}
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto flex w-full items-center justify-between rounded-full border p-1 backdrop-blur-md transition-colors duration-300 sm:w-auto sm:justify-center sm:gap-0.5",
          ink
            ? "border-white/14 bg-[#141418]/65 text-[#f5f4f0]"
            : "border-black/10 bg-[#ebe9e3]/78 text-[#0d0d0d]",
        )}
      >
        {navItems.map((item) => {
          const isContact = "isContact" in item && item.isContact;
          const isCurrent = isContact
            ? hash === "#contact"
            : item.to === "/"
              ? pathname === "/" && !hash
              : item.to === "/work"
                ? (pathname === "/work" || pathname.startsWith("/work/")) && hash !== "#contact"
                : item.to === "/about"
                  ? pathname === "/about" && hash !== "#contact"
                  : false;

          return (
            <MagneticLink
              key={item.label}
              to={item.to}
              strength={0.18}
              onClick={isContact ? scrollToContact : undefined}
              aria-current={isCurrent ? "page" : undefined}
              className={cn(
                "rounded-full px-2.5 py-1.5 text-center text-[11px] font-medium tracking-[-0.01em] transition-all duration-250 sm:px-3.5 sm:py-1.5 sm:text-[12px] lg:px-4",
                isCurrent
                  ? ink
                    ? "bg-[#f5f4f0] text-[#0d0d0d]"
                    : "bg-[#0d0d0d] text-[#f5f4f0]"
                  : ink
                    ? "text-[#f5f4f0]/82 hover:text-[#f5f4f0]"
                    : "text-[#0d0d0d]/76 hover:text-[#0d0d0d]",
              )}
            >
              {item.label}
            </MagneticLink>
          );
        })}
      </nav>

      {/* Right: Language Switcher + Outlined Pill CTA ("Let's Talk" / "Hablemos") */}
      <div className="hidden sm:flex sm:items-center sm:justify-end sm:gap-2">
        <LanguageSwitch
          lang={lang}
          setLang={setLang}
          ink={ink}
          ariaLabel={copy.switchLangAria}
        />

        <MagneticLink
          to={contactTo}
          strength={0.22}
          onClick={scrollToContact}
          className={cn(
            "pointer-events-auto inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[12px] font-medium tracking-[-0.01em] backdrop-blur-sm transition-colors duration-300",
            ink
              ? "border-white/24 bg-white/[0.04] text-[#f5f4f0] hover:border-[var(--c-accent)]"
              : "border-black/18 bg-black/[0.02] text-[#0d0d0d] hover:border-[var(--c-accent)]",
          )}
        >
          <span className="h-2 w-2 rounded-[1.5px] bg-[var(--c-accent)]" />
          <span>{copy.letsTalk}</span>
        </MagneticLink>
      </div>
    </header>
  );
}

function LanguageSwitch({
  lang,
  setLang,
  ink,
  ariaLabel,
  compact = false,
}: {
  lang: Locale;
  setLang: (next: Locale) => void;
  ink: boolean;
  ariaLabel: string;
  compact?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "pointer-events-auto inline-flex items-center rounded-full border p-0.5 backdrop-blur-md transition-colors duration-300",
        ink
          ? "border-white/20 bg-[#141418]/55 text-[#f5f4f0]"
          : "border-black/14 bg-[#ebe9e3]/72 text-[#0d0d0d]",
      )}
    >
      {(["en", "es"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              "rounded-full uppercase tracking-[0.06em] font-medium transition-all duration-200",
              compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]",
              active
                ? ink
                  ? "bg-[#f5f4f0] text-[#0d0d0d]"
                  : "bg-[#0d0d0d] text-[#f5f4f0]"
                : ink
                  ? "text-[#f5f4f0]/65 hover:text-[#f5f4f0]"
                  : "text-[#0d0d0d]/60 hover:text-[#0d0d0d]",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1080 1080" fill="currentColor" aria-hidden="true" className={className}>
      <rect x="273.16" y="410.5" width="92.25" height="391.84" />
      <rect x="406" y="410.5" width="92.25" height="391.84" />
      <rect x="273.16" y="277.66" width="92.25" height="92.25" />
      <path d="M496.25,279.66v88.25h-88.25v-88.25h88.25M498.25,277.66h-92.25v92.25h92.25v-92.25h0Z" />
      <path d="M806.84,802.34l-115.29-176.66c55.74-32.25,93.26-92.48,93.26-161.51,0-103.01-83.51-186.52-186.52-186.52-2.61,0-7.79.11-7.79.11h-51.66v92.25s54.49-.11,55.92-.11c45.06,0,82.71,31.62,92.03,73.88,1.45,6.57,2.24,13.39,2.24,20.4s-.79,13.82-2.24,20.4c-9.32,42.26-46.98,73.88-92.03,73.88-1.43,0-2.85-.04-4.26-.11h0s-51.66,0-51.66,0v92.25s56.84.12,59.45.12c.12,0,.24,0,.36,0l101.66,151.65h106.52Z" />
    </svg>
  );
}
