import Mail from "@/components/icons/Mail";
import Phone from "@/components/icons/Phone";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

export const CONTACT_DETAILS = [
  {
    label: "Telefon",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replaceAll(" ", "")}`,
    Icon: Phone,
  },
  {
    label: "E-mail",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
];
