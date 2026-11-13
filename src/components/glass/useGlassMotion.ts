import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";
import { runtime } from "../../lib/runtime.ts";

export function useGlassMotion(amount = 0.28, float = 0.06) {
  const ref = useRef<Mesh>(null);
  const base = useRef<{ x: number; y: number; z: number } | null>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    if (!base.current) {
      base.current = { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z };
    }
    if (runtime.reduced) return;
    const origin = base.current;
    const t = state.clock.elapsedTime;
    const targetY = runtime.pointerX * amount;
    const targetX = -runtime.pointerY * amount * 0.65;
    mesh.rotation.y += (targetY - mesh.rotation.y) * 0.06;
    mesh.rotation.x += (targetX - mesh.rotation.x) * 0.06;
    mesh.position.y = origin.y + Math.sin(t * 0.55 + origin.x) * float;
  });

  return ref;
}
