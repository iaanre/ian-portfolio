import { useMemo } from "react";
import { Color } from "three";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { usePrefers } from "../../hooks/usePrefers.ts";

export function GlassMaterial({ transmission = false }: { transmission?: boolean }) {
  const { mobile } = usePrefers();
  const background = useMemo(() => new Color("#efece6"), []);

  if (!transmission || mobile) {
    return (
      <meshPhysicalMaterial
        color="#f4f1ea"
        transmission={1}
        thickness={0.35}
        roughness={0}
        metalness={0}
        ior={1.45}
        clearcoat={1}
        clearcoatRoughness={0}
        attenuationColor="#efece6"
        attenuationDistance={1.8}
        reflectivity={0.2}
        envMapIntensity={0.42}
        transparent
        opacity={0.42}
        depthWrite={false}
      />
    );
  }

  return (
    <MeshTransmissionMaterial
      backside
      samples={2}
      resolution={128}
      transmission={1}
      roughness={0.05}
      thickness={0.28}
      ior={1.25}
      chromaticAberration={0.02}
      anisotropy={0.05}
      distortion={0.04}
      distortionScale={0.12}
      temporalDistortion={0}
      clearcoat={1}
      clearcoatRoughness={0.05}
      attenuationDistance={2}
      attenuationColor="#efece6"
      background={background}
    />
  );
}
