import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ease, gsap } from "../../lib/gsap.ts";
import { usePrefers } from "../../hooks/usePrefers.ts";
type Mode = "line" | "word" | "char";

type SplitTextRevealProps = {
  text: string;
  className?: string;
  mode?: Mode;
  as?: "h1" | "h2" | "h3" | "p";
};

export function SplitTextReveal({ text, className, mode = "word", as = "p" }: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const { reduced } = usePrefers();

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || reduced) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-split]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { yPercent: 112 },
        {
          yPercent: 0,
          duration: mode === "char" ? 0.7 : 0.95,
          ease: ease.out,
          stagger: mode === "char" ? 0.02 : 0.045,
          scrollTrigger: {
            trigger: root,
            start: "top 86%",
            once: true,
          },
        },
      );
    }, root);
    return () => ctx.revert();
  }, [mode, reduced, text]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      <SplitContent text={text} mode={mode} />
    </Tag>
  );
}

function SplitContent({ text, mode }: { text: string; mode: Mode }) {
  if (mode === "line") {
    return text.split("\n").map((line, index) => (
      <span key={`${line}-${index}`} className="block overflow-y-hidden">
        <span data-split className="block whitespace-nowrap">
          {line}
        </span>
      </span>
    ));
  }

  const parts = mode === "char" ? Array.from(text) : text.split(" ");
  const nodes: ReactNode[] = parts.map((part, index) => (
    <span key={`${part}-${index}`} className="inline-block overflow-hidden align-bottom">
      <span data-split className="inline-block">
        {part === " " ? "\u00A0" : part}
        {mode === "word" ? "\u00A0" : ""}
      </span>
    </span>
  ));
  return nodes;
}
