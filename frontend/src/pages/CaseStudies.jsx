import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import PageHero from "../components/PageHero.jsx";

const FEATURED = {
  sector: "Global Financial Services",
  service: "Cybersecurity & Risk Advisory",
  challenge: "A tier-one investment bank's incident response capability was fragmented across 14 business units, with an average detection-to-containment time of 19 hours. Regulatory examination had identified this as a material risk.",
  solution: "We designed and implemented a unified Security Operations Centre model, consolidated tooling across four legacy SIEM platforms, and ran a 12-week tabletop exercise programme across all business lines.",
  outcomes: [
    { metric: "67%", label: "reduction in mean time to containment" },
    { metric: "4→1", label: "SIEM platforms consolidated" },
    { metric: "100%", label: "of business units included in IR programme" },
  ],
};

const STUDIES = [
  {
    num: "01",
    sector: "Healthcare Network",
    service: "Cloud Transformation",
    region: "North America",
    challenge: "A 22-hospital network running on 15-year-old on-premise infrastructure was facing $40M in hardware refresh costs, with zero disaster recovery capability across 60% of critical clinical systems.",
    outcomes: [
      { metric: "34%", label: "reduction in infrastructure operating cost" },
      { metric: "100%", label: "DR coverage for clinical systems" },
      { metric: "18 mo", label: "migration completed ahead of schedule" },
    ],
  },
  {
    num: "02",
    sector: "Global Energy Company",
    service: "AI & Intelligent Automation",
    region: "Europe",
    challenge: "An energy trading division was processing 2,400 analyst-hours per month on manual commodity price reporting and risk calculations that were error-prone and delayed decision-making by up to 48 hours.",
    outcomes: [
      { metric: "2,400", label: "analyst hours recovered monthly" },
      { metric: "48h→4h", label: "decision cycle time reduction" },
      { metric: "99.2%", label: "accuracy rate on automated calculations" },
    ],
  },
  {
    num: "03",
    sector: "Logistics & Supply Chain",
    service: "Technology Strategy",
    region: "Asia-Pacific",
    challenge: "A regional logistics firm was pursuing an aggressive M&A strategy but had no technology due diligence capability, having inherited significant technical debt across three prior acquisitions without a clear integration roadmap.",
    outcomes: [
      { metric: "3",     label: "acquisitions supported with DD" },
      { metric: "£12M",  label: "in technology risk surfaced pre-close" },
      { metric: "40%",   label: "faster integration vs. prior acquisitions" },
    ],
  },
  {
    num: "04",
    sector: "Retail Financial Services",
    service: "Cybersecurity & Risk Advisory",
    region: "United Kingdom",
    challenge: "Following a PSD2 compliance deadline, a consumer lender needed to achieve ISO 27001 certification and SOC 2 Type II attestation within 9 months to retain three enterprise clients that had contractually required it.",
    outcomes: [
      { metric: "9 mo", label: "from zero to dual certification" },
      { metric: "3",    label: "enterprise client contracts retained" },
      { metric: "0",    label: "major non-conformances in external audit" },
    ],
  },
];

