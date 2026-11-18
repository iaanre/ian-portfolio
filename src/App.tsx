import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "./lib/gsap.ts";
import { runtime } from "./lib/runtime.ts";
import { scrollToId, scrollToTop } from "./lib/scroll.ts";
import { usePrefers } from "./hooks/usePrefers.ts";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.tsx";
import { UI_COPY } from "./data/i18n.ts";
import { TransitionProvider, useTransition } from "./context/TransitionContext.tsx";
import { SoftNavProvider, useSoftNav } from "./context/SoftNavContext.tsx";
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
const PatagoniaWebPage = lazy(() => import("./pages/work/PatagoniaWebPage.tsx"));
const NudosWebPage = lazy(() => import("./pages/work/NudosWebPage.tsx"));
const VilaPage = lazy(() => import("./pages/work/VilaPage.tsx"));
const Catalog02Page = lazy(() => import("./pages/work/Catalog02Page.tsx"));
const NexoPage = lazy(() => import("./pages/work/NexoPage.tsx"));
const PatagoniaPackagingPage = lazy(() => import("./pages/work/PatagoniaPackagingPage.tsx"));
const GenericCasePage = lazy(() => import("./pages/work/GenericCasePage.tsx"));

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={routerBasename}>
        <TransitionProvider>
          <SoftNavProvider>
            <AppShell />
          </SoftNavProvider>
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
            <Route path="/work/nudos-web" element={<NudosWebPage />} />
            <Route path="/work/patagonia" element={<PatagoniaPage />} />
            <Route path="/work/patagonia-web" element={<PatagoniaWebPage />} />
            <Route path="/work/editorial-02" element={<VilaPage />} />
            <Route path="/work/catalog-02" element={<Catalog02Page />} />
            <Route path="/work/queer" element={<NexoPage />} />
            <Route path="/work/patagonia-packaging" element={<PatagoniaPackagingPage />} />
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
  const { transitioning } = useSoftNav();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Soft nav / project flight own scroll while their overlays are active.
    if (flight || runtime.flying || transitioning) return;

    // One smooth scroll only — no competing jumps.
    if (hash) {
      scrollToId(hash.slice(1), 16, { duration: 1 });
    } else {
      scrollToTop({ duration: 1 });
    }

    const refresh = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1100);

    return () => {
      window.clearTimeout(refresh);
    };
  }, [pathname, hash, flight, transitioning]);

  return null;
}
