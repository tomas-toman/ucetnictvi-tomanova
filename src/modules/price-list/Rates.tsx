import RateCard from "./RateCard";
import { RATE_GROUPS } from "./rateGroups";

export default function Rates() {
  return (
    <div data-reveal="children" className="mt-16 grid gap-6 md:grid-cols-2">
      {RATE_GROUPS.map(({ title, rates }) => (
        <RateCard key={title} title={title} rates={rates} />
      ))}
    </div>
  );
}
