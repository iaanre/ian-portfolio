import { isVideoExt, socialFilesIn } from "./socialAssets.ts";

export type SocialBrandId = "vitrium" | "patagonia-cnc" | "btec" | "perfect-welding";
export type SocialKind = "reel" | "post";

export type SocialBrand = {
  id: SocialBrandId;
  label: string;
  /** Folder under src/assets/ (when present). */
  folder: string;
};

export type SocialPiece = {
  id: string;
  brand: SocialBrandId;
  kind: SocialKind;
  src?: string;
  alt: string;
  caption: string;
};

export const SOCIAL_BRANDS: SocialBrand[] = [
  { id: "vitrium", label: "Vitrium Capital", folder: "vitrium" },
  { id: "patagonia-cnc", label: "Patagonia CNC", folder: "patagonia-cnc-social" },
  { id: "btec", label: "BTEC", folder: "BTEC" },
  { id: "perfect-welding", label: "Perfect Welding", folder: "perfect welding" },
];

function piecesFromFolder(brand: SocialBrand): SocialPiece[] {
  const files = socialFilesIn(brand.folder);
  // Prefer unique basenames (same igexport can appear in two folders).
  const seen = new Set<string>();
  const pieces: SocialPiece[] = [];

  for (const file of files) {
    // Skip OS duplicate downloads: "name (1).mp4"
    const canonical = file.base.replace(/\s\(\d+\)$/, "");
    if (seen.has(canonical)) continue;
    // Skip multi-page flyer PDFs-as-png stacks from the reel/post feed for now.
    if (file.base.startsWith("flyer ")) continue;
    seen.add(canonical);

    const kind: SocialKind = isVideoExt(file.ext) ? "reel" : "post";
    pieces.push({
      id: `${brand.id}-${file.base}`,
      brand: brand.id,
      kind,
      src: file.url,
      alt: `${brand.label} — ${kind === "reel" ? "reel" : "post"}`,
      caption: kind === "reel" ? "Reel" : "Post",
    });
  }

  return pieces;
}

export const socialPieces: SocialPiece[] = SOCIAL_BRANDS.flatMap(piecesFromFolder);

export function socialPiecesByBrand(brand: SocialBrandId | "all") {
  if (brand === "all") return socialPieces;
  return socialPieces.filter((p) => p.brand === brand);
}

export function brandLabel(id: SocialBrandId) {
  return SOCIAL_BRANDS.find((b) => b.id === id)?.label ?? id;
}
