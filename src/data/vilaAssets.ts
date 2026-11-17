/**
 * Brochure 01 VILA assets — files in src/assets/vila/
 *   cover, mockup-spread-01, mockup-spread-02, mockup-edge,
 *   mockup-planos, mockup-stack, mockup-angle,
 *   page-03, page-04, page-05, page-08, page-11,
 *   page-21, page-22, page-35, page-76
 */

type Lang = "es" | "en";

const modules = import.meta.glob("../assets/vila/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
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

export function vilaAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function vilaCover(lang: Lang = "es") {
  return {
    desktop: vilaAsset("cover", lang),
    mobile: vilaAsset("cover", lang),
  };
}
