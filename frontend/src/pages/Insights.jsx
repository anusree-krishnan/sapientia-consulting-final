import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import PageHero from "../components/PageHero.jsx";

const ARTICLES = [
  {
    category: "Cybersecurity",
    date: "May 2025",
    title: "Zero Trust Architecture in the Age of Hybrid Work",
    excerpt: "Why perimeter-based security is no longer sufficient — and how enterprises are rebuilding trust from the ground up.",
    readTime: "8 min read",
    to: "/insights/zero-trust",
    featured: true,
  },
  {
    category: "Cloud Transformation",
    date: "April 2025",
    title: "The Cloud Migration Playbook",
    excerpt: "Lessons from 50+ enterprise cloud transitions — what separates migrations that deliver from the ones that stall.",
    readTime: "10 min read",
    to: "/insights/cloud-migration",
    featured: false,
  },
  {
    category: "AI & Automation",
    date: "March 2025",
    title: "Governing AI: A Practical Framework for Enterprise",
    excerpt: "Most enterprises are deploying AI faster than they are governing it. This is how to close that gap before regulators do.",
    readTime: "9 min read",
    to: "/insights/ai-governance",
    featured: false,
  },
];

export default function Insights() {
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [artRef, artVisible]   = useReveal();
  const [newsRef, newsVisible] = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const featured = ARTICLES.find(a => a.featured);
  const rest     = ARTICLES.filter(a => !a.featured);

  return (
    <div>
      <PageHero
        label="Insights"
        title={<>Thinking on the<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>hardest problems.</em></>}
        subtitle="Research, frameworks, and perspectives from our senior practitioners — on technology, strategy, and the decisions that shape organisations."
      />

      {/* Featured article */}
      <section style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          <p className="label" style={{ marginBottom: "2rem" }}>Featured</p>

          <Link to={featured.to} style={{ display: "block", textDecoration: "none" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "4rem", alignItems: "center",
              padding: "3rem", background: "var(--cream-2)",
              border: "1px solid var(--cream-3)",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-dim)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--cream-3)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "var(--font-u)", fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    padding: "0.3rem 0.75rem", background: "var(--green-light)", color: "var(--green)",
                  }}>{featured.category}</span>
                  <span style={{ fontFamily: "var(--font-u)", fontSize: "0.7rem", color: "var(--ink-4)" }}>{featured.date}</span>
                </div>

                <h2 style={{
                  fontFamily: "var(--font-d)", fontSize: "clamp(1.8rem,3vw,2.6rem)",
                  fontWeight: 400, color: "var(--ink)", lineHeight: 1.15, marginBottom: "1rem",
                }}>{featured.title}</h2>

                <p style={{ color: "var(--ink-4)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{featured.excerpt}</p>

                <span style={{
                  fontFamily: "var(--font-u)", fontSize: "0.7rem", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--green)",
                }}>Read Article → <span style={{ color: "var(--ink-4)", fontWeight: 400 }}>({featured.readTime})</span></span>
              </div>

              <div style={{
                background: "var(--green)", height: "280px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <p style={{
                  fontFamily: "var(--font-d)", fontSize: "clamp(1.2rem,2vw,1.6rem)",
                  fontStyle: "italic", color: "rgba(240,235,224,0.6)",
                  textAlign: "center", padding: "2rem", lineHeight: 1.5,
                }}>
                  "The perimeter is gone.<br />The question is what replaces it."
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section ref={artRef} style={{ padding: "0 0 var(--pad)", background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {rest.map((a, i) => (
              <Link key={i} to={a.to} style={{ display: "block", textDecoration: "none" }}>
                <div style={{
                  padding: "2.5rem", background: "var(--white)",
                  border: "1px solid var(--cream-3)", height: "100%",
                  opacity: artVisible ? 1 : 0, transform: artVisible ? "none" : "translateY(16px)",
                  transition: `opacity 0.7s ${i * 0.15}s var(--ease), transform 0.7s ${i * 0.15}s var(--ease), border-color 0.3s, box-shadow 0.3s`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold-dim)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--cream-3)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "center" }}>
                    <span style={{
                      fontFamily: "var(--font-u)", fontSize: "0.6rem", fontWeight: 700,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      padding: "0.3rem 0.75rem", background: "var(--green-light)", color: "var(--green)",
                    }}>{a.category}</span>
                    <span style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", color: "var(--ink-4)" }}>{a.date}</span>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-d)", fontSize: "1.5rem",
                    fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: "0.75rem",
                  }}>{a.title}</h3>

                  <p style={{ color: "var(--ink-4)", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{a.excerpt}</p>

                  <span style={{
                    fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green)",
                  }}>Read → <span style={{ color: "var(--ink-4)", fontWeight: 400 }}>({a.readTime})</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section ref={newsRef} style={{
        padding: "5rem 0", background: "var(--cream-2)",
        borderTop: "1px solid var(--cream-3)", borderBottom: "1px solid var(--cream-3)",
      }}>
        <div className="wrap" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center",
          opacity: newsVisible ? 1 : 0, transform: newsVisible ? "none" : "translateY(16px)",
          transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
        }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>Newsletter</p>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.2, marginBottom: "0.75rem" }}>
              Strategic thinking, quarterly.
            </h2>
            <p style={{ color: "var(--ink-4)", lineHeight: 1.8, fontSize: "0.92rem" }}>
              No noise. One substantive piece of analysis every quarter, sent to technology leaders across 28 countries.
            </p>
          </div>

          <div>
            {submitted ? (
              <div style={{ padding: "2rem", background: "var(--white)", border: "1px solid var(--cream-3)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-d)", fontSize: "1.3rem", color: "var(--green)", marginBottom: "0.5rem" }}>Thank you.</p>
                <p style={{ color: "var(--ink-4)", fontSize: "0.88rem" }}>You'll receive our next edition when it's published.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0", flexDirection: "column" }}>
                <label style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-4)", marginBottom: "0.75rem" }}>
                  Work email
                </label>
                <div style={{ display: "flex", gap: "0" }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    style={{
                      flex: 1, fontFamily: "var(--font-u)", fontSize: "0.9rem",
                      padding: "0.85rem 1rem",
                      border: "1px solid var(--cream-3)", borderRight: "none",
                      background: "var(--white)", color: "var(--ink)",
                      outline: "none", transition: "border-color 0.3s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--gold)"}
                    onBlur={e => e.target.style.borderColor = "var(--cream-3)"}
                  />
                  <button type="submit" className="btn btn--gold" style={{ padding: "0.85rem 1.75rem", fontSize: "0.7rem" }}>
                    Subscribe
                  </button>
                </div>
                <p style={{ fontSize: "0.72rem", color: "var(--ink-4)", marginTop: "0.75rem" }}>
                  Quarterly cadence. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
