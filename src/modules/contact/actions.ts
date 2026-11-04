"use server";

import {
  ContactFormState,
  ContactFormValues,
  HONEYPOT_FIELD,
  readContactForm,
  validateContactForm,
} from "./schema";

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (formData.get(HONEYPOT_FIELD)) {
    return { status: "success" };
  }

  const values = readContactForm(formData);
  const errors = validateContactForm(values);

  if (Object.keys(errors).length > 0) {
    return { status: "invalid", values, errors };
  }

  try {
    await sendEmail(values);
    return { status: "success" };
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return { status: "failed", values };
  }
}

async function sendEmail(values: ContactFormValues) {
  const { RESEND_API_KEY, CONTACT_FORM_FROM, CONTACT_FORM_TO } = process.env;

  if (!RESEND_API_KEY || !CONTACT_FORM_FROM || !CONTACT_FORM_TO) {
    throw new Error(
      "Missing RESEND_API_KEY, CONTACT_FORM_FROM or CONTACT_FORM_TO",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FORM_FROM,
      to: CONTACT_FORM_TO,
      reply_to: values.email,
      subject: `Nová zpráva z webu – ${values.name}`,
      text: formatEmailText(values),
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend responded with ${response.status}: ${await response.text()}`,
    );
  }
}

function formatEmailText(values: ContactFormValues) {
  return [
    `Jméno: ${values.name}`,
    `E-mail: ${values.email}`,
    `Telefon: ${values.phone || "neuvedeno"}`,
    `Typ subjektu: ${values.subjectType || "neuvedeno"}`,
    "",
    values.message,
  ].join("\n");
}
