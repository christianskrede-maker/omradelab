export default function ProsjektPage() {
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "100px 40px 60px",
        }}
      >
        <p
          style={{
            color: "#666",
            marginBottom: "20px",
          }}
        >
          OmrådeLab / Betonmast / Drammen Hageby
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1",
            marginBottom: "30px",
            maxWidth: "900px",
          }}
        >
          Drammen Hageby
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
          Informasjon og dialog for naboer og interessenter
          rundt prosjektet Drammen Hageby.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}
        >
          <a
            href="#kontakt"
            style={{
              backgroundColor: "#111",
              color: "#fff",
              padding: "18px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Kontakt prosjektet
          </a>

          <a
            href="#status"
            style={{
              border: "1px solid #ccc",
              color: "#111",
              padding: "18px 28px",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Se prosjektstatus
          </a>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#fff",
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Hurtigvalg
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              "Stille spørsmål",
              "Melde problem",
              "Kjøpe bolig",
              "Motta varslinger",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "35px",
                  borderRadius: "20px",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="status"
        style={{
          padding: "80px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            Prosjektstatus
          </h2>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "24px",
            }}
          >
            <p>
              <strong>Status:</strong> Pågående grunnarbeider
            </p>

            <p>
              <strong>Arbeidstid:</strong> 07:00–19:00
            </p>

            <p>
              <strong>Forventet ferdigstillelse:</strong> Q4 2026
            </p>
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        style={{
          padding: "0 40px 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            Kontakt prosjektet
          </h2>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "50px",
              borderRadius: "24px",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                placeholder="Navn"
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "18px",
                }}
              />

              <input
                placeholder="Telefonnummer"
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "18px",
                }}
              />

              <textarea
                placeholder="Hvordan kan vi hjelpe deg?"
                rows={6}
                style={{
                  padding: "18px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  fontSize: "18px",
                }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  border: "none",
                  padding: "20px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