export default function CaseStudies() {
  const [featRef, featVisible]   = useReveal();
  const [gridRef, gridVisible]   = useReveal();
  const [ctaRef, ctaVisible]     = useReveal();

  return (
    <div>
      <PageHero
        label="Case Studies"
        title={<>Real problems.<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>Measured outcomes.</em></>}
        subtitle="We believe in showing our work. Every engagement here represents a specific challenge, a rigorous approach, and outcomes we can stand behind."
      />

      {/* Featured case study */}
      <section ref={featRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          <p className="label" style={{ marginBottom: "2rem",
            opacity: featVisible ? 1 : 0, transform: featVisible ? "none" : "translateY(12px)",
            transition: "opacity 0.6s var(--ease), transform 0.6s var(--ease)",
          }}>Featured Engagement</p>

          <div style={{
            background: "var(--green)", padding: "clamp(2rem,5vw,4rem)",
            opacity: featVisible ? 1 : 0, transform: featVisible ? "none" : "translateY(20px)",
            transition: "opacity 0.8s 0.1s var(--ease), transform 0.8s 0.1s var(--ease)",
          }}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <span style={{
                fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                padding: "0.35rem 0.85rem", border: "1px solid rgba(212,184,122,0.4)",
                color: "var(--gold-pale)",
              }}>{FEATURED.sector}</span>
              <span style={{
                fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                padding: "0.35rem 0.85rem", border: "1px solid rgba(240,235,224,0.2)",
                color: "rgba(240,235,224,0.6)",
              }}>{FEATURED.service}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--gold-pale)", marginBottom: "0.75rem",
                }}>The Challenge</p>
                <p style={{ color: "rgba(240,235,224,0.82)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: "2rem" }}>{FEATURED.challenge}</p>

                <p style={{
                  fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--gold-pale)", marginBottom: "0.75rem",
                }}>The Solution</p>
                <p style={{ color: "rgba(240,235,224,0.82)", lineHeight: 1.85, fontSize: "0.95rem" }}>{FEATURED.solution}</p>
              </div>

              <div>
                <p style={{
                  fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--gold-pale)", marginBottom: "1.5rem",
                }}>Outcomes</p>
                {FEATURED.outcomes.map((o, i) => (
                  <div key={i} style={{
                    padding: "1.25rem 0",
                    borderBottom: i < FEATURED.outcomes.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}>
                    <div style={{ fontFamily: "var(--font-d)", fontSize: "2.5rem", fontWeight: 300, color: "#f0ebe0", lineHeight: 1 }}>{o.metric}</div>
                    <div style={{ fontFamily: "var(--font-u)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-pale)", marginTop: "0.4rem" }}>{o.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study grid */}
      <section ref={gridRef} style={{ padding: "var(--pad) 0", background: "var(--cream-2)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="label">More Engagements</p>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem" }}>
              Selected Work
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {STUDIES.map((s, i) => (
              <div key={i} style={{
                background: "var(--white)", border: "1px solid var(--cream-3)",
                padding: "2.5rem",
                opacity: gridVisible ? 1 : 0, transform: gridVisible ? "none" : "translateY(20px)",
                transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
              }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                  <span style={{
                    fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    padding: "0.3rem 0.75rem", background: "var(--green-light)", color: "var(--green)",
                  }}>{s.sector}</span>
                  <span style={{
                    fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    padding: "0.3rem 0.75rem", background: "var(--cream-2)", color: "var(--ink-4)",
                  }}>{s.region}</span>
                </div>

                <p style={{
                  fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "var(--gold)", marginBottom: "0.5rem",
                }}>{s.service}</p>

                <p style={{ color: "var(--ink-4)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "2rem" }}>{s.challenge}</p>

                <div style={{ borderTop: "1px solid var(--cream-3)", paddingTop: "1.5rem", display: "flex", gap: "1.5rem" }}>
                  {s.outcomes.map((o, j) => (
                    <div key={j} style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--font-d)", fontSize: "1.6rem", fontWeight: 300, color: "var(--green)", lineHeight: 1 }}>{o.metric}</div>
                      <div style={{ fontFamily: "var(--font-u)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)", marginTop: "0.3rem" }}>{o.label}</div>
                    </div>
                  ))}
                </div>
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
          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-pale)", marginBottom: "1.25rem" }}>Your engagement starts here</p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Bring us your challenge.
          </h2>
          <p style={{ color: "rgba(240,235,224,0.72)", maxWidth: "420px", margin: "0 auto 2.5rem", lineHeight: 1.8, fontSize: "0.95rem" }}>
            We would rather understand your problem first and propose a solution second.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Begin Engagement</Link>
            <Link to="/services" className="btn btn--ghost-light">Our Services →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
