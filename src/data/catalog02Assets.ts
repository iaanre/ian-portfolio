/**
 * Catalog 02 / Millbridge assets — files in src/assets/catalog-02/
 *   cover, mockup-cover, mockup-01, mockup-02, mockup-03, mockup-stack,
 *   page-01 … page-08
 */

type Lang = "es" | "en";

const modules = import.meta.glob("../assets/catalog-02/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
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

export function catalog02Asset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function catalog02Cover(lang: Lang = "es") {
  return {
    desktop: catalog02Asset("mockup-cover", lang) ?? catalog02Asset("cover", lang),
    mobile: catalog02Asset("mockup-cover", lang) ?? catalog02Asset("cover", lang),
  };
}
