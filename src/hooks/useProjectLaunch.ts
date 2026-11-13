import { useRef } from "react";
import type { MouseEvent } from "react";
import type { Project } from "../data/projects.ts";
import { usePrefers } from "./usePrefers.ts";
import { useTransition } from "../context/TransitionContext.tsx";
import { runtime } from "../lib/runtime.ts";

export function useProjectLaunch(project: Project) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const { launch } = useTransition();
  const { reduced } = usePrefers();

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      reduced ||
      runtime.flying ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }
    const visual = mediaRef.current;
    if (!visual) return;
    const rect = visual.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return;
    event.preventDefault();
    launch({
      slug: project.slug,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    });
  };

  return { mediaRef, onClick };
}
