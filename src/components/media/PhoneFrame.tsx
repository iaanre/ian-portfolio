import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";

export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  const hasCustomWidth = className && /(^|\s)w-/.test(className);

  return (
    <div className={cn(!hasCustomWidth && "w-[min(240px,68vw)]", className)}>
      <div className="rounded-[2rem] border border-black/15 bg-[#111] p-[10px] shadow-[0_30px_60px_rgba(17,17,17,0.12)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.45rem] bg-[#d9d4ca]">
          <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-[#111]" />
          {children}
        </div>
      </div>
      {label ? (
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.16em] text-[var(--c-muted)]">{label}</p>
      ) : null}
    </div>
  );
}
