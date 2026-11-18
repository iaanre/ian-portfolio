import { useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { ease, gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";

export function PageCurtain() {
  const { reduced } = usePrefers();
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(() => {
    if (typeof document === "undefined") return false;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduce) {
      document.documentElement.classList.remove("intro-pending");
      document.documentElement.classList.add("intro-done");
      return false;
    }
    return document.documentElement.classList.contains("intro-pending");
  });
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!visible || reduced) return;

    const root = rootRef.current;
    const countEl = countRef.current;
    if (!root || !countEl) return;

    const counter = { val: 0 };
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      document.documentElement.classList.remove("intro-pending");
      document.documentElement.classList.add("intro-done");
      try {
        sessionStorage.setItem("ir-intro", "1");
      } catch {
        /* ignore */
      }
      setVisible(false);
    };

    const ctx = gsap.context(() => {
      gsap.set(".curtain-col", { scaleY: 1, transformOrigin: "center top" });
      gsap.set(".curtain-caption", { autoAlpha: 1, y: 0 });

      // Continuous counter — never stalls waiting on assets.
      const tl = gsap.timeline({ onComplete: finish });

      tl.to(counter, {
        val: 100,
        duration: 2.15,
        ease: "power1.inOut",
        onUpdate: () => {
          countEl.textContent = String(Math.round(counter.val)).padStart(3, "0");
        },
      });

      // Soft lift of the caption as we near the end.
      tl.to(
        ".curtain-caption",
        {
          y: -28,
          autoAlpha: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "-=0.35",
      );

      // Columns wipe up in a fluid stagger.
      tl.to(
        ".curtain-col",
        {
          scaleY: 0,
          transformOrigin: "center top",
          duration: 0.95,
          stagger: { each: 0.06, from: "start" },
          ease: ease.inOut,
        },
        "-=0.22",
      );
    }, root);

    const safety = window.setTimeout(finish, 5000);
    return () => {
      window.clearTimeout(safety);
      ctx.revert();
    };
  }, [reduced, visible]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[120] flex items-end overflow-hidden text-[#0d0d0d]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex h-full w-full">
        {[0, 1, 2, 3, 4].map((col) => (
          <span
            key={col}
            className="curtain-col relative h-full w-1/5 bg-[var(--c-accent)] will-change-transform"
            style={{ transform: "scaleX(1.01) scaleY(1)" }}
          >
            {col > 0 ? <span className="absolute inset-y-0 left-0 w-px bg-black/10" /> : null}
          </span>
        ))}
      </div>

      <div className="curtain-caption relative z-10 flex w-full items-end justify-between px-[5vw] pb-6 sm:pb-8">
        <span className="text-xs font-medium tracking-[0.04em] sm:text-sm">{UI_COPY[lang].loadingPage}</span>
        <span
          ref={countRef}
          className="text-[clamp(3.2rem,9vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.05em] tabular-nums"
        >
          000
        </span>
      </div>
    </div>
  );
}
