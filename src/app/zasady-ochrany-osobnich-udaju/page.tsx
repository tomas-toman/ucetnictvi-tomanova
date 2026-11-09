import type { Metadata } from "next";
import PrivacyPolicy from "@/modules/privacy-policy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů | Účetnictví Václava Malá Tomanová",
  description:
    "Jak zpracovávám osobní údaje z kontaktního formuláře a jaká máte práva podle GDPR.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
