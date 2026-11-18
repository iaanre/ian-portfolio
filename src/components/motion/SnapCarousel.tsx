import { Children, useRef, useState } from "react";
import type { ReactNode, UIEvent } from "react";
import { cn } from "../../lib/cn.ts";

/** Touch-friendly snap gallery — keeps tall image stacks short on mobile. */
export function SnapCarousel({
  children,
  className,
  label,
  itemClassName = "w-[82vw] shrink-0",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  itemClassName?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const total = items.length;

  const onScroll = (event: UIEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const slide = el.firstElementChild as HTMLElement | null;
    if (!slide) return;
    const step = slide.getBoundingClientRect().width + 16;
    if (step <= 0) return;
    const next = Math.round(el.scrollLeft / step);
    setIndex(Math.max(0, Math.min(total - 1, next)));
  };

  if (total === 0) return null;

  return (
    <section
      className={cn("relative", className)}
      aria-label={label}
      aria-roledescription="carousel"
    >
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[5vw] pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={onScroll}
      >
        {items.map((child, i) => (
          <div
            key={(child as { key?: string | null }).key ?? i}
            className={cn("snap-center", itemClassName)}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${total}`}
          >
            {child}
          </div>
        ))}
      </div>

      {total > 1 ? (
        <div className="mt-4 flex items-center justify-between gap-4 px-[5vw]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {items.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 rounded-full transition-[width,background-color] duration-300",
                  i === index ? "w-5 bg-[var(--c-ink)]" : "w-1.5 bg-[var(--c-line)]",
                )}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
