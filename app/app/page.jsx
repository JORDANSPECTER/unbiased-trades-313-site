const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "24px",
};

const buttonPrimary = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "16px",
  background: "#f5c542",
  color: "#000",
  textDecoration: "none",
  fontWeight: 700,
  marginRight: "12px",
};

const buttonSecondary = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.12)",
  fontWeight: 700,
};

export default function Page()  {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          padding: "80px 24px 60px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 35%), radial-gradient(circle at bottom, rgba(245,197,66,0.14), transparent 30%), #050505",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gap: 40,
            gridTemplateColumns: "1.2fr 0.8fr",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(245,197,66,0.3)",
                background: "rgba(245,197,66,0.1)",
                color: "#f5d66b",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              Trade UnBiased.
            </div>

            <h1 style={{ fontSize: 56, lineHeight: 1.08 }}>
              Real-time market structure.{" "}
              <span style={{ color: "#f5d66b" }}>Not signal spam.</span>
            </h1>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.78)",
                marginTop: 20,
              }}
            >
              I don’t trade charts. I trade what’s moving them.
            </p>

            <div style={{ marginTop: 30 }}>
              <a href="#downloads" style={buttonPrimary}>
                Get Playbooks
              </a>
              <a href="#discord" style={buttonSecondary}>
                Join Discord
              </a>
            </div>
          </div>

          {/* RIGHT (ALERT PREVIEW) */}
          <div style={cardStyle}>
            <h3 style={{ fontSize: 22 }}>🚨 SPY | Pressure Alert</h3>

            <div style={{ marginTop: 15 }}>
              <p>🛢️ Oil: 79.12 (+0.41%)</p>
              <p>📉 SPY: 678.44 (-0.23%)</p>
              <p>📍 VWAP: 679.10</p>
            </div>

            <div style={{ ...cardStyle, marginTop: 20 }}>
              <strong>Plan Language</strong>
              <p style={{ marginTop: 10 }}>
                Below VWAP with oil pressure aligned = bearish continuation bias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section id="downloads" style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36 }}>Playbooks & Downloads</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginTop: 30,
            }}
          >
            {["Daily Plan", "Oil + VWAP", "Premarket Guide"].map((item) => (
              <div key={item} style={cardStyle}>
                <h3>{item}</h3>
                <p style={{ marginTop: 10 }}>
                  Learn the structure behind real trades.
                </p>

                <div style={{ marginTop: 20 }}>
                  <a href="#" style={buttonSecondary}>
                    View
                  </a>
                  <a href="#" style={buttonPrimary}>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCORD */}
      <section id="discord" style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36 }}>Join the System</h2>

          <p style={{ marginTop: 20 }}>
            Real-time alerts, daily plans, and market breakdowns inside Discord.
          </p>

          <a
            href="https://discord.gg/yuP7xVaV4"
            style={{ ...buttonPrimary, marginTop: 20 }}
          >
            Join Discord
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: 20,
          textAlign: "center",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        UnBiased Trades | @unbiasedtrades313
      </footer>
    </main>
  );
}
