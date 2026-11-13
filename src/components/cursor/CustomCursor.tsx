import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { UI_COPY } from "../../data/i18n.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";

type CursorMode = "default" | "project" | "link" | "drag" | "next";

const VALID_MODES: Set<CursorMode> = new Set(["default", "project", "link", "drag", "next"]);

export function CustomCursor() {
  const { fine, reduced } = usePrefers();
  const { lang } = useLanguage();
  const cursorCopy = UI_COPY[lang].cursor;
  const labels: Record<CursorMode, string> = {
    default: "",
    project: cursorCopy.view,
    link: "",
    drag: cursorCopy.drag,
    next: cursorCopy.next,
  };
  const rootRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const modeRef = useRef<CursorMode>("default");
  const pressed = useRef(false);

  useEffect(() => {
    if (!fine || reduced) return;

    const root = rootRef.current;
    const ball = ballRef.current;
    if (!root || !ball) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const follow = { x: target.x, y: target.y };
    let scale = 1;
    let scaleTo = 1;
    let frame = 0;
    let running = false;
    let visible = false;
    let currentTone: "light" | "dark" = "light";

    root.setAttribute("data-cursor-tone", "light");

    const detectTone = (x: number, y: number, eventTarget?: EventTarget | null): "light" | "dark" => {
      if (eventTarget instanceof Element) {
        const themeNode = eventTarget.closest<HTMLElement>("[data-header-theme], .tone-ink");
        if (themeNode) {
          const theme = themeNode.getAttribute("data-header-theme");
          if (theme === "ink" || themeNode.classList.contains("tone-ink")) return "dark";
          if (theme === "paper") return "light";
        }
      }

      if (typeof document.elementsFromPoint === "function") {
        const stack = document.elementsFromPoint(x, y);
        for (const el of stack) {
          if (el.closest?.(".cursor-ball, .grain")) continue;
          const themeNode = el.closest<HTMLElement>("[data-header-theme], .tone-ink");
          if (themeNode) {
            const theme = themeNode.getAttribute("data-header-theme");
            if (theme === "ink" || themeNode.classList.contains("tone-ink")) return "dark";
            if (theme === "paper") return "light";
          }
        }
      } else {
        const el = document.elementFromPoint(x, y);
        const themeNode = el?.closest<HTMLElement>("[data-header-theme], .tone-ink");
        if (themeNode) {
          const theme = themeNode.getAttribute("data-header-theme");
          if (theme === "ink" || themeNode.classList.contains("tone-ink")) return "dark";
          if (theme === "paper") return "light";
        }
      }

      return "light";
    };

    const applyTone = (nextTone: "light" | "dark") => {
      if (currentTone === nextTone) return;
      currentTone = nextTone;
      root.setAttribute("data-cursor-tone", nextTone);
    };

    const scaleFor = () => (pressed.current ? 0.86 : 1);

    const paint = () => {
      follow.x += (target.x - follow.x) * 0.24;
      follow.y += (target.y - follow.y) * 0.24;
      scale += (scaleTo - scale) * 0.22;
      ball.style.transform = `translate3d(${follow.x}px, ${follow.y}px, 0) translate(-50%, -50%) scale(${scale})`;

      const settled =
        Math.abs(target.x - follow.x) < 0.15 &&
        Math.abs(target.y - follow.y) < 0.15 &&
        Math.abs(scaleTo - scale) < 0.01;
      if (settled) {
        running = false;
        return;
      }
      frame = requestAnimationFrame(paint);
    };

    const wake = () => {
      if (!running) {
        running = true;
        frame = requestAnimationFrame(paint);
      }
    };

    const show = () => {
      if (visible) return;
      visible = true;
      root.style.opacity = "1";
      document.documentElement.classList.add("has-cursor");
      setReady(true);
    };

    const applyMode = (next: CursorMode) => {
      if (modeRef.current === next) return;
      modeRef.current = next;
      scaleTo = scaleFor();
      setMode(next);
      wake();
    };

    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (document.documentElement.classList.contains("using-keyboard")) {
        document.documentElement.classList.remove("using-keyboard");
        document.documentElement.classList.add("has-cursor");
      }
      applyTone(detectTone(event.clientX, event.clientY, event.target));
      show();
      wake();
    };

    const onOver = (event: PointerEvent) => {
      const node = event.target instanceof Element ? event.target : null;
      const hit = node?.closest<HTMLElement>("[data-cursor], a, button");
      if (!hit) {
        applyMode("default");
      } else {
        const named = hit.dataset.cursor as CursorMode | undefined;
        if (named && VALID_MODES.has(named)) applyMode(named);
        else applyMode("link");
      }
      applyTone(detectTone(event.clientX, event.clientY, event.target));
    };

    const onScroll = () => {
      if (!visible) return;
      applyTone(detectTone(target.x, target.y));
    };

    const onThemeChange = () => {
      if (!visible) return;
      applyTone(detectTone(target.x, target.y));
    };

    const onDown = () => {
      pressed.current = true;
      scaleTo = scaleFor();
      wake();
    };
    const onUp = () => {
      pressed.current = false;
      scaleTo = scaleFor();
      wake();
    };
    const onLeave = () => {
      root.style.opacity = "0";
    };
    const onEnter = () => {
      if (visible) root.style.opacity = "1";
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      document.documentElement.classList.add("using-keyboard");
      document.documentElement.classList.remove("has-cursor");
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerover", onOver);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("ir-theme-change", onThemeChange);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("ir-theme-change", onThemeChange);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("keydown", onKey);
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  const hasLabel = Boolean(labels[mode]);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[90] opacity-0"
      aria-hidden="true"
      data-ready={ready}
    >
      <div ref={ballRef} className="cursor-ball" data-mode={mode}>
        {hasLabel ? (
          <>
            <span className="cursor-ball-pip" />
            <span className="cursor-label">{labels[mode]}</span>
          </>
        ) : null}
      </div>
    </div>
  );
}
