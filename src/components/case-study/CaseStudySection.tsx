import type { ReactNode } from "react";
import { CaseStudyLabel } from "./CaseStudyLabel.tsx";
import { cn } from "../../lib/cn.ts";

export function CaseStudySection({
  id,
  title,
  children,
  className,
  dark = false,
  headingClassName,
  bodyClassName,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  headingClassName?: string;
  bodyClassName?: string;
}) {
  const hasCustomPadding = className && /(^|\s)(py-|pt-|pb-)/.test(className);

  return (
    <section
      id={id}
      data-header-theme={dark ? "ink" : "paper"}
      className={cn(
        "px-[5vw]",
        !hasCustomPadding && "py-[6vh] md:py-[8vh]",
        dark && "tone-ink",
        className
      )}
    >
      <CaseStudyLabel className={headingClassName}>{title}</CaseStudyLabel>
      <div
        className={cn(
          "mt-5 max-w-[40rem]",
          bodyClassName ??
            "text-[1.1rem] md:text-[1.2rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_88%,transparent)]"
        )}
      >
        {children}
      </div>
    </section>
  );
}
