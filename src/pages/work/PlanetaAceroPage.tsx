import { getProject, mediaById } from "../../data/projects.ts";
import { planetaAceroAsset } from "../../data/planetaAceroAssets.ts";
import { planetaAceroSectionBody } from "../../data/planetaAceroCopy.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { CaseMedia } from "../../components/case-study/CaseMedia.tsx";
import { CaseMediaGallery } from "../../components/case-study/CaseMediaGallery.tsx";
import { CaseStudyLabel } from "../../components/case-study/CaseStudyLabel.tsx";
import { CaseStudyLayout } from "../../components/case-study/CaseStudyLayout.tsx";
import { ImageReveal } from "../../components/motion/ImageReveal.tsx";

/** Section titles sit under the hero H1 — one clear level, not display size. */
const SECTION_TITLE =
  "mt-4 max-w-[18ch] text-[clamp(1.65rem,2.8vw,2.35rem)] font-semibold leading-[1.05] tracking-[-0.035em]";

const SWATCHES = [
  { hex: "#FF7F00", name: "Orange", nameEs: "Naranja" },
  { hex: "#1A8FBC", name: "Cyan", nameEs: "Cyan" },
  { hex: "#05223A", name: "Navy", nameEs: "Navy" },
  { hex: "#1E1A17", name: "Charcoal", nameEs: "Carbón" },
  { hex: "#FFFFFF", name: "White", nameEs: "Blanco" },
] as const;

export default function PlanetaAceroPage() {
  const { lang } = useLanguage();
  const project = getProject("planeta-acero");
  if (!project) return null;

  const t = (id: string) => planetaAceroSectionBody(id, lang) ?? "";

  return (
    <CaseStudyLayout project={project}>
      <section
        data-header-theme="paper"
        className="grid gap-8 px-[5vw] pt-[6vh] pb-[8vh] md:grid-cols-2 md:gap-x-16 md:gap-y-0 md:pt-[8vh] md:pb-[10vh]"
      >
        <div className="max-w-[34rem]">
          <CaseStudyLabel>{lang === "es" ? "Resumen" : "Overview"}</CaseStudyLabel>
          <p className="mt-4 text-[1.02rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_86%,transparent)] md:text-[1.06rem]">
            {t("overview")}
          </p>
        </div>
        <div className="max-w-[34rem]">
          <CaseStudyLabel>{lang === "es" ? "Enfoque" : "Approach"}</CaseStudyLabel>
          <p className="mt-4 text-[1.02rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_86%,transparent)] md:text-[1.06rem]">
            {t("approach")}
          </p>
        </div>
      </section>

      <IsotypeSection />
      <LockupsSection />
      <PatternSection />
      <ColorSection />
      <TypeSection />
      <BusinessCardSection />
      <EmailSignatureSection />
      <ApplicationsSection />

      <section data-header-theme="paper" className="px-[5vw] pb-[12vh] md:pb-[16vh]">
        <CaseStudyLabel>{lang === "es" ? "Cierre" : "Close"}</CaseStudyLabel>
        <h2 className={SECTION_TITLE}>{lang === "es" ? "Resultado." : "Outcome."}</h2>
        <p className="mt-4 max-w-[38rem] text-[0.98rem] md:text-[1.05rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_84%,transparent)]">
          {t("outcome")}
        </p>
      </section>
    </CaseStudyLayout>
  );
}

