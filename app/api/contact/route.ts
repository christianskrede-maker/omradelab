import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      navn,
      adresse,
      telefon,
      epost,
      melding,
    } = body;

    // Enkel validering
    if (!navn || !melding || (!telefon && !epost)) {
      return Response.json(
        {
          error:
            "Navn, melding og enten telefon eller e-post må fylles ut.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "OmrådeLab <kontakt@omradelab.com>",

      to: ["christianskrede@gmail.com"],

      subject: `Ny henvendelse fra Hotvet - ${navn}`,

      replyTo: epost || undefined,

      text: `
Ny henvendelse fra Hotvet

Navn: ${navn}

Adresse:
${adresse || "Ikke oppgitt"}

Telefon:
${telefon || "Ikke oppgitt"}

E-post:
${epost || "Ikke oppgitt"}

Melding:
${melding}
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        {
          error: "Kunne ikke sende melding.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Noe gikk galt.",
      },
      {
        status: 500,
      }
    );
  }
}
