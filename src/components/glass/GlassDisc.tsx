import { GlassMaterial } from "./GlassMaterial.tsx";
import { useGlassMotion } from "./useGlassMotion.ts";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

export function GlassDisc({ position = [0, 0, 0], scale = 1 }: Props) {
  const ref = useGlassMotion(0.2, 0.04);
  return (
    <mesh ref={ref} position={position} scale={scale} rotation={[1.15, 0.2, 0.4]}>
      <torusGeometry args={[0.78, 0.08, 32, 80]} />
      <GlassMaterial />
    </mesh>
  );
}
