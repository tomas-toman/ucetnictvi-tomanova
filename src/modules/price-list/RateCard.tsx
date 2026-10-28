import { ComponentType, SVGProps } from "react";

type Rate = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  price: number | [number, number];
  unit?: string;
  note?: string;
};

type RateCardProps = {
  title: string;
  rates: Rate[];
};

const priceFormatter = new Intl.NumberFormat("cs-CZ");

function formatPrice({ price, unit }: Rate) {
  const amount = Array.isArray(price)
    ? `${priceFormatter.format(price[0])} – ${priceFormatter.format(price[1])}`
    : priceFormatter.format(price);

  return unit ? `${amount} Kč / ${unit}` : `${amount} Kč`;
}

export default function RateCard({ title, rates }: RateCardProps) {
  return (
    <div className="rounded-xl border border-dim-gray/20 bg-white p-6 text-left shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg md:p-8">
      <h3 className="text-2xl font-medium text-charcoal">{title}</h3>

      <hr className="my-6 border-dim-gray/15" />

      <ul className="flex flex-col gap-5">
        {rates.map((rate) => (
          <li key={rate.label} className="flex items-start gap-4">
            <span className="shrink-0 rounded-md bg-teal/15 p-2">
              <rate.Icon className="size-5 text-teal" />
            </span>
            <div className="flex flex-col">
              <span className="font-medium text-charcoal">{rate.label}</span>
              <span className="text-dim-gray">
                <span className="font-semibold text-teal">
                  {formatPrice(rate)}
                </span>
                {rate.note && ` ${rate.note}`}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
