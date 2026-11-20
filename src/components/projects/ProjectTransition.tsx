import { useLayoutEffect, useRef } from "react";
import { getProject, homeMedia } from "../../data/projects.ts";
import { ease, gsap } from "../../lib/gsap.ts";
import { runtime } from "../../lib/runtime.ts";
import type { Flight } from "../../context/TransitionContext.tsx";
import { ProjectVisual } from "../media/ProjectVisual.tsx";
import { SocialCoverVisual } from "../social/SocialCover.tsx";

export function ProjectTransition({
  flight,
  onArrive,
  onDone,
}: {
  flight: Flight | null;
  onArrive: (slug: string) => void;
  onDone: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const arriveRef = useRef(onArrive);
  const doneRef = useRef(onDone);
  arriveRef.current = onArrive;
  doneRef.current = onDone;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!flight || !el) return;

    const { rect, slug } = flight;
    runtime.handoff = true;
    document.documentElement.classList.add("project-flying");

    // Element is always full-viewport; we scale it down to the preview rect.
    // End state === case-study hero (100svh cover) → no crop jump on handoff.
    const tw = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.remove("project-flying");
        doneRef.current();
      },
    });

    tw.fromTo(
      el,
      {
        x: rect.left,
        y: rect.top,
        scaleX: rect.width / window.innerWidth,
        scaleY: rect.height / window.innerHeight,
        opacity: 1,
      },
      {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 1.1,
        ease: ease.inOut,
      },
    );

    // Mount destination under the overlay near the end of the expand.
    // Overlay stays fully opaque until the hero banner paints the same image,
    // then drops in one frame — no fade, no blink.
    tw.add(() => {
      arriveRef.current(slug);
    }, "-=0.28");

    let waitCleanup: (() => void) | null = null;

    tw.add(() => {
      tw.pause();
      let settled = false;
      const resume = () => {
        if (settled) return;
        settled = true;
        window.clearTimeout(fallback);
        window.removeEventListener("ir-hero-ready", resume);
        waitCleanup = null;
        // One paint after hero signals ready, then continue.
        requestAnimationFrame(() => tw.resume());
      };
      window.addEventListener("ir-hero-ready", resume);
      const fallback = window.setTimeout(resume, 900);
      waitCleanup = () => {
        settled = true;
        window.clearTimeout(fallback);
        window.removeEventListener("ir-hero-ready", resume);
      };
    });

    tw.to({}, { duration: 0.05 });

    return () => {
      waitCleanup?.();
      tw.kill();
      document.documentElement.classList.remove("project-flying");
    };
  }, [flight]);

  if (!flight) return null;
  const project = getProject(flight.slug);
  if (!project) return null;

  const slot = { ...homeMedia(project), fit: "cover" as const };

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[70] origin-top-left overflow-hidden will-change-transform"
    >
      {flight.slug === "social" ? (
        <SocialCoverVisual className="h-full w-full" />
      ) : (
        <ProjectVisual
          project={project}
          slot={slot}
          underNav
          hideOverlayMeta
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
