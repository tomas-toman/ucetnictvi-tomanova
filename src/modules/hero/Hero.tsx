import Image from "next/image";
import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";

export default function Hero() {
  return (
    <section className="relative isolate flex flex-col min-h-[max(25rem,23.4vw)]">
      <Image
        src="/images/HeroBackground.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover object-[left_93%]"
      />
      <div className="flex-1 w-full max-w-300 mx-auto flex flex-col justify-center items-start px-4">
        <span className="uppercase text-teal font-bold ">
          Profesionální účetní služby
        </span>
        <h1 className="text-4xl font-bold max-w-90">
          Spolehlivé účetnictví pro vaše podnikání
        </h1>
        <p className="text-dim-gray max-w-90 my-4">
          Třicet let praxe, individuální přístup a pečlivost v každém detailu.
          Pomohu Vám mít učetnictví pod kontrolou, ať už jste OSVČ, menší firma
          nebo nezisková organizace.
        </p>
        <Button href="#sluzby">
          Nabídka služeb
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
