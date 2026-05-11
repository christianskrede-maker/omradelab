const partners = [
  {
    navn: "Betonmast",
    beskrivelse:
      "Dialog- og medvirkningsløsninger for byggeprosjekter og nærmiljø.",
    link: "/p/betonmast",
  },
  {
    navn: "Demo Partner",
    beskrivelse:
      "Eksempelpartner for fremtidige entreprenører og utviklere.",
    link: "#",
  },
];

export default function PartnerePage() {
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
          OmrådeLab / Partnere
        </p>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1",
            marginBottom: "30px",
            maxWidth: "700px",
          }}
        >
          Våre partnere
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
          Entreprenører, utviklere og kommuner som bruker
          OmrådeLab for bedre dialog med nærmiljøet.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {partners.map((partner) => (
            <a
              key={partner.navn}
              href={partner.link}
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
                {partner.navn}
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {partner.beskrivelse}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
