const regions = [
  {
    navn: "Betonmast Buskerud-Vestfold",
    beskrivelse:
      "Prosjekter og nabodialog for Betonmast Buskerud-Vestfold.",
    link: "/p/betonmast/buskerud-vestfold",
  },
  {
    navn: "Betonmast Oslo",
    beskrivelse:
      "Eksempel på fremtidig regionstruktur.",
    link: "#",
  },
];

export default function BetonmastPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#666",
            marginBottom: "20px",
          }}
        >
          OmrådeLab / Betonmast
        </p>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1",
            marginBottom: "30px",
          }}
        >
          Betonmast
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.6",
            color: "#444",
            maxWidth: "700px",
            marginBottom: "80px",
          }}
        >
          Nabodialog og prosjektkommunikasjon for Betonmast sine byggeprosjekter.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {regions.map((region) => (
            <a
              key={region.navn}
              href={region.link}
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "24px",
                textDecoration: "none",
                color: "#111",
                border: "1px solid #e5e5e5",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {region.navn}
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {region.beskrivelse}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
