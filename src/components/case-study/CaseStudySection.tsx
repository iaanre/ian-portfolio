import type { ReactNode } from "react";
import { AnimatedHeading } from "../motion/AnimatedHeading.tsx";
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
        !hasCustomPadding && "py-[10vh] md:py-[14vh]",
        dark && "tone-ink",
        className
      )}
    >
      <AnimatedHeading
        as="h2"
        text={title}
        className={cn(
          "max-w-[14ch] text-[clamp(2.4rem,6vw,5.4rem)] font-medium leading-[0.9] tracking-[-0.05em]",
          headingClassName
        )}
      />
      <div
        className={cn(
          "mt-8 max-w-[38rem]",
          bodyClassName ?? "text-[1.05rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]"
        )}
      >
        {children}
      </div>
    </section>
  );
}
