import { gsap } from "./gsap.ts";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let activeTween: gsap.core.Tween | null = null;

function killActive() {
  activeTween?.kill();
  activeTween = null;
}

/** Bypass css `scroll-behavior: smooth` for a synchronous jump. */
function withInstantCss(run: () => void) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  run();
  html.style.scrollBehavior = previous;
}

/** Smooth or instant scroll to top. */
export function scrollToTop(opts?: { duration?: number; immediate?: boolean }) {
  const duration = opts?.immediate ? 0 : (opts?.duration ?? 0.9);
  killActive();
  if (duration <= 0) {
    withInstantCss(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    return;
  }
  // Disable css smooth while GSAP owns the tween — avoids fighting animations.
  withInstantCss(() => {
    activeTween = gsap.to(window, {
      duration,
      ease: "power3.inOut",
      scrollTo: { y: 0, autoKill: false },
      overwrite: true,
      onComplete: () => {
        activeTween = null;
      },
    });
  });
}

/** Smooth or instant scroll to an element id. */
export function scrollToId(id: string, offset = 16, opts?: { duration?: number; immediate?: boolean }) {
  const node = document.getElementById(id);
  if (!node) return false;
  const duration = opts?.immediate ? 0 : (opts?.duration ?? 0.9);
  const top = Math.max(0, node.getBoundingClientRect().top + window.scrollY - offset);
  killActive();
  if (duration <= 0) {
    withInstantCss(() => {
      window.scrollTo(0, top);
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
    });
    return true;
  }
  withInstantCss(() => {
    activeTween = gsap.to(window, {
      duration,
      ease: "power3.inOut",
      scrollTo: { y: top, autoKill: false },
      overwrite: true,
      onComplete: () => {
        activeTween = null;
      },
    });
  });
  return true;
}
