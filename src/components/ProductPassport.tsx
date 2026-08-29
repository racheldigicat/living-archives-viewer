import { useState } from "react";

export function ProductPassport() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          fontFamily: "var(--font-mono)",
          fontSize: "9.5px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--ink-dim)",
          background: "var(--paper-2)",
          border: "0.5px solid var(--hairline)",
          borderRadius: "20px",
          padding: "6px 12px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
          }}
        />
        Product passport
      </button>

      {open && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(27,24,16,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: "var(--paper)",
              width: "min(420px, 88vw)",
              borderRadius: "8px",
              padding: "28px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "none",
                border: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--ink-dim)",
                cursor: "pointer",
              }}
            >
              Close
            </button>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--iris)",
                margin: "0 0 8px",
              }}
            >
              Digital product passport
            </p>
            <h3
              style={{
                fontFamily: "var(--font-voice)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "20px",
                color: "var(--ink)",
                margin: "0 0 14px",
              }}
            >
              LA-2020.07
            </h3>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--ink-dim)", margin: 0 }}>
              Placeholder — materials, certification, and traceability details for this piece
              will go here.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
