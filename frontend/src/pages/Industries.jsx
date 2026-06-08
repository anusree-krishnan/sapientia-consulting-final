import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import PageHero from "../components/PageHero.jsx";

const INDUSTRIES = [
  {
    id: "financial",
    num: "01",
    title: "Financial Services",
    subtitle: "Banking, Capital Markets, Insurance, Asset Management",
    desc: "Financial services organisations face a unique convergence of pressures: heightened regulatory scrutiny, rapid technology disruption, and the existential threat of digital-native competitors. We advise on technology modernisation, cybersecurity posture, and AI adoption in environments where risk tolerance is low and compliance obligations are non-negotiable.",
    focus: ["Regulatory Technology (RegTech)", "Core Banking Modernisation", "Fraud Detection & Prevention", "DORA & NIS2 Compliance", "Cloud Migration for Financial Data"],
    clients: "Tier-one and regional banks, insurers, asset managers, and fintech challengers.",
  },
  {
    id: "healthcare",
    num: "02",
    title: "Healthcare & Life Sciences",
    subtitle: "Hospitals, Payers, Pharma, Medical Devices",
    desc: "Healthcare organisations are navigating a fundamental shift: the convergence of clinical systems, patient data, and AI-powered care delivery. We work with hospital networks, payers, and life sciences companies on technology strategy, clinical data governance, and the secure adoption of AI in environments where patient safety is paramount.",
    focus: ["Clinical AI & Decision Support", "EHR Integration & Data Strategy", "HIPAA / GDPR Compliance", "Medical Device Cybersecurity", "Healthcare Cloud Architecture"],
    clients: "Hospital networks, integrated health systems, global pharmaceutical firms, and medical device manufacturers.",
  },
  {
    id: "manufacturing",
    num: "03",
    title: "Manufacturing & Operations",
    subtitle: "Industrial, Automotive, Aerospace, Consumer Goods",
    desc: "Industry 4.0 is real, but the gap between ambition and execution is large. We help manufacturers move from proof-of-concept to production-grade implementation — connected factories, predictive maintenance, supply chain digitisation — while managing the cybersecurity risk that comes with OT/IT convergence.",
    focus: ["OT/IT Security & Convergence", "Industry 4.0 Strategy", "Predictive Maintenance AI", "Supply Chain Digitalisation", "Digital Twin Implementation"],
    clients: "Global manufacturers, automotive OEMs, aerospace and defence primes, and industrial equipment firms.",
  },
  {
    id: "energy",
    num: "04",
    title: "Energy & Utilities",
    subtitle: "Oil & Gas, Power, Renewables, Water",
    desc: "Energy transition is creating simultaneous technology demands: decarbonisation programmes, grid modernisation, and the defence of critical national infrastructure. We advise energy organisations on the technology strategy and cybersecurity architecture required to manage this complexity.",
    focus: ["Critical Infrastructure Security", "Grid Modernisation Strategy", "Renewable Energy Integration", "OT Cybersecurity (ICS/SCADA)", "Energy Data & Analytics Platforms"],
    clients: "National energy companies, utilities, renewable energy developers, and oil and gas supermajors.",
  },
  {
    id: "technology",
    num: "05",
    title: "Technology & Media",
    subtitle: "SaaS, Platforms, Digital Media, Telecommunications",
    desc: "Technology companies face an unusual challenge: they understand technology deeply but often struggle with the governance, security, and strategic alignment required at enterprise scale. We work with scale-ups and established technology firms on security architecture, AI strategy, and operating model design for the challenges that come with growth.",
    focus: ["Security Architecture at Scale", "Platform & API Strategy", "AI Product Governance", "Enterprise Technology Strategy", "Privacy by Design"],
    clients: "Enterprise SaaS companies, digital media groups, telecommunications operators, and technology scale-ups.",
  },
  {
    id: "public",
    num: "06",
    title: "Public Sector",
    subtitle: "Central Government, Defence, Local Authorities",
    desc: "Public sector organisations are held to a higher standard — on service reliability, data protection, and value for money — with fewer resources than private sector equivalents. We advise government bodies on digital transformation, cybersecurity, and AI adoption with a clear understanding of procurement constraints and public accountability.",
    focus: ["Digital Government Strategy", "Cyber Essentials Plus / NCSC", "AI in Public Services", "Legacy System Modernisation", "Citizen Data Privacy"],
    clients: "Central government departments, defence agencies, and local authority transformation programmes.",
  },
];

