import { useMemo, useState } from "react";
import {
  SOCIAL_BRANDS,
  brandLabel,
  socialPiecesByBrand,
  type SocialBrandId,
  type SocialPiece,
} from "../../data/socialMedia.ts";
import { useLanguage } from "../../context/LanguageContext.tsx";
import { localizeCategoryLabel, localizeProjectTitle, UI_COPY } from "../../data/i18n.ts";
import { cn } from "../../lib/cn.ts";
import { PhoneFrame } from "../media/PhoneFrame.tsx";
import { SnapCarousel } from "../motion/SnapCarousel.tsx";
import { ImageReveal } from "../motion/ImageReveal.tsx";
import { SocialCoverVisual } from "./SocialCover.tsx";
import { Link } from "react-router-dom";
import { useProjectLaunch } from "../../hooks/useProjectLaunch.ts";
import { getProject } from "../../data/projects.ts";

type BrandFilter = "all" | SocialBrandId;

/** Home section 04 — same chrome as Editorial / Web / Branding. */
export function SocialSection() {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang].home;
  const cat = UI_COPY[lang].categories.social;
  const project = getProject("social");
  const total = project ? 1 : 0;

  return (
    <section
      id="social"
      data-header-theme="paper"
      className="px-[5vw] py-[12vh] md:py-[18vh]"
    >
      <div className="border-t border-[var(--c-line)] pt-8 md:pt-10">
        <div className="grid items-start gap-6 md:grid-cols-12">
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)] md:col-span-3">
            <span className="inline-block h-2 w-2 rounded-[1px] bg-[var(--c-accent)]" />
            <span>
              04 / {copy.sectionWord}
            </span>
          </div>

          <div className="md:col-span-6">
            <h2 className="text-[clamp(2.2rem,4.8vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
              {cat.label}
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[var(--c-muted)]">
              {cat.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--c-muted)]">
              ({String(total).padStart(2, "0")})
            </span>
          </div>
        </div>
      </div>

      {project ? (
        <div className="mt-12 grid items-start gap-y-12 md:mt-16 md:grid-cols-12 md:gap-x-8">
          <SocialHomeCard project={project} className="md:col-span-7" />
        </div>
      ) : null}
    </section>
  );
}

function SocialHomeCard({
  project,
  className,
}: {
  project: NonNullable<ReturnType<typeof getProject>>;
  className?: string;
}) {
  const { lang } = useLanguage();
  const { mediaRef, onClick } = useProjectLaunch(project);

  return (
    <article className={cn("group", className)}>
      <Link
        to={`/work/${project.slug}`}
        data-cursor="project"
        onClick={onClick}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8"
      >
        <div ref={mediaRef} className="aspect-[16/10] w-full overflow-hidden">
          <SocialCoverVisual className="h-full w-full" />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-transparent pb-1 transition-colors duration-300 group-hover:border-[var(--c-line)]">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              className="h-2 w-2 shrink-0 rounded-[1px] opacity-85 transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: project.banner.accent }}
            />
            <h3 className="truncate text-[16px] font-medium tracking-[-0.02em] sm:text-[18px]">
              {localizeProjectTitle(project, lang).title}
            </h3>
          </div>
          <p className="shrink-0 text-[12px] text-[var(--c-muted)] sm:text-[13px]">
            {localizeCategoryLabel(project, lang)}
          </p>
        </div>
      </Link>
    </article>
  );
}

/** Filters + reels/posts — used inside the case study page and Work filter. */
export function SocialFeed({ className }: { className?: string }) {
  const { lang } = useLanguage();
  const social = UI_COPY[lang].social;
  const [brand, setBrand] = useState<BrandFilter>("all");

  const pieces = useMemo(() => socialPiecesByBrand(brand), [brand]);
  const reels = pieces.filter((p) => p.kind === "reel" && p.src);
  const posts = pieces.filter((p) => p.kind === "post" && p.src);
  const total = reels.length + posts.length;

  return (
    <div className={className}>
      <div
        role="group"
        aria-label={social.filterAria}
        className="flex flex-wrap gap-2"
      >
        <FilterPill active={brand === "all"} onClick={() => setBrand("all")}>
          {social.filterAll}
        </FilterPill>
        {SOCIAL_BRANDS.map((item) => (
          <FilterPill
            key={item.id}
            active={brand === item.id}
            onClick={() => setBrand(item.id)}
          >
            {item.label}
          </FilterPill>
        ))}
      </div>

      {total === 0 ? (
        <p className="mt-14 max-w-[36rem] text-[1.02rem] leading-[1.55] text-[var(--c-muted)]">
          {social.empty}
        </p>
      ) : (
        <>
          {reels.length > 0 ? (
            <div className="mt-12 md:mt-16">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)]">
                {social.reelsLabel}
              </p>
              <SnapCarousel
                label={social.reelsLabel}
                itemClassName="w-[46vw] shrink-0 sm:w-[36vw] md:w-[22vw]"
              >
                {reels.map((piece) => (
                  <ReelCard key={piece.id} piece={piece} />
                ))}
              </SnapCarousel>
            </div>
          ) : null}

          {posts.length > 0 ? (
            <div className="mt-12 md:mt-16">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--c-muted)]">
                {social.postsLabel}
              </p>
              <SnapCarousel
                label={social.postsLabel}
                itemClassName="w-[58vw] shrink-0 sm:w-[42vw] md:w-[28vw]"
              >
                {posts.map((piece) => (
                  <PostCard key={piece.id} piece={piece} />
                ))}
              </SnapCarousel>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-[11px] font-medium tracking-[-0.01em] transition-colors",
        active
          ? "border-[#0d0d0d] bg-[#0d0d0d] text-[#f5f4f0]"
          : "border-[var(--c-line)] text-[var(--c-muted)] hover:border-[var(--c-ink)] hover:text-[var(--c-ink)]",
      )}
    >
      {children}
    </button>
  );
}

function ReelCard({ piece }: { piece: SocialPiece }) {
  return (
    <figure>
      <PhoneFrame className="w-full" aspect="9/16" label={undefined}>
        <video
          className="absolute inset-0 h-full w-full object-contain"
          src={piece.src}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-label={piece.alt}
        />
      </PhoneFrame>
      <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
        <span className="truncate text-[var(--c-ink)]">{brandLabel(piece.brand)}</span>
        <span>{piece.caption}</span>
      </figcaption>
    </figure>
  );
}

function PostCard({ piece }: { piece: SocialPiece }) {
  return (
    <figure>
      <ImageReveal variant="fade" naturalHeight className="w-full">
        <img
          src={piece.src}
          alt={piece.alt}
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </ImageReveal>
      <figcaption className="mt-3 flex items-baseline justify-between gap-3 text-[11px] uppercase tracking-[0.14em] text-[var(--c-muted)]">
        <span className="truncate text-[var(--c-ink)]">{brandLabel(piece.brand)}</span>
        <span>{piece.caption}</span>
      </figcaption>
    </figure>
  );
}
