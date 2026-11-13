import { GlassMaterial } from "./GlassMaterial.tsx";
import { useGlassMotion } from "./useGlassMotion.ts";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

export function GlassOrb({ position = [0, 0, 0], scale = 1 }: Props) {
  const ref = useGlassMotion(0.32, 0.07);
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.95, 64, 64]} />
      <GlassMaterial />
    </mesh>
  );
}
