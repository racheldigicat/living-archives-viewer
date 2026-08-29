import { Html } from "@react-three/drei";
import type { Hotspot as HotspotData } from "../data/hotspots";

type HotspotProps = {
  hotspot: HotspotData;
  position: [number, number, number];
  active: boolean;
  onSelect: (id: string) => void;
};

export function Hotspot({ hotspot, position, active, onSelect }: HotspotProps) {
  return (
    <Html position={position} center zIndexRange={[10, 0]}>
      <button
        aria-label={hotspot.label}
        onClick={() => onSelect(hotspot.id)}
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          border: "1px solid var(--accent)",
          background: active ? "var(--accent)" : "var(--paper)",
          color: active ? "var(--paper)" : "var(--accent)",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {hotspot.index}
      </button>
    </Html>
  );
}
