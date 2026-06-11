import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { ConfidenceRing } from "@/components/ui/ConfidenceRing";

export function HeroQuoteCard() {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", boxShadow: "var(--sh-xl, 0 34px 80px rgba(11,23,52,.20))", width: "100%", maxWidth: 420 }}>
      <div style={{ background: "linear-gradient(140deg, var(--blue-700), var(--navy))", padding: "20px 22px", color: "#fff" }}>
        <div className="flex items-center justify-between">
          <Badge kind="ai" dot>
            AI estimate ready
          </Badge>
          <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>
            RQ-4821
          </span>
        </div>
        <div style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,.7)" }}>Recommended service</div>
        <div className="flex items-end justify-between" style={{ marginTop: 4 }}>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-.02em" }}>Deep Cleaning</div>
        </div>
      </div>
      <div style={{ padding: 22 }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
          <div>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: ".08em" }}>
              ESTIMATED RANGE
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.02em", marginTop: 3 }}>AED 1,060–1,340</div>
          </div>
          <ConfidenceRing value={92} size={74} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {([
            ["clock", "Duration", "~4.5 hrs"],
            ["users", "Team", "2 cleaners"],
          ] as const).map(([ic, l, v]) => (
            <div key={l} style={{ background: "var(--surface-2)", borderRadius: 12, padding: "12px 14px" }}>
              <div className="flex items-center gap-2" style={{ color: "var(--blue-600)" }}>
                <Icon name={ic} size={15} />
                <span style={{ fontSize: 12, color: "var(--ink-3)", fontWeight: 600 }}>{l}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 5 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroQuoteCard;
