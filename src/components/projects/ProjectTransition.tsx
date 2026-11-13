import { useLayoutEffect, useRef } from "react";
import { getProject } from "../../data/projects.ts";
import { ease, gsap } from "../../lib/gsap.ts";
import type { Flight } from "../../context/TransitionContext.tsx";
import { ProjectVisual } from "../media/ProjectVisual.tsx";

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
    const tween = gsap.fromTo(
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
        duration: 0.95,
        ease: ease.inOut,
        onComplete: () => {
          arriveRef.current(slug);
          gsap.to(el, {
            opacity: 0,
            duration: 0.38,
            delay: 0.12,
            ease: "power2.out",
            onComplete: () => doneRef.current(),
          });
        },
      },
    );
    return () => {
      tween.kill();
    };
  }, [flight]);

  if (!flight) return null;
  const project = getProject(flight.slug);
  if (!project) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[70] origin-top-left overflow-hidden will-change-transform"
    >
      <ProjectVisual project={project} slot={project.media[0]} underNav className="h-full w-full" />
    </div>
  );
}
