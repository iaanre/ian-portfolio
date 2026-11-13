import { GlassMaterial } from "./GlassMaterial.tsx";
import { useGlassMotion } from "./useGlassMotion.ts";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

export function GlassLens({ position = [0, 0, 0], scale = 1 }: Props) {
  const ref = useGlassMotion(0.22, 0.03);
  return (
    <mesh ref={ref} position={position} scale={scale} rotation={[0.2, 0.2, 0]}>
      <cylinderGeometry args={[1.05, 1.05, 0.14, 72]} />
      <GlassMaterial transmission />
    </mesh>
  );
}
