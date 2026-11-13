import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";

const PRIMARY = "DESIGN  ·  PRODUCT  ·  DIGITAL  ·  EXPERIENCE  ·  ";
const SECONDARY = "VISUAL  ·  BRAND  ·  UX/UI  ·  WEB  ·  EDITORIAL  ·  ";

export function KineticTypography({
  primary = PRIMARY,
  secondary = SECONDARY,
  label = "Scroll",
  span = "210vh",
}: {
  primary?: string;
  secondary?: string;
  label?: string;
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
      className={reduced ? "overflow-hidden py-24" : "relative"}
      style={reduced ? undefined : { height: span }}
      aria-label="Design disciplines"
    >
      <div
        className={
          reduced
            ? "flex flex-col gap-6 px-[5vw]"
            : "sticky top-0 flex h-[100svh] flex-col justify-center gap-[2vh] overflow-hidden"
        }
      >
        <p className="px-[5vw] text-[11px] uppercase tracking-[0.2em] text-[var(--c-muted)]">{label}</p>
        <div
          ref={lineA}
          className="w-max whitespace-nowrap px-[5vw] text-[18vw] font-medium leading-[0.82] tracking-[-0.06em] md:text-[13vw]"
        >
          {primary.repeat(2)}
        </div>
        {secondary ? (
          <div
            ref={lineB}
            className="w-max whitespace-nowrap px-[5vw] text-[11vw] font-medium leading-[0.86] tracking-[-0.05em] text-transparent md:text-[8vw]"
            style={{ WebkitTextStroke: "1px var(--c-ink)" }}
          >
            {secondary.repeat(2)}
          </div>
        ) : null}
      </div>
    </section>
  );
}
