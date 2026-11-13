import type { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { StudioEnvironment } from "./StudioEnvironment.tsx";
import { usePrefers } from "../../hooks/usePrefers.ts";

type GlassSceneProps = {
  children: ReactNode;
  className?: string;
};

export function GlassScene({ children, className }: GlassSceneProps) {
  const { mobile, reduced } = usePrefers();

  return (
    <Canvas
      className={className}
      dpr={mobile ? 1 : [1, 1.5]}
      gl={{
        alpha: true,
        antialias: !mobile,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0, 5.4], fov: 32 }}
      frameloop={reduced ? "demand" : "always"}
      style={{ pointerEvents: "none" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <StudioEnvironment />
      <ambientLight intensity={0.15} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} />
      <directionalLight position={[-5, -1, 2]} intensity={0.2} />
      {children}
    </Canvas>
  );
}
