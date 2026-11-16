/**
 * TAY assets loader
 *
 * Drop raw screens/logos into:
 *   src/assets/tay/es/  (Spanish default)
 *   src/assets/tay/en/  (optional EN overrides)
 *
 * Basenames (any .jpg / .png / .webp):
 *   cover, cover-mobile,
 *   01-marketplace … 07-guardados,
 *   logo-wordmark, logo-wordmark-neg, logo-app-dark, logo-app-orange
 *
 * Designed boards (composed by the agent, not hand-exported):
 *   flow, final
 */

type Lang = "es" | "en";

const esModules = import.meta.glob("../assets/tay/es/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const enModules = import.meta.glob("../assets/tay/en/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function basename(path: string) {
  const file = path.split(/[/\\]/).pop() ?? path;
  return file.replace(/\.[^.]+$/, "").toLowerCase();
}

function indexModules(modules: Record<string, string>) {
  const map = new Map<string, string>();
  for (const [path, url] of Object.entries(modules)) {
    map.set(basename(path), url);
  }
  return map;
}

const esIndex = indexModules(esModules);
const enIndex = indexModules(enModules);

/** Resolve asset by basename. EN falls back to ES when missing. */
export function tayAsset(name: string, lang: Lang = "es"): string | undefined {
  const key = name.toLowerCase();
  if (lang === "en") return enIndex.get(key) ?? esIndex.get(key);
  return esIndex.get(key) ?? enIndex.get(key);
}

export function tayCover(lang: Lang = "es") {
  return {
    desktop: tayAsset("cover", lang),
    mobile: tayAsset("cover-mobile", lang) ?? tayAsset("cover", lang),
  };
}

export const TAY_SCREEN_IDS = [
  "01-marketplace",
  "02-detalle",
  "03-busqueda",
  "04-publicar",
  "05-chat",
  "06-perfil",
  "07-guardados",
] as const;

export const TAY_LOGO_IDS = [
  "logo-wordmark",
  "logo-wordmark-neg",
  "logo-app-dark",
  "logo-app-orange",
] as const;
