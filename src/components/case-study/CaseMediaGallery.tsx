import type { ReactNode } from "react";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { SnapCarousel } from "../motion/SnapCarousel.tsx";
import { cn } from "../../lib/cn.ts";

/**
 * Desktop keeps the authored layout; on mobile the same slides become a snap carousel
 * so editorial image stacks stay short.
 */
export function CaseMediaGallery({
  label,
  slides,
  desktop,
  className,
  itemClassName = "w-[86vw] shrink-0",
}: {
  label?: string;
  /** Slide content shown in the mobile carousel (and optionally reused). */
  slides: ReactNode[];
  /** Full desktop composition (grids, offsets, copy beside media). */
  desktop: ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const { mobile } = usePrefers();

  if (!mobile) {
    return <div className={className}>{desktop}</div>;
  }

  return (
    <SnapCarousel
      className={cn("pb-[5vh]", className)}
      label={label}
      itemClassName={itemClassName}
    >
      {slides}
    </SnapCarousel>
  );
}
