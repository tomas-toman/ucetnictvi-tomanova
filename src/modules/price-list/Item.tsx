import Button from "@/components/Button";
import Check from "@/components/icons/Check";
import { cn } from "@/lib/cn";

type ItemProps = {
  title: string;
  price: number;
  isStartingPrice?: boolean;
  isRecommended?: boolean;
  description: string;
  features: string[];
};

const priceFormatter = new Intl.NumberFormat("cs-CZ");

export default function Item({
  title,
  price,
  isStartingPrice = false,
  isRecommended = false,
  description,
  features,
}: ItemProps) {
  return (
    <li
      className={cn(
        "relative flex flex-col rounded-xl border bg-white p-6 text-left shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg",
        isRecommended ? "border-teal ring-1 ring-teal" : "border-dim-gray/20",
      )}
    >
      {isRecommended && (
        <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ghost-white">
          Doporučujeme
        </span>
      )}

      <h4 className="text-xl font-medium text-charcoal">{title}</h4>
      <p className="mt-2 text-sm text-dim-gray">{description}</p>

      <p className="mt-6 flex flex-wrap items-baseline gap-x-1.5 text-dim-gray">
        {isStartingPrice && <span>od</span>}
        <span className="font-heading text-4xl font-bold text-teal">
          {priceFormatter.format(price)}
        </span>
        <span>Kč / měsíc</span>
      </p>

      <hr className="my-6 border-dim-gray/15" />

      <ul className="mb-8 flex flex-col gap-3 text-charcoal">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 rounded-full bg-teal/15 p-1">
              <Check className="size-3 text-teal" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button href="#kontakt" fullWidth className="mt-auto justify-center">
        Mám zájem
      </Button>
    </li>
  );
}
