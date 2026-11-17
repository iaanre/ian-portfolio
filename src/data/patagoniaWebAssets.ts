/**
 * Patagonia Web assets — src/assets/patagonia-web/
 *   cover, mockup-home, mockup-02, mockup-devices, mockup-contact,
 *   screen-home, screen-02…screen-07, screen-contact
 */

type Lang = "es" | "en";

const modules = import.meta.glob(
  "../assets/patagonia-web/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
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

export function patagoniaWebAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function patagoniaWebCover(lang: Lang = "es") {
  return {
    desktop: patagoniaWebAsset("cover", lang) ?? patagoniaWebAsset("screen-home", lang),
    mobile: patagoniaWebAsset("cover", lang) ?? patagoniaWebAsset("screen-home", lang),
  };
}
