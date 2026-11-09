import type { Metadata } from "next";
import RevealObserver from "@/components/RevealObserver";
import { PRIVACY_POLICY_PATH } from "@/lib/site";
import PrivacyPolicy from "@/modules/privacy-policy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Jak zpracovávám osobní údaje z kontaktního formuláře a jaká máte práva podle GDPR.",
  alternates: {
    canonical: PRIVACY_POLICY_PATH,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicy />
      <RevealObserver />
    </>
  );
}
