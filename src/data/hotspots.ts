export type Hotspot = {
  id: string;
  index: number;
  label: string;
  copy: string;
  meshPosition: [number, number, number];
  splatPosition: [number, number, number];
};

// meshPosition values are placeholders — reposition them once your Polycam
// GLB is loaded, by orbiting the model and eyeballing world-space coordinates
// (or using model-viewer's hotspot editor at modelviewer.dev/editor as a
// reference, then porting the numbers here).
// splatPosition stays at the origin until the splat is aligned to the mesh —
// see the "Get the mesh and splat rendering" step in the build plan.
export const hotspots: Hotspot[] = [
  {
    id: "sleeve",
    index: 1,
    label: "Bishop sleeve",
    copy: "Ruffled, gathered at the cuff — structural volume rather than decoration.",
    meshPosition: [0.2, 1.1, 0.1],
    splatPosition: [0, 0, 0],
  },
  {
    id: "print",
    index: 2,
    label: "Botanical print",
    copy: "Autumn maple leaf and purple iris motif, the dress's only ornament.",
    meshPosition: [0, 0.6, 0.25],
    splatPosition: [0, 0, 0],
  },
  {
    id: "hem",
    index: 3,
    label: "Asymmetric hem",
    copy: "Breaks the formal silhouette — worth comparing against the draped fabric in the vitrine.",
    meshPosition: [-0.15, -0.4, 0.1],
    splatPosition: [0, 0, 0],
  },
  {
    id: "fabric",
    index: 4,
    label: "Silk crepe de chine",
    copy: "Matte-finished silk, chosen for how it holds colour and drapes.",
    meshPosition: [0.1, 0.2, 0.2],
    splatPosition: [0, 0, 0],
  },
  {
    id: "label",
    index: 5,
    label: "Hidden label",
    copy: "The Off-White label sits concealed inside, not shown as branding.",
    meshPosition: [-0.05, 0.9, -0.1],
    splatPosition: [0, 0, 0],
  },
];
