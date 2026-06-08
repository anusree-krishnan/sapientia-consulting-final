import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import PageHero from "../components/PageHero.jsx";

const SERVICES = [
  {
    num: "01",
    title: "Cybersecurity & Risk Advisory",
    desc: "Security assessments, risk frameworks, architecture review, and compliance advisory that reduce exposure and build lasting resilience.",
    capabilities: ["Penetration Testing", "ISO 27001 / SOC 2", "Incident Response", "Cloud Security"],
    to: "/services/cybersecurity",
  },
  {
    num: "02",
    title: "Cloud Transformation",
    desc: "Cloud strategy, migration planning, and operational readiness — from landing zone design to post-migration FinOps.",
    capabilities: ["Cloud Strategy", "Migration Planning", "Multi-Cloud Architecture", "FinOps"],
    to: "/services/cloud",
  },
  {
    num: "03",
    title: "AI & Intelligent Automation",
    desc: "Responsible AI adoption, process automation, and decision intelligence systems that change how work is done and decisions are made.",
    capabilities: ["AI Readiness", "ML Strategy", "Generative AI", "AI Governance"],
    to: "/services/ai-strategy",
  },
  {
    num: "04",
    title: "Technology Strategy",
    desc: "Long-term technology roadmaps, IT operating model design, and board-level advisory that connect vision to execution.",
    capabilities: ["Digital Maturity", "Portfolio Rationalisation", "M&A Due Diligence", "Operating Model"],
    to: "/services/technology-strategy",
  },
];

const CREDENTIALS = [
  { num: "150+", label: "Engagements Delivered" },
  { num: "20+",  label: "Years of Practice"     },
  { num: "94%",  label: "Client Retention"      },
  { num: "28",   label: "Countries Served"       },
];

export default function Services() {
  const [servRef, servVisible]   = useReveal();
  const [credRef, credVisible]   = useReveal();
  const [whyRef, whyVisible]     = useReveal();
  const [ctaRef, ctaVisible]     = useReveal();

  return (
    <div>
      <PageHero
        label="Our Services"
        title={<>Advisory built for<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>complexity.</em></>}
        subtitle="We operate at the intersection of strategy and technology — helping organisations navigate the decisions that matter most to their future."
      />

      {/* Service List */}
      <section ref={servRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <div key={i} style={{
              borderTop: "1px solid var(--cream-3)",
              padding: "3rem 0",
              display: "grid",
              gridTemplateColumns: "64px 1fr 220px",
              gap: "2.5rem",
              alignItems: "start",
              opacity: servVisible ? 1 : 0,
              transform: servVisible ? "none" : "translateY(20px)",
              transition: `opacity 0.7s ${i * 0.12}s var(--ease), transform 0.7s ${i * 0.12}s var(--ease)`,
            }}>
              <span style={{
                fontFamily: "var(--font-d)", fontSize: "1.1rem",
                color: "var(--gold)", paddingTop: "0.3rem",
              }}>{s.num}</span>

              <div>
                <h2 style={{
                  fontFamily: "var(--font-d)", fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                  fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem", lineHeight: 1.2,
                }}>{s.title}</h2>
                <p style={{ color: "var(--ink-4)", lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: "560px" }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {s.capabilities.map((cap) => (
                    <span key={cap} style={{
                      fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      padding: "0.35rem 0.85rem",
                      border: "1px solid var(--cream-3)",
                      color: "var(--ink-4)",
                    }}>{cap}</span>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: "0.25rem" }}>
                <Link to={s.to} className="btn btn--ghost" style={{ width: "100%", justifyContent: "center" }}>
                  Explore Service →
                </Link>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--cream-3)" }} />
        </div>
      </section>

      {/* Credentials */}
      <section ref={credRef} style={{ padding: "5rem 0", background: "var(--green)" }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "3rem",
          }}>
            {CREDENTIALS.map((c, i) => (
              <div key={i} style={{
                opacity: credVisible ? 1 : 0,
                transform: credVisible ? "none" : "translateY(16px)",
                transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
              }}>
                <div style={{
                  fontFamily: "var(--font-d)", fontSize: "clamp(2.5rem,4vw,3.5rem)",
                  fontWeight: 300, color: "#f0ebe0", lineHeight: 1, marginBottom: "0.5rem",
                }}>{c.num}</div>
                <div style={{
                  fontFamily: "var(--font-u)", fontSize: "0.7rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold-pale)",
                }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sapientia */}
      <section ref={whyRef} style={{ padding: "var(--pad) 0", background: "var(--cream-2)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem",
            opacity: whyVisible ? 1 : 0, transform: whyVisible ? "none" : "translateY(16px)",
            transition: "opacity 0.7s var(--ease), transform 0.7s var(--ease)",
          }}>
            <p className="label">Why Sapientia</p>
            <h2 style={{
              fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem",
            }}>Senior expertise.<br />No juniors on client work.</h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem",
          }}>
            {[
              { title: "Strategy before technology", desc: "We diagnose the business problem before proposing any technical solution. Our recommendations are driven by outcomes, not tools." },
              { title: "Independent advice", desc: "We have no software vendor affiliations that create conflicts of interest. Our guidance is based entirely on what is right for your organisation." },
              { title: "Senior delivery teams", desc: "Partners and directors deliver our work. We do not use junior staff for core analysis or client-facing engagement." },
              { title: "Measurable outcomes", desc: "Every engagement is structured around defined, measurable outcomes. We do not consider a project successful until our clients do." },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "2rem", background: "var(--white)", border: "1px solid var(--cream-3)",
                opacity: whyVisible ? 1 : 0, transform: whyVisible ? "none" : "translateY(16px)",
                transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
              }}>
                <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.25rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--ink-4)", fontSize: "0.88rem", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} style={{ padding: "var(--pad) 0", background: "var(--green)", textAlign: "center" }}>
        <div className="wrap" style={{
          opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
        }}>
          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-pale)", marginBottom: "1.25rem" }}>
            Begin a conversation
          </p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Let's talk about your challenge.
          </h2>
          <p style={{ color: "rgba(240,235,224,0.72)", maxWidth: "400px", margin: "0 auto 2.5rem", lineHeight: 1.8, fontSize: "0.95rem" }}>
            No obligation — a 30-minute conversation with a senior partner.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Schedule a Conversation</Link>
            <Link to="/case-studies" className="btn btn--ghost-light">View Case Studies →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
