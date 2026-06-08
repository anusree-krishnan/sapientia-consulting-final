import { useState, useEffect } from "react";

export default function PageHero({ label, title, subtitle, children }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      background: "var(--green)",
      padding: "calc(var(--nav-h) + 5rem) clamp(1.25rem,5vw,3rem) 5rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 160px)",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <p style={{
          fontFamily: "var(--font-u)", fontSize: "0.68rem", fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--gold-pale)", marginBottom: "1.25rem",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)",
          transition: "opacity 0.6s var(--ease), transform 0.6s var(--ease)",
        }}>{label}</p>

        <h1 style={{
          fontFamily: "var(--font-d)",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 300, color: "#f0ebe0", lineHeight: 1.05,
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)",
          transition: "opacity 0.8s 0.1s var(--ease), transform 0.8s 0.1s var(--ease)",
        }}>{title}</h1>

        {subtitle && (
          <p style={{
            maxWidth: "540px", color: "rgba(240,235,224,0.78)",
            lineHeight: 1.85, fontSize: "1rem",
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)",
            transition: "opacity 0.8s 0.2s var(--ease), transform 0.8s 0.2s var(--ease)",
          }}>{subtitle}</p>
        )}

        {children && (
          <div style={{
            marginTop: "2rem",
            opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)",
            transition: "opacity 0.8s 0.3s var(--ease), transform 0.8s 0.3s var(--ease)",
          }}>{children}</div>
        )}
      </div>

      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
        background: "linear-gradient(to bottom, transparent, var(--cream))",
      }} />
    </section>
  );
}
