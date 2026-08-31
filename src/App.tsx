import { useState } from "react";
import { AccessionHeader } from "./components/AccessionHeader";
import { Scene } from "./components/Scene";
import { ViewToggle, type ViewMode } from "./components/ViewToggle";
import { LedgerPanel } from "./components/LedgerPanel";
import { ProductPassport } from "./components/ProductPassport";

export default function App() {
  const [mode, setMode] = useState<ViewMode>("mesh");
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  function selectHotspot(id: string) {
    setActiveHotspot((current) => (current === id ? null : id));
  }

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "32px auto",
        position: "relative",
      }}
    >
      <ProductPassport />
      <AccessionHeader />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr",
        }}
        className="stage"
      >
        <div
          style={{
            position: "relative",
            padding: "24px",
          }}
        >
          <ViewToggle mode={mode} onChange={setMode} />
          <div style={{ height: "70vh", minHeight: "480px" }}>
            <Scene mode={mode} activeHotspot={activeHotspot} onSelectHotspot={selectHotspot} />
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--ink-dim)",
              margin: "14px 0 0",
            }}
          >
            Drag to orbit · scroll to zoom · tap a pin for its record
          </p>
        </div>

        <LedgerPanel activeId={activeHotspot} />
      </div>
    </div>
  );
}
