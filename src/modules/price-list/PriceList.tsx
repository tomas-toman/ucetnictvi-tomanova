import MonthlyPlans from "./MonthlyPlans";
import Rates from "./Rates";

export default function PriceList() {
  return (
    <section className="py-10" id="cenik">
      <div className="max-w-300 mx-auto text-center px-4">
        <h2 className="text-teal text-3xl font-medium mb-2">
          Ceník účetních služeb
        </h2>
        <p className="text-dim-gray mb-8">
          Paušální i jednorázové služby na míru vašemu podnikání. <br /> Všechny
          ceny jsou uvedeny bez DPH.
        </p>

        <MonthlyPlans />
        <Rates />
      </div>
    </section>
  );
}
