import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ease, gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

export type RevealVariant = "vertical" | "horizontal" | "clip" | "scale" | "expand" | "fade";

const clips: Record<RevealVariant, { from: string; to: string }> = {
  vertical: { from: "inset(100% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  horizontal: { from: "inset(0% 100% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  clip: { from: "inset(12% 12% 12% 12%)", to: "inset(0% 0% 0% 0%)" },
  scale: { from: "inset(0% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  expand: { from: "inset(8% 18% 8% 18%)", to: "inset(0% 0% 0% 0%)" },
  fade: { from: "inset(0% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
};

export function ImageReveal({
  children,
  className,
  variant = "vertical",
  /** When true, height follows the image — no fixed frame crop. */
  naturalHeight = false,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  naturalHeight?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { reduced } = usePrefers();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    if (!root || !inner || reduced) return;
    const clip = clips[variant];
    // Avoid scale/clip on natural-height images: those permanently look cropped.
    const useFade = naturalHeight || variant === "fade";
    const fromScale = useFade
      ? 1
      : variant === "scale" || variant === "expand"
        ? 1.08
        : 1.04;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        {
          clipPath: useFade ? "inset(0% 0% 0% 0%)" : clip.from,
          scale: fromScale,
          opacity: useFade ? 0 : 1,
        },
        {
          clipPath: useFade ? "inset(0% 0% 0% 0%)" : clip.to,
          scale: 1,
          opacity: 1,
          duration: useFade ? 0.85 : 1.15,
          ease: ease.inOut,
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, [reduced, variant, naturalHeight]);

  return (
    <div
      ref={rootRef}
      className={cn(!naturalHeight && "overflow-hidden", className)}
    >
      <div
        ref={innerRef}
        className={cn(
          "w-full will-change-transform",
          naturalHeight ? "h-auto" : "h-full",
        )}
      >
        {children}
      </div>
    </div>
  );
}
