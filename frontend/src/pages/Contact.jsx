import { useState } from "react";
import { submitContactForm } from "../services/api.js";
import { useReveal } from "../hooks/useReveal.js";

const INITIAL = { name: "", email: "", company: "", message: "" };

const INFO = [
  { symbol: "→", label: "Address",  value: "100 King Street West, Suite 5600\nToronto, ON  M5X 1E4" },
  { symbol: "→", label: "Email",    value: "hello@sapientia.com" },
  { symbol: "→", label: "Phone",    value: "+1 (416) 555-0100" },
  { symbol: "→", label: "Hours",    value: "Monday – Friday\n9:00 am – 6:00 pm EST" },
];

export default function Contact() {
  const [form, setForm]       = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle");
  const [serverMsg, setMsg]   = useState("");
  const [heroRef, heroV]      = useReveal(0.05);
  const [formRef, formV]      = useReveal();

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Required";
    if (!form.email.trim())   e.email   = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 10)     e.message = "At least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    setErrors(p => ({ ...p, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await submitContactForm(form);
      setMsg(res.data.message || "Message sent!");
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setMsg(err.response?.data?.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div>
      {/* ── Page header ──────────────────────────────── */}
      <section style={{
        padding: "calc(var(--nav-h) + 5rem) clamp(1.25rem,5vw,3rem) 5rem",
        borderBottom: "1px solid var(--ink-3)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: "-0.05em", bottom: "-0.2em",
          fontFamily: "var(--font-d)",
          fontSize: "clamp(10rem, 28vw, 26rem)",
          fontWeight: 300,
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,162,85,0.05)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}>C</div>

        <div ref={heroRef} className="wrap" style={{ position: "relative" }}>
          <p className={`label reveal ${heroV ? "visible" : ""}`} style={{ marginBottom: "1rem" }}>
            Get in Touch
          </p>
          <h1 className={`reveal reveal-delay-1 ${heroV ? "visible" : ""}`} style={{
            fontFamily: "var(--font-d)",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            maxWidth: "640px",
          }}>
            Every great engagement<br />
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>begins with a conversation.</span>
          </h1>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────── */}
      <section ref={formRef} style={{ padding: "var(--pad) 0" }}>
        <div className="wrap" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "clamp(3rem,8vw,6rem)",
          alignItems: "start",
        }}>

          {/* ── Left: Info ─────────────────────────── */}
          <div>
            <p className={`label reveal ${formV ? "visible" : ""}`} style={{ marginBottom: "2rem" }}>
              Contact Information
            </p>
            {INFO.map((item, i) => (
              <div key={item.label} className={`reveal reveal-delay-${i + 1}`} style={{
                opacity: formV ? undefined : 0,
                transform: formV ? undefined : "translateY(28px)",
                display: "grid",
                gridTemplateColumns: "16px 1fr",
                gap: "1rem",
                marginBottom: "2rem",
                alignItems: "start",
              }}>
                <span style={{ color: "var(--gold)", fontSize: "0.85rem", paddingTop: "2px" }}>{item.symbol}</span>
                <div>
                  <p style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ink-4)",
                    marginBottom: "0.35rem",
                  }}>{item.label}</p>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "var(--cream-2)",
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                  }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Decorative rule */}
            <div style={{
              width: "48px",
              height: "1px",
              background: "linear-gradient(90deg, var(--gold), transparent)",
              margin: "2.5rem 0",
            }} />

            <p style={{
              fontFamily: "var(--font-d)",
              fontSize: "1rem",
              fontStyle: "italic",
              color: "var(--cream-3)",
              lineHeight: 1.8,
            }}>
              We respond to all enquiries within one business day.
            </p>
          </div>

          {/* ── Right: Form ────────────────────────── */}
          <div className={`reveal reveal-delay-2 ${formV ? "visible" : ""}`} style={{
            background: "var(--ink-1)",
            border: "1px solid var(--ink-3)",
            padding: "2.5rem",
            position: "relative",
          }}>
            {/* Corner accents */}
            {[["top:0;left:0","borderTop","borderLeft"],["top:0;right:0","borderTop","borderRight"],["bottom:0;left:0","borderBottom","borderLeft"],["bottom:0;right:0","borderBottom","borderRight"]].map((c, i) => (
              <div key={i} style={{
                position: "absolute",
                ...(Object.fromEntries(c[0].split(";").map(s => s.split(":")))),
                width: "20px", height: "20px",
                [c[1]]: "1px solid var(--gold-dim)",
                [c[2]]: "1px solid var(--gold-dim)",
              }} />
            ))}

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{
                  width: "56px", height: "56px",
                  border: "1px solid var(--gold)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "1.25rem",
                  color: "var(--gold)",
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontFamily: "var(--font-d)",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: "var(--cream)",
                  marginBottom: "0.75rem",
                }}>Message Received</h3>
                <p style={{ color: "var(--cream-3)", marginBottom: "2rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  {serverMsg}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn--ghost"
                  style={{ fontSize: "0.72rem" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p style={{
                  fontFamily: "var(--font-d)",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  color: "var(--cream)",
                  marginBottom: "2rem",
                  letterSpacing: "0.02em",
                }}>
                  Send us a message
                </p>

                {/* Name + Company row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.75rem" }}>
                  <FieldGroup label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Jane Smith" />
                  <FieldGroup label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp (optional)" />
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <FieldGroup label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@company.com" />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <FieldGroup label="Message" name="message" as="textarea" value={form.message} onChange={handleChange} error={errors.message} placeholder="Tell us about your project or enquiry…" />
                </div>

                {status === "error" && (
                  <p style={{
                    fontSize: "0.8rem",
                    color: "#c97272",
                    marginBottom: "1.25rem",
                    paddingLeft: "0.75rem",
                    borderLeft: "2px solid #c97272",
                  }}>{serverMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn--gold"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: status === "loading" ? 0.6 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span style={{
                        width: "14px", height: "14px",
                        border: "2px solid var(--ink)",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                        display: "inline-block",
                      }} />
                      Sending…
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <style>{`
          @media(max-width:700px){
            section div[style*="1fr 1.4fr"]{grid-template-columns:1fr!important;}
            form div[style*="1fr 1fr"]{grid-template-columns:1fr!important;}
          }
        `}</style>
      </section>
    </div>
  );
}

function FieldGroup({ label, name, value, onChange, error, placeholder, type = "text", as = "input" }) {
  const Tag = as;
  return (
    <div>
      <label style={{
        display: "block",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: error ? "#c97272" : "var(--ink-4)",
        marginBottom: "0.5rem",
        transition: "color 0.3s",
      }}>
        {label}
      </label>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`field${error ? " field--error" : ""}`}
      />
      {error && (
        <p style={{ fontSize: "0.72rem", color: "#c97272", marginTop: "0.3rem", letterSpacing: "0.05em" }}>
          {error}
        </p>
      )}
    </div>
  );
}
