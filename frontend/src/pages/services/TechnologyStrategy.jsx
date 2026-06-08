import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

const CAPABILITIES = [
  {
    num: "01",
    title: "Digital Maturity Assessment",
    desc: "A structured evaluation of your organisation's digital capabilities, technology debt, and readiness for transformation — producing an honest baseline and investment priorities.",
  },
  {
    num: "02",
    title: "IT Operating Model Design",
    desc: "Restructuring technology functions for the digital age — team structures, product vs. project models, platform engineering, and vendor operating models.",
  },
  {
    num: "03",
    title: "Technology Portfolio Rationalisation",
    desc: "Systematic review of your application and infrastructure portfolio against business value, TCO, and strategic fit. We identify consolidation opportunities without disruption.",
  },
  {
    num: "04",
    title: "M&A Technology Due Diligence",
    desc: "Pre-acquisition technical assessment, integration planning, and post-merger technology harmonisation. We protect deal value from day one.",
  },
  {
    num: "05",
    title: "Innovation Programme Management",
    desc: "Structured exploration of emerging technology — from proof-of-concept governance to innovation lab design and internal venture capital frameworks.",
  },
  {
    num: "06",
    title: "Board-Level Technology Advisory",
    desc: "Translating technical complexity into boardroom language. We advise executives and non-executive directors on technology risk, opportunity, and investment.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Diagnose",
    desc: "Stakeholder interviews, technology audits, and benchmarking against industry peers establish a clear, unbiased picture of where you are today.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We develop a target technology vision and operating model aligned to your three-to-five year business strategy.",
  },
  {
    step: "03",
    title: "Align",
    desc: "Leadership alignment workshops ensure executive sponsorship, budget commitment, and clear ownership before execution begins.",
  },
  {
    step: "04",
    title: "Execute",
    desc: "A phased delivery roadmap with milestone-based governance — structured to deliver value at each stage, not only at programme completion.",
  },
  {
    step: "05",
    title: "Sustain",
    desc: "Ongoing advisory retainers, quarterly health checks, and board reporting keep strategy and execution in sync as conditions evolve.",
  },
];

export default function TechnologyStrategy() {
  const [capsRef, capsVisible] = useReveal();
  const [appRef, appVisible]   = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="Technology Strategy"
        title={<>Technology aligned<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>to ambition.</em></>}
        subtitle="We help organisations build technology strategies that don't sit on shelves — rigorous plans that connect boardroom intent to engineering execution."
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn--gold">Start a Strategy Review</Link>
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

      {/* Approach */}
      <section ref={appRef} style={{ padding: "var(--pad) 0", background: "var(--cream-2)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="label">Methodology</p>
            <h2 style={{
              fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem",
            }}>Our Engagement Model</h2>
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
          }}>Build with intent</p>
          <h2 style={{
            fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15,
          }}>Strategy that connects<br />vision to execution.</h2>
          <p style={{
            color: "rgba(240,235,224,0.72)", maxWidth: "400px", margin: "0 auto 2.5rem",
            lineHeight: 1.8, fontSize: "0.95rem",
          }}>
            Speak with a senior partner about your technology strategy challenges.
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
