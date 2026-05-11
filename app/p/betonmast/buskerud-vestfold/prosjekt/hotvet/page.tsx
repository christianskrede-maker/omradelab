export default function HotvetPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      <header
        style={{
          backgroundColor: "#111",
          padding: "28px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <img
            src="/betonmast-logo.png"
            alt="Betonmast"
            style={{
              height: "52px",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Buskerud-Vestfold
          </div>
        </div>
      </header>

      <section
        style={{
          position: "relative",
          height: "520px",
          overflow: "hidden",
        }}
      >
        <img
          src="/hotvet.jpg"
          alt="Hotvet"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.65))",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1100px",
            padding: "0 40px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#FFD500",
              color: "#111",
              fontWeight: 700,
              padding: "8px 14px",
              borderRadius: "999px",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            Naboinformasjon
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1,
              marginBottom: "20px",
              maxWidth: "760px",
            }}
          >
            Hotvet
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "720px",
              opacity: 0.95,
            }}
          >
            Informasjon og kontakt for naboer og interessenter rundt
            boligprosjektet Hotvet i Drammen.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "50px",
            marginBottom: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Om prosjektet
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              color: "#444",
              maxWidth: "850px",
              marginBottom: "36px",
            }}
          >
            Hotvet er et boligprosjekt i Drammen. Denne siden er laget for at
            naboer og interessenter enkelt skal kunne finne informasjon,
            kontakte Betonmast Buskerud-Vestfold og gå videre til
            prosjektets salgsside.
          </p>

          <a
            href="#kontakt"
            style={{
              display: "inline-block",
              backgroundColor: "#111",
              color: "#fff",
              padding: "20px 34px",
              borderRadius: "14px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Send melding til Betonmast
          </a>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            padding: "60px 40px",
            textAlign: "center",
            marginBottom: "60px",
            border: "1px solid #e5e5e5",
          }}
        >
          <img
            src="/spg-logo.png"
            alt="Scandinavian Property Group"
            style={{
              height: "90px",
              maxWidth: "320px",
              objectFit: "contain",
              marginBottom: "30px",
            }}
          />

          <h2
            style={{
              fontSize: "38px",
              marginBottom: "18px",
            }}
          >
            Interessert i bolig?
          </h2>

          <p
            style={{
              fontSize: "19px",
              color: "#555",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto 34px",
            }}
          >
            Se tilgjengelige boliger, priser og salgsinformasjon hos
            Scandinavian Property Group.
          </p>

          <a
            href="https://scandinavianpropertygroup.com/no/vare-prosjekter/hotvetalleen/til-salgs"
            target="_blank"
            style={{
              display: "inline-block",
              background: "#FFD500",
              color: "#111",
              padding: "20px 38px",
              borderRadius: "14px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Se boliger til salgs hos SPG
          </a>
        </div>

        <section id="kontakt">
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            Send melding til Betonmast
          </h2>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "45px",
              borderRadius: "24px",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
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

              <p
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                Neste steg er å koble skjemaet til automatisk e-postvarsling.
              </p>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}

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
