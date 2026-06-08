import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

const SIX_RS = [
  { r: "Retire", desc: "Decomission applications that are no longer needed. On average, 15–20% of enterprise portfolios qualify. This reduces migration scope and operating cost immediately." },
  { r: "Retain", desc: "Leave applications in place that are too costly or risky to migrate in the near term. Acknowledging this honestly prevents scope inflation." },
  { r: "Rehost", desc: "Lift-and-shift to cloud infrastructure with no code changes. Fast and low-risk, but captures limited cloud benefit. Best for stable workloads with near-term re-architecture plans." },
  { r: "Replatform", desc: "Minor optimisations — swapping a self-managed database for a managed service, or containerising an application — without changing core architecture. The sweet spot for most workloads." },
  { r: "Refactor", desc: "Re-architect for cloud-native patterns: microservices, serverless, event-driven. Highest effort; justified for applications with significant scale, agility, or cost requirements." },
  { r: "Rebuild", desc: "Rewrite from scratch using cloud-native services. Reserved for applications where technical debt is so severe that migration would cost more than replacement." },
];

export default function CloudMigration() {
  const [bodyRef, bodyVisible] = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="Insight — Cloud Transformation"
        title={<>The Cloud Migration<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>Playbook</em></>}
        subtitle="Lessons from 50+ enterprise cloud transitions — what separates the migrations that deliver from the ones that stall."
      />

      {/* Meta */}
      <div style={{ padding: "2rem 0", background: "var(--cream)", borderBottom: "1px solid var(--cream-3)" }}>
        <div className="wrap" style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          {[
            ["Published", "April 2025"],
            ["Reading time", "10 minutes"],
            ["Practice", "Cloud Transformation"],
            ["Author", "Sapientia Cloud Practice"],
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
              Why most cloud migrations disappoint
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Cloud migration is one of the most over-promised and under-delivered programmes in enterprise
              technology. Organisations begin with expectations of 30–40% cost reduction and dramatically
              improved agility. Eighteen months later, many find themselves paying more than before, with
              the same operational complexity — just in a different location.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              After working through more than fifty enterprise cloud transitions, we have identified the
              patterns that determine success. They are almost never technical. They are strategic, organisational,
              and, above all, about honest assessment before commitment.
            </p>

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              Start with why, not how
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              The most dangerous question in cloud migration is "how do we move to the cloud?" The right
              question is "why are we moving to the cloud, and which outcomes justify the investment?"
              Without a clear answer — agility for product development, cost reduction for legacy infrastructure,
              resilience for a specific workload — decisions made during migration will be arbitrary, and
              the programme will drift.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Document your migration objectives in measurable terms before writing a single line of Terraform.
              Cost per transaction. Deployment frequency. Recovery time objective. These become the programme's
              north stars and the basis for post-migration evaluation.
            </p>

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>
              The 6 R's: a workload-by-workload decision
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Not all workloads should be treated the same. The 6 R's framework provides a vocabulary
              for making explicit, defensible migration decisions at the application level.
            </p>

            {SIX_RS.map((r, i) => (
              <div key={i} style={{
                padding: "1.5rem 0", borderTop: "1px solid var(--cream-3)",
                display: "grid", gridTemplateColumns: "140px 1fr", gap: "1.5rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-d)", fontSize: "1.15rem", fontWeight: 400,
                  color: "var(--green)", fontStyle: "italic",
                }}>{r.r}</span>
                <p style={{ color: "var(--ink-3)", lineHeight: 1.8, fontSize: "0.92rem" }}>{r.desc}</p>
              </div>
            ))}

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", margin: "2.5rem 0" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              The hidden cost trap
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Cloud environments surface infrastructure costs in new ways. The licence consolidation savings
              are real. The network egress costs are often a shock. Data transfer charges, unused reserved
              capacity, and over-provisioned instances frequently erode projected savings by 20–35%.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              FinOps is not an afterthought — it is a discipline that must be established before migration
              begins. Tagging standards, cost allocation, and spending alerts should be in place on Day 1
              of your landing zone, not retrofitted when the first invoice arrives.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              The organisations that consistently achieve their projected savings treat cloud cost as an
              engineering discipline. Every team owns their spend. Optimisation is a sprint ritual, not
              an annual finance review.
            </p>

            <div style={{ borderTop: "1px solid var(--cream-3)", paddingTop: "2.5rem", marginTop: "1rem" }}>
              <p className="label" style={{ marginBottom: "1.25rem" }}>Related Insights</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  ["Zero Trust Architecture in Hybrid Environments", "/insights/zero-trust"],
                  ["Governing AI: A Framework for Enterprise", "/insights/ai-governance"],
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
            Planning a migration?
          </p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "2rem", lineHeight: 1.15 }}>
            Get the assessment before the commitment.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Request Cloud Assessment</Link>
            <Link to="/insights" className="btn btn--ghost-light">More Insights →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
