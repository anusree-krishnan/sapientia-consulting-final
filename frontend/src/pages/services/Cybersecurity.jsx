import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

const CAPABILITIES = [
  {
    num: "01",
    title: "Security Assessment & Penetration Testing",
    desc: "Systematic evaluation of your security posture — from application-layer pen testing to enterprise-wide threat-surface analysis — delivered to CREST and PTES standards.",
  },
  {
    num: "02",
    title: "Risk Management Frameworks",
    desc: "Custom governance structures aligned to NIST CSF, ISO 27001, SOC 2, GDPR, and HIPAA. We translate regulatory obligation into operational practice.",
  },
  {
    num: "03",
    title: "Security Architecture & Design",
    desc: "Security-by-design principles embedded into system architecture reviews, API design, cloud configurations, and third-party integrations.",
  },
  {
    num: "04",
    title: "Cloud & Hybrid Security",
    desc: "Identity and access management, secrets management, network segmentation, and CSPM implementations across AWS, Azure, and GCP environments.",
  },
  {
    num: "05",
    title: "Incident Response Planning",
    desc: "Tabletop exercises, playbook development, and retainer-based response capacity. When incidents occur, every second of preparation multiplies.",
  },
  {
    num: "06",
    title: "Compliance & Regulatory Advisory",
    desc: "Gap analysis, remediation roadmaps, and audit preparation for organisations navigating NIS2, DORA, CCPA, PCI-DSS, and sector-specific mandates.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Discover",
    desc: "We map your digital estate, data flows, and current controls — building a precise picture before making any recommendations.",
  },
  {
    step: "02",
    title: "Assess",
    desc: "Technical testing and risk analysis identify gaps between your current state and best-practice security posture.",
  },
  {
    step: "03",
    title: "Design",
    desc: "We architect targeted controls, frameworks, and processes matched to your risk appetite and operational constraints.",
  },
  {
    step: "04",
    title: "Implement",
    desc: "Guided deployment of security measures with minimal disruption, including change management and staff enablement.",
  },
  {
    step: "05",
    title: "Monitor & Sustain",
    desc: "Ongoing assurance through continuous monitoring programmes, periodic reviews, and threat intelligence integration.",
  },
];

export default function Cybersecurity() {
  const [capsRef, capsVisible] = useReveal();
  const [appRef, appVisible]   = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="Cybersecurity & Risk Advisory"
        title={<>Resilience by<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>design.</em></>}
        subtitle="We help organisations build security postures that withstand modern threats — without sacrificing operational agility or business velocity."
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn--gold">Request an Assessment</Link>
          <Link to="/services" className="btn btn--ghost-light">All Services →</Link>
        </div>
      </PageHero>

      {/* Capabilities */}
      <section ref={capsRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="label">Capabilities</p>
            <h2 style={{
              fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem",
            }}>What We Deliver</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "0",
          }}>
            {CAPABILITIES.map((c, i) => (
              <div key={i} style={{
                padding: "2rem 2rem 2rem 0",
                borderTop: "1px solid var(--cream-3)",
                borderRight: i % 2 === 0 ? "1px solid var(--cream-3)" : "none",
                opacity: capsVisible ? 1 : 0,
                transform: capsVisible ? "none" : "translateY(16px)",
                transition: `opacity 0.7s ${i * 0.08}s var(--ease), transform 0.7s ${i * 0.08}s var(--ease)`,
              }}>
                <span style={{
                  display: "block", fontFamily: "var(--font-d)", fontSize: "0.9rem",
                  color: "var(--gold)", marginBottom: "0.75rem",
                }}>{c.num}</span>
                <h3 style={{
                  fontFamily: "var(--font-d)", fontSize: "1.25rem",
                  fontWeight: 400, color: "var(--ink)", marginBottom: "0.6rem",
                }}>{c.title}</h3>
                <p style={{ color: "var(--ink-4)", fontSize: "0.88rem", lineHeight: 1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section style={{
        padding: "3rem 0", background: "var(--green)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div className="wrap">
          <div style={{
            display: "flex", alignItems: "center", gap: "3rem",
            flexWrap: "wrap", justifyContent: "center",
          }}>
            {["OWASP Member", "ISO 27001 Advisory", "NIST CSF", "SOC 2 Type II", "IEEE Published"].map((badge, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--gold-pale)", opacity: 0.9,
              }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section ref={appRef} style={{ padding: "var(--pad) 0", background: "var(--cream-2)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="label">Methodology</p>
            <h2 style={{
              fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem",
            }}>Our Approach</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {APPROACH.map((a, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "72px 1fr",
                gap: "2rem", padding: "2rem 0",
                borderTop: "1px solid var(--cream-3)",
                opacity: appVisible ? 1 : 0,
                transform: appVisible ? "none" : "translateY(16px)",
                transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
              }}>
                <span style={{
                  fontFamily: "var(--font-d)", fontSize: "2rem", fontWeight: 300,
                  color: "var(--gold)", lineHeight: 1, paddingTop: "0.25rem",
                }}>{a.step}</span>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-d)", fontSize: "1.4rem",
                    fontWeight: 400, color: "var(--ink)", marginBottom: "0.5rem",
                  }}>{a.title}</h3>
                  <p style={{ color: "var(--ink-4)", fontSize: "0.9rem", lineHeight: 1.75 }}>{a.desc}</p>
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
          <p style={{
            fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold-pale)", marginBottom: "1.25rem",
          }}>Begin with clarity</p>
          <h2 style={{
            fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15,
          }}>How secure is your organisation,<br />really?</h2>
          <p style={{
            color: "rgba(240,235,224,0.72)", maxWidth: "400px", margin: "0 auto 2.5rem",
            lineHeight: 1.8, fontSize: "0.95rem",
          }}>
            Our initial security review identifies your most critical exposure within two weeks.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Request a Security Review</Link>
            <Link to="/case-studies" className="btn btn--ghost-light">View Case Studies →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
