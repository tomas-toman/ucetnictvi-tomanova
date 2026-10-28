import Item from "./Item";

export default function MonthlyPlans() {
  return (
    <>
      <h3 className="font-medium text-2xl text-left text-teal mb-8">
        Měsíční paušály
      </h3>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6">
        <Item
          title="Malý neplátce DPH (OSVČ)"
          price={2000}
          description="Pro začínající podnikatle a OSVČ s pár fakturami"
          features={["Do 30 dokladů měsíčně", "Základní daňová evidence"]}
        />
        <Item
          title="Střední plátce DPH (s.r.o.)"
          price={6000}
          isRecommended
          description="Ideální pro menší e-shopy a poskytovatele služeb"
          features={[
            "Do 100 dokladů měsíčně",
            "Kontrolní a souhrnné hlášení",
            "Zpracování bankovních výpisů",
          ]}
        />
        <Item
          title="Větší firma / Aktivní e-shop"
          price={20000}
          isStartingPrice
          description="Pro firmy s větším objemem dat a automatizací"
          features={[
            "Do 600 dokladů měsíčně",
            "Automatizované importy (API)",
            "Drobná mzdová agenda",
          ]}
        />
      </ul>

      <p className="mx-auto mt-10 w-fit rounded-lg bg-teal/10 px-5 py-3 text-charcoal">
        <span className="font-semibold">* Překročíte občas limit?</span>{" "}
        Každý další doklad nad rámec paušálu je za{" "}
        <span className="font-semibold text-teal">35 Kč</span>.
      </p>
    </>
  );
}
