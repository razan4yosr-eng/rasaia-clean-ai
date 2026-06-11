export interface ConfidenceRingProps {
  value: number;
  size?: number;
}

export function ConfidenceRing({ value, size = 132 }: ConfidenceRingProps) {
  const r = (size - 16) / 2;
  const c = 2 * Math.PI * r;
  // Render the real value directly — never depends on an animation frame,
  // so it is correct in print/PDF and background tabs.
  const shown = value;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={9} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#cg)"
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (shown / 100) * c}
        />
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--blue-500)" />
            <stop offset="1" stopColor="var(--ai-500)" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center" }}>
        <div>
          <div style={{ fontSize: size * 0.27, fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1 }}>
            {shown}
            <span style={{ fontSize: size * 0.13 }}>%</span>
          </div>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: ".1em", marginTop: 4 }}>
            CONFIDENCE
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfidenceRing;
