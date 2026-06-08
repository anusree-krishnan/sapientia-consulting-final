import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const SIMPLE_LINKS = [
  { label: "About",   to: "/about"   },
  { label: "Contact", to: "/contact" },
];

const MEGA = {
  Services: {
    links: [
      { label: "Cybersecurity & Risk Advisory", desc: "Security assessments, governance frameworks, and resilience programmes", to: "/services/cybersecurity" },
      { label: "Cloud Transformation",          desc: "Strategy, migration planning, and FinOps across AWS, Azure, GCP",       to: "/services/cloud"          },
      { label: "AI & Intelligent Automation",   desc: "Responsible AI adoption, automation, and decision intelligence",         to: "/services/ai-strategy"    },
      { label: "Technology Strategy",           desc: "Long-term roadmaps, M&A due diligence, and board-level advisory",       to: "/services/technology-strategy" },
    ],
    cta: { label: "All Services", to: "/services" },
  },
  Industries: {
    links: [
      { label: "Financial Services",        to: "/industries#financial"    },
      { label: "Healthcare & Life Sciences", to: "/industries#healthcare"   },
      { label: "Manufacturing & Operations", to: "/industries#manufacturing" },
      { label: "Energy & Utilities",         to: "/industries#energy"        },
      { label: "Technology & Media",         to: "/industries#technology"    },
      { label: "Public Sector",              to: "/industries#public"        },
    ],
    cta: { label: "All Industries", to: "/industries" },
  },
  Insights: {
    articles: [
      { label: "Zero Trust Architecture in the Age of Hybrid Work", date: "May 2025",   to: "/insights/zero-trust"      },
      { label: "The Cloud Migration Playbook",                       date: "April 2025", to: "/insights/cloud-migration" },
      { label: "Governing AI: A Practical Framework",                date: "Mar 2025",   to: "/insights/ai-governance"   },
    ],
    cta: { label: "All Insights", to: "/insights" },
  },
};

