import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal.js";

/* ───────────────────────── DATA ───────────────────────── */

const TEAM = [
  {
    initials: "EV",
    name: "Eleanor Voss",
    role: "Managing Partner",
    bio: "20+ years advising C-suites across Fortune 500 companies. Former McKinsey principal specializing in corporate restructuring and strategy.",
  },
  {
    initials: "MC",
    name: "Marcus Chen",
    role: "Head of Digital",
    bio: "Ex-CTO turned strategist. Led enterprise-scale digital transformation across fintech, healthcare, and retail.",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    role: "Operations Lead",
    bio: "Lean Six Sigma Black Belt. Expert in logistics optimization, manufacturing systems, and process re-engineering.",
  },
  {
    initials: "JB",
    name: "James Burrell",
    role: "Innovation Director",
    bio: "Serial entrepreneur bridging emerging technologies with market strategy and venture advisory.",
  },
];

const VALUES = [
  {
    symbol: "I",
    title: "Integrity",
    desc: "We provide counsel that is independent, transparent, and grounded in truth — even when it is difficult.",
  },
  {
    symbol: "II",
    title: "Excellence",
    desc: "Every engagement reflects disciplined thinking, precision, and uncompromising quality.",
  },
  {
    symbol: "III",
    title: "Partnership",
    desc: "We operate as an extension of your leadership team, not external advisors.",
  },
  {
    symbol: "IV",
    title: "Wisdom",
    desc: "We combine analytical rigor with lived experience to deliver balanced decisions.",
  },
];

/* ───────────────────────── COMPONENTS ───────────────────────── */

function TeamCard({ member, index }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index + 1}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        background: "var(--ink-1)",
        border: "1px solid var(--ink-3)",
        padding: "2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40px",
          height: "40px",
          borderTop: "1px solid var(--gold-dim)",
          borderRight: "1px solid var(--gold-dim)",
        }}
      />

      <div
        style={{
          width: "52px",
          height: "52px",
          border: "1px solid var(--gold-dim)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-d)",
          color: "var(--gold)",
          marginBottom: "1.2rem",
        }}
      >
        {member.initials}
      </div>

      <h3 style={{ fontFamily: "var(--font-d)", fontSize: "1.3rem" }}>
        {member.name}
      </h3>

      <p
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "1rem",
        }}
      >
        {member.role}
      </p>

      <p style={{ color: "var(--cream-3)", fontSize: "0.875rem" }}>
        {member.bio}
      </p>
    </div>
  );
}

/* ✅ FIXED VALUE CARD (IMPORTANT FIX) */
function ValueCard({ v, i }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${i + 1}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        padding: "2rem",
        border: "1px solid var(--ink-3)",
        background: "var(--ink)",
      }}
    >
      <span
        style={{
          color: "var(--gold)",
          fontStyle: "italic",
          display: "block",
          marginBottom: "0.75rem",
        }}
      >
        {v.symbol}
      </span>

      <h3 style={{ fontFamily: "var(--font-d)", marginBottom: "0.5rem" }}>
        {v.title}
      </h3>

      <p style={{ color: "var(--cream-3)", fontSize: "0.875rem" }}>
        {v.desc}
      </p>
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function About() {
  const [heroRef, heroVisible] = useReveal();
  const [missionRef, missionV] = useReveal();
  const [valuesRef, valuesV] = useReveal();
  const [teamRef, teamV] = useReveal();

  return (
    <div>

      {/* ───────── HERO ───────── */}
      <section
        style={{
          padding: "calc(var(--nav-h) + 5rem) clamp(1.25rem,5vw,3rem) 5rem",
          borderBottom: "1px solid var(--ink-3)",
        }}
      >
        <div ref={heroRef} className="wrap">

          <p className={`label reveal ${heroVisible ? "visible" : ""}`}>
            Who We Are
          </p>

          <h1
            className={`reveal reveal-delay-1 ${heroVisible ? "visible" : ""}`}
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 1,
              marginTop: "1rem",
            }}
          >
            Wisdom is not given.<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              It is earned.
            </span>
          </h1>

        </div>
      </section>

      {/* ───────── MISSION ───────── */}
      <section ref={missionRef} style={{ padding: "var(--pad) 0" }}>
        <div className="wrap">

          <p className={`label reveal ${missionV ? "visible" : ""}`}>
            Our Mission
          </p>

          <h2
            className={`reveal reveal-delay-1 ${missionV ? "visible" : ""}`}
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginTop: "1rem",
            }}
          >
            To turn complexity into{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              competitive advantage
            </span>
          </h2>

          <p
            className={`reveal reveal-delay-2 ${missionV ? "visible" : ""}`}
            style={{
              marginTop: "1.5rem",
              color: "var(--cream-2)",
              maxWidth: "750px",
              lineHeight: 1.8,
            }}
          >
            We help organisations decode complexity, align strategy with execution,
            and build systems that scale sustainably in volatile markets.
          </p>

        </div>
      </section>

      {/* ───────── VALUES (FIXED) ───────── */}
      <section
        ref={valuesRef}
        style={{
          padding: "var(--pad) 0",
          background: "var(--ink-1)",
        }}
      >
        <div className="wrap">

          <p className={`label reveal ${valuesV ? "visible" : ""}`}>
            What We Stand For
          </p>

          <h2
            className={`reveal reveal-delay-1 ${valuesV ? "visible" : ""}`}
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginTop: "1rem",
            }}
          >
            Our Values
          </h2>

          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} v={v} i={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ───────── TEAM ───────── */}
      <section ref={teamRef} style={{ padding: "var(--pad) 0" }}>
        <div className="wrap">

          <p className={`label reveal ${teamV ? "visible" : ""}`}>
            The People
          </p>

          <h2
            className={`reveal reveal-delay-1 ${teamV ? "visible" : ""}`}
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginTop: "1rem",
            }}
          >
            Leadership Team
          </h2>

          <div
            style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TEAM.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section
        style={{
          padding: "var(--pad) 0",
          textAlign: "center",
          background: "var(--ink-1)",
        }}
      >
        <div className="wrap">
          <h2 style={{ fontFamily: "var(--font-d)" }}>
            Ready to think differently?
          </h2>

          <Link to="/contact" className="btn btn--gold">
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
}