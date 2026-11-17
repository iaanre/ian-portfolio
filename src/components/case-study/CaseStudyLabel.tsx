import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";

/** Shared eyebrow/title for case-study text blocks. */
export function CaseStudyLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--c-ink)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
