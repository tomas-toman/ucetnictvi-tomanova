"use server";

import nodemailer from "nodemailer";
import { isWithinContactRateLimit } from "./rateLimit";
import {
  ContactFormState,
  ContactFormValues,
  HONEYPOT_FIELD,
  readContactForm,
  validateContactForm,
} from "./schema";
import { isTurnstileTokenValid, TURNSTILE_RESPONSE_FIELD } from "./turnstile";

const SMTP_HOST = "smtp.seznam.cz";
const SMTP_PORT = 465;

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

  const turnstileToken = String(formData.get(TURNSTILE_RESPONSE_FIELD) ?? "");

  try {
    if (!(await isTurnstileTokenValid(turnstileToken))) {
      return { status: "unverified", values };
    }
  } catch (error) {
    console.error("Failed to verify Turnstile token", error);
    return { status: "failed", values };
  }

  if (!(await isWithinContactRateLimit())) {
    return { status: "rate-limited", values };
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
  const { SMTP_USER, SMTP_PASSWORD, CONTACT_FORM_TO } = process.env;

  if (!SMTP_USER || !SMTP_PASSWORD || !CONTACT_FORM_TO) {
    throw new Error("Missing SMTP_USER, SMTP_PASSWORD or CONTACT_FORM_TO");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  await transporter.sendMail({
    from: SMTP_USER,
    to: CONTACT_FORM_TO,
    replyTo: values.email,
    subject: `Nová zpráva z webu – ${values.name}`,
    text: formatEmailText(values),
  });
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
