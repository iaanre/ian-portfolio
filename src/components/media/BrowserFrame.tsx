import type { ReactNode } from "react";
import { cn } from "../../lib/cn.ts";

export function BrowserFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden bg-[#111] text-[#efece6]", className)}>
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-3 text-[10px] uppercase tracking-[0.16em] text-white/50">Site preview</span>
      </div>
      <div className="aspect-[16/10] bg-[#d9d4ca]">{children}</div>
    </div>
  );
}
