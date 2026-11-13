import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "../../lib/gsap.ts";
import { usePointerShift } from "../../hooks/usePointerShift.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

export function ParallaxImage({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const shiftRef = useRef<HTMLDivElement>(null);
  const { frameRef, innerRef } = usePointerShift(12);
  const { reduced } = usePrefers();

  useLayoutEffect(() => {
    const root = rootRef.current;
    const shift = shiftRef.current;
    if (!root || !shift || reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        shift,
        { yPercent: -intensity },
        {
          yPercent: intensity,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, [intensity, reduced]);

  return (
    <div ref={rootRef} className={cn("h-full overflow-hidden", className)}>
      <div ref={shiftRef} className="h-full w-full">
        <div ref={frameRef} className="h-full w-full overflow-hidden">
          <div className="h-[114%] w-full -translate-y-[7%]">
            <div ref={innerRef} className="h-full w-full will-change-transform">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
