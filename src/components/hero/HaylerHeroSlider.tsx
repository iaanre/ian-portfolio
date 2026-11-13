import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects.ts";
import type { Project } from "../../data/projects.ts";
import {
  localizeCategoryLabel,
  localizeDisciplines,
  localizeProjectTitle,
  UI_COPY,
} from "../../data/i18n.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { useTransition } from "../../context/TransitionContext.tsx";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { ease, gsap } from "../../lib/gsap.ts";
import { runtime } from "../../lib/runtime.ts";
import { cn } from "../../lib/cn.ts";
import { ProjectVisual } from "../media/ProjectVisual.tsx";

const AUTOPLAY_MS = 6500;

export function HaylerHeroSlider() {
  const slides = featuredProjects;
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].hero;

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const incomingSlideRef = useRef<HTMLDivElement>(null);
  const outgoingSlideRef = useRef<HTMLDivElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLSpanElement>(null);
  const animatingRef = useRef(false);
  const dragState = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    deltaX: number;
    moved: boolean;
  }>({
    active: false,
    startX: 0,
    startY: 0,
    deltaX: 0,
    moved: false,
  });

  const { launch } = useTransition();
  const { reduced } = usePrefers();

  const current: Project = slides[activeIndex] ?? slides[0];
  const outgoing: Project | null = prevIndex !== null ? slides[prevIndex] ?? null : null;
  const isInk = current.banner.headerTheme === "ink";
  const currentTitle = localizeProjectTitle(current, lang);

  const goTo = useCallback(
    (targetIdx: number, explicitDir?: 1 | -1) => {
      const count = slides.length;
      const next = ((targetIdx % count) + count) % count;
      if (next === activeIndex || animatingRef.current) return;

      const computedDir: 1 | -1 =
        explicitDir ??
        (next > activeIndex || (activeIndex === count - 1 && next === 0) ? 1 : -1);

      if (reduced) {
        setDirection(computedDir);
        setPrevIndex(null);
        setActiveIndex(next);
        return;
      }

      animatingRef.current = true;
      setDirection(computedDir);
      setPrevIndex(activeIndex);
      setActiveIndex(next);
    },
    [activeIndex, reduced, slides.length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1, 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1, -1), [activeIndex, goTo]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("ir-theme-change"));
    });
    return () => cancelAnimationFrame(id);
  }, [activeIndex]);

  useLayoutEffect(() => {
    if (reduced) {
      animatingRef.current = false;
      return;
    }

    const incomingEl = incomingSlideRef.current;
    const outgoingEl = outgoingSlideRef.current;
    const titleEl = titleWrapRef.current;

    const ctx = gsap.context(() => {
      if (prevIndex !== null && incomingEl && outgoingEl) {
        gsap.set(incomingEl, { zIndex: 2, xPercent: direction * 100 });
        gsap.set(outgoingEl, { zIndex: 1, xPercent: 0 });

        const inInner = incomingEl.querySelector(".slide-media-inner");
        const outInner = outgoingEl.querySelector(".slide-media-inner");
        if (inInner) gsap.set(inInner, { xPercent: -direction * 32, scale: 1.06 });

        const tl = gsap.timeline({
          onComplete: () => {
            animatingRef.current = false;
            setPrevIndex(null);
          },
        });

        tl.to(
          incomingEl,
          {
            xPercent: 0,
            duration: 0.92,
            ease: ease.inOut,
          },
          0,
        );
        if (inInner) {
          tl.to(
            inInner,
            {
              xPercent: 0,
              scale: 1,
              duration: 0.92,
              ease: ease.inOut,
            },
            0,
          );
        }
        tl.to(
          outgoingEl,
          {
            xPercent: -direction * 35,
            duration: 0.92,
            ease: ease.inOut,
          },
          0,
        );
        if (outInner) {
          tl.to(
            outInner,
            {
              scale: 1.05,
              duration: 0.92,
              ease: ease.inOut,
            },
            0,
          );
        }
      } else {
        animatingRef.current = false;
      }

      if (titleEl) {
        const lines = titleEl.querySelectorAll(".hero-title-line");
        const meta = titleEl.querySelectorAll(".hero-slide-meta");
        gsap.fromTo(
          lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.78,
            stagger: 0.06,
            ease: ease.out,
            overwrite: "auto",
            delay: prevIndex !== null ? 0.12 : 0.02,
          },
        );
        gsap.fromTo(
          meta,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.62,
            stagger: 0.05,
            ease: ease.out,
            overwrite: "auto",
            delay: prevIndex !== null ? 0.18 : 0.06,
          },
        );
      }
    });

    return () => ctx.revert();
  }, [activeIndex, direction, prevIndex, reduced]);

  useEffect(() => {
    const bar = progressBarRef.current;
    if (bar) bar.style.width = "0%";
    if (reduced || paused) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / AUTOPLAY_MS) * 100);
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${pct}%`;
      }
      if (elapsed >= AUTOPLAY_MS) {
        goNext();
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [activeIndex, paused, reduced, goNext]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const hero = sectionRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < window.innerHeight * 0.35) return;
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (animatingRef.current) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest("a, button")) return;

    dragState.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      deltaX: 0,
      moved: false,
    };
    setPaused(true);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!dragState.current.active) return;
    const dx = event.clientX - dragState.current.startX;
    const dy = event.clientY - dragState.current.startY;

    if (!dragState.current.moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 14) {
      dragState.current.active = false;
      setPaused(false);
      return;
    }

    if (Math.abs(dx) > 8) {
      dragState.current.moved = true;
    }
    dragState.current.deltaX = dx;

    const incomingEl = incomingSlideRef.current;
    if (incomingEl && !reduced) {
      const inner = incomingEl.querySelector<HTMLElement>(".slide-media-inner");
      if (inner) {
        const clamped = Math.max(-48, Math.min(48, dx * 0.08));
        inner.style.transform = `translate3d(${clamped}px, 0, 0) scale(1.02)`;
      }
    }
  };

  const endDrag = () => {
    if (!dragState.current.active) return;
    const { deltaX } = dragState.current;
    dragState.current.active = false;
    setPaused(false);

    const incomingEl = incomingSlideRef.current;
    if (incomingEl) {
      const inner = incomingEl.querySelector<HTMLElement>(".slide-media-inner");
      if (inner) {
        gsap.to(inner, { x: 0, scale: 1, duration: 0.45, ease: "power3.out" });
      }
    }

    if (deltaX < -56) {
      goNext();
    } else if (deltaX > 56) {
      goPrev();
    }
  };

  const launchCurrentProject = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (
      dragState.current.moved ||
      reduced ||
      runtime.flying ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      if (dragState.current.moved) event.preventDefault();
      return;
    }
    const hero = sectionRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    event.preventDefault();
    launch({
      slug: current.slug,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      data-header-theme={current.banner.headerTheme}
      data-cursor="drag"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      className={cn(
        "relative h-[100svh] w-full select-none overflow-hidden transition-colors duration-500",
        isInk ? "bg-[#0b0b0e] text-[#f5f4f0]" : "bg-[#e7e4ef] text-[#0d0d0d]",
      )}
      aria-roledescription="carousel"
      aria-label={copy.carouselAria}
    >
      {outgoing ? (
        <div ref={outgoingSlideRef} className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="slide-media-inner h-full w-full will-change-transform">
            <ProjectVisual project={outgoing} slot={outgoing.media[0]} hideOverlayMeta className="h-full w-full" />
          </div>
        </div>
      ) : null}

      <div ref={incomingSlideRef} className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="slide-media-inner h-full w-full will-change-transform">
          <ProjectVisual project={current} slot={current.media[0]} hideOverlayMeta className="h-full w-full" />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isInk
              ? "linear-gradient(180deg, rgba(8,8,12,0.22) 0%, rgba(8,8,12,0.04) 45%, rgba(8,8,12,0.52) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%, rgba(235,232,244,0.46) 100%)",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] hidden sm:grid sm:grid-cols-5"
      >
        {[0, 1, 2, 3, 4].map((col) => (
          <div
            key={col}
            className={cn(
              "h-full",
              col > 0 && (isInk ? "border-l border-white/[0.06]" : "border-l border-black/[0.06]"),
            )}
          />
        ))}
      </div>

      <div className="relative z-[4] flex h-full flex-col justify-between px-[5vw] pb-6 pt-28 sm:pb-8 sm:pt-32">
        <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em] opacity-70">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-[1px] transition-colors duration-500"
              style={{ backgroundColor: current.banner.accent }}
            />
            <span>{copy.selectedShowcase}</span>
          </span>
          <span className="hidden sm:inline">{localizeCategoryLabel(current, lang)}</span>
        </div>

        <div
          ref={titleWrapRef}
          className="my-auto flex flex-col gap-6 py-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-[90vw] md:max-w-[75%]">
            <Link
              to={`/work/${current.slug}`}
              data-cursor="project"
              onClick={launchCurrentProject}
              onPointerEnter={() => setPaused(true)}
              onPointerLeave={() => setPaused(false)}
              className="group inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8"
            >
              <h1 className="text-[clamp(2.8rem,8vw,8.4rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                {currentTitle.lines.map((line) => (
                  <span
                    key={`${current.slug}-${line}`}
                    className="-my-[0.04em] block overflow-hidden py-[0.06em]"
                  >
                    <span className="hero-title-line block will-change-transform transition-transform duration-500 group-hover:translate-x-1.5">
                      {line}
                    </span>
                  </span>
                ))}
              </h1>
            </Link>
          </div>

          <div className="hero-slide-meta flex items-baseline gap-6 text-sm font-medium md:flex-col md:items-end md:gap-1.5 md:text-right">
            <span className="text-[12px] uppercase tracking-[0.16em] opacity-65">
              {current.year === "Pending" ? `${copy.projectPrefix} ${current.index}` : current.year}
            </span>
            <span className="text-[15px] tracking-[-0.01em] md:text-[17px]">
              {localizeDisciplines(current, lang)}
            </span>
          </div>
        </div>

        <div>
          <div
            className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-10"
            role="tablist"
            aria-label={copy.chooseProjectAria}
          >
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              const slideTitle = localizeProjectTitle(slide, lang).title;
              return (
                <button
                  key={slide.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${slide.index}: ${slideTitle}`}
                  onClick={() => goTo(idx)}
                  onPointerEnter={() => setPaused(true)}
                  onPointerLeave={() => setPaused(false)}
                  className="group text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
                >
                  <div className="flex items-baseline justify-between gap-2 pb-2.5 sm:pb-3.5">
                    <span
                      className={cn(
                        "text-[clamp(1.65rem,3.6vw,3.35rem)] font-semibold leading-none tracking-[-0.045em] transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-28 group-hover:opacity-65",
                      )}
                    >
                      {slide.index}.
                    </span>
                    <span
                      className={cn(
                        "hidden truncate text-[11px] font-medium uppercase tracking-[0.12em] transition-opacity duration-300 lg:inline",
                        isActive ? "opacity-80" : "opacity-0 group-hover:opacity-50",
                      )}
                    >
                      {slideTitle}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "relative h-[2px] w-full overflow-hidden transition-colors duration-300",
                      isInk ? "bg-white/16" : "bg-black/14",
                    )}
                  >
                    {isActive ? (
                      <span
                        ref={progressBarRef}
                        className="block h-full transition-none"
                        style={{
                          width: reduced ? "100%" : "0%",
                          backgroundColor: isInk ? "var(--c-accent)" : "#0d0d0d",
                        }}
                      />
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between text-[12px] font-medium tracking-[-0.01em] sm:mt-6 sm:text-[13px]">
            <span className="opacity-75">{copy.dragToExplore}</span>

            <div
              className="inline-flex items-center gap-3 sm:gap-4"
              onPointerEnter={() => setPaused(true)}
              onPointerLeave={() => setPaused(false)}
            >
              <button
                type="button"
                onClick={goPrev}
                aria-label={copy.prevProjectAria}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-200",
                  isInk
                    ? "border-white/18 hover:border-[var(--c-accent)] hover:bg-white/10"
                    : "border-black/16 hover:border-[var(--c-accent)] hover:bg-black/6",
                )}
              >
                ←
              </button>
              <span className="text-[11px] uppercase tracking-[0.14em] opacity-75">{copy.navigate}</span>
              <button
                type="button"
                onClick={goNext}
                aria-label={copy.nextProjectAria}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-200",
                  isInk
                    ? "border-white/18 hover:border-[var(--c-accent)] hover:bg-white/10"
                    : "border-black/16 hover:border-[var(--c-accent)] hover:bg-black/6",
                )}
              >
                →
              </button>
            </div>

            <Link
              to={`/work/${current.slug}`}
              data-cursor="project"
              onClick={launchCurrentProject}
              className="inline-flex items-center gap-2 opacity-85 transition-opacity hover:opacity-100"
            >
              <span className="hidden sm:inline">{copy.featuredProject}</span>
              <span className="sm:hidden">{copy.openMobile}</span>
              <span
                className="inline-block h-1.5 w-1.5 rounded-[1px]"
                style={{ backgroundColor: current.banner.accent }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
