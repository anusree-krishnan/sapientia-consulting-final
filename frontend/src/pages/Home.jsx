import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkHealth } from "../services/api.js";
import { useReveal } from "../hooks/useReveal.js";

/* ── Data ─────────────────────────────────────────────── */

const STATS = [
  { num: "150+", label: "Engagements Delivered" },
  { num: "20+",  label: "Years of Practice"     },
  { num: "94%",  label: "Client Retention"      },
  { num: "28",   label: "Countries Served"       },
];

const CORE_SERVICES = [
  {
    num: "01",
    title: "Cybersecurity & Risk Advisory",
    desc: "Security assessments, risk analysis, governance frameworks, and security-by-design practices that reduce exposure and strengthen resilience.",
  },
  {
    num: "02",
    title: "Cloud Transformation",
    desc: "Modern cloud architectures, migration strategies, and operational optimisation enabling scalability, flexibility, and cost efficiency.",
  },
  {
    num: "03",
    title: "AI & Intelligent Automation",
    desc: "Responsible AI adoption, workflow automation, and decision intelligence systems that accelerate enterprise performance.",
  },
  {
    num: "04",
    title: "Technology Strategy",
    desc: "Long-term technology roadmaps aligned with business objectives for sustainable digital maturity and growth.",
  },
];

const CLIENTS = [
  "FinTech Global", "Meridian Health", "Apex Logistics",
  "NovaCorp", "Veridia Bank", "Stratum Energy",
];

/* ── Component ────────────────────────────────────────── */

