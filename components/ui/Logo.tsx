import { Icon } from "./Icon";

export interface LogoProps {
  size?: number;
  light?: boolean;
  showText?: boolean;
}

export function Logo({ size = 30, light = false, showText = true }: LogoProps) {
  const fg = light ? "#fff" : "var(--navy)";
  return (
    <div className="flex items-center gap-3">
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.3,
          background: "linear-gradient(145deg, var(--blue-500), var(--blue-700))",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          boxShadow: "0 4px 12px rgba(35,71,217,.35)",
          flexShrink: 0,
        }}
      >
        <Icon name="sparkle" size={size * 0.62} stroke={0} style={{ fill: "#fff", stroke: "none" }} />
      </div>
      {showText && (
        <div style={{ lineHeight: 1, color: fg }}>
          <div style={{ fontWeight: 800, fontSize: size * 0.56, letterSpacing: "-.02em" }}>Rasaia</div>
          <div
            className="mono"
            style={{
              fontSize: size * 0.3,
              letterSpacing: ".18em",
              color: light ? "rgba(255,255,255,.7)" : "var(--blue-600)",
              marginTop: 3,
              textTransform: "uppercase",
            }}
          >
            Clean AI
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
