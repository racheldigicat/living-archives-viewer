# Living Archives — web specimen viewer

Product-visualisation page for the Off-White Pre-Fall 2020 dress, with a
mesh/splat toggle and clickable hotspots. This is the "web" node in a
three-way comparison — physical vitrine / this page / Quest 3 mixed-reality
installation.

## What's already built

- Vite + React + TypeScript, with `@react-three/fiber` / `@react-three/drei`
  for the 3D scene and `@mkkellogg/gaussian-splats-3d` for the splat.
- Mesh viewer, splat viewer, and a toggle between them (camera position is
  shared across the switch).
- Five hotspot pins with content, wired to a ledger panel that stays quiet
  until a pin is pressed.
- A "Product passport" corner tab that opens an enlarged placeholder modal.
- Design tokens and layout matching the approved UI preview (paper/ink/brass
  palette, Fraunces/Inter/IBM Plex Mono type system).
- `npm run build` and `npm run dev` both run clean already.

## What's still placeholder

1. **The 3D assets.** `src/components/Scene.tsx` points at
   `/models/dress-mesh.glb` and `/models/dress-splat.ksplat`, but those files
   aren't in this repo yet. Drop your compressed exports into
   `public/models/` with those exact filenames, or update the `MESH_URL` /
   `SPLAT_URL` constants at the top of `Scene.tsx`.

2. **Hotspot coordinates.** `src/data/hotspots.ts` has placeholder
   `meshPosition` values and all-zero `splatPosition` values. Once your mesh
   is loading, orbit it in the browser and adjust the coordinates until each
   pin sits on the right spot on the dress. Do the same for the splat once
   it's aligned (see next point).

3. **Mesh/splat alignment.** The two captures come from separate sessions and
   won't share a coordinate system. `SplatViewer.tsx` has a `position` /
   `rotation` / `scale` block in the `addSplatScene()` call — adjust those
   until the splat lines up with the mesh's scale and orientation. This is
   the fiddliest step; budget real time for it.

4. **Product passport content.** `ProductPassport.tsx` has placeholder copy
   in the modal. Swap it for real materials/certification/traceability
   content whenever you have it.

## Running it

```bash
npm install
npm run dev
```

## Deploying

Push this repo to GitHub, then connect it to Vercel or Netlify — either will
auto-detect the Vite build and deploy on every push. Point your own domain
at it whenever you're ready; no code changes needed for that later.
