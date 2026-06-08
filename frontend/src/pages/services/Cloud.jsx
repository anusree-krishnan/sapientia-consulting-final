import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

const CAPABILITIES = [
  {
    num: "01",
    title: "Cloud Strategy & Roadmapping",
    desc: "We translate your business objectives into a phased, costed cloud strategy — aligning workload priorities, vendor selection, and investment timelines.",
  },
  {
    num: "02",
    title: "Migration Assessment & Planning",
    desc: "Workload discovery, TCO modelling, dependency mapping, and wave planning. We apply the 6 R's framework — retire, retain, rehost, replatform, refactor, rebuild — systematically.",
  },
  {
    num: "03",
    title: "Multi-Cloud Architecture",
    desc: "Reference architectures and design patterns for hybrid and multi-cloud environments across AWS, Azure, and GCP. Landing zone design built for scale.",
  },
  {
    num: "04",
    title: "DevSecOps & Platform Engineering",
    desc: "CI/CD pipeline design, infrastructure-as-code, and developer platform tooling that embeds security and quality into every release cycle.",
  },
  {
    num: "05",
    title: "Cost Optimisation & FinOps",
    desc: "Ongoing spend visibility, rightsizing recommendations, reserved capacity planning, and showback/chargeback models for enterprise cloud portfolios.",
  },
  {
    num: "06",
    title: "Operational Readiness",
    desc: "Cloud operating model design, skills enablement, runbook development, and SRE practice establishment to sustain cloud at scale.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Assess",
    desc: "Discovery workshops and automated tooling produce a full inventory of applications, dependencies, data flows, and total cost of ownership.",
  },
  {
    step: "02",
    title: "Architect",
    desc: "We design the target-state architecture, landing zone, and migration waves — balancing speed to value with acceptable risk.",
  },
  {
    step: "03",
    title: "Migrate",
    desc: "Wave-based execution with embedded quality gates, rollback procedures, and live monitoring. No surprises, no unplanned downtime.",
  },
  {
    step: "04",
    title: "Optimise",
    desc: "Post-migration, we apply FinOps practices and performance tuning to ensure you realise the commercial and technical benefits projected.",
  },
  {
    step: "05",
    title: "Scale",
    desc: "We help your teams internalise cloud-native practices — shifting the operating model so growth happens without proportional cost growth.",
  },
];

export default function Cloud() {
  const [capsRef, capsVisible] = useReveal();
  const [appRef, appVisible]   = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="Cloud Transformation"
        title={<>Modern cloud.<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>Lasting returns.</em></>}
        subtitle="We guide enterprises from legacy infrastructure to modern cloud architectures — with precision planning, minimal disruption, and measurable commercial outcomes."
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn--gold">Start Cloud Assessment</Link>
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

      {/* Partners strip */}
      <section style={{ padding: "3rem 0", background: "var(--green)" }}>
        <div className="wrap">
          <p style={{
            textAlign: "center", fontFamily: "var(--font-u)", fontSize: "0.65rem",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold-pale)", marginBottom: "2rem", opacity: 0.8,
          }}>Cloud Platform Partners</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
            {["Amazon Web Services", "Microsoft Azure", "Google Cloud"].map((p, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-d)", fontSize: "1.15rem", fontWeight: 500,
                letterSpacing: "0.06em", color: "rgba(240,235,224,0.7)",
              }}>{p}</span>
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
            }}>Our Migration Method</h2>
          </div>

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
          }}>Start your journey</p>
          <h2 style={{
            fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15,
          }}>Cloud without chaos.</h2>
          <p style={{
            color: "rgba(240,235,224,0.72)", maxWidth: "400px", margin: "0 auto 2.5rem",
            lineHeight: 1.8, fontSize: "0.95rem",
          }}>
            Our cloud assessment delivers a costed migration roadmap in four weeks.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Request Cloud Assessment</Link>
            <Link to="/case-studies" className="btn btn--ghost-light">View Case Studies →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
