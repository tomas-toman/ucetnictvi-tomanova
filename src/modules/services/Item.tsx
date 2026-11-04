import { ComponentType, SVGProps } from "react";

type ItemProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function Item({ Icon, title, description }: ItemProps) {
  return (
    <li className="group flex flex-col gap-2">
      <div className="bg-teal/20 w-fit rounded-md p-2 transition-[background-color,translate] duration-300 group-hover:bg-teal motion-safe:group-hover:-translate-y-1">
        <Icon className="size-12 shrink-0 text-teal transition-[color,scale] duration-300 group-hover:text-ghost-white motion-safe:group-hover:scale-110" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-dim-gray">{description}</p>
      </div>
    </li>
  );
}
