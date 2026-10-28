import { ComponentType, SVGProps } from "react";

type ItemProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function Item({ Icon, title, description }: ItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-teal/20 w-fit rounded-md p-2">
        <Icon className="size-12 shrink-0 text-teal" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-dim-gray">{description}</p>
      </div>
    </div>
  );
}
