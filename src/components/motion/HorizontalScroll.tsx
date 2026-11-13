import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

export function HorizontalScroll({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { reduced, mobile } = usePrefers();
  const stack = reduced || mobile;

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track || stack) return;

    const ctx = gsap.context(() => {
      const distance = () => Math.max(track.scrollWidth - window.innerWidth, 0);
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          pin: true,
          scrub: 0.45,
          start: "top top",
          end: () => `+=${distance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [stack]);

  if (stack) {
    return (
      <section className={cn("px-[5vw] py-16", className)} aria-label={label}>
        <div className="flex flex-col gap-8">{children}</div>
      </section>
    );
  }

  return (
    <section ref={wrapRef} className={cn("relative overflow-hidden", className)} aria-label={label}>
      <div ref={trackRef} className="flex h-[100svh] w-max items-center gap-8 px-[6vw]">
        {children}
      </div>
    </section>
  );
}
