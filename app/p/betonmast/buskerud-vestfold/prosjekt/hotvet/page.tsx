"use client";

import { useState } from "react";

export default function HotvetPage() {
  const [navn, setNavn] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telefon, setTelefon] = useState("");
  const [epost, setEpost] = useState("");
  const [melding, setMelding] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!telefon && !epost) {
      setStatus("Legg inn telefonnummer eller e-post.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          navn,
          adresse,
          telefon,
          epost,
          melding,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Noe gikk galt. Prøv igjen.");
        return;
      }

      setStatus("Takk! Meldingen er sendt.");
      setNavn("");
      setAdresse("");
      setTelefon("");
      setEpost("");
      setMelding("");
    } catch {
      setStatus("Kunne ikke sende meldingen. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <header className="top">
        <img src="/betonmast-logo.png" alt="Betonmast" className="betonmastLogo" />
        <div className="region">Buskerud-Vestfold</div>
        <div className="badge">NABOINFORMASJON</div>
      </header>

      <section className="hero">
        <img src="/hotvet.jpg" alt="Hotvet" className="heroImage" />
        <div className="overlay" />

        <div className="heroContent">
          <h1>Hotvet</h1>
          <p>
            Hotvet er et boligprosjekt i Drammen. Dette området er under
            utvikling med fokus på gode bomiljøer og bærekraftige løsninger.
          </p>
          <p>Her finner du informasjon og kontakt for naboer og interessenter.</p>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="icon">⌂</div>
          <h2>Om prosjektet</h2>
          <p>
            Hotvet er et nytt boligprosjekt i Drammen. Prosjektet vil bestå av
            moderne boliger med høy kvalitet, gode uteområder og et helhetlig
            fokus på bærekraft. Utbyggingen skjer med omtanke for nærmiljøet og
            i tett dialog med naboer.
          </p>
        </div>

        <div className="card">
          <img src="/spg-logo.png" alt="Scandinavian Property Group" className="spgLogo" />

          <h2>Interessert i bolig?</h2>

          <p>
            Se tilgjengelige boliger, priser og salgsinformasjon hos
            Scandinavian Property Group.
          </p>

          <a
            href="https://scandinavianpropertygroup.com/no/vare-prosjekter/hotvetalleen/til-salgs"
            target="_blank"
            className="spgButton"
          >
            Se boliger til salgs hos SPG →
          </a>
        </div>

        <h2 className="formHeading">Send melding til Betonmast</h2>

        <div className="formCard">
          <form onSubmit={handleSubmit} className="form">
            <input
              placeholder="Navn"
              value={navn}
              onChange={(e) => setNavn(e.target.value)}
              required
            />

            <input
              placeholder="Adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />

            <input
              placeholder="Telefonnummer"
              type="tel"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />

            <input
              placeholder="E-post"
              type="email"
              value={epost}
              onChange={(e) => setEpost(e.target.value)}
            />

            <textarea
              placeholder="Skriv spørsmålet ditt her"
              rows={6}
              value={melding}
              onChange={(e) => setMelding(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sender..." : "Send melding"}
            </button>

            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </section>

      <style jsx>{`
        .page {
          font-family: Arial, sans-serif;
          background: #f5f5f5;
          min-height: 100vh;
          color: #111;
        }

        .top {
          background: #050505;
          padding: 56px 24px 42px;
          text-align: center;
        }

        .betonmastLogo {
          height: 180px;
          max-width: 92vw;
          object-fit: contain;
          margin-bottom: 18px;
        }

        .region {
          color: white;
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .badge {
          display: inline-block;
          background: #ffd500;
          color: #111;
          font-weight: 900;
          padding: 12px 26px;
          border-radius: 999px;
          font-size: 17px;
        }

        .hero {
          position: relative;
          height: 520px;
          overflow: hidden;
        }

        .heroImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
        }

        .heroContent {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 28px;
        }

        .heroContent h1 {
          font-size: 86px;
          line-height: 1;
          margin: 0 0 24px;
          font-weight: 900;
        }

        .heroContent p {
          font-size: 24px;
          line-height: 1.5;
          max-width: 760px;
          margin: 0 auto 14px;
          font-weight: 500;
        }

        .content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 70px 40px 90px;
        }

        .card {
          background: white;
          border-radius: 28px;
          padding: 58px 48px;
          text-align: center;
          margin-bottom: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .icon {
          font-size: 54px;
          margin-bottom: 18px;
        }

        .card h2,
        .formHeading {
          font-size: 42px;
          margin: 0 0 22px;
          font-weight: 900;
        }

        .card p {
          font-size: 20px;
          line-height: 1.8;
          color: #444;
          max-width: 760px;
          margin: 0 auto 34px;
        }

        .spgLogo {
          height: 95px;
          max-width: 360px;
          object-fit: contain;
          margin-bottom: 32px;
        }

        .spgButton {
          display: inline-block;
          background: #0b3a75;
          color: white;
          padding: 20px 38px;
          border-radius: 14px;
          font-weight: 900;
          text-decoration: none;
          font-size: 18px;
        }

        .formHeading {
          margin-top: 54px;
          margin-bottom: 26px;
        }

        .formCard {
          background: white;
          border-radius: 28px;
          padding: 36px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        input,
        textarea {
          padding: 18px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 17px;
          font-family: Arial, sans-serif;
        }

        button {
          background: #111;
          color: white;
          border: none;
          padding: 20px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .status {
          font-size: 16px;
          font-weight: 700;
          margin: 6px 0 0;
        }

        @media (max-width: 700px) {
          .top {
            padding: 38px 20px 32px;
          }

         .betonmastLogo {
  width: 100%;
  max-width: 260px;
  height: auto;
  max-height: 110px;
  object-fit: contain;
  display: block;
  margin: 0 auto 18px;
}

          .region {
            font-size: 24px;
          }

          .badge {
            font-size: 14px;
            padding: 10px 18px;
          }

          .hero {
            height: 470px;
          }

          .heroContent h1 {
            font-size: 58px;
          }

          .heroContent p {
            font-size: 18px;
          }

          .content {
            padding: 40px 18px 70px;
          }

          .card {
            padding: 38px 24px;
            border-radius: 24px;
          }

          .card h2,
          .formHeading {
            font-size: 32px;
          }

          .card p {
            font-size: 17px;
          }

          .spgLogo {
            height: 70px;
            max-width: 260px;
          }

          .spgButton {
            width: 100%;
            box-sizing: border-box;
            padding: 18px 20px;
          }

          .formCard {
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
