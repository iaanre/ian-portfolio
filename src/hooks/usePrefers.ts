import { useSyncExternalStore } from "react";
import { runtime } from "../lib/runtime.ts";

type Prefs = {
  reduced: boolean;
  fine: boolean;
  mobile: boolean;
};

function read(): Prefs {
  if (typeof window === "undefined") {
    return { reduced: false, fine: true, mobile: false };
  }
  return {
    reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    fine: window.matchMedia("(pointer: fine)").matches,
    mobile: window.matchMedia("(max-width: 767px)").matches,
  };
}

let current = read();
runtime.reduced = current.reduced;
runtime.fine = current.fine;

const listeners = new Set<() => void>();
let started = false;

function ensure() {
  if (started || typeof window === "undefined") return;
  started = true;
  const queries = [
    window.matchMedia("(prefers-reduced-motion: reduce)"),
    window.matchMedia("(pointer: fine)"),
    window.matchMedia("(max-width: 767px)"),
  ];
  const update = () => {
    current = read();
    runtime.reduced = current.reduced;
    runtime.fine = current.fine;
    listeners.forEach((listener) => listener());
  };
  queries.forEach((query) => query.addEventListener("change", update));
}

function subscribe(listener: () => void) {
  ensure();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function usePrefers() {
  return useSyncExternalStore(subscribe, () => current, () => current);
}
