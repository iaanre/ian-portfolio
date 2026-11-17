/**
 * Patagonia packaging (caja alambre) — src/assets/patagonia-packaging/
 *   cover, mockup-01, mockup-02, mockup-03
 */

type Lang = "es" | "en";

const modules = import.meta.glob(
  "../assets/patagonia-packaging/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
) as Record<string, string>;

function basename(path: string) {
  const file = path.split(/[/\\]/).pop() ?? path;
  return file.replace(/\.[^.]+$/, "").toLowerCase();
}

const index = new Map<string, string>();
for (const [path, url] of Object.entries(modules)) {
  index.set(basename(path), url);
}

export function packagingAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function packagingCover(lang: Lang = "es") {
  return {
    desktop: packagingAsset("cover", lang) ?? packagingAsset("mockup-01", lang),
    mobile: packagingAsset("cover", lang) ?? packagingAsset("mockup-01", lang),
  };
}
