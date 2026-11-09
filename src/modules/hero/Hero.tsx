import Image from "next/image";
import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden flex flex-col min-h-[max(25rem,23.4vw)]"
      id="hero"
    >
      <Image
        src="/images/HeroBackground.webp"
        alt="Hero background image"
        fill
        preload
        sizes="100vw"
        draggable={false}
        className="-z-10 select-none object-cover object-[left_93%] motion-safe:animate-hero-zoom"
      />

      {/* White gradient overlay */}
      <div className="-z-10 pointer-events-none select-none absolute inset-0 bg-[radial-gradient(ellipse_95%_95%_at_40%_0%,transparent_0%,var(--color-ghost-white)_100%)]" />

      <div
        data-intro="children"
        className="flex-1 w-full max-w-300 mx-auto flex flex-col justify-center items-start px-4"
      >
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
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
