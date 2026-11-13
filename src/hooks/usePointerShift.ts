import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap.ts";
import { usePrefers } from "./usePrefers.ts";

export function usePointerShift(max = 12) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { fine, reduced } = usePrefers();

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner || !fine || reduced) return;

    gsap.set(inner, { x: 0, y: 0, scale: 1 });

    const onEnter = (event: PointerEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(inner, {
        x: x * max,
        y: y * max,
        scale: 1.045,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onMove = (event: PointerEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(inner, {
        x: x * max,
        y: y * max,
        scale: 1.045,
        duration: 0.65,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    frame.addEventListener("pointerenter", onEnter);
    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);

    return () => {
      frame.removeEventListener("pointerenter", onEnter);
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(inner);
    };
  }, [fine, max, reduced]);

  return { frameRef, innerRef };
}
