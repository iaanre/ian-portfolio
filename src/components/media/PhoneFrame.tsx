import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";

export function PhoneFrame({
  children,
  className,
  label,
  /** Real app screenshots already include status UI — skip the fake notch. */
  bare = true,
  /** Screen ratio. Instagram reels are 9/16; app mockups default to taller 9/19. */
  aspect = "9/19",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  bare?: boolean;
  aspect?: "9/19" | "9/16";
}) {
  const hasCustomWidth = className && /(^|\s)w-/.test(className);

  return (
    <div className={cn(!hasCustomWidth && "w-[min(240px,68vw)]", className)}>
      <div className="rounded-[2rem] border border-black/12 bg-[#111] p-[9px]">
        <div
          className={cn(
            "relative overflow-hidden rounded-[1.4rem] bg-[#0d0d0d]",
            aspect === "9/16" ? "aspect-[9/16]" : "aspect-[9/19]",
          )}
        >
          {!bare ? (
            <div className="absolute left-1/2 top-2 z-[1] h-4 w-16 -translate-x-1/2 rounded-full bg-[#111]" />
          ) : null}
          {children}
        </div>
      </div>
      {label ? (
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.16em] text-[var(--c-muted)]">{label}</p>
      ) : null}
    </div>
  );
}
