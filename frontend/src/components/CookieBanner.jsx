import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sc-cookie-consent");
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => { localStorage.setItem("sc-cookie-consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("sc-cookie-consent", "declined"); setVisible(false); };

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 9000;
          background: rgba(26,46,26,0.97);
          backdrop-filter: blur(8px);
          border-top: 1px solid var(--ink-3);
          padding: 1.25rem clamp(1.25rem,5vw,3rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
          transform: ${visible ? "translateY(0)" : "translateY(100%)"};
          transition: transform 0.5s var(--ease);
        }
      `}</style>
      <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
        <p style={{
          color: "rgba(247,243,235,0.8)", fontSize: "0.85rem",
          lineHeight: 1.6, maxWidth: "640px",
        }}>
          We use essential cookies to ensure this site functions properly, and optional analytics
          cookies to understand how visitors engage with our content. See our{" "}
          <span style={{ color: "var(--gold-pale)", textDecoration: "underline", cursor: "pointer" }}>
            Privacy Policy
          </span>.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              fontFamily: "var(--font-u)", fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "0.6rem 1.4rem", border: "1px solid var(--ink-3)",
              background: "transparent", color: "var(--cream-3)", cursor: "pointer",
              transition: "border-color 0.3s, color 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--cream-3)"; e.currentTarget.style.color = "var(--cream)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--ink-3)"; e.currentTarget.style.color = "var(--cream-3)"; }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="btn btn--gold"
            style={{ fontSize: "0.7rem", padding: "0.6rem 1.4rem" }}
          >
            Accept All
          </button>
        </div>
      </div>
    </>
  );
}
