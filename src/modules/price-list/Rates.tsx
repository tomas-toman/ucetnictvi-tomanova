import Calculator from "@/components/icons/Calculator";
import Car from "@/components/icons/Car";
import Chart from "@/components/icons/Chart";
import File from "@/components/icons/File";
import People from "@/components/icons/People";
import Phone from "@/components/icons/Phone";
import Wrench from "@/components/icons/Wrench";
import RateCard from "./RateCard";

export default function Rates() {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-2">
      <RateCard
        title="Jednorázové úkony a přiznání"
        rates={[
          {
            Icon: File,
            label: "Daňové přiznání OSVČ (neplátce, paušál)",
            price: 2000,
          },
          {
            Icon: Calculator,
            label: "Daňové přiznání OSVČ (daňová evidence)",
            price: 4000,
          },
          {
            Icon: Chart,
            label: "Závěrka a přiznání PO (s.r.o.)",
            price: [6000, 15000],
            note: "(dle složitosti)",
          },
          {
            Icon: Car,
            label: "Silniční daň / Daň z nemovitých věcí",
            price: 1000,
          },
        ]}
      />
      <RateCard
        title="Hodinové sazby a ostatní služby"
        rates={[
          {
            Icon: People,
            label: "Zpracování mezd",
            price: [400, 600],
            unit: "zaměstnanec",
          },
          {
            Icon: Phone,
            label: "Běžná konzultace a komunikace s úřady",
            price: 700,
            unit: "hodina",
          },
          {
            Icon: Wrench,
            label: "Rekonstrukce účetnictví (oprava chyb)",
            price: [800, 1200],
            unit: "hodina",
          },
        ]}
      />
    </div>
  );
}
