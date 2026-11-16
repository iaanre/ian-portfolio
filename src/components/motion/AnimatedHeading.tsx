import { SplitTextReveal } from "./SplitTextReveal.tsx";

export function AnimatedHeading({
  text,
  className,
  as = "h2",
  mode = "word",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  mode?: "line" | "word" | "char";
}) {
  return <SplitTextReveal as={as} text={text} mode={mode} className={className} />;
}
