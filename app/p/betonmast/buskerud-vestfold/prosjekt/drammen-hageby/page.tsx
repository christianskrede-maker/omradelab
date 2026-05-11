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
      {/* HERO IMAGE */}
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
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1200px",
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
            Betonmast Buskerud-Vestfold
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1,
              marginBottom: "20px",
              maxWidth: "700px",
            }}
          >
            Hotvet
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "700px",
              opacity: 0.95,
            }}
          >
            Informasjon og nabodialog for boligprosjektet Hotvet i Drammen.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 40px",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <img
            src="/betonmast-logo.png"
            alt="Betonmast"
            style={{
              height: "70px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* INFO CARD */}
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
            }}
          >
            Hotvet er et nytt boligprosjekt i Drammen utviklet av
            Scandinavian Property Group i samarbeid med Betonmast.
            OmrådeLab brukes som kanal for prosjektinformasjon,
            varslinger og dialog med nærmiljøet.
          </p>
        </div>

        {/* STATUS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {[
            ["Status", "Planlegging"],
            ["Lokasjon", "Drammen"],
            ["Type", "Boligprosjekt"],
          ].map(([title, value]) => (
            <div
              key={title}
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "32px",
              }}
            >
              <div
                style={{
                  color: "#777",
                  marginBottom: "10px",
                  fontSize: "15px",
                }}
              >
                {title}
              </div>

              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            background: "#111",
            borderRadius: "32px",
            padding: "60px 40px",
            color: "white",
          }}
        >
          <img
            src="/spg-logo.png"
            alt="SPG"
            style={{
              height: "40px",
              marginBottom: "30px",
              objectFit: "contain",
            }}
          />

          <h2
            style={{
              fontSize: "44px",
              marginBottom: "20px",
            }}
          >
            Se boliger til salgs
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto 40px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Besøk prosjektets offisielle salgsside hos Scandinavian
            Property Group.
          </p>

          <a
            href="https://scandinavianpropertygroup.com/no/vare-prosjekter/hotvetalleen/til-salgs"
            target="_blank"
            style={{
              display: "inline-block",
              background: "#FFD500",
              color: "#111",
              padding: "18px 36px",
              borderRadius: "16px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Gå til salgssiden
          </a>
        </div>
      </section>
    </main>
  );
}
