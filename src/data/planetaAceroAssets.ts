/**
 * Planeta Acero assets — files in src/assets/planeta-acero/
 * cover = case-study banner / listing fallback
 * hero  = home hero only (via cover-home)
 */

type Lang = "es" | "en";

const modules = import.meta.glob("../assets/planeta-acero/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
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

export function planetaAceroAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function planetaAceroCover(_lang: Lang = "es") {
  return {
    desktop: planetaAceroAsset("cover"),
    mobile: planetaAceroAsset("cover"),
  };
}
