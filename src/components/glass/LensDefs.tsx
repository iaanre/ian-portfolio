import { useEffect, useState } from "react";

function lensMap() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return "";
  const image = context.createImageData(size, size);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = x / (size - 1) - 0.5;
      const ny = y / (size - 1) - 0.5;
      const radius = Math.min(Math.hypot(nx, ny) / 0.5, 1);
      const falloff = Math.pow(1 - radius, 0.7);
      const index = (y * size + x) * 4;
      image.data[index] = Math.round((0.5 + nx * falloff * 0.9) * 255);
      image.data[index + 1] = Math.round((0.5 + ny * falloff * 0.9) * 255);
      image.data[index + 2] = 128;
      image.data[index + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
  return canvas.toDataURL();
}

export function LensDefs() {
  const [href, setHref] = useState("");

  useEffect(() => {
    setHref(lensMap());
  }, []);

  if (!href) return null;

  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
      <filter id="ir-lens" x="-25%" y="-25%" width="150%" height="150%" colorInterpolationFilters="sRGB">
        <feImage href={href} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
        <feDisplacementMap in="SourceGraphic" in2="map" scale="30" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
