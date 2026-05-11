export default function HotvetPage() {
  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <img src="/betonmast-logo.png" alt="Betonmast" style={betonmastLogo} />
        <div style={regionText}>Buskerud-Vestfold</div>
        <div style={badge}>NABOINFORMASJON</div>
      </header>

      <section style={heroStyle}>
        <img src="/hotvet.jpg" alt="Hotvet" style={heroImage} />
        <div style={heroOverlay} />

        <div style={heroContent}>
          <h1 style={heroTitle}>Hotvet</h1>
          <p style={heroText}>
            Hotvet er et boligprosjekt i Drammen. Dette området er under
            utvikling med fokus på gode bomiljøer og bærekraftige løsninger.
          </p>
          <p style={heroText}>
            Her finner du informasjon og kontakt for naboer og interessenter.
          </p>
        </div>
      </section>

      <section style={contentStyle}>
        <div style={cardStyle}>
          <div style={iconStyle}>⌂</div>

          <h2 style={cardTitle}>Om prosjektet</h2>

          <p style={cardText}>
            Hotvet er et nytt boligprosjekt i Drammen. Prosjektet vil bestå av
            moderne boliger med høy kvalitet, gode uteområder og et helhetlig
            fokus på bærekraft. Utbyggingen skjer med omtanke for nærmiljøet og
            i tett dialog med naboer.
          </p>
        </div>

        <div style={cardStyle}>
          <img
            src="/spg-logo.png"
            alt="Scandinavian Property Group"
            style={spgLogo}
          />

          <h2 style={cardTitle}>Interessert i bolig?</h2>

          <p style={cardText}>
            Se tilgjengelige boliger, priser og salgsinformasjon hos
            Scandinavian Property Group.
          </p>

          <a
            href="https://scandinavianpropertygroup.com/no/vare-prosjekter/hotvetalleen/til-salgs"
            target="_blank"
            style={spgButton}
          >
            Se boliger til salgs hos SPG →
          </a>
        </div>

        <h2 style={formHeading}>Send melding til Betonmast</h2>

        <div style={formCard}>
          <form style={formStyle}>
            <input placeholder="Navn" style={inputStyle} />
            <input placeholder="Telefonnummer" style={inputStyle} />
            <input placeholder="E-post" style={inputStyle} />

            <textarea
              placeholder="Skriv spørsmålet ditt her"
              rows={6}
              style={inputStyle}
            />

            <button type="submit" style={submitButton}>
              Send melding
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const mainStyle = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  minHeight: "100vh",
  color: "#111",
};

const headerStyle = {
  backgroundColor: "#050505",
  padding: "56px 40px 42px",
  textAlign: "center" as const,
};

const betonmastLogo = {
  height: "220px",
  objectFit: "contain" as const,
  marginBottom: "22px",
};

const regionText = {
  color: "#fff",
  fontSize: "34px",
  fontWeight: 700,
  marginBottom: "22px",
};

const badge = {
  display: "inline-block",
  backgroundColor: "#FFD500",
  color: "#111",
  fontWeight: 800,
  padding: "12px 26px",
  borderRadius: "999px",
  fontSize: "17px",
};

const heroStyle = {
  position: "relative" as const,
  height: "520px",
  overflow: "hidden",
};

const heroImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
};

const heroOverlay = {
  position: "absolute" as const,
  inset: 0,
  background: "rgba(0,0,0,0.45)",
};

const heroContent = {
  position: "absolute" as const,
  inset: 0,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center" as const,
  color: "#fff",
  padding: "0 28px",
};

const heroTitle = {
  fontSize: "86px",
  lineHeight: 1,
  marginBottom: "24px",
  fontWeight: 800,
};

const heroText = {
  fontSize: "24px",
  lineHeight: 1.5,
  maxWidth: "760px",
  margin: "0 auto 14px",
  fontWeight: 500,
};

const contentStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "70px 40px 90px",
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "28px",
  padding: "58px 48px",
  textAlign: "center" as const,
  marginBottom: "32px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
};

const iconStyle = {
  fontSize: "54px",
  marginBottom: "18px",
};

const cardTitle = {
  fontSize: "42px",
  marginBottom: "22px",
  fontWeight: 800,
};

const cardText = {
  fontSize: "20px",
  lineHeight: 1.8,
  color: "#444",
  maxWidth: "760px",
  margin: "0 auto 34px",
};

const spgLogo = {
  height: "95px",
  maxWidth: "360px",
  objectFit: "contain" as const,
  marginBottom: "32px",
};

const spgButton = {
  display: "inline-block",
  backgroundColor: "#0B3A75",
  color: "#fff",
  padding: "20px 38px",
  borderRadius: "14px",
  fontWeight: 800,
  textDecoration: "none",
  fontSize: "18px",
};

const formHeading = {
  fontSize: "42px",
  margin: "54px 0 26px",
  fontWeight: 800,
};

const formCard = {
  backgroundColor: "#fff",
  borderRadius: "28px",
  padding: "36px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
};

const inputStyle = {
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "17px",
};

const submitButton = {
  backgroundColor: "#111",
  color: "#fff",
  border: "none",
  padding: "20px",
  borderRadius: "10px",
  fontSize: "18px",
  fontWeight: 800,
  cursor: "pointer",
};