export default function Industries() {
  const [indRef, indVisible]  = useReveal();
  const [ctaRef, ctaVisible]  = useReveal();

  return (
    <div>
      <PageHero
        label="Industries"
        title={<>We understand<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>your sector.</em></>}
        subtitle="Technology strategy is not generic. Every sector has distinct regulatory demands, competitive dynamics, and risk profiles. We bring deep industry knowledge alongside our technical expertise."
      />

      {/* Industry list */}
      <section ref={indRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          {INDUSTRIES.map((ind, i) => (
            <div key={ind.id} id={ind.id} style={{
              padding: "3.5rem 0",
              borderTop: "1px solid var(--cream-3)",
              display: "grid", gridTemplateColumns: "80px 1fr",
              gap: "2.5rem",
              opacity: indVisible ? 1 : 0, transform: indVisible ? "none" : "translateY(20px)",
              transition: `opacity 0.7s ${i * 0.08}s var(--ease), transform 0.7s ${i * 0.08}s var(--ease)`,
            }}>
              <span style={{ fontFamily: "var(--font-d)", fontSize: "1.1rem", color: "var(--gold)", paddingTop: "0.5rem" }}>
                {ind.num}
              </span>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "3rem", alignItems: "start" }}>
                <div>
                  <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.1, marginBottom: "0.4rem" }}>
                    {ind.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-u)", fontSize: "0.72rem", color: "var(--ink-4)", letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
                    {ind.subtitle}
                  </p>
                  <p style={{ color: "var(--ink-3)", lineHeight: 1.85, marginBottom: "1.5rem", maxWidth: "600px" }}>{ind.desc}</p>
                  <p style={{ fontFamily: "var(--font-u)", fontSize: "0.72rem", color: "var(--ink-4)", fontStyle: "italic" }}>{ind.clients}</p>
                </div>

                <div style={{ paddingTop: "0.5rem" }}>
                  <p style={{ fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
                    Focus Areas
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {ind.focus.map((f, j) => (
                      <span key={j} style={{
                        padding: "0.6rem 0",
                        borderBottom: "1px solid var(--cream-3)",
                        fontSize: "0.85rem", color: "var(--ink-3)",
                        display: "flex", alignItems: "center", gap: "0.5rem",
                      }}>
                        <span style={{ width: "4px", height: "4px", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--cream-3)" }} />
        </div>
      </section>

      {/* Cross-industry note */}
      <section style={{ padding: "5rem 0", background: "var(--cream-2)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>Cross-Industry Expertise</p>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Patterns that cross sectors create insight.
            </h2>
            <p style={{ color: "var(--ink-4)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              The most valuable perspectives often come from outside a sector. A security approach that
              transformed a financial services client's resilience programme can provide a new lens
              for a healthcare organisation. A cloud architecture pattern from a manufacturing engagement
              opens possibilities in logistics.
            </p>
            <p style={{ color: "var(--ink-4)", lineHeight: 1.85 }}>
              Our practice spans sectors not to spread ourselves thin, but to bring each client the
              benefit of cross-industry pattern recognition — combined with deep knowledge of their
              specific regulatory and competitive environment.
            </p>
          </div>
          <div style={{ background: "var(--white)", border: "1px solid var(--cream-3)", padding: "3rem" }}>
            <p style={{ fontFamily: "var(--font-d)", fontSize: "clamp(1.4rem,2vw,1.8rem)", fontStyle: "italic", color: "var(--green)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
              "The best solutions to industry-specific problems are rarely found within the industry."
            </p>
            <span style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-4)" }}>
              — Sapientia Consulting Principle
            </span>
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
            Your sector, your challenge
          </p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15 }}>
            Tell us what you're navigating.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Begin a Conversation</Link>
            <Link to="/services" className="btn btn--ghost-light">Our Services →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
