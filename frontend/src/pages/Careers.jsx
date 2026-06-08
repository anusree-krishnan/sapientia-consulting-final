import { useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";
import PageHero from "../components/PageHero.jsx";

const VALUES = [
  {
    num: "I",
    title: "Senior from day one.",
    desc: "We hire for experience, not potential. Our model is built on senior practitioners doing the work — not managing a pyramid. Every person who joins Sapientia is expected to bring a perspective that challenges clients and colleagues.",
  },
  {
    num: "II",
    title: "Depth over breadth.",
    desc: "We are not a generalist firm that sends whoever is available. We build deep expertise in a small number of practices. If you want to be the most knowledgeable person in the room on your topic, this is the right environment.",
  },
  {
    num: "III",
    title: "Outcomes over outputs.",
    desc: "We do not optimise for billable hours or deliverable volume. We optimise for client outcomes — and we structure our engagement models, incentives, and culture to reflect that.",
  },
  {
    num: "IV",
    title: "Selective growth.",
    desc: "We grow carefully. We do not take on work that we cannot staff with the right people. We do not expand into practices where we cannot be genuinely excellent. If you want to build something that compounds in quality, this is how we do it.",
  },
];

const ROLES_OPEN = [];

export default function Careers() {
  const [appOpen, setAppOpen]           = useState(false);
  const [form, setForm]                 = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted]       = useState(false);

  const [valRef, valVisible]   = useReveal();
  const [roleRef, roleVisible] = useReveal();
  const [ctaRef, ctaVisible]   = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        label="Careers"
        title={<>Work that<br /><em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>compounds.</em></>}
        subtitle="We are a small firm that operates at an unusually high level. If that sounds like the kind of environment you want to build a career in, read on."
      />

      {/* Why Sapientia */}
      <section style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>The Environment</p>
              <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 400, color: "var(--ink)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                A firm where the best people do the best work.
              </h2>
              <p style={{ color: "var(--ink-4)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Sapientia was founded on a simple premise: the consulting industry's pyramid model — where
                senior partners sell and junior consultants deliver — produces mediocre results. We built
                an alternative. Partners stay close to client work. Analysts are not buffered from hard
                problems. Every engagement is staffed with people who have done this before.
              </p>
              <p style={{ color: "var(--ink-4)", lineHeight: 1.85 }}>
                The result is a firm where the work is genuinely demanding — and where the quality of
                your colleagues raises your own.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["Engagements per consultant per year", "3–5"],
                ["Average client tenure", "4.2 years"],
                ["Promotions from within", "100%"],
                ["Partner-to-consultant ratio", "1 : 4"],
              ].map(([label, val]) => (
                <div key={label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  padding: "1.25rem 0", borderBottom: "1px solid var(--cream-3)",
                }}>
                  <span style={{ color: "var(--ink-4)", fontSize: "0.88rem" }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-d)", fontSize: "1.5rem", fontWeight: 300, color: "var(--green)" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valRef} style={{ padding: "var(--pad) 0", background: "var(--cream-2)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3.5rem" }}>
            <p className="label">How We Work</p>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem" }}>
              What we stand for, operationally.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{
                padding: "2.5rem", background: "var(--white)", border: "1px solid var(--cream-3)",
                opacity: valVisible ? 1 : 0, transform: valVisible ? "none" : "translateY(16px)",
                transition: `opacity 0.7s ${i * 0.1}s var(--ease), transform 0.7s ${i * 0.1}s var(--ease)`,
              }}>
                <span style={{
                  fontFamily: "var(--font-d)", fontSize: "1.1rem", fontStyle: "italic",
                  color: "var(--gold)", display: "block", marginBottom: "1rem",
                }}>{v.num}</span>
                <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.25rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ color: "var(--ink-4)", fontSize: "0.88rem", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section ref={roleRef} style={{ padding: "var(--pad) 0", background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{ marginBottom: "3rem",
            opacity: roleVisible ? 1 : 0, transform: roleVisible ? "none" : "translateY(16px)",
            transition: "opacity 0.7s var(--ease), transform 0.7s var(--ease)",
          }}>
            <p className="label">Open Positions</p>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 400, color: "var(--ink)", marginTop: "0.75rem" }}>
              Current Opportunities
            </h2>
          </div>

          {ROLES_OPEN.length === 0 ? (
            <div style={{
              padding: "4rem 3rem", border: "1px solid var(--cream-3)",
              background: "var(--cream-2)", textAlign: "center",
              opacity: roleVisible ? 1 : 0, transform: roleVisible ? "none" : "translateY(16px)",
              transition: "opacity 0.7s 0.1s var(--ease), transform 0.7s 0.1s var(--ease)",
            }}>
              <p style={{ fontFamily: "var(--font-d)", fontSize: "1.5rem", fontStyle: "italic", color: "var(--ink-4)", marginBottom: "0.75rem" }}>
                No current openings.
              </p>
              <p style={{ color: "var(--ink-4)", fontSize: "0.92rem", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto 2rem" }}>
                We hire infrequently and deliberately. If you want to be considered for future opportunities,
                send us a speculative application — we read every one.
              </p>
              <button
                onClick={() => setAppOpen(true)}
                className="btn btn--ghost"
                style={{ fontSize: "0.72rem" }}
              >
                Submit Speculative Application
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {ROLES_OPEN.map((role, i) => (
                <div key={i} style={{ padding: "1.75rem 2rem", border: "1px solid var(--cream-3)", background: "var(--white)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.25rem", fontWeight: 400, color: "var(--ink)" }}>{role.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--ink-4)", marginTop: "0.25rem" }}>{role.location} · {role.type}</p>
                  </div>
                  <Link to="/contact" className="btn btn--ghost" style={{ fontSize: "0.7rem" }}>Apply →</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Speculative application form */}
      {appOpen && (
        <section style={{ padding: "var(--pad) 0", background: "var(--cream-2)", borderTop: "1px solid var(--cream-3)" }}>
          <div className="wrap" style={{ maxWidth: "640px" }}>
            <p className="label" style={{ marginBottom: "1rem" }}>Speculative Application</p>
            <h2 style={{ fontFamily: "var(--font-d)", fontSize: "2rem", fontWeight: 400, color: "var(--ink)", marginBottom: "2.5rem" }}>
              Tell us about yourself.
            </h2>

            {submitted ? (
              <div style={{ padding: "2.5rem", background: "var(--white)", border: "1px solid var(--cream-3)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-d)", fontSize: "1.5rem", color: "var(--green)", marginBottom: "0.5rem" }}>Received.</p>
                <p style={{ color: "var(--ink-4)", lineHeight: 1.8 }}>We'll be in touch if there's a relevant opportunity.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  { label: "Full name", key: "name", type: "text" },
                  { label: "Work email", key: "email", type: "email" },
                  { label: "Role of interest", key: "role", type: "text", placeholder: "e.g. Senior Cybersecurity Consultant" },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-4)", display: "block", marginBottom: "0.5rem" }}>{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="field"
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontFamily: "var(--font-u)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-4)", display: "block", marginBottom: "0.5rem" }}>
                    Why Sapientia? (2–3 sentences)
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="field"
                    rows={5}
                  />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button type="submit" className="btn btn--gold">Submit Application</button>
                  <button type="button" onClick={() => setAppOpen(false)} className="btn btn--ghost">Cancel</button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section ref={ctaRef} style={{ padding: "var(--pad) 0", background: "var(--green)", textAlign: "center" }}>
        <div className="wrap" style={{
          opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.8s var(--ease), transform 0.8s var(--ease)",
        }}>
          <p style={{ fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-pale)", marginBottom: "1.25rem" }}>
            Interested in the work?
          </p>
          <h2 style={{ fontFamily: "var(--font-d)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "#f0ebe0", marginBottom: "2rem", lineHeight: 1.15 }}>
            See what we're working on.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/insights" className="btn btn--gold">Read Our Insights</Link>
            <Link to="/case-studies" className="btn btn--ghost-light">View Our Work →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
