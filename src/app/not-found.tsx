import type { Metadata } from "next";
import NotFound from "@/modules/not-found/NotFound";

export const metadata: Metadata = {
  title: "Stránka nenalezena | Účetnictví Václava Malá Tomanová",
  description: "Hledaná stránka neexistuje nebo byla přesunuta.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
