import { Icon } from "./Icon";

export interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  delta?: string;
  deltaTone?: "green" | "amber" | "red" | "blue";
  accent?: string;
  sub?: string;
}

export function StatCard({
  icon,
  label,
  value,
  delta,
  deltaTone = "green",
  accent = "var(--blue-600)",
  sub,
}: StatCardProps) {
  return (
    <div className="card" style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
      <div className="flex items-start justify-between">
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "var(--blue-50)",
            color: accent,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Icon name={icon} size={21} />
        </div>
        {delta && (
          <span className={`badge badge-${deltaTone}`} style={{ fontSize: 12 }}>
            {delta}
          </span>
        )}
      </div>
      <div>
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.1 }}>{value}</div>
        <div className="muted" style={{ fontSize: 13.5, marginTop: 5 }}>
          {label}
        </div>
        {sub && (
          <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;
