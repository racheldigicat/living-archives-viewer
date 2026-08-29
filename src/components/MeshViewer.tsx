import { useGLTF } from "@react-three/drei";

type MeshViewerProps = {
  url: string;
};

// Drop your compressed Polycam GLB at public/models/dress-mesh.glb and this
// will pick it up automatically (see MODEL_URL in Scene.tsx).
export function MeshViewer({ url }: MeshViewerProps) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}
