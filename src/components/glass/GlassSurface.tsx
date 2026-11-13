import { GlassMaterial } from "./GlassMaterial.tsx";
import { useGlassMotion } from "./useGlassMotion.ts";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

export function GlassSurface({ position = [0, 0, 0], scale = 1 }: Props) {
  const ref = useGlassMotion(0.12, 0.02);
  return (
    <mesh ref={ref} position={position} scale={[scale * 2.4, scale * 1.1, scale]} rotation={[0.4, 0.2, 0.1]}>
      <sphereGeometry args={[1, 48, 24, 0, Math.PI, 0.35, 1.15]} />
      <GlassMaterial />
    </mesh>
  );
}
