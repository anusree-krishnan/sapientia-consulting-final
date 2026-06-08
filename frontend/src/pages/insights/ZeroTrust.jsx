import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal.js";
import PageHero from "../../components/PageHero.jsx";

export default function ZeroTrust() {
  const [bodyRef, bodyVisible] = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  return (
    <div>
      <PageHero
        label="Insight — Cybersecurity"
        title={<>Zero Trust Architecture<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>in the Age of Hybrid Work</em></>}
        subtitle="Why perimeter-based security is no longer sufficient — and how enterprises are rebuilding trust from the ground up."
      />

      {/* Meta */}
      <div style={{ padding: "2rem 0", background: "var(--cream)", borderBottom: "1px solid var(--cream-3)" }}>
        <div className="wrap" style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
          {[
            ["Published", "May 2025"],
            ["Reading time", "8 minutes"],
            ["Practice", "Cybersecurity & Risk Advisory"],
            ["Author", "Sapientia Security Practice"],
          ].map(([k, v]) => (
            <div key={k}>
              <p style={{
                fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)",
                marginBottom: "0.25rem",
              }}>{k}</p>
              <p style={{ fontSize: "0.88rem", color: "var(--ink-4)" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <section ref={bodyRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr min(680px, 100%)", gap: "0", justifyContent: "center" }}>
          <div style={{
            maxWidth: "720px", margin: "0 auto",
            opacity: bodyVisible ? 1 : 0, transform: bodyVisible ? "none" : "translateY(16px)",
            transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
          }}>

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              The perimeter is gone. Now what?
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              For decades, enterprise security operated on a simple assumption: everything inside the network
              is trusted; everything outside is not. Firewalls, VPNs, and DMZs were built on this model.
              Then hybrid work, cloud adoption, and supply-chain integrations quietly dismantled it.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Today, the average enterprise has workloads running in three cloud providers, employees connecting
              from home networks, contractors accessing production systems, and third-party APIs embedded in
              critical business processes. The "network perimeter" is not just porous — it is conceptually obsolete.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Zero Trust Architecture (ZTA) is the answer the industry has converged on. But the term is used so
              loosely that it has nearly become meaningless. This piece cuts through the noise.
            </p>

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              Three principles, not one product
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Zero Trust is a philosophy built on three core principles. Every genuine ZTA implementation
              must honour all three — not one or two.
            </p>

            {[
              {
                num: "01",
                title: "Verify Explicitly",
                body: "Every access request — from every user, device, application, and network location — must be authenticated and authorised. Not once at login, but continuously. Identity becomes the new perimeter. This means strong MFA, device health attestation, and dynamic policy evaluation on every request.",
              },
              {
                num: "02",
                title: "Use Least Privilege",
                body: "Grant only the permissions required to complete the task at hand, for the minimum necessary time. This limits lateral movement if an account is compromised. Just-in-time access, role minimisation, and privileged access workstations are the practical tools here.",
              },
              {
                num: "03",
                title: "Assume Breach",
                body: "Design as if attackers are already inside. Segment networks at the workload level, encrypt all internal traffic, maintain comprehensive audit logs, and invest in detection and response capabilities. The goal shifts from preventing all intrusions to minimising blast radius when they occur.",
              },
            ].map((p) => (
              <div key={p.num} style={{
                display: "grid", gridTemplateColumns: "48px 1fr",
                gap: "1.5rem", marginBottom: "2rem",
                paddingBottom: "2rem", borderBottom: "1px solid var(--cream-3)",
              }}>
                <span style={{
                  fontFamily: "var(--font-d)", fontSize: "1.5rem", fontWeight: 300,
                  color: "var(--gold)", lineHeight: 1,
                }}>{p.num}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.25rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ color: "var(--ink-3)", lineHeight: 1.85, fontSize: "0.92rem" }}>{p.body}</p>
                </div>
              </div>
            ))}

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginTop: "1rem", marginBottom: "1.25rem" }}>
              Where most implementations fail
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Zero Trust is not a product you install. It is a transformation of how your organisation thinks
              about trust and access. The most common failure is treating it as a technology project rather
              than a security operating model change.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              The second failure is trying to boil the ocean. Organisations that attempt a "full ZTA deployment"
              in one programme almost universally stall. The correct approach is to identify your highest-risk
              trust assumptions, remediate them in order of exposure, and build momentum through measurable wins.
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Finally, identity governance is the foundation everything else depends on. Organisations with
              poor IAM hygiene — orphaned accounts, over-permissioned service accounts, inconsistent MFA
              enforcement — cannot build Zero Trust on that foundation. Address identity first.
            </p>

            <div style={{ width: "56px", height: "1px", background: "var(--gold)", marginBottom: "2.5rem" }} />

            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "1.85rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1.25rem" }}>
              A practical starting point
            </h2>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              For organisations at the beginning of this journey, we recommend a focused 8-week assessment:
              map all privileged access paths, audit device health enforcement, review identity governance,
              and produce a prioritised roadmap. This costs a fraction of a full transformation programme
              and gives you a defensible, actionable answer to the question "where are we most exposed?"
            </p>
            <p style={{ color: "var(--ink-3)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              The organisations that navigate this transition best are not the ones with the largest security
              budgets. They are the ones with the clearest picture of where trust is misplaced — and the
              discipline to fix the highest-risk gaps first.
            </p>

            {/* Related articles */}
            <div style={{ borderTop: "1px solid var(--cream-3)", paddingTop: "2.5rem", marginTop: "1rem" }}>
              <p className="label" style={{ marginBottom: "1.25rem" }}>Related Insights</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  ["Cloud Migration Playbook", "/insights/cloud-migration"],
                  ["Governing AI: A Framework for Enterprise", "/insights/ai-governance"],
                ].map(([title, to]) => (
                  <Link key={to} to={to} style={{
                    fontFamily: "var(--font-d)", fontSize: "1.1rem", color: "var(--green)",
                    display: "flex", alignItems: "center", gap: "0.5rem",
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

      {/* CTA */}
      <section ref={ctaRef} style={{ padding: "var(--pad) 0", background: "var(--green)", textAlign: "center" }}>
        <div className="wrap" style={{
          opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
        }}>
          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-pale)", marginBottom: "1.25rem" }}>
            Ready to assess your posture?
          </p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "2rem", lineHeight: 1.15 }}>
            Talk to our security practice.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn--gold">Request a Security Review</Link>
            <Link to="/insights" className="btn btn--ghost-light">More Insights →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
