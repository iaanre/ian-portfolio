/**
 * Social / Instagram exports —
 *   src/assets/vitrium/
 *   src/assets/BTEC/
 *   src/assets/perfect welding/
 *   src/assets/patagonia-cnc-social/  (Patagonia CNC — when ready)
 */

const modules = import.meta.glob(
  "../assets/{BTEC,perfect welding,vitrium,patagonia-social,patagonia-cnc-social}/*.{mp4,jpg,jpeg,png,webp,MP4,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
) as Record<string, string>;

function basename(path: string) {
  const file = path.split(/[/\\]/).pop() ?? path;
  return file.replace(/\.[^.]+$/, "").toLowerCase();
}

function folderOf(path: string) {
  const parts = path.split(/[/\\]/);
  const assetsIdx = parts.findIndex((p) => p === "assets");
  return assetsIdx >= 0 ? (parts[assetsIdx + 1] ?? "").toLowerCase() : "";
}

type Indexed = { url: string; folder: string; base: string; ext: string };

const index: Indexed[] = Object.entries(modules).map(([path, url]) => {
  const file = path.split(/[/\\]/).pop() ?? path;
  const ext = (file.split(".").pop() ?? "").toLowerCase();
  return { url, folder: folderOf(path), base: basename(path), ext };
});

export function socialFilesIn(folder: string) {
  const key = folder.toLowerCase();
  return index.filter((item) => item.folder === key);
}

export function isVideoExt(ext: string) {
  return ext === "mp4" || ext === "webm" || ext === "mov";
}
