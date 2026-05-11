const prosjekter = [
  {
    navn: "Hotvet",
    sted: "Drammen",
    status: "Boligprosjekt / nabodialog",
    link: "/p/betonmast/buskerud-vestfold/prosjekt/hotvet",
  },
  {
    navn: "Kontorbygg for Lede",
    sted: "Larvik",
    status: "Pågående",
    link: "#",
  },
  {
    navn: "Vision",
    sted: "Horten",
    status: "Pågående",
    link: "#",
  },
  {
    navn: "Sjøparken i Stavern",
    sted: "Stavern",
    status: "Pågående",
    link: "#",
  },
];

export default function BuskerudVestfoldPage() {
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
          OmrådeLab / Betonmast / Buskerud-Vestfold
        </p>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1",
            marginBottom: "30px",
            maxWidth: "800px",
          }}
        >
          Betonmast Buskerud-Vestfold
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.6",
            color: "#444",
            maxWidth: "800px",
            marginBottom: "80px",
          }}
        >
          Prosjektoversikt og nabodialog for Betonmast Buskerud-Vestfold sine byggeprosjekter.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {prosjekter.map((prosjekt) => (
            <a
              key={prosjekt.navn}
              href={prosjekt.link}
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "24px",
                textDecoration: "none",
                color: "#111",
                border: "1px solid #e5e5e5",
              }}
            >
              <p
                style={{
                  color: "#777",
                  marginBottom: "10px",
                }}
              >
                {prosjekt.sted}
              </p>

              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {prosjekt.navn}
              </h2>

              <p
                style={{
                  color: "#555",
                }}
              >
                {prosjekt.status}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
