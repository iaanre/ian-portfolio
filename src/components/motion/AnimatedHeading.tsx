import { SplitTextReveal } from "./SplitTextReveal.tsx";

export function AnimatedHeading({
  text,
  className,
  as = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return <SplitTextReveal as={as} text={text} mode="word" className={className} />;
}
