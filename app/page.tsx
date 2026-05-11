export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 40px",
        }}
      >
        <p
          style={{
            color: "#666",
            marginBottom: "20px",
            fontSize: "18px",
          }}
        >
          OmrådeLab
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1",
            marginBottom: "30px",
            maxWidth: "900px",
          }}
        >
          Bedre dialog mellom byggeprosjekter og nærmiljø.
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: "1.6",
            maxWidth: "700px",
            color: "#444",
            marginBottom: "50px",
          }}
        >
          OmrådeLab gjør det enklere for entreprenører,
          kommuner og utbyggere å kommunisere med naboer
          før, under og etter byggeprosjekter.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/partnere"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              padding: "18px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Se partnerløsninger
          </a>

          <a
            href="#kontakt"
            style={{
              border: "1px solid #ccc",
              color: "#111",
              padding: "18px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Kontakt oss
          </a>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#fff",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "60px",
            }}
          >
            Hva vi tilbyr
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <h3>Medvirkning</h3>
              <p>
                Tidlig dialog med naboer og lokalmiljø før
                byggeprosjekter starter.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <h3>Nabodialog</h3>
              <p>
                NFC- og QR-baserte prosjektportaler som gjør
                det enkelt å sende inn spørsmål og meldinger.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "40px",
                borderRadius: "20px",
              }}
            >
              <h3>Prosjektinformasjon</h3>
              <p>
                Del status, fremdrift, varslinger og kontaktinformasjon
                på en enkel og profesjonell måte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
