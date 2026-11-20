import type { CSSProperties } from "react";
import { SOCIAL_BRANDS } from "../../data/socialMedia.ts";
import { UI_COPY } from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { cn } from "../../lib/cn.ts";

/**
 * Logos in src/assets/social/logos/ — fuzzy match on brand keywords.
 */
const logoModules = import.meta.glob("../../assets/social/logos/*.{png,svg,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const LOGO_ALIASES: Record<string, string[]> = {
  vitrium: ["vitrium"],
  "patagonia-cnc": ["patagonia"],
  btec: ["btec"],
  "perfect-welding": ["perfect", "welding"],
};

/** Optical scale — desktop / mobile (2×2). */
const LOGO_SCALE: Record<string, { desktop: number; mobile: number }> = {
  vitrium: { desktop: 1.05, mobile: 1.05 },
  "patagonia-cnc": { desktop: 1.1, mobile: 1.08 },
  btec: { desktop: 1.38, mobile: 1.4 },
  "perfect-welding": { desktop: 1.1, mobile: 0.9 },
};

function logoFor(brandId: string): string | undefined {
  const aliases = LOGO_ALIASES[brandId] ?? [brandId];
  const entries = Object.entries(logoModules).filter(([path]) => {
    const file = (path.split(/[/\\]/).pop() ?? "").toLowerCase();
    return Boolean(file) && !file.startsWith(".");
  });

  const exact = entries.find(([path]) => {
    const file = (path.split(/[/\\]/).pop() ?? "").toLowerCase();
    return aliases.every((alias) => file.includes(alias.toLowerCase()));
  });
  if (exact) return exact[1];

  return entries.find(([path]) => {
    const file = (path.split(/[/\\]/).pop() ?? "").toLowerCase();
    return aliases.some((alias) => file.includes(alias.toLowerCase()));
  })?.[1];
}

/**
 * Social cover — soft tech wash + optically balanced logos.
 */
export function SocialCoverVisual({ className }: { className?: string }) {
  const { lang } = useLanguage();
  const social = UI_COPY[lang].social;
  const brands = SOCIAL_BRANDS.map((b) => b.label).join("  ·  ");

  const brandLine = `${brands}  ·  `;

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {/* Same gradient as before — whole field rotates slowly */}
      <div className="social-cover-spin absolute left-1/2 top-1/2 h-[180%] w-[180%]" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(125deg, #0c3d8a 0%, #5b1fa8 38%, #0f6b7a 72%, #1a2a6c 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-[20%] -top-[30%] h-[90%] w-[80%] rounded-full blur-[80px]"
            style={{ background: "#3bb7ff" }}
          />
          <div
            className="absolute -right-[25%] -top-[20%] h-[85%] w-[75%] rounded-full blur-[90px]"
            style={{ background: "#c44bff" }}
          />
          <div
            className="absolute -bottom-[35%] left-[10%] h-[80%] w-[70%] rounded-full blur-[85px]"
            style={{ background: "#1dffc2" }}
          />
          <div
            className="absolute -bottom-[25%] -right-[15%] h-[75%] w-[65%] rounded-full blur-[80px]"
            style={{ background: "#ff7a3d" }}
          />
          <div
            className="absolute left-[30%] top-[25%] h-[50%] w-[45%] rounded-full bg-[#ff4db8] opacity-50 blur-[100px]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/15" aria-hidden />

      {/* Logo lockup */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center px-5 pb-24 pt-12 sm:px-12 sm:pb-20 sm:pt-10">
        <ul className="grid w-full max-w-4xl grid-cols-2 items-center gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-10">
          {SOCIAL_BRANDS.map((brand) => {
            const src = logoFor(brand.id);
            const scale = LOGO_SCALE[brand.id] ?? { desktop: 1, mobile: 1 };
            return (
              <li
                key={brand.id}
                className="flex h-[4.75rem] items-center justify-center sm:h-20 md:h-24"
              >
                {src ? (
                  <img
                    src={src}
                    alt={brand.label}
                    className="social-cover-logo h-[80%] w-auto max-w-[90%] object-contain mix-blend-screen sm:h-full sm:max-w-full"
                    style={
                      {
                        "--logo-scale-mobile": String(scale.mobile),
                        "--logo-scale-desktop": String(scale.desktop),
                      } as CSSProperties
                    }
                  />
                ) : (
                  <span className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white/90 sm:text-[13px]">
                    {brand.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[6] bg-gradient-to-t from-[#050816]/85 via-[#050816]/35 to-transparent px-5 pb-5 pt-20 sm:px-8 sm:pb-7">
        <p className="flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100/80">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--c-accent)]" />
          <span>{social.coverEyebrow}</span>
          <span className="text-white/25">·</span>
          <span>2023 — 2026</span>
        </p>
        <h3 className="mt-2 max-w-[14ch] text-[clamp(1.7rem,4vw,3rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
          {social.label}
        </h3>
        <p className="mt-2 max-w-[36ch] text-[12px] leading-relaxed text-white/70 sm:text-[13px]">
          {social.coverLine}
        </p>
        <div className="social-cover-marquee-mask mt-4 overflow-hidden text-[10px] uppercase tracking-[0.18em] text-teal-100/55 sm:text-[11px]">
          <div className="social-cover-marquee flex w-max whitespace-nowrap">
            <span className="pr-8">{brandLine}</span>
            <span className="pr-8" aria-hidden>
              {brandLine}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes social-cover-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes social-cover-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .social-cover-spin {
          animation: social-cover-spin 56s linear infinite;
          will-change: transform;
        }
        .social-cover-marquee {
          animation: social-cover-marquee 32s linear infinite;
        }
        .social-cover-logo {
          transform: scale(var(--logo-scale-mobile, 1));
        }
        @media (min-width: 640px) {
          .social-cover-logo {
            transform: scale(var(--logo-scale-desktop, 1));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .social-cover-spin,
          .social-cover-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
