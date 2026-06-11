import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export function NavBar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,.82)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container-x flex items-center justify-between" style={{ height: 70 }}>
        <Link href="/">
          <Logo size={30} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a className="nav-link" href="#how">
            How it works
          </a>
          <a className="nav-link" href="#benefits">
            Benefits
          </a>
          <a className="nav-link" href="#services">
            Services
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/portal" className="btn btn-ghost btn-sm">
            <Icon name="dashboard" size={16} /> Business portal
          </Link>
          <Link href="/estimate" className="btn btn-primary btn-sm">
            Start estimate
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
