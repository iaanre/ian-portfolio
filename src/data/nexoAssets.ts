/**
 * NEXO / Revista Queer assets — files in src/assets/nexo/
 *   cover, back, indice-01, indice-02,
 *   mockup-cover, mockup-sumario, mockup-resistencia, mockup-stack, mockup-interior,
 *   page-01 … page-24
 */

type Lang = "es" | "en";

const modules = import.meta.glob("../assets/nexo/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
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

export function nexoAsset(name: string, _lang: Lang = "es"): string | undefined {
  return index.get(name.toLowerCase());
}

export function nexoCover(lang: Lang = "es") {
  return {
    desktop: nexoAsset("mockup-cover", lang) ?? nexoAsset("cover", lang),
    mobile: nexoAsset("mockup-cover", lang) ?? nexoAsset("cover", lang),
  };
}
