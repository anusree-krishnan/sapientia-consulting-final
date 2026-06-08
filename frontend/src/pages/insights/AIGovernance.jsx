import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

const PILLARS = [
  {
    num: "01",
    title: "Transparency",
    desc: "Stakeholders — employees, customers, regulators — must be able to understand, at an appropriate level of detail, that AI is being used, for what purpose, and on what basis decisions are made. Explainability tooling is a technical requirement; communication is a leadership one.",
  },
  {
    num: "02",
    title: "Accountability",
    desc: "Every AI system must have a named human owner accountable for its behaviour. This is not a nominal designation — it means the owner has sufficient understanding of the system and authority to intervene when required. Accountability without authority is not accountability.",
  },
  {
    num: "03",
    title: "Fairness",
    desc: "Models trained on historical data inherit historical biases. Governance frameworks must include mandatory bias auditing at deployment and on a scheduled ongoing basis — with defined remediation thresholds. Fairness is not a one-time certification; it is an ongoing obligation.",
  },
  {
    num: "04",
    title: "Security",
    desc: "AI systems introduce novel attack surfaces: prompt injection, model inversion, adversarial examples, and data poisoning. Security assessments for AI systems require specialised knowledge beyond standard application security review.",
  },
  {
    num: "05",
    title: "Human Oversight",
    desc: "For consequential decisions — credit, hiring, clinical triage, fraud detection — human review of AI outputs must be designed into the process, not bolted on. The EU AI Act and emerging regulations in multiple jurisdictions are moving toward mandating this for high-risk applications.",
  },
];

export default function AIGovernance() {
  const [bodyRef, bodyVisible] = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="Insight — AI & Intelligent Automation"
        title={<>Governing AI:<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>A Practical Framework</em></>}
        subtitle="Most enterprises are deploying AI faster than they are governing it. This is how to close that gap before regulators, incidents, or reputational damage forces the issue."
      />

      {/* Meta */}
      <div style={{ padding: "2rem 0", background: "var(--cream)", borderBottom: "1px solid var(--cream-3)" }}>
        <div className="wrap" style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          {[
            ["Published", "March 2025"],
            ["Reading time", "9 minutes"],
            ["Practice", "AI & Intelligent Automation"],
            ["Author", "Sapientia AI Practice"],
          ].map(([k, v]) => (
            <div key={k}>
              <p style={{ fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>{k}</p>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-4)" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <section ref={bodyRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{
            maxWidth: "720px", margin: "0 auto",
            opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? "none" : "translateY(16px)",
            transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
          }}>

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              The deployment-governance gap
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              The pace of AI adoption in enterprise has accelerated dramatically since 2023. Productivity
              tools, customer-facing automation, internal decision-support systems, and generative AI
              integrations are being deployed across business units — often by teams without dedicated AI
              expertise, and frequently without formal risk assessment.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              The governance infrastructure to manage these systems — risk classification, audit trails,
              accountability structures, incident response — is, in most organisations, years behind the
              deployment curve. This is the gap regulators are beginning to close, and the gap that creates
              reputational and operational exposure.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              The good news is that building an AI governance framework is not as complex as building an
              AI system. It requires clarity, executive commitment, and a structured approach — not a
              research team or an unlimited budget.
            </p>

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>
              Five pillars of enterprise AI governance
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Effective AI governance rests on five interconnected principles. Weakness in any one undermines the others.
            </p>

            {PILLARS.map((p, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "48px 1fr",
                gap: "1.5rem", marginBottom: "0",
                padding: "2rem 0", borderTop: "1px solid var(--cream-3)",
              }}>
                <span style={{ fontFamily: "var(--font-d)", fontSize: "1.5rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{p.num}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.25rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ color: "var(--ink-3)", lineHeight: 1.85, fontSize: "0.92rem" }}>{p.desc}</p>
                </div>
              </div>
            ))}

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", margin: "2.5rem 0" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              The EU AI Act: what enterprises must know
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              The EU AI Act came into full effect in August 2024 and represents the most comprehensive
              AI regulatory framework currently in force. It classifies AI systems into risk tiers —
              unacceptable risk (prohibited), high risk (stringent requirements), limited risk (transparency
              obligations), and minimal risk (largely unregulated).
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              High-risk applications — including AI used in employment decisions, credit scoring, critical
              infrastructure, and law enforcement — face mandatory conformity assessment, technical documentation,
              human oversight requirements, and post-market monitoring obligations. Fines for non-compliance
              can reach €30 million or 6% of global annual turnover, whichever is higher.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              The practical starting point is a systematic inventory of AI systems in use across your
              organisation, classified by risk tier. Most organisations discover they have more AI systems
              in production than their IT function is aware of. Governance cannot be applied to what is
              not catalogued.
            </p>

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              Getting started: three immediate actions
            </h2>
            {[
              ["Build your AI inventory.", "Identify every AI system in production across your organisation, classify by risk, and assign an accountable owner. This alone takes most organisations from opaque to visible."],
              ["Establish a governance committee.", "A cross-functional group — technology, legal, compliance, risk, and a business representative — should review new AI deployments and monitor existing ones. This does not require a large permanent staff."],
              ["Conduct a high-risk system review.", "Apply the EU AI Act risk classification to your existing AI portfolio. For any system that qualifies as high-risk, initiate a conformity assessment. Do this proactively rather than in response to regulatory inquiry."],
            ].map(([title, body], i) => (
              <div key={i} style={{ marginBottom: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-d)", fontSize: "1.1rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.5rem" }}>
                  <span style={{ color: "var(--gold)" }}>{i + 1}. </span>{title}
                </p>
                <p style={{ color: "var(--ink-3)", lineHeight: 1.85, fontSize: "0.92rem" }}>{body}</p>
              </div>
            ))}

            <div style={{ borderTop: "1px solid var(--cream-3)", paddingTop: "2.5rem", marginTop: "1.5rem" }}>
              <p className="label" style={{ marginBottom: "1.25rem" }}>Related Insights</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  ["Zero Trust Architecture in Hybrid Environments", "/insights/zero-trust"],
                  ["The Cloud Migration Playbook", "/insights/cloud-migration"],
                ].map(([title, to]) => (
                  <Link key={to} to={to} style={{
                    fontFamily: "var(--font-d)", fontSize: "1.1rem", color: "var(--green)",
                    transition: "color 0.3s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--green)"}
                  >
                    {title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} style={{ padding: "var(--pad) 0", background: "var(--green)", textAlign: "center" }}>
        <div className="wrap" style={{
          opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
        }}>
          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-pale)", marginBottom: "1.25rem" }}>
            Govern before you scale
          </p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "2rem", lineHeight: 1.15 }}>
            Talk to our AI practice about governance readiness.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Request AI Governance Review</Link>
            <Link to="/insights" className="btn btn--ghost-light">More Insights →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
