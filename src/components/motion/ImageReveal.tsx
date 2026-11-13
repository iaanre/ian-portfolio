import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ease, gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

export type RevealVariant = "vertical" | "horizontal" | "clip" | "scale" | "expand";

const clips: Record<RevealVariant, { from: string; to: string }> = {
  vertical: { from: "inset(100% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  horizontal: { from: "inset(0% 100% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  clip: { from: "inset(12% 12% 12% 12%)", to: "inset(0% 0% 0% 0%)" },
  scale: { from: "inset(0% 0% 0% 0%)", to: "inset(0% 0% 0% 0%)" },
  expand: { from: "inset(8% 18% 8% 18%)", to: "inset(0% 0% 0% 0%)" },
};

export function ImageReveal({
  children,
  className,
  variant = "vertical",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { reduced } = usePrefers();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    if (!root || !inner || reduced) return;
    const clip = clips[variant];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { clipPath: clip.from, scale: variant === "scale" || variant === "expand" ? 1.08 : 1.04 },
        {
          clipPath: clip.to,
          scale: 1,
          duration: 1.15,
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
  }, [reduced, variant]);

  return (
    <div ref={rootRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
