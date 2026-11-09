import Item from "./Item";
import { MONTHLY_PLANS } from "./plans";

export default function MonthlyPlans() {
  return (
    <>
      <h3
        data-reveal="self"
        className="font-medium text-2xl text-left text-teal mb-8"
      >
        Měsíční paušály
      </h3>

      <ul
        data-reveal="children"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(16rem,100%),1fr))] gap-6"
      >
        {MONTHLY_PLANS.map((plan) => (
          <Item key={plan.title} {...plan} />
        ))}
      </ul>

      <p
        data-reveal="self"
        className="mx-auto mt-10 w-fit rounded-md bg-teal/10 px-5 py-3 text-charcoal">
        <span className="font-semibold">* Překročíte občas limit?</span> Každý
        další doklad nad rámec paušálu je za{" "}
        <span className="font-semibold text-teal">35 Kč</span>.
      </p>
    </>
  );
}
