export const SUBJECT_TYPES = [
  "OSVČ",
  "s.r.o.",
  "Nezisková organizace",
  "Jiné",
] as const;

export const HONEYPOT_FIELD = "website";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subjectType: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "invalid"; values: ContactFormValues; errors: ContactFormErrors }
  | { status: "failed"; values: ContactFormValues }
  | { status: "rate-limited"; values: ContactFormValues };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{9,20}$/;
const MIN_MESSAGE_LENGTH = 10;
export const MAX_MESSAGE_LENGTH = 5000;
const MAX_NAME_LENGTH = 100;

export function readContactForm(formData: FormData): ContactFormValues {
  const read = (key: keyof ContactFormValues) =>
    String(formData.get(key) ?? "").trim();

  return {
    name: read("name"),
    email: read("email"),
    phone: read("phone"),
    subjectType: read("subjectType"),
    message: read("message"),
  };
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) {
    errors.name = "Vyplňte prosím své jméno.";
  } else if (values.name.length > MAX_NAME_LENGTH) {
    errors.name = "Jméno je příliš dlouhé.";
  }

  if (!values.email) {
    errors.email = "Vyplňte prosím svůj e-mail.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Zadejte prosím platný e-mail.";
  }

  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Zadejte prosím platné telefonní číslo.";
  }

  if (
    values.subjectType &&
    !SUBJECT_TYPES.some((subjectType) => subjectType === values.subjectType)
  ) {
    errors.subjectType = "Vyberte prosím jednu z možností.";
  }

  if (values.message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Napište prosím zprávu (alespoň ${MIN_MESSAGE_LENGTH} znaků).`;
  } else if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = "Zpráva je příliš dlouhá.";
  }

  return errors;
}
