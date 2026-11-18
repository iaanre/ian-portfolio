import type { MediaSlot, Project } from "../../data/projects.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { cn } from "../../lib/cn.ts";

type VisualProject = Pick<Project, "index" | "title" | "tone"> & {
  banner?: Project["banner"];
};

const DEFAULT_BANNER: Project["banner"] = {
  bg: "#16161d",
  secondary: "#262436",
  glow: "rgba(184, 128, 255, 0.26)",
  accent: "#b880ff",
  headerTheme: "ink",
};

export function ProjectVisual({
  project,
  slot,
  className,
  underNav = false,
  hideOverlayMeta = false,
}: {
  project: VisualProject;
  slot?: MediaSlot;
  className?: string;
  underNav?: boolean;
  hideOverlayMeta?: boolean;
}) {
  const { lang } = useLanguage();
  const assetPendingText = UI_COPY[lang].caseStudy.assetPending;

  if (slot?.src && slot.kind === "video") {
    return (
      <video
        className={cn("h-full w-full object-cover", className)}
        src={slot.src}
        muted
        playsInline
        loop
        autoPlay
        aria-label={slot.alt}
      />
    );
  }

  if (slot?.src) {
    const position = slot.objectPosition ? { objectPosition: slot.objectPosition } : undefined;
    const fitContain = slot.fit === "contain";

    // Never letterbox with a dark frame — always fill the mask, centered on the subject.
    const imgClass = cn(
      "h-full w-full object-cover",
      fitContain && "object-center",
      className,
    );

    if (slot.srcMobile && slot.srcMobile !== slot.src) {
      return (
        <>
          <img
            src={slot.srcMobile}
            alt={slot.alt}
            className={cn(imgClass, "md:hidden")}
            style={position}
          />
          <img
            src={slot.src}
            alt=""
            aria-hidden="true"
            className={cn(imgClass, "hidden md:block")}
            style={position}
          />
        </>
      );
    }

    return <img src={slot.src} alt={slot.alt} className={imgClass} style={position} />;
  }

  const banner = project.banner ?? DEFAULT_BANNER;
  const isDark = banner.headerTheme === "ink";
  const gridLine = isDark ? "rgba(255,255,255,0.06)" : "rgba(13,13,13,0.06)";
  const metaColor = isDark ? "rgba(245,244,240,0.62)" : "rgba(13,13,13,0.58)";
  const indexColor = isDark ? "rgba(245,244,240,0.82)" : "rgba(13,13,13,0.78)";

  return (
    <div
      role="img"
      aria-label={slot?.alt ?? `${project.title} image pending`}
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background: `linear-gradient(135deg, ${banner.bg} 0%, ${banner.secondary} 100%)`,
      }}
    >
      {/* Secondary color studio light aura */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 68% 34%, ${banner.glow} 0%, transparent 58%), radial-gradient(circle at 22% 78%, ${banner.glow} 0%, transparent 64%)`,
        }}
      />

      {/* Architectural hairline grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[size:64px_64px]"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${gridLine} 1px, transparent 1px)`,
        }}
      />

      {/* Subtle sculptural geometric glass reflection */}
      <div
        className="pointer-events-none absolute -right-[12%] top-[14%] h-[68%] w-[52%] rounded-full blur-3xl"
        style={{
          background: banner.glow,
          opacity: 0.55,
        }}
      />

      {!hideOverlayMeta ? (
        <>
          <div
            className={cn(
              "absolute left-6 flex items-start gap-2.5 text-[10px] uppercase tracking-[0.18em] md:left-8 md:text-[11px]",
              underNav ? "top-24 md:top-28" : "top-6 md:top-8",
            )}
            style={{ color: metaColor }}
          >
            <span
              className="mt-1 inline-block h-2 w-2 shrink-0 rounded-[1px]"
              style={{ backgroundColor: banner.accent }}
            />
            <div>
              <span className="block">{assetPendingText}</span>
              <span className="mt-1 block opacity-80">{slot?.file ?? project.title}</span>
            </div>
          </div>

          <div
            className={cn(
              "absolute right-9 flex items-end justify-end md:right-14",
              project.index === "02" ? "bottom-20 md:bottom-28" : "bottom-12 md:bottom-16",
            )}
          >
            <span
              className="select-none pb-1 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[0.88] tracking-[-0.06em]"
              style={{ color: indexColor }}
            >
              {project.index}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}
