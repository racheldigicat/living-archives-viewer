import { useEffect, useRef, useState } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

type SplatViewerProps = {
  url: string;
};

// Drop your compressed .ksplat at public/models/dress-splat.ksplat (see
// SPLAT_URL in Scene.tsx). This uses gaussian-splats-3d's "drop-in" mode,
// which behaves like any other Three.js object once added to the scene —
// no separate render loop needed alongside react-three-fiber's own.
//
// The splat and the mesh were captured separately, so their coordinate
// systems won't line up out of the box. Adjust `position` / `rotation` /
// `scale` below once you can see both in the scene together — that's the
// alignment step called out in the build plan.
export function SplatViewer({ url }: SplatViewerProps) {
  // The package ships no type declarations, so we type this loosely rather
  // than reference a nonexistent GaussianSplats3D.DropInViewer type.
  const [viewer, setViewer] = useState<InstanceType<typeof GaussianSplats3D.DropInViewer> | null>(
    null
  );
  const urlRef = useRef(url);

  useEffect(() => {
    const dropInViewer = new GaussianSplats3D.DropInViewer({
      gpuAcceleratedSort: false,
      sharedMemoryForWorkers: false,
    });

    dropInViewer
      .addSplatScene(urlRef.current, {
        splatAlphaRemovalThreshold: 5,
        position: [0, 0, 0],
        rotation: [0, 0, 0, 1],
        scale: [1, 1, 1],
      })
      .then(() => {
        setViewer(dropInViewer);
      })
      .catch((err: unknown) => {
        console.error("Failed to load splat scene:", err);
      });

    return () => {
      dropInViewer.dispose();
      setViewer(null);
    };
  }, []);

  if (!viewer) return null;
  return <primitive object={viewer} />;
}
