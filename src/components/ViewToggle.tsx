import type { CSSProperties } from "react";

export type ViewMode = "mesh" | "splat";

type ViewToggleProps = {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
};

const baseStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.04em",
  padding: "6px 14px",
  borderRadius: "20px",
  cursor: "pointer",
};

const onStyle: CSSProperties = {
  ...baseStyle,
  border: "0.5px solid var(--ink)",
  background: "var(--ink)",
  color: "var(--paper)",
};

const offStyle: CSSProperties = {
  ...baseStyle,
  border: "0.5px solid var(--hairline)",
  background: "transparent",
  color: "var(--ink-dim)",
};

export function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      <button style={mode === "mesh" ? onStyle : offStyle} onClick={() => onChange("mesh")}>
        Mesh
      </button>
      <button style={mode === "splat" ? onStyle : offStyle} onClick={() => onChange("splat")}>
        Splat
      </button>
    </div>
  );
}
