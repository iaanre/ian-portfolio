import { GlassMaterial } from "./GlassMaterial.tsx";
import { useGlassMotion } from "./useGlassMotion.ts";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

export function GlassCapsule({ position = [0, 0, 0], scale = 1 }: Props) {
  const ref = useGlassMotion(0.24, 0.05);
  return (
    <mesh ref={ref} position={position} scale={scale} rotation={[0.15, 0.4, 1.15]}>
      <capsuleGeometry args={[0.38, 1.25, 16, 40]} />
      <GlassMaterial />
    </mesh>
  );
}
