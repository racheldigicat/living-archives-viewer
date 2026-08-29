import { hotspots } from "../data/hotspots";

type LedgerPanelProps = {
  activeId: string | null;
};

export function LedgerPanel({ activeId }: LedgerPanelProps) {
  const active = hotspots.find((h) => h.id === activeId) ?? null;

  return (
    <div style={{ padding: "24px", display: "flex", flexDirection: "column" }}>
      {!active && (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#B9AD94",
            marginTop: "8px",
          }}
        >
          Select a pin to view its record.
        </p>
      )}

      {active && (
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
            }}
          >
            {active.index}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-voice)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "19px",
              color: "var(--ink)",
              margin: "0 0 10px",
            }}
          >
            {active.label}
          </h2>
          <p style={{ fontSize: "13.5px", lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
            {active.copy}
          </p>
        </div>
      )}
    </div>
  );
}
