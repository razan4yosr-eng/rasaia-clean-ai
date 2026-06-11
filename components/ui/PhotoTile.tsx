"use client";

import { Icon } from "./Icon";

export interface PhotoTileProps {
  label?: string;
  filled?: boolean;
  onClick?: () => void;
  big?: boolean;
}

export function PhotoTile({ label, filled, onClick, big }: PhotoTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: "relative",
        aspectRatio: big ? "16/10" : "1/1",
        borderRadius: 14,
        overflow: "hidden",
        border: filled ? "1px solid var(--line)" : "1.5px dashed #C5D0E4",
        background: filled
          ? "repeating-linear-gradient(135deg, #E9EEF8 0 12px, #E2E9F5 12px 24px)"
          : "var(--surface-2)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        transition: "border-color .15s, background .15s",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        if (!filled) e.currentTarget.style.borderColor = "var(--blue-400)";
      }}
      onMouseLeave={(e) => {
        if (!filled) e.currentTarget.style.borderColor = "#C5D0E4";
      }}
    >
      {filled ? (
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--ink-3)",
            background: "rgba(255,255,255,.85)",
            padding: "4px 9px",
            borderRadius: 6,
          }}
        >
          {label} photo
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2" style={{ color: "var(--ink-3)" }}>
          <Icon name="plus" size={20} />
          <span style={{ fontSize: 12.5, fontWeight: 600 }}>Add photo</span>
        </div>
      )}
    </button>
  );
}

export default PhotoTile;
