import { Link } from "react-router-dom";

const COLS = [
  {
    heading: "Services",
    links: [
      { label: "Cybersecurity & Risk",    to: "/services/cybersecurity"       },
      { label: "Cloud Transformation",    to: "/services/cloud"               },
      { label: "AI & Automation",         to: "/services/ai-strategy"         },
      { label: "Technology Strategy",     to: "/services/technology-strategy" },
      { label: "All Services",            to: "/services"                     },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Financial Services",        to: "/industries#financial"     },
      { label: "Healthcare",                to: "/industries#healthcare"    },
      { label: "Manufacturing",             to: "/industries#manufacturing" },
      { label: "Energy & Utilities",        to: "/industries#energy"        },
      { label: "Technology & Media",        to: "/industries#technology"    },
      { label: "Public Sector",             to: "/industries#public"        },
    ],
  },
  {
    heading: "Insights",
    links: [
      { label: "Zero Trust Architecture",    to: "/insights/zero-trust"      },
      { label: "Cloud Migration Playbook",   to: "/insights/cloud-migration" },
      { label: "Governing AI",               to: "/insights/ai-governance"   },
      { label: "All Insights",               to: "/insights"                 },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Sapientia", to: "/about"        },
      { label: "Our Work",        to: "/case-studies" },
      { label: "Careers",         to: "/careers"      },
      { label: "Contact",         to: "/contact"      },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink-1)", borderTop: "1px solid var(--ink-3)" }}>
      {/* Main grid */}
      <div style={{
        maxWidth: "var(--wrap)", margin: "0 auto",
        padding: "5rem clamp(1.25rem,5vw,3rem) 4rem",
        display: "grid",
        gridTemplateColumns: "280px repeat(4, 1fr)",
        gap: "3rem",
      }}>
        {/* Brand column */}
        <div>
          <div style={{ fontFamily: "var(--font-d)", fontSize: "1.5rem", letterSpacing: "0.12em", color: "var(--cream)", marginBottom: "0.6rem" }}>
            S<span style={{ color: "var(--gold)" }}>APIENTIA</span>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--ink-4)", letterSpacing: "0.05em", marginBottom: "1.75rem", lineHeight: 1.7 }}>
            Wisdom in every decision.<br />Strategic advisory since 2004.
          </p>

          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-4)", marginBottom: "0.75rem" }}>
            Credentials
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {["OWASP Member", "IEEE Published", "ISO 27001 Advisory", "AWS / Azure Partner"].map(c => (
              <span key={c} style={{ fontSize: "0.78rem", color: "var(--ink-4)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "4px", height: "4px", background: "var(--gold)", flexShrink: 0, display: "inline-block" }} />
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {COLS.map((col) => (
          <div key={col.heading}>
            <p style={{
              fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: "1.25rem",
            }}>{col.heading}</p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {col.links.map(({ label, to }) => (
                <Link key={to} to={to} style={{
                  fontFamily: "var(--font-u)", fontSize: "0.78rem",
                  fontWeight: 500, color: "var(--ink-4)",
                  letterSpacing: "0.04em", transition: "color 0.25s",
                }}
                  onMouseEnter={e => e.target.style.color = "var(--cream)"}
                  onMouseLeave={e => e.target.style.color = "var(--ink-4)"}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Office / contact strip */}
      <div style={{
        maxWidth: "var(--wrap)", margin: "0 auto",
        padding: "2rem clamp(1.25rem,5vw,3rem)",
        borderTop: "1px solid var(--ink-3)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
      }}>
        {[
          { city: "London",    detail: "1 Canada Square, Canary Wharf" },
          { city: "Singapore", detail: "1 Raffles Place, Tower 1"      },
          { city: "New York",  detail: "One World Trade Center"         },
        ].map(({ city, detail }) => (
          <div key={city}>
            <p style={{ fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>{city}</p>
            <p style={{ fontSize: "0.78rem", color: "var(--ink-4)" }}>{detail}</p>
          </div>
        ))}
        <div>
          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>New Enquiries</p>
          <p style={{ fontSize: "0.78rem", color: "var(--ink-4)" }}>enquiries@sapientia.consulting</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "var(--wrap)", margin: "0 auto",
        padding: "1.5rem clamp(1.25rem,5vw,3rem)",
        borderTop: "1px solid var(--ink-3)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: "0.75rem",
      }}>
        <span style={{ fontSize: "0.7rem", color: "var(--ink-4)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} Sapientia Consulting Ltd. All rights reserved.
        </span>

        <div style={{ display: "flex", gap: "1.75rem" }}>
          {[["Privacy Policy", "#"], ["Terms of Use", "#"], ["Cookie Settings", "#"]].map(([label]) => (
            <span key={label} style={{
              fontSize: "0.7rem", color: "var(--ink-4)", letterSpacing: "0.06em",
              cursor: "pointer", transition: "color 0.25s",
            }}
              onMouseEnter={e => e.target.style.color = "var(--cream-3)"}
              onMouseLeave={e => e.target.style.color = "var(--ink-4)"}
            >
              {label}
            </span>
          ))}
        </div>

        <span style={{ fontSize: "0.7rem", color: "var(--ink-4)", fontStyle: "italic", fontFamily: "var(--font-d)" }}>
          Sapientia — Latin for wisdom
        </span>
      </div>
    </footer>
  );
}
