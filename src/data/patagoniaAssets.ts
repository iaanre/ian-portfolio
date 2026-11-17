/**
 * Patagonia CNC assets — drop files into src/assets/patagonia/
 * Basenames (any .jpg / .png / .webp):
 *   cover, cover 2, cover-mobile,          — case-study hero (web mockup)
 *   cover-home, cover-home-mobile,         — home / listing banner (editorial)
 *   spread-01, spread-02, spread-03,       — dobles páginas (12 / 13 / 14)
 *   catalog, collateral,                   — piezas 17 / 16
 *   site-home, site-solutions, site-laser, site-welding,
 *   site-empresa, site-contact, site-mobile, site-news
 */

type Lang = "es" | "en";

const modules = import.meta.glob("../assets/patagonia/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function basename(path: string) {
  const file = path.split(/[/\\]/).pop() ?? path;
  return file.replace(/\.[^.]+$/, "").toLowerCase();
}

const index = new Map<string, string>();
for (const [path, url] of Object.entries(modules)) {
  index.set(basename(path), url);
}

export function patagoniaAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function patagoniaCover(lang: Lang = "es") {
  return {
    // Case-study intro: editorial cover, then legacy mockups.
    desktop: patagoniaAsset("cover", lang) ?? patagoniaAsset("cover 2", lang),
    mobile:
      patagoniaAsset("cover-mobile", lang) ??
      patagoniaAsset("cover", lang) ??
      patagoniaAsset("cover 2", lang),
  };
}

export function patagoniaHomeCover(lang: Lang = "es") {
  return {
    desktop:
      patagoniaAsset("cover-home", lang) ??
      patagoniaAsset("cover home editorial 2", lang) ??
      patagoniaCover(lang).desktop,
    mobile:
      patagoniaAsset("cover-home-mobile", lang) ??
      patagoniaAsset("cover-home", lang) ??
      patagoniaCover(lang).mobile,
  };
}