function IsotypeSection() {
  const { lang } = useLanguage();
  const project = getProject("planeta-acero");
  if (!project) return null;

  const boards = [
    { id: "iso-pos", bg: "#EFEFED", label: lang === "es" ? "Positivo" : "Positive" },
    { id: "iso-mono", bg: "#0d0d0d", label: lang === "es" ? "Negativo" : "Negative" },
    { id: "iso-full", bg: "#FFFFFF", label: lang === "es" ? "Color" : "Full color" },
  ] as const;

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Isologo" : "Brand mark"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
          {lang === "es" ? "Órbita y chispa." : "Orbit and spark."}
        </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("concept", lang)}
      </p>

      <CaseMediaGallery
        className="mt-8 md:mt-10"
        label={lang === "es" ? "Versiones del isologo" : "Isotype versions"}
        itemClassName="w-[78vw] shrink-0"
        slides={boards.map(({ id, bg, label }) => (
          <figure key={id}>
            <div className="flex aspect-square items-center justify-center px-[18%]" style={{ background: bg }}>
              <img
                src={mediaById(project, id).src}
                alt={mediaById(project, id).alt}
                className="h-auto w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
              {label}
            </figcaption>
          </figure>
        ))}
        desktop={
          <div className="grid grid-cols-3 gap-4 md:gap-5">
            {boards.map(({ id, bg, label }) => (
              <figure key={id} className="min-w-0">
                <div className="flex aspect-square w-full items-center justify-center px-[18%]" style={{ background: bg }}>
                  <img
                    src={mediaById(project, id).src}
                    alt={mediaById(project, id).alt}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        }
      />
    </section>
  );
}

function LockupsSection() {
  const { lang } = useLanguage();
  const project = getProject("planeta-acero");
  if (!project) return null;

  const horizontal = [
    { id: "logo-h-pos", bg: "#EFEFED", label: lang === "es" ? "Horizontal · positivo" : "Horizontal · positive" },
    { id: "logo-h-neg", bg: "#FFFFFF", label: lang === "es" ? "Horizontal · negativo" : "Horizontal · negative" },
    { id: "logo-h-full", bg: "#05223A", label: lang === "es" ? "Horizontal · completo" : "Horizontal · full" },
    { id: "logo-h-complete", bg: "#EFEFED", label: lang === "es" ? "Horizontal · variantes" : "Horizontal · variants" },
  ] as const;

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Lockups" : "Lockups"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
        {lang === "es" ? "Todas las versiones." : "Every version."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("lockups", lang)}
      </p>

      <CaseMediaGallery
        className="mt-8 md:mt-10"
        label={lang === "es" ? "Lockups horizontales" : "Horizontal lockups"}
        itemClassName="w-[86vw] shrink-0"
        slides={horizontal.map(({ id, bg, label }) => (
          <figure key={id}>
            <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
              <div className="flex aspect-[16/9] items-center justify-center px-[10%]" style={{ background: bg }}>
                <img
                  src={mediaById(project, id).src}
                  alt={mediaById(project, id).alt}
                  className="h-auto w-full max-w-[28rem] object-contain"
                />
              </div>
            </ImageReveal>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
              {label}
            </figcaption>
          </figure>
        ))}
        desktop={
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {horizontal.map(({ id, bg, label }) => (
              <figure key={id}>
                <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
                  <div className="flex aspect-[16/9] items-center justify-center px-[12%]" style={{ background: bg }}>
                    <img
                      src={mediaById(project, id).src}
                      alt={mediaById(project, id).alt}
                      className="h-auto w-full max-w-[28rem] object-contain"
                    />
                  </div>
                </ImageReveal>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        }
      />

      <div className="mt-6 grid gap-4 md:mt-8 md:mx-auto md:max-w-[52vw] md:grid-cols-2 md:gap-5">
        {[
          { id: "logo-v", bg: "#EFEFED", label: lang === "es" ? "Vertical" : "Vertical" },
          { id: "logo-v-bg", bg: "#05223A", label: lang === "es" ? "Vertical · fondo" : "Vertical · background" },
        ].map(({ id, bg, label }) => (
          <figure key={id}>
            <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem]">
              <div
                className="flex aspect-[4/5] items-center justify-center px-[12%] py-[10%]"
                style={{ background: bg }}
              >
                <img
                  src={mediaById(project, id).src}
                  alt={mediaById(project, id).alt}
                  className="h-auto w-full max-w-[11rem] object-contain md:max-w-[13rem]"
                />
              </div>
            </ImageReveal>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
              {label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function PatternSection() {
  const { lang } = useLanguage();
  const project = getProject("planeta-acero");
  if (!project) return null;
  const pattern = mediaById(project, "pattern");

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Trama" : "Pattern"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
        {lang === "es" ? "Campo de marca." : "Brand field."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("pattern", lang)}
      </p>
      <div className="mt-8 md:mt-10">
        <CaseMedia project={project} slot={pattern} reveal="expand" />
      </div>
    </section>
  );
}

function ColorSection() {
  const { lang } = useLanguage();

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Color" : "Color"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
        {lang === "es" ? "Cinco valores." : "Five values."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("color", lang)}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5 md:mt-10">
        {SWATCHES.map((swatch) => (
          <div key={swatch.hex} className="overflow-hidden rounded-[1rem] border border-[var(--c-line)]">
            <div
              className="aspect-[5/4]"
              style={{
                backgroundColor: swatch.hex,
                boxShadow: swatch.hex === "#FFFFFF" ? "inset 0 0 0 1px rgba(0,0,0,0.06)" : undefined,
              }}
            />
            <div className="flex flex-col gap-0.5 px-3 py-2.5">
              <span className="text-[12px] font-medium tracking-[-0.01em]">
                {lang === "es" ? swatch.nameEs : swatch.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--c-muted)]">{swatch.hex}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TypeSection() {
  const { lang } = useLanguage();

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Tipografía" : "Typography"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>MuseoModerno + Axiforma.</h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("type", lang)}
      </p>

      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
        <div className="rounded-[1.1rem] border border-[var(--c-line)] bg-[#05223A] px-6 py-8 text-white md:px-8 md:py-10">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">MuseoModerno</p>
          <p
            className="mt-5 text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[0.95] tracking-[-0.03em]"
            style={{ fontFamily: '"MuseoModerno", var(--font-sans)' }}
          >
            PLANETA
            <br />
            ACERO
          </p>
          <p
            className="mt-6 text-[1.05rem] leading-[1.5] text-white/75"
            style={{ fontFamily: '"MuseoModerno", var(--font-sans)' }}
          >
            Aa Bb Cc 0123456789
          </p>
          <p className="mt-4 text-[12px] text-white/45">
            {lang === "es" ? "Wordmark · display" : "Wordmark · display"}
          </p>
        </div>

        <div className="rounded-[1.1rem] border border-[var(--c-line)] bg-[#EFEFED] px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--c-muted)]">Axiforma</p>
          <p
            className="mt-5 text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#05223A]"
            style={{ fontFamily: '"Axiforma", "Poppins", var(--font-sans)' }}
          >
            {lang === "es" ? "Nombre Apellido" : "Full Name"}
          </p>
          <p
            className="mt-3 text-[1rem] leading-[1.55] text-[#05223A]/80"
            style={{ fontFamily: '"Axiforma", "Poppins", var(--font-sans)' }}
          >
            {lang === "es" ? "Cargo en la empresa" : "Role at the company"}
            <br />
            +54 9 11 XXXX-XXXX
            <br />
            nombre@planeta-acero.com.ar
          </p>
          <p className="mt-6 text-[12px] text-[var(--c-muted)]">
            {lang === "es" ? "UI · contacto · cuerpo" : "UI · contact · body"}
          </p>
        </div>
      </div>
    </section>
  );
}

function BusinessCardSection() {
  const { lang } = useLanguage();
  const front = planetaAceroAsset("card-front");
  const back = planetaAceroAsset("card-back");

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Tarjeta personal" : "Business card"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
        {lang === "es" ? "Frente y dorso." : "Front and back."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("stationery", lang)}
      </p>

      {/* Desk mockup — perspective cards on a textured surface */}
      <div className="relative mt-10 overflow-hidden rounded-[1.25rem] md:mt-12">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 20%, rgba(26,143,188,0.18), transparent 55%),
              radial-gradient(ellipse 70% 50% at 80% 80%, rgba(255,127,0,0.14), transparent 50%),
              linear-gradient(160deg, #1a222c 0%, #0d1218 45%, #15202b 100%)
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url(${planetaAceroAsset("pattern")})`,
            backgroundSize: "42%",
            mixBlendMode: "soft-light",
          }}
        />

        <div className="relative flex min-h-[420px] items-center justify-center px-6 py-16 md:min-h-[520px] md:px-12 md:py-20">
          <div className="relative mx-auto w-full max-w-[920px]">
            {/* Back card — angled behind */}
            <div
              className="absolute left-[4%] top-[8%] w-[58%] max-w-[420px] md:left-[8%] md:top-[6%] md:w-[48%]"
              style={{
                transform: "perspective(1200px) rotateY(18deg) rotateZ(-8deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="overflow-hidden rounded-[0.85rem] border border-white/10 bg-[#05223A]">
                {back ? (
                  <img src={back} alt={lang === "es" ? "Tarjeta · dorso" : "Card · back"} className="block h-auto w-full" />
                ) : null}
              </div>
              <div
                aria-hidden
                className="absolute -bottom-3 left-[8%] right-[8%] h-6 rounded-[100%] bg-black/50 blur-xl"
              />
            </div>

            {/* Front card — primary */}
            <div
              className="relative ml-auto w-[72%] max-w-[460px] md:mr-[4%] md:w-[52%]"
              style={{
                transform: "perspective(1200px) rotateY(-10deg) rotateZ(4deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="overflow-hidden rounded-[0.85rem] border border-black/10 bg-[#f4f4f2]">
                {front ? (
                  <img
                    src={front}
                    alt={lang === "es" ? "Tarjeta · frente" : "Card · front"}
                    className="block h-auto w-full"
                  />
                ) : null}
              </div>
              <div
                aria-hidden
                className="absolute -bottom-4 left-[6%] right-[6%] h-7 rounded-[100%] bg-black/45 blur-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
        <figure>
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem] border border-[var(--c-line)] bg-[#f4f4f2]">
            {front ? <img src={front} alt="" className="block h-auto w-full" /> : null}
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Frente" : "Front"}
          </figcaption>
        </figure>
        <figure>
          <ImageReveal variant="clip" className="overflow-hidden rounded-[1.1rem] border border-[var(--c-line)] bg-[#05223A]">
            {back ? <img src={back} alt="" className="block h-auto w-full" /> : null}
          </ImageReveal>
          <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Dorso" : "Back"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function EmailSignatureSection() {
  const { lang } = useLanguage();
  const signature = planetaAceroAsset("email-signature");

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Firma de correo" : "Email signature"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
        {lang === "es" ? "En el mail." : "In the inbox."}
      </h2>

      <div className="mt-8 w-full max-w-[48rem] overflow-hidden rounded-[1.1rem] border border-[var(--c-line)] bg-white md:mt-10">
        <div className="flex items-center gap-2 border-b border-[var(--c-line)] bg-[#f3f2ee] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
            {lang === "es" ? "Mensaje · salida" : "Message · outbox"}
          </span>
        </div>
        <div className="space-y-1.5 border-b border-[var(--c-line)] px-4 py-3 text-[13px] text-[color:color-mix(in_srgb,var(--c-ink)_70%,transparent)]">
          <p>
            <span className="text-[var(--c-muted)]">{lang === "es" ? "Para:" : "To:"}</span>{" "}
            contacto@ejemplo.com
          </p>
          <p>
            <span className="text-[var(--c-muted)]">{lang === "es" ? "Asunto:" : "Subject:"}</span>{" "}
            Planeta Acero
          </p>
        </div>
        <div className="bg-white px-4 py-5">
          <p className="mb-4 max-w-[36rem] text-[0.95rem] leading-[1.55] text-[color:color-mix(in_srgb,var(--c-ink)_78%,transparent)]">
            {lang === "es"
              ? "Gracias por escribir. Quedo atento a lo que necesiten."
              : "Thanks for reaching out. Happy to continue whenever you’re ready."}
          </p>
          {signature ? (
            <img
              src={signature}
              alt={lang === "es" ? "Firma de correo Planeta Acero" : "Planeta Acero email signature"}
              className="block h-auto w-full max-w-[34rem] object-contain object-left"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  const { lang } = useLanguage();
  const project = getProject("planeta-acero");
  if (!project) return null;

  const posts = [
    { id: "social-02", label: lang === "es" ? "Post redes 01" : "Social post 01" },
    { id: "social-03", label: lang === "es" ? "Post redes 02" : "Social post 02" },
  ] as const;

  return (
    <section data-header-theme="paper" className="px-[5vw] pb-[8vh] md:pb-[12vh]">
      <CaseStudyLabel>{lang === "es" ? "Aplicaciones" : "Applications"}</CaseStudyLabel>
      <h2 className={SECTION_TITLE}>
        {lang === "es" ? "Redes y banner." : "Social and banner."}
      </h2>
      <p className="mt-5 max-w-[38rem] text-[1.02rem] md:text-[1.1rem] leading-[1.6] text-[color:color-mix(in_srgb,var(--c-ink)_82%,transparent)]">
        {planetaAceroSectionBody("applications", lang)}
      </p>

      <CaseMediaGallery
        className="mt-8 md:mt-10"
        label={lang === "es" ? "Posts de redes" : "Social posts"}
        itemClassName="w-[78vw] shrink-0"
        slides={posts.map(({ id, label }) => (
          <SocialPostMock key={id} src={mediaById(project, id).src} label={label} />
        ))}
        desktop={
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map(({ id, label }) => (
              <SocialPostMock key={id} src={mediaById(project, id).src} label={label} />
            ))}
          </div>
        }
      />

      <div className="mt-8 md:mt-10">
        <CaseStudyLabel className="mb-4 tracking-[0.18em]">
          {lang === "es" ? "Banner" : "Banner"}
        </CaseStudyLabel>
        <div className="overflow-hidden rounded-[1.1rem] border border-[var(--c-line)] bg-[#0d0d0d] p-3 md:p-4">
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-white/35">
              planeta-acero.com
            </span>
          </div>
          <ImageReveal variant="fade" className="overflow-hidden rounded-[0.6rem]">
            <img
              src={mediaById(project, "banner-01").src}
              alt={mediaById(project, "banner-01").alt}
              className="block h-auto w-full object-cover"
            />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}

function SocialPostMock({ src, label }: { src?: string; label: string }) {
  const avatar = planetaAceroAsset("iso-full");

  return (
    <figure>
      <div className="rounded-[1.25rem] border border-[var(--c-line)] bg-white">
        <div className="flex items-center gap-2.5 border-b border-[var(--c-line)] px-3.5 py-2.5">
          {/* Small avatar only — isologo complete, no crop/scale */}
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#05223A]">
            {avatar ? (
              <img
                src={avatar}
                alt=""
                aria-hidden="true"
                width={18}
                height={18}
                className="size-[18px] object-contain"
              />
            ) : null}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-medium tracking-[-0.01em]">planeta.acero</p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--c-muted)]">Sponsored</p>
          </div>
        </div>
        {src ? <img src={src} alt={label} className="block h-auto w-full" /> : null}
        <div className="px-3.5 py-3">
          <p className="text-[12px] leading-[1.45] text-[color:color-mix(in_srgb,var(--c-ink)_78%,transparent)]">
            <span className="font-medium">planeta.acero</span> {label}
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">{label}</figcaption>
    </figure>
  );
}
