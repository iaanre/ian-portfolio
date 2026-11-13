import { cn } from "../../lib/cn.ts";

export function DomLens({ className }: { className?: string }) {
  return <div className={cn("lens-rim", className)} aria-hidden="true" />;
}
