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

  const visual = (
    <ImageReveal variant={reveal} className={cn(slot.frame === "phone" ? "h-full" : aspectClass[slot.aspect], "w-full")}>
      <ProjectVisual project={project} slot={slot} className="h-full min-h-full" />
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
