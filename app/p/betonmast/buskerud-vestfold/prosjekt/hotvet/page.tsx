export default function HotvetPage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh", color: "#111" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "90px 40px 50px" }}>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          OmrådeLab / Betonmast Buskerud-Vestfold / Hotvet
        </p>

        <h1 style={{ fontSize: "72px", lineHeight: "1", marginBottom: "25px", maxWidth: "850px" }}>
          Hotvet
        </h1>

        <p style={{ fontSize: "24px", lineHeight: "1.6", maxWidth: "720px", color: "#444", marginBottom: "45px" }}>
          Informasjon og enkel kontakt for naboer, interessenter og boligkjøpere rundt prosjektet Hotvet.
        </p>

        <div
          style={{
            backgroundColor: "#ddd",
            height: "360px",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            marginBottom: "50px",
          }}
        >
          Prosjektbilde kommer her
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="#kontakt" style={buttonPrimary}>Kontakt prosjektet</a>
          <a href="#status" style={buttonSecondary}>Se status</a>
          <a
            href="https://scandinavianpropertygroup.com/no/vare-prosjekter/hotvetalleen/til-salgs"
            target="_blank"
            style={buttonSecondary}
          >
            Se boliger til salgs
          </a>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "70px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "35px" }}>Hva gjelder henvendelsen?</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
            {["Jeg har et spørsmål", "Jeg vil melde fra om noe", "Jeg er interessert i bolig", "Jeg vil motta varslinger"].map((item) => (
              <a key={item} href="#kontakt" style={quickCard}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="status" style={{ padding: "70px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>Prosjektstatus</h2>

          <div style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "24px", lineHeight: "1.8" }}>
            <p><strong>Status:</strong> Prosjektinformasjon kommer</p>
            <p><strong>Område:</strong> Hotvet / Drammen</p>
            <p><strong>Entreprenør:</strong> Betonmast Buskerud-Vestfold</p>
            <p><strong>Boligsalg:</strong> Scandinavian Property Group</p>
          </div>
        </div>
      </section>

      <section id="kontakt" style={{ padding: "0 40px 120px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "42px", marginBottom: "30px" }}>Send melding</h2>

          <div style={{ backgroundColor: "#fff", padding: "45px", borderRadius: "24px" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <input placeholder="Navn" style={inputStyle} />
              <input placeholder="Telefonnummer" style={inputStyle} />
              <input placeholder="E-post" style={inputStyle} />

              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Velg type henvendelse</option>
                <option>Spørsmål om prosjektet</option>
                <option>Støy, støv eller trafikk</option>
                <option>Farlig situasjon</option>
                <option>Boliginteresse</option>
                <option>Annet</option>
              </select>

              <textarea placeholder="Skriv meldingen din her" rows={6} style={inputStyle} />

              <button type="submit" style={submitButton}>
                Send melding
              </button>

              <p style={{ color: "#777", fontSize: "14px" }}>
                Innsendingen går foreløpig ikke automatisk videre. Neste steg er å koble skjemaet til e-post.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const buttonPrimary = {
  backgroundColor: "#111",
  color: "#fff",
  padding: "18px 26px",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "bold",
};

const buttonSecondary = {
  border: "1px solid #ccc",
  color: "#111",
  padding: "18px 26px",
  textDecoration: "none",
  borderRadius: "10px",
  fontWeight: "bold",
};

const quickCard = {
  backgroundColor: "#f5f5f5",
  color: "#111",
  padding: "30px",
  borderRadius: "20px",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
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
  fontWeight: "bold",
  cursor: "pointer",
};
