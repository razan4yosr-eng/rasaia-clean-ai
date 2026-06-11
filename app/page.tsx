import Link from "next/link";
import { NavBar } from "@/components/landing/NavBar";
import { HeroQuoteCard } from "@/components/landing/HeroQuoteCard";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { SERVICES, fmt } from "@/lib/data";

const benefits = [
  { icon: "bolt", title: "Instant, not hours later", body: "Replace back-and-forth WhatsApp threads with a quote generated the moment a customer submits." },
  { icon: "shield", title: "Consistent every time", body: "The same property always gets the same estimate — no more variance between employees." },
  { icon: "insights", title: "Smarter with every photo", body: "AI reads property photos to refine complexity, labor and pricing — and shows its reasoning." },
  { icon: "money", title: "Protect your margins", body: "Transparent labor and team-size logic keeps every quote priced to win without underselling." },
];

const steps = [
  { n: "01", icon: "building", title: "Describe the property", body: "Type, size, bedrooms, bathrooms and the cleaning needed." },
  { n: "02", icon: "image", title: "Upload a few photos", body: "Living room, kitchen, bathrooms — anything that helps." },
  { n: "03", icon: "sparkle", title: "Get an instant quote", body: "Service, duration, team size and a clear price range." },
];

export default function LandingPage() {
  const services = Object.values(SERVICES);
  return (
    <div style={{ background: "var(--surface)" }}>
      <NavBar />

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(1200px 500px at 78% -10%, var(--blue-50), transparent 60%)" }} />
        <div className="container-x" style={{ position: "relative", padding: "72px 24px 80px" }}>
          <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-[1.05fr_.95fr]">
            <div className="fade-up">
              <Badge kind="blue" dot>
                AI-powered cleaning quotations
              </Badge>
              <h1 className="t-display" style={{ marginTop: 20 }}>
                Get an instant cleaning estimate in{" "}
                <span style={{ background: "linear-gradient(120deg, var(--blue-600), var(--ai-500))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  under 2 minutes
                </span>
              </h1>
              <p className="lead" style={{ marginTop: 22, maxWidth: 520 }}>
                Rasaia Clean AI turns property details and a handful of photos into a precise, consistent quotation — service, labor, duration and price — without a single WhatsApp message.
              </p>
              <div className="flex flex-wrap items-center gap-3" style={{ marginTop: 32 }}>
                <Link href="/estimate" className="btn btn-primary btn-lg">
                  Start your estimate <Icon name="arrowRight" size={18} />
                </Link>
                <Link href="/portal" className="btn btn-ghost btn-lg">
                  <Icon name="dashboard" size={18} /> View business portal
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6" style={{ marginTop: 36 }}>
                {([
                  ["1,284", "quotes generated"],
                  ["~90s", "average time to quote"],
                  ["94%", "estimate accuracy"],
                ] as const).map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.02em" }}>{v}</div>
                    <div className="muted" style={{ fontSize: 13 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center" style={{ position: "relative" }}>
              <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "var(--blue-100)", filter: "blur(60px)", opacity: 0.7, zIndex: 0 }} />
              <div className="fade-up" style={{ position: "relative", zIndex: 1 }}>
                <HeroQuoteCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--surface-2)" }}>
        <div className="container-x flex flex-wrap items-center justify-center gap-3" style={{ padding: "20px 24px", color: "var(--ink-3)" }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Built for cleaning companies that quote at scale</span>
          <span style={{ opacity: 0.4 }}>•</span>
          {["Residential", "Commercial", "Move-out & handover", "Post-renovation"].map((t) => (
            <span key={t} className="badge badge-gray">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="container-x" style={{ padding: "84px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div className="eyebrow">How it works</div>
          <h2 className="t-h1" style={{ marginTop: 12 }}>
            From property to priced quote in three steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: 48 }}>
          {steps.map((s) => (
            <div key={s.n} className="card" style={{ padding: 28 }}>
              <div className="flex items-center justify-between">
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(145deg, var(--blue-500), var(--blue-700))", color: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--sh-blue)" }}>
                  <Icon name={s.icon} size={23} />
                </div>
                <span className="mono" style={{ fontSize: 30, fontWeight: 800, color: "var(--line)" }}>
                  {s.n}
                </span>
              </div>
              <h3 className="t-h3" style={{ marginTop: 20 }}>
                {s.title}
              </h3>
              <p className="muted" style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)" }}>
        <div className="container-x" style={{ padding: "84px 24px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-10 lg:gap-14">
            <div>
              <div className="eyebrow">Why Rasaia</div>
              <h2 className="t-h1" style={{ marginTop: 12 }}>
                Stop guessing. Start quoting with confidence.
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Manual quotes are slow and inconsistent — two employees, two prices. Rasaia standardizes the entire process behind one AI engine.
              </p>
              <Link href="/estimate" className="btn btn-dark btn-lg" style={{ marginTop: 28 }}>
                Try it now <Icon name="arrowRight" size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="card" style={{ padding: 24 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--blue-50)", color: "var(--blue-600)", display: "grid", placeItems: "center" }}>
                    <Icon name={b.icon} size={20} />
                  </div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 700, marginTop: 16 }}>{b.title}</h3>
                  <p className="muted" style={{ marginTop: 7, fontSize: 13.5, lineHeight: 1.55 }}>
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-x" style={{ padding: "84px 24px" }}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Services we price</div>
            <h2 className="t-h1" style={{ marginTop: 12 }}>
              Every cleaning type, one engine
            </h2>
          </div>
          <Link href="/estimate" className="btn btn-soft">
            Get a quote <Icon name="arrowRight" size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginTop: 40 }}>
          {services.map((s) => (
            <Link key={s.key} href="/estimate" className="svc-card card" style={{ padding: 22, display: "block" }}>
              <Badge kind="blue">{s.complexity}</Badge>
              <h3 className="t-h3" style={{ marginTop: 16 }}>
                {s.name}
              </h3>
              <p className="muted" style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.5, minHeight: 60 }}>
                {s.blurb}
              </p>
              <div className="flex items-center" style={{ color: "var(--blue-600)", fontSize: 14, fontWeight: 600, marginTop: 8 }}>
                From {fmt(s.rate * 600)} <Icon name="arrowRight" size={15} style={{ marginLeft: 6 }} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x" style={{ padding: "0 24px 90px" }}>
        <div style={{ borderRadius: 28, overflow: "hidden", position: "relative", background: "linear-gradient(135deg, var(--blue-700), var(--navy))", padding: "64px 48px", textAlign: "center", color: "#fff", boxShadow: "var(--sh-xl)" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(600px 300px at 20% 0%, rgba(110,89,242,.4), transparent 60%)" }} />
          <div style={{ position: "relative" }}>
            <h2 className="t-h1" style={{ color: "#fff" }}>
              Your next quote is 2 minutes away
            </h2>
            <p className="lead" style={{ color: "rgba(255,255,255,.78)", marginTop: 16, maxWidth: 560, marginInline: "auto" }}>
              No sign-up required to try. Generate a full AI quotation and see exactly how Rasaia thinks.
            </p>
            <Link href="/estimate" className="btn btn-lg" style={{ marginTop: 30, background: "#fff", color: "var(--blue-700)" }}>
              Start your free estimate <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--line)", background: "var(--surface-2)" }}>
        <div className="container-x flex flex-wrap items-center justify-between gap-4" style={{ padding: "32px 24px" }}>
          <Logo size={26} />
          <span className="muted" style={{ fontSize: 13 }}>
            © 2026 Rasaia Clean AI · Quotation intelligence for cleaning companies
          </span>
        </div>
      </footer>
    </div>
  );
}
