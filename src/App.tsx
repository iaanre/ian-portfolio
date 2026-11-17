import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "./lib/gsap.ts";
import { runtime } from "./lib/runtime.ts";
import { usePrefers } from "./hooks/usePrefers.ts";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.tsx";
import { UI_COPY } from "./data/i18n.ts";
import { TransitionProvider, useTransition } from "./context/TransitionContext.tsx";
import { CustomCursor } from "./components/cursor/CustomCursor.tsx";
import { Navigation } from "./components/navigation/Navigation.tsx";
import { PageCurtain } from "./components/motion/PageCurtain.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Work = lazy(() => import("./pages/Work.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const TayPage = lazy(() => import("./pages/work/TayPage.tsx"));
const NudosPage = lazy(() => import("./pages/work/NudosPage.tsx"));
const PatagoniaPage = lazy(() => import("./pages/work/PatagoniaPage.tsx"));
const VilaPage = lazy(() => import("./pages/work/VilaPage.tsx"));
const GenericCasePage = lazy(() => import("./pages/work/GenericCasePage.tsx"));

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={routerBasename}>
        <TransitionProvider>
          <AppShell />
        </TransitionProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

function AppShell() {
  const { lang } = useLanguage();

  return (
    <>
      <PointerBridge />
      <ScrollManager />
      <PageCurtain />
      <a className="skip-link" href="#content">
        {UI_COPY[lang].skipToContent}
      </a>
      <CustomCursor />
      <Navigation />
      <div className="grain" aria-hidden="true" />
      <main id="content">
        <Suspense fallback={<div className="min-h-[100svh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/tay" element={<TayPage />} />
            <Route path="/work/nudos" element={<NudosPage />} />
            <Route path="/work/patagonia" element={<PatagoniaPage />} />
            <Route path="/work/editorial-02" element={<VilaPage />} />
            <Route path="/work/:slug" element={<GenericCasePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

function PointerBridge() {
  const { fine } = usePrefers();

  useEffect(() => {
    if (!fine) return;
    const onMove = (event: PointerEvent) => {
      runtime.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      runtime.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine]);

  return null;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const { flight } = useTransition();

  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, [pathname]);

  useEffect(() => {
    if (flight || runtime.flying) return;
    if (hash) {
      const targetId = hash.slice(1);
      const scrollToTarget = () => {
        const node = document.getElementById(targetId);
        if (node) {
          node.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!scrollToTarget()) {
        const timer = window.setTimeout(scrollToTarget, 120);
        return () => window.clearTimeout(timer);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, flight]);

  return null;
}