export default function Home() {
  const [status, setStatus]       = useState("checking");
  const [heroVisible, setHeroVisible] = useState(false);

  const [statsRef,  statsVisible]  = useReveal();
  const [philRef,   philVisible]   = useReveal();
  const [servRef,   servVisible]   = useReveal();
  const [clientRef, clientVisible] = useReveal();
  const [ctaRef,    ctaVisible]    = useReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    checkHealth()
      .then(() => setStatus("connected"))
      .catch(() => setStatus("offline"));
  }, []);

  const statusColor = {
    connected: "#3a7d55",
    offline:   "#b85c5c",
    checking:  "var(--gold)",
  };

  const statusLabel = {
    connected: "Server Connected",
    offline:   "Server Offline",
    checking:  "Connecting…",
  };

  return (
    <div>

      {/* ══════════════════════════════════════
          HERO — dark green background, light text
      ══════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "var(--green)",
        padding: "calc(var(--nav-h) + 4rem) clamp(1.25rem,5vw,3rem) 6rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background texture lines */}
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 160px)",
        }} />

        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>

          {/* Status + eyebrow */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "1.5rem", marginBottom: "2.5rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "none" : "translateY(16px)",
            transition: "opacity 0.7s var(--ease), transform 0.7s var(--ease)",
          }}>
            <span style={{
              fontFamily: "var(--font-u)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold-pale)",
            }}>
              Est. 2004
            </span>

            <span style={{ width: "1px", height: "16px", background: "rgba(212,184,122,0.35)" }} />

            <span style={{
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: statusColor[status],
              fontFamily: "var(--font-u)",
              fontWeight: 600,
            }}>
              ● {statusLabel[status]}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-d)",
            fontSize: "clamp(3.2rem, 9vw, 8.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "#f0ebe0",
            marginBottom: "2rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "none" : "translateY(24px)",
            transition: "opacity 0.8s 0.1s var(--ease), transform 0.8s 0.1s var(--ease)",
          }}>
            Clarity.<br />
            <em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>Strategy.</em><br />
            Results.
          </h1>

          {/* Gold rule */}
          <div style={{
            width: "64px", height: "1px",
            background: "var(--gold-pale)",
            marginBottom: "2rem",
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 0.8s 0.25s var(--ease)",
          }} />

          {/* Subtext */}
          <p style={{
            maxWidth: "500px",
            color: "rgba(240,235,224,0.78)",
            lineHeight: 1.85,
            marginBottom: "2.75rem",
            fontSize: "1rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "none" : "translateY(16px)",
            transition: "opacity 0.8s 0.3s var(--ease), transform 0.8s 0.3s var(--ease)",
          }}>
            Sapientia guides organisations through complexity with rigour,
            precision, and decades of strategic expertise.
          </p>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: "1rem", flexWrap: "wrap",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "none" : "translateY(12px)",
            transition: "opacity 0.8s 0.4s var(--ease), transform 0.8s 0.4s var(--ease)",
          }}>
            <Link to="/contact" className="btn btn--gold">
              Begin Engagement
            </Link>
            <Link to="/about" className="btn btn--ghost-light">
              Our Philosophy →
            </Link>
          </div>

        </div>

        {/* Bottom fade into ivory */}
        <div aria-hidden style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, var(--cream))",
        }} />
      </section>

      {/* ══════════════════════════════════════
          STATS — ivory background, dark text
      ══════════════════════════════════════ */}
      <section ref={statsRef} style={{
        padding: "5rem 0",
        background: "var(--cream)",
        borderBottom: "1px solid var(--cream-3)",
      }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "none" : "translateY(20px)",
                transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
              }}>
                <div style={{
                  fontFamily: "var(--font-d)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  color: "var(--green)",        /* ← dark green number */
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-u)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-4)",         /* ← muted dark text */
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY — cream-2 tinted bg, dark text
      ══════════════════════════════════════ */}
      <section ref={philRef} style={{
        padding: "var(--pad) 0",
        background: "var(--cream-2)",
      }}>
        <div className="wrap" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}>
          <div style={{
            opacity: philVisible ? 1 : 0,
            transform: philVisible ? "none" : "translateX(-24px)",
            transition: "opacity 0.9s var(--ease), transform 0.9s var(--ease)",
          }}>
            <p className="label">Our Philosophy</p>
            <h2 style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              color: "var(--ink)",               /* ← dark text on light bg */
              marginTop: "0.75rem",
              marginBottom: "1.5rem",
              lineHeight: 1.15,
            }}>
              Knowledge Before Technology
            </h2>
            <div style={{ width: "56px", height: "1px", background: "var(--gold)", marginBottom: "1.5rem" }} />
            <p style={{
              color: "var(--ink-3)",             /* ← readable dark grey */
              lineHeight: 1.9,
              fontSize: "0.95rem",
              marginBottom: "2rem",
            }}>
              Inspired by the classical concept of Sapientia, we believe successful
              digital transformation begins with understanding business challenges —
              not simply deploying tools. Strategy precedes technology, always.
            </p>
            <Link to="/about" className="btn btn--ghost">
              Read More →
            </Link>
          </div>

          {/* Right — decorative block */}
          <div style={{
            opacity: philVisible ? 1 : 0,
            transform: philVisible ? "none" : "translateX(24px)",
            transition: "opacity 0.9s 0.15s var(--ease), transform 0.9s 0.15s var(--ease)",
          }}>
            <div style={{
              border: "1px solid var(--cream-3)",
              padding: "3rem",
              background: "var(--white)",
              boxShadow: "var(--shadow-sm)",
            }}>
              <p style={{
                fontFamily: "var(--font-d)",
                fontSize: "clamp(1.4rem, 2vw, 1.85rem)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "var(--green)",            /* ← green quote */
                lineHeight: 1.5,
                marginBottom: "1.5rem",
              }}>
                "The wise person shapes opportunity — they do not wait for it."
              </p>
              <span style={{
                fontFamily: "var(--font-u)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-4)",
              }}>
                — Sapientia Founding Principle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — white background, dark text
      ══════════════════════════════════════ */}
      <section ref={servRef} style={{
        padding: "var(--pad) 0",
        background: "var(--white)",
      }}>
        <div className="wrap">

          <div style={{ marginBottom: "3.5rem" }}>
            <p className="label">What We Do</p>
            <h2 style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--ink)",               /* ← dark heading */
              marginTop: "0.75rem",
            }}>
              Strategic Services
            </h2>
          </div>

          {/* Service rows */}
          {CORE_SERVICES.map((s, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "64px 1fr auto",
              alignItems: "start",
              gap: "2rem",
              padding: "2rem 0",
              borderTop: "1px solid var(--cream-3)",
              opacity: servVisible ? 1 : 0,
              transform: servVisible ? "none" : "translateY(16px)",
              transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
            }}>
              <span style={{
                fontFamily: "var(--font-d)",
                fontSize: "1rem",
                color: "var(--gold)",
                paddingTop: "0.2rem",
              }}>
                {s.num}
              </span>

              <div>
                <h3 style={{
                  fontFamily: "var(--font-d)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--ink)",           /* ← dark service title */
                  marginBottom: "0.5rem",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  color: "var(--ink-4)",         /* ← muted dark body text */
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  maxWidth: "600px",
                }}>
                  {s.desc}
                </p>
              </div>

              <Link to="/services" style={{
                fontFamily: "var(--font-u)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--green)",
                whiteSpace: "nowrap",
                paddingTop: "0.3rem",
                borderBottom: "1px solid transparent",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={e => e.target.style.borderColor = "var(--green)"}
                onMouseLeave={e => e.target.style.borderColor = "transparent"}
              >
                Learn More →
              </Link>
            </div>
          ))}

          {/* View all */}
          <div style={{ marginTop: "3rem", borderTop: "1px solid var(--cream-3)", paddingTop: "2.5rem" }}>
            <Link to="/services" className="btn btn--gold">
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CLIENT LOGOS — cream tinted, dark text
      ══════════════════════════════════════ */}
      <section ref={clientRef} style={{
        padding: "4rem 0",
        background: "var(--cream-2)",
        borderTop: "1px solid var(--cream-3)",
        borderBottom: "1px solid var(--cream-3)",
      }}>
        <div className="wrap">
          <p style={{
            textAlign: "center",
            fontFamily: "var(--font-u)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--ink-4)",               /* ← dark muted label */
            marginBottom: "2.5rem",
          }}>
            Trusted by leading organisations
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem 3rem",
          }}>
            {CLIENTS.map((name, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-d)",
                fontSize: "1.1rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--ink-3)",           /* ← readable dark text */
                opacity: clientVisible ? 0.7 : 0,
                transition: `opacity 0.6s ${i * 0.08}s var(--ease)`,
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BAND — forest green bg, light text
      ══════════════════════════════════════ */}
      <section ref={ctaRef} style={{
        padding: "var(--pad) 0",
        background: "var(--green)",
        textAlign: "center",
      }}>
        <div className="wrap" style={{
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
        }}>
          <p style={{
            fontFamily: "var(--font-u)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--gold-pale)",           /* ← light label on green */
            marginBottom: "1.25rem",
          }}>
            Ready to Begin
          </p>

          <h2 style={{
            fontFamily: "var(--font-d)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#f0ebe0",                    /* ← light heading on green */
            marginBottom: "1.25rem",
            lineHeight: 1.15,
          }}>
            Let's shape your next chapter.
          </h2>

          <p style={{
            color: "rgba(240,235,224,0.72)",     /* ← soft light body on green */
            maxWidth: "400px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
            fontSize: "0.95rem",
          }}>
            Speak with our senior partners — no obligation, just clarity.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">
              Schedule a Conversation
            </Link>
            <Link to="/services" className="btn btn--ghost-light">
              Explore Services →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}