import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { MeshViewer } from "./MeshViewer";
import { SplatViewer } from "./SplatViewer";
import { Hotspot } from "./Hotspot";
import { hotspots } from "../data/hotspots";
import type { ViewMode } from "./ViewToggle";

// Point these at your own assets once you've exported/compressed them
// (see the build plan: "Prepare your two assets").
const MESH_URL = `${import.meta.env.BASE_URL}models/dress-mesh.glb`;
const SPLAT_URL = `${import.meta.env.BASE_URL}models/dress-splat.ksplat`;

type SceneProps = {
  mode: ViewMode;
  activeHotspot: string | null;
  onSelectHotspot: (id: string) => void;
};

export function Scene({ mode, activeHotspot, onSelectHotspot }: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 1.2, 3], fov: 40 }} style={{ height: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={1} />
      <Environment preset="studio" />

      <Suspense fallback={null}>
        {mode === "mesh" ? <MeshViewer url={MESH_URL} /> : <SplatViewer url={SPLAT_URL} />}

        {hotspots.map((h) => (
          <Hotspot
            key={h.id}
            hotspot={h}
            position={mode === "mesh" ? h.meshPosition : h.splatPosition}
            active={activeHotspot === h.id}
            onSelect={onSelectHotspot}
          />
        ))}
      </Suspense>

      <OrbitControls makeDefault enablePan={false} minDistance={1.2} maxDistance={5} />
    </Canvas>
  );
}
