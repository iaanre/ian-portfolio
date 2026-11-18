import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectTransition } from "../components/projects/ProjectTransition.tsx";
import { runtime } from "../lib/runtime.ts";
import { scrollToTop } from "../lib/scroll.ts";

export type Flight = {
  slug: string;
  rect: { top: number; left: number; width: number; height: number };
};

type TransitionValue = {
  flight: Flight | null;
  launch: (flight: Flight) => void;
};

const TransitionContext = createContext<TransitionValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [flight, setFlight] = useState<Flight | null>(null);
  const navigate = useNavigate();

  const value = useMemo<TransitionValue>(
    () => ({
      flight,
      launch: (next) => {
        if (runtime.flying) return;
        runtime.flying = true;
        runtime.handoff = true;
        setFlight(next);
      },
    }),
    [flight],
  );

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <ProjectTransition
        flight={flight}
        onArrive={(slug) => {
          scrollToTop({ immediate: true });
          navigate(`/work/${slug}`);
          requestAnimationFrame(() => scrollToTop({ immediate: true }));
          window.setTimeout(() => scrollToTop({ immediate: true }), 32);
        }}
        onDone={() => {
          scrollToTop({ immediate: true });
          runtime.flying = false;
          // Keep handoff one frame so hero doesn't flash an entrance animation
          // the instant the overlay is removed.
          requestAnimationFrame(() => {
            runtime.handoff = false;
            window.dispatchEvent(new Event("ir-handoff-done"));
          });
          setFlight(null);
        }}
      />
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const value = useContext(TransitionContext);
  if (!value) throw new Error("useTransition must be used within TransitionProvider");
  return value;
}
