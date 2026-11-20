import {
  SOCIAL_BRANDS,
  socialPiecesByBrand,
  type SocialBrandId,
  type SocialPiece,
} from "../../data/socialMedia.ts";
import { cn } from "../../lib/cn.ts";

const logoModules = import.meta.glob("../../assets/social/logos/*.{png,svg,webp,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const LOGO_ALIASES: Record<string, string[]> = {
  vitrium: ["vitrium"],
  "patagonia-cnc": ["patagonia"],
  btec: ["btec"],
  "perfect-welding": ["perfect", "welding"],
};

/** Prefer brand-true reels; C12j lives in both folders (PW piece). */
const PREFERRED_REELS: Partial<Record<SocialBrandId, string[]>> = {
  btec: ["DWCrG3Tjyks", "DLiTAFcxU7a"],
  "perfect-welding": ["C4v5dxctmdY", "DN0sSn03GFw", "C3ieWttRjBi", "C12jAu6L9MJ"],
};

function logoFor(brandId: string): string | undefined {
  const aliases = LOGO_ALIASES[brandId] ?? [brandId];
  const entries = Object.entries(logoModules).filter(([path]) => {
    const file = (path.split(/[/\\]/).pop() ?? "").toLowerCase();
    return Boolean(file) && !file.startsWith(".");
  });

  const exact = entries.find(([path]) => {
    const file = (path.split(/[/\\]/).pop() ?? "").toLowerCase();
    return aliases.every((alias) => file.includes(alias.toLowerCase()));
  });
  if (exact) return exact[1];

  return entries.find(([path]) => {
    const file = (path.split(/[/\\]/).pop() ?? "").toLowerCase();
    return aliases.some((alias) => file.includes(alias.toLowerCase()));
  })?.[1];
}

function reelBase(piece: SocialPiece, brandId: string) {
  return piece.id.startsWith(`${brandId}-`)
    ? piece.id.slice(brandId.length + 1)
    : piece.id;
}

function pickReel(brandId: SocialBrandId, usedBases: Set<string>): SocialPiece | undefined {
  const reels = socialPiecesByBrand(brandId).filter((p) => p.kind === "reel" && p.src);
  const preferred = PREFERRED_REELS[brandId];
  const ordered = preferred
    ? [...reels].sort((a, b) => {
        const ai = preferred.findIndex((key) => reelBase(a, brandId).includes(key));
        const bi = preferred.findIndex((key) => reelBase(b, brandId).includes(key));
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      })
    : reels;

  for (const reel of ordered) {
    const base = reelBase(reel, brandId).toLowerCase();
    if (usedBases.has(base)) continue;
    usedBases.add(base);
    return reel;
  }
  return undefined;
}

type CoverTile = {
  brandId: SocialBrandId;
  label: string;
  src: string;
  logo?: string;
};

function coverTiles(): CoverTile[] {
  const usedBases = new Set<string>();
  return SOCIAL_BRANDS.flatMap((brand) => {
    const reel = pickReel(brand.id, usedBases);
    if (!reel?.src) return [];
    return [
      {
        brandId: brand.id,
        label: brand.label,
        src: reel.src,
        logo: logoFor(brand.id),
      },
    ];
  });
}

/**
 * Social cover — unique reel per client + multiply + white logos.
 */
export function SocialCoverVisual({ className }: { className?: string }) {
  const tiles = coverTiles();
  const count = tiles.length;
  const gridClass =
    count >= 4
      ? "grid-cols-2 grid-rows-2"
      : count === 3
        ? "grid-cols-3 grid-rows-1 max-sm:grid-cols-2 max-sm:grid-rows-2"
        : count === 2
          ? "grid-cols-2"
          : "grid-cols-1";

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#0d0d0d]", className)}>
      {count === 0 ? (
        <div className="flex h-full items-center justify-center px-6 text-center text-[13px] text-white/50">
          Drop reel exports into the brand folders to build this cover.
        </div>
      ) : (
        <ul className={cn("grid h-full w-full gap-[2px] bg-[#0d0d0d]", gridClass)}>
          {tiles.map((tile, idx) => {
            const spanLastOnMobile =
              count === 3 && idx === 2 ? "max-sm:col-span-2" : undefined;

            return (
              <li
                key={tile.brandId}
                className={cn("relative min-h-0 overflow-hidden bg-[#111]", spanLastOnMobile)}
              >
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={tile.src}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="metadata"
                  aria-label={`${tile.label} — reel`}
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-black/25 mix-blend-multiply"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-black/15"
                  aria-hidden
                />

                <div className="absolute inset-0 z-[1] flex items-center justify-center p-5 sm:p-8">
                  {tile.logo ? (
                    <div className="flex h-12 w-36 items-center justify-center sm:h-14 sm:w-44 md:h-16 md:w-52">
                      <img
                        src={tile.logo}
                        alt={tile.label}
                        className={cn(
                          "h-full w-full object-contain mix-blend-screen",
                          tile.brandId === "btec" && "scale-125",
                        )}
                      />
                    </div>
                  ) : (
                    <span className="text-center text-[11px] font-medium uppercase tracking-[0.16em] text-white sm:text-[13px]">
                      {tile.label}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
