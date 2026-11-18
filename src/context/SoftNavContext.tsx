import { createContext, useCallback, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToId, scrollToTop } from "../lib/scroll.ts";

type SoftNavValue = {
  transitioning: boolean;
  softNavigate: (to: string) => void;
};

const SoftNavContext = createContext<SoftNavValue | null>(null);

function parseTarget(to: string, currentPath: string) {
  if (to.startsWith("#")) {
    return { path: currentPath, hash: to };
  }
  const [pathPart, hashPart] = to.split("#");
  return {
    path: pathPart || currentPath,
    hash: hashPart ? `#${hashPart}` : "",
  };
}

/** Lightweight nav helper — no overlay. Purple loader is first-visit only (PageCurtain). */
export function SoftNavProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const softNavigate = useCallback(
    (to: string) => {
      const { path, hash } = parseTarget(to, location.pathname);
      const targetPath = path || "/";
      const samePath = targetPath === location.pathname;

      if (hash && samePath) {
        scrollToId(hash.slice(1));
        if (location.hash !== hash) {
          window.history.replaceState(null, "", `${location.pathname}${hash}`);
        }
        return;
      }

      navigate(targetPath + hash);
      if (hash) {
        window.setTimeout(() => scrollToId(hash.slice(1), 16, { immediate: true }), 40);
      } else {
        scrollToTop({ immediate: true });
      }
    },
    [location.hash, location.pathname, navigate],
  );

  const value = useMemo(
    () => ({ transitioning: false, softNavigate }),
    [softNavigate],
  );

  return <SoftNavContext.Provider value={value}>{children}</SoftNavContext.Provider>;
}

export function useSoftNav() {
  const value = useContext(SoftNavContext);
  if (!value) throw new Error("useSoftNav must be used within SoftNavProvider");
  return value;
}
