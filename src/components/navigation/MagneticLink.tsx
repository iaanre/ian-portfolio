import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
import { cn } from "../../lib/cn.ts";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
  "data-cursor"?: string;
};

export function MagneticLink({
  children,
  className,
  to,
  href,
  target,
  rel,
  strength = 0.28,
  onClick,
  "aria-current": ariaCurrent,
  "data-cursor": dataCursor,
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { fine, reduced } = usePrefers();

  useEffect(() => {
    const element = ref.current;
    if (!element || !fine || reduced) return;

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
    };
    const reset = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", reset);
    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", reset);
    };
  }, [fine, reduced, strength]);

  const cls = cn("inline-block", className);
  if (to) {
    return (
      <Link
        ref={ref}
        to={to}
        className={cls}
        onClick={onClick}
        aria-current={ariaCurrent}
        data-cursor={dataCursor}
      >
        {children}
      </Link>
    );
  }

  const isExternalHttp = href?.startsWith("http://") || href?.startsWith("https://");
  const resolvedTarget = target ?? (isExternalHttp ? "_blank" : undefined);
  const resolvedRel = rel ?? (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      ref={ref}
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      className={cls}
      onClick={onClick}
      data-cursor={dataCursor}
    >
      {children}
    </a>
  );
}
