/**
 * NUDOS assets — drop files into src/assets/nudos/
 * Basenames (any .jpg / .png / .webp):
 *   cover, cover-mobile,
 *   site-home, site-system, site-contact, site-projects, site-mobile,
 *   logo-horizontal, logo-horizontal-neg, logo-vertical, logo-vertical-neg,
 *   logo-mark, logo-mark-neg,
 *   logo-board-positive, logo-board-negative, logo-board-icons
 */

type Lang = "es" | "en";

const modules = import.meta.glob("../assets/nudos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
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

export function nudosAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function nudosCover(lang: Lang = "es") {
  return {
    desktop: nudosAsset("cover", lang) ?? nudosAsset("portada nudos", lang),
    mobile:
      nudosAsset("cover-mobile", lang) ??
      nudosAsset("cover", lang) ??
      nudosAsset("portada nudos", lang),
  };
}
