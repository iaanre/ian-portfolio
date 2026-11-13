import { useCallback, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

type Timeline = gsap.core.Timeline;

export function PinnedSection({
  children,
  className,
  end = "+=130%",
  setup,
}: {
  children: ReactNode;
  className?: string;
  end?: string;
  setup?: (timeline: Timeline, root: HTMLElement) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const { reduced, mobile } = usePrefers();
  const setupRef = useRef(setup);
  setupRef.current = setup;

  const build = useCallback((timeline: Timeline, root: HTMLElement) => {
    setupRef.current?.(timeline, root);
  }, []);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || reduced || mobile) return;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      build(timeline, root);
    }, root);
    return () => ctx.revert();
  }, [build, end, mobile, reduced]);

  return (
    <section ref={ref} className={cn("relative", reduced || mobile ? "" : "h-[100svh]", className)}>
      {children}
    </section>
  );
}
