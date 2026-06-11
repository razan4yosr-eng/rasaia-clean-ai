import { Icon } from "./Icon";

export interface ProgressStepsProps {
  steps: string[];
  current: number;
}

export function ProgressSteps({ steps, current }: ProgressStepsProps) {
  return (
    <div className="flex items-center" style={{ gap: 0 }}>
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={s} className="flex items-center" style={{ flex: i < steps.length - 1 ? 1 : "0 0 auto" }}>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  flexShrink: 0,
                  display: "grid",
                  placeItems: "center",
                  fontSize: 12.5,
                  fontWeight: 700,
                  background: done || active ? "var(--blue-600)" : "var(--surface-3)",
                  color: done || active ? "#fff" : "var(--ink-3)",
                  border: active ? "3px solid var(--blue-100)" : "none",
                  transition: "all .25s",
                }}
              >
                {done ? <Icon name="check" size={14} stroke={3} /> : i + 1}
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--ink)" : "var(--ink-3)",
                  whiteSpace: "nowrap",
                }}
              >
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  margin: "0 12px",
                  minWidth: 18,
                  background: done ? "var(--blue-300)" : "var(--line)",
                  borderRadius: 2,
                  transition: "background .25s",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressSteps;