const ORDERED_LINKS = ["Services", "Industries", "Insights", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openMenu  = (name) => { clearTimeout(closeTimer.current); setActiveMenu(name); };
  const startClose = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 140); };
  const cancelClose = () => clearTimeout(closeTimer.current);

  const mod = scrolled ? "navbar--scrolled" : "navbar--top";

  return (
    <>
      <style>{`
        /* ── Base ─────────────────────────────── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 500; height: var(--nav-h);
          display: flex; align-items: center;
          padding: 0 clamp(1.25rem,5vw,3rem);
          transition: background 0.45s, border-color 0.45s, box-shadow 0.45s;
        }
        .navbar--scrolled {
          background: rgba(247,243,235,0.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--cream-3);
          box-shadow: 0 2px 24px rgba(26,46,26,0.07);
        }
        .navbar--top { background: transparent; border-bottom: 1px solid transparent; }

        /* ── Brand ───────────────────────────── */
        .nav-brand { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; margin-right: auto; }
        .nav-brand-mark {
          width: 36px; height: 36px; border: 1px solid;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-d); font-size: 1.25rem; font-weight: 400;
          letter-spacing: 0.02em; transition: color 0.4s, border-color 0.4s;
        }
        .navbar--top    .nav-brand-mark { color: var(--gold-pale); border-color: rgba(212,184,122,0.5); }
        .navbar--scrolled .nav-brand-mark { color: var(--gold); border-color: var(--gold-dim); }
        .nav-brand-name {
          font-family: var(--font-d); font-size: 1.05rem; font-weight: 400;
          letter-spacing: 0.12em; transition: color 0.4s;
        }
        .navbar--top      .nav-brand-name { color: #f0ebe0; }
        .navbar--scrolled .nav-brand-name { color: var(--ink); }

        /* ── Desktop nav links ───────────────── */
        .nav-links { display: flex; align-items: center; gap: 0; list-style: none; margin-right: 2rem; }
        .nav-item { position: relative; }
        .nav-link {
          display: flex; align-items: center; gap: 0.3rem;
          font-family: var(--font-u); font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          padding: 0.35rem 0.9rem; position: relative;
          transition: color 0.3s; cursor: pointer; background: none; border: none;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0.9rem; right: 0.9rem;
          height: 1px; background: var(--gold);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.35s var(--ease);
        }
        .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }
        .navbar--top      .nav-link       { color: rgba(240,235,224,0.75); }
        .navbar--top      .nav-link:hover,
        .navbar--top      .nav-link.active { color: #f0ebe0; }
        .navbar--scrolled .nav-link       { color: var(--ink-4); }
        .navbar--scrolled .nav-link:hover,
        .navbar--scrolled .nav-link.active { color: var(--ink); }

        /* chevron */
        .nav-chevron {
          width: 8px; height: 5px; display: inline-block; opacity: 0.6;
          transition: transform 0.25s var(--ease), opacity 0.25s;
        }
        .nav-item:hover .nav-chevron,
        .nav-item.has-menu .nav-chevron { opacity: 1; transform: rotate(180deg); }

        /* ── CTA ─────────────────────────────── */
        .nav-cta {
          font-size: 0.68rem; padding: 0.55rem 1.35rem; white-space: nowrap;
          transition: all 0.35s var(--ease);
          font-family: var(--font-u); font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase; border: 1px solid;
        }
        .navbar--top .nav-cta { color: var(--cream); border-color: rgba(247,243,235,0.4); background: transparent; }
        .navbar--top .nav-cta:hover { background: rgba(247,243,235,0.12); border-color: var(--cream); }
        .navbar--scrolled .nav-cta { color: var(--green); border-color: var(--green); background: transparent; }
        .navbar--scrolled .nav-cta:hover { background: var(--green); color: var(--white); }

        /* ── Hamburger ───────────────────────── */
        .ham { display: none; margin-left: 1rem; background: none; font-size: 1.3rem; line-height: 1; transition: color 0.3s; }
        .navbar--top      .ham { color: var(--cream); }
        .navbar--scrolled .ham { color: var(--ink); }

        /* ── Mega panel ─────────────────────── */
        .mega-panel {
          position: fixed; top: var(--nav-h); left: 0; right: 0;
          z-index: 498;
          background: var(--cream);
          border-bottom: 1px solid var(--cream-3);
          box-shadow: 0 12px 48px rgba(26,46,26,0.12);
          animation: megaIn 0.2s var(--ease) both;
        }
        @keyframes megaIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mega-inner {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: 2.5rem clamp(1.25rem,5vw,3rem);
          display: grid; gap: 3rem;
        }
        .mega-link {
          display: grid; grid-template-columns: 1fr;
          padding: 0.85rem 1rem;
          border: 1px solid transparent;
          transition: background 0.2s, border-color 0.2s;
          cursor: pointer;
        }
        .mega-link:hover { background: var(--cream-2); border-color: var(--cream-3); }
        .mega-link-label {
          font-family: var(--font-d); font-size: 1.05rem;
          color: var(--ink); margin-bottom: 0.2rem;
          transition: color 0.2s;
        }
        .mega-link:hover .mega-link-label { color: var(--green); }
        .mega-link-desc {
          font-family: var(--font-u); font-size: 0.72rem;
          color: var(--ink-4); line-height: 1.5;
        }
        .mega-cta {
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: var(--font-u); font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--green); margin-top: 1rem;
          padding-bottom: 0.2rem; border-bottom: 1px solid transparent;
          transition: border-color 0.25s;
        }
        .mega-cta:hover { border-color: var(--green); }
        .mega-divider {
          width: 1px; background: var(--cream-3); align-self: stretch;
        }
        .mega-section-label {
          font-family: var(--font-u); font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 1rem;
        }
        .mega-article-link {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 0.75rem 0; border-bottom: 1px solid var(--cream-3);
          transition: color 0.2s;
          font-family: var(--font-d); font-size: 0.98rem; color: var(--ink);
        }
        .mega-article-link:hover { color: var(--green); }
        .mega-article-date {
          font-family: var(--font-u); font-size: 0.68rem;
          color: var(--ink-4); flex-shrink: 0; margin-left: 1.5rem;
        }

        /* ── Mobile menu ─────────────────────── */
        .nav-mobile {
          position: fixed; top: var(--nav-h); left: 0; right: 0;
          background: var(--cream); border-bottom: 1px solid var(--cream-3);
          box-shadow: var(--shadow-md);
          padding: 1.25rem clamp(1.25rem,5vw,3rem) 2rem;
          display: flex; flex-direction: column; gap: 0;
          transform: translateY(-8px); opacity: 0; pointer-events: none;
          transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
          z-index: 497; max-height: calc(100vh - var(--nav-h)); overflow-y: auto;
        }
        .nav-mobile.open { transform: translateY(0); opacity: 1; pointer-events: all; }
        .nav-mobile-link {
          font-family: var(--font-u); font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ink-4); padding: 1rem 0;
          border-bottom: 1px solid var(--cream-3); transition: color 0.25s;
          display: block;
        }
        .nav-mobile-link:hover, .nav-mobile-link.active { color: var(--green); }
        .nav-mobile-sub {
          padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0;
          overflow: hidden;
        }
        .nav-mobile-sublabel {
          font-family: var(--font-u); font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink-4); padding: 0.65rem 0;
          border-bottom: 1px solid var(--cream-3); transition: color 0.25s;
          display: block;
        }
        .nav-mobile-sublabel:hover { color: var(--green); }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-cta   { display: none; }
          .ham       { display: block; }
        }
        @media (max-width: 640px) {
          .mega-inner { grid-template-columns: 1fr !important; }
          .mega-divider { display: none; }
        }
      `}</style>

      {/* ── Navbar ─────────────────────────────── */}
      <nav className={`navbar ${mod}`}>
        <Link to="/" className="nav-brand" onClick={() => { setActiveMenu(null); setMobileOpen(false); }}>
          <div className="nav-brand-mark">S</div>
          <span className="nav-brand-name">APIENTIA</span>
        </Link>

        <ul className="nav-links">
          {/* Services mega */}
          {["Services", "Industries", "Insights"].map(name => (
            <li key={name}
              className={`nav-item${activeMenu === name ? " has-menu" : ""}`}
              onMouseEnter={() => openMenu(name)}
              onMouseLeave={startClose}
            >
              <NavLink
                to={`/${name.toLowerCase()}`}
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                {name}
                <svg className="nav-chevron" viewBox="0 0 8 5" fill="none">
                  <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavLink>
            </li>
          ))}

          {SIMPLE_LINKS.map(({ label, to }) => (
            <li key={to} className="nav-item">
              <NavLink to={to} end={to === "/"} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="nav-cta" onClick={() => setActiveMenu(null)}>
          Engage Us
        </Link>

        <button className="ham" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ── Mega menus ──────────────────────────── */}
      {activeMenu === "Services" && (
        <div className="mega-panel" onMouseEnter={cancelClose} onMouseLeave={startClose}>
          <div className="mega-inner" style={{ gridTemplateColumns: "1fr 32px 260px" }}>
            <div>
              <p className="mega-section-label">Advisory Services</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.25rem" }}>
                {MEGA.Services.links.map((l) => (
                  <Link key={l.to} to={l.to} className="mega-link" onClick={() => setActiveMenu(null)}>
                    <span className="mega-link-label">{l.label}</span>
                    <span className="mega-link-desc">{l.desc}</span>
                  </Link>
                ))}
              </div>
              <Link to={MEGA.Services.cta.to} className="mega-cta" onClick={() => setActiveMenu(null)}>
                {MEGA.Services.cta.label} →
              </Link>
            </div>

            <div className="mega-divider" />

            <div>
              <p className="mega-section-label">By The Numbers</p>
              {[["150+", "Engagements"], ["28", "Countries"], ["94%", "Retention"]].map(([n, l]) => (
                <div key={l} style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--cream-3)" }}>
                  <span style={{ fontFamily: "var(--font-d)", fontSize: "1.6rem", fontWeight: 300, color: "var(--green)", display: "block", lineHeight: 1 }}>{n}</span>
                  <span style={{ fontFamily: "var(--font-u)", fontSize: "0.65rem", color: "var(--ink-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Industries" && (
        <div className="mega-panel" onMouseEnter={cancelClose} onMouseLeave={startClose}>
          <div className="mega-inner" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <p className="mega-section-label">Sectors We Serve</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.25rem", marginBottom: "0.5rem" }}>
                {MEGA.Industries.links.map((l) => (
                  <Link key={l.to} to={l.to} className="mega-link" style={{ display: "block" }} onClick={() => setActiveMenu(null)}>
                    <span className="mega-link-label" style={{ fontSize: "0.92rem" }}>{l.label}</span>
                  </Link>
                ))}
              </div>
              <Link to={MEGA.Industries.cta.to} className="mega-cta" onClick={() => setActiveMenu(null)}>
                {MEGA.Industries.cta.label} →
              </Link>
            </div>
          </div>
        </div>
      )}

      {activeMenu === "Insights" && (
        <div className="mega-panel" onMouseEnter={cancelClose} onMouseLeave={startClose}>
          <div className="mega-inner" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <p className="mega-section-label">Recent Publications</p>
              {MEGA.Insights.articles.map((a) => (
                <Link key={a.to} to={a.to} className="mega-article-link" onClick={() => setActiveMenu(null)}>
                  <span>{a.label}</span>
                  <span className="mega-article-date">{a.date}</span>
                </Link>
              ))}
              <Link to={MEGA.Insights.cta.to} className="mega-cta" onClick={() => setActiveMenu(null)}>
                {MEGA.Insights.cta.label} →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ─────────────────────────── */}
      <div className={`nav-mobile${mobileOpen ? " open" : ""}`}>
        {/* Services */}
        <span className="nav-mobile-link" style={{ color: "var(--ink)", fontWeight: 700 }}>Services</span>
        <div className="nav-mobile-sub">
          {MEGA.Services.links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav-mobile-sublabel${isActive ? " active" : ""}`} onClick={() => setMobileOpen(false)}>{l.label}</NavLink>
          ))}
          <NavLink to="/services" className="nav-mobile-sublabel" onClick={() => setMobileOpen(false)} style={{ color: "var(--green)" }}>All Services →</NavLink>
        </div>

        {/* Industries */}
        <span className="nav-mobile-link" style={{ color: "var(--ink)", fontWeight: 700 }}>Industries</span>
        <div className="nav-mobile-sub">
          {MEGA.Industries.links.map(l => (
            <NavLink key={l.to} to={l.to} className="nav-mobile-sublabel" onClick={() => setMobileOpen(false)}>{l.label}</NavLink>
          ))}
        </div>

        {/* Insights */}
        <NavLink to="/insights" className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={() => setMobileOpen(false)}>Insights</NavLink>

        {/* Simple */}
        {[{ label: "About", to: "/about" }, { label: "Careers", to: "/careers" }, { label: "Case Studies", to: "/case-studies" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-mobile-link${isActive ? " active" : ""}`} onClick={() => setMobileOpen(false)}>
            {label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
