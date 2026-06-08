import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

const CAPABILITIES = [
  {
    num: "01",
    title: "AI Readiness Assessment",
    desc: "We evaluate your data maturity, infrastructure, talent, and governance — producing a clear picture of where AI can create value and what must be built first.",
  },
  {
    num: "02",
    title: "Machine Learning Strategy",
    desc: "Model selection, build-vs-buy analysis, and an AI investment roadmap aligned to your competitive strategy and risk tolerance.",
  },
  {
    num: "03",
    title: "Intelligent Process Automation",
    desc: "Combining RPA, NLP, and generative AI to automate knowledge-intensive workflows — from document processing to decision support.",
  },
  {
    num: "04",
    title: "Decision Intelligence Systems",
    desc: "Recommendation engines, predictive analytics, and real-time scoring systems that embed intelligence directly into operational processes.",
  },
  {
    num: "05",
    title: "AI Ethics & Governance",
    desc: "Responsible AI frameworks, model explainability standards, bias auditing protocols, and board-level AI governance structures.",
  },
  {
    num: "06",
    title: "Generative AI Integration",
    desc: "Enterprise-grade deployment of large language models — including retrieval-augmented generation, fine-tuning, and prompt engineering frameworks — with security and compliance controls.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Discover",
    desc: "We identify high-value AI opportunities through process analysis, stakeholder interviews, and data estate review — prioritising impact over novelty.",
  },
  {
    step: "02",
    title: "Experiment",
    desc: "Rapid prototyping validates feasibility before significant investment. We build to learn, not to deploy prematurely.",
  },
  {
    step: "03",
    title: "Deploy",
    desc: "Production-grade implementation with MLOps infrastructure, monitoring, and human-in-the-loop controls where required.",
  },
  {
    step: "04",
    title: "Govern",
    desc: "Ongoing model performance monitoring, bias auditing, and governance reviews maintain trust and regulatory alignment.",
  },
  {
    step: "05",
    title: "Scale",
    desc: "Expanding proven AI capabilities across business units — with a centre of excellence model that builds internal capability alongside delivery.",
  },
];

export default function AIStrategy() {
  const [capsRef, capsVisible] = useReveal();
  const [appRef, appVisible]   = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="AI & Intelligent Automation"
        title={<>Intelligence<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>that compounds.</em></>}
        subtitle="We help enterprises move beyond AI experimentation into production-grade systems that change how decisions are made, work is done, and value is created."
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/contact" className="btn btn--gold">Explore AI Opportunities</Link>
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

      {/* Principles strip */}
      <section style={{ padding: "3rem 0", background: "var(--green)" }}>
        <div className="wrap">
          <p style={{
            textAlign: "center", fontFamily: "var(--font-u)", fontSize: "0.65rem",
            fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold-pale)", marginBottom: "2rem", opacity: 0.8,
          }}>Our AI Principles</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
            {["Explainable", "Accountable", "Fair", "Secure", "Human-Centred"].map((p, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-d)", fontSize: "1.1rem", fontWeight: 500,
                letterSpacing: "0.06em", color: "rgba(240,235,224,0.75)",
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
            }}>How We Work</h2>
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
          }}>Move from pilot to production</p>
          <h2 style={{
            fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 300, color: "#f0ebe0", marginBottom: "1.25rem", lineHeight: 1.15,
          }}>AI that earns its place<br />in your operations.</h2>
          <p style={{
            color: "rgba(240,235,224,0.72)", maxWidth: "400px", margin: "0 auto 2.5rem",
            lineHeight: 1.8, fontSize: "0.95rem",
          }}>
            We identify your highest-return AI use case and build the path from concept to production.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Begin AI Assessment</Link>
            <Link to="/insights/ai-governance" className="btn btn--ghost-light">Read: AI Governance →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
