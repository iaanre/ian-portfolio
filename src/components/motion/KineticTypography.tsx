import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";

const PRIMARY = "DESIGN  ·  PRODUCT  ·  DIGITAL  ·  EXPERIENCE  ·  ";
const SECONDARY = "VISUAL  ·  BRAND  ·  UX/UI  ·  WEB  ·  EDITORIAL  ·  ";

export function KineticTypography({
  primary = PRIMARY,
  secondary = SECONDARY,
  label = "Scroll",
}: {
  primary?: string;
  secondary?: string;
  label?: string;
  /** @deprecated Ignored — band is content-height like Hayler marquee, not full-viewport. */
  span?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineA = useRef<HTMLDivElement>(null);
  const lineB = useRef<HTMLDivElement>(null);
  const { reduced } = usePrefers();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const a = lineA.current;
    const b = lineB.current;
    if (!section || !a || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        a,
        { x: 0 },
        {
          x: () => -(a.scrollWidth - window.innerWidth * 0.85),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        },
      );
      if (b) {
        gsap.fromTo(
          b,
          { x: () => -(b.scrollWidth - window.innerWidth * 0.9) },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, [reduced, primary, secondary]);

  return (
    <section
      ref={sectionRef}
      data-header-theme="paper"
      className="relative py-[6vh] md:py-[8vh]"
      aria-label="Design disciplines"
    >
      <div className="flex flex-col gap-2 md:gap-3">
        <p className="px-[5vw] text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">{label}</p>

        {/* Clip only horizontally so stroke/descenders stay fully visible */}
        <div className="overflow-x-hidden">
          <div
            ref={lineA}
            className="w-max whitespace-nowrap px-[5vw] py-1 text-[clamp(2.6rem,7.2vw,5.8rem)] font-medium leading-none tracking-[-0.055em]"
          >
            {primary.repeat(2)}
          </div>
        </div>

        {secondary ? (
          <div className="overflow-x-hidden">
            <div
              ref={lineB}
              className="w-max whitespace-nowrap px-[5vw] py-1.5 text-[clamp(1.7rem,4.8vw,3.8rem)] font-medium leading-none tracking-[-0.045em] text-transparent"
              style={{ WebkitTextStroke: "1.25px var(--c-ink)" }}
            >
              {secondary.repeat(2)}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
