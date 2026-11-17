import type { MediaSlot, Project } from "../../data/projects.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { BrowserFrame } from "../media/BrowserFrame.tsx";
import { PhoneFrame } from "../media/PhoneFrame.tsx";
import { ProjectVisual } from "../media/ProjectVisual.tsx";
import { ImageReveal } from "../motion/ImageReveal.tsx";
import type { RevealVariant } from "../motion/ImageReveal.tsx";
import { cn } from "../../lib/cn.ts";

const aspectClass: Record<MediaSlot["aspect"], string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
  phone: "aspect-[9/19]",
};

export function CaseMedia({
  project,
  slot,
  reveal = "vertical",
  className,
}: {
  project: Project;
  slot: MediaSlot;
  reveal?: RevealVariant;
  className?: string;
}) {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].caseStudy;
  const captionText = slot.caption === "Caption pending." ? copy.captionPending : slot.caption;
  const isSpread = slot.frame === "spread";
  const fitContain = slot.fit === "contain";
  // Spreads / full sheets: A4 mask matching page orientation so edges aren't cropped.
  // contain: no fixed crop box — image keeps its natural proportions at full width.
  const frameAspect =
    slot.frame === "phone"
      ? "h-full"
      : fitContain
        ? "w-full"
        : isSpread
          ? slot.aspect === "portrait"
            ? "aspect-[210/297]"
            : "aspect-[297/210]"
          : aspectClass[slot.aspect];

  const visual = (
    <ImageReveal
      variant={reveal}
      naturalHeight={fitContain}
      className={cn(frameAspect, "w-full", fitContain && "bg-[var(--c-paper)]")}
    >
      {fitContain && slot.src ? (
        <img
          src={slot.src}
          alt={slot.alt}
          className="block h-auto w-full max-w-none"
          loading="eager"
          decoding="async"
        />
      ) : (
        <ProjectVisual
          project={project}
          slot={slot}
          className={
            isSpread
              ? "h-full min-h-full !object-contain object-center bg-[var(--c-paper)]"
              : "h-full min-h-full"
          }
        />
      )}
    </ImageReveal>
  );

  return (
    <figure className={className}>
      {slot.frame === "browser" ? (
        <BrowserFrame>{visual}</BrowserFrame>
      ) : slot.frame === "phone" ? (
        <PhoneFrame label={copy.screenPending}>{visual}</PhoneFrame>
      ) : (
        visual
      )}
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
        <span>{captionText}</span>
        <span>{slot.file}</span>
      </figcaption>
    </figure>
  );
}
