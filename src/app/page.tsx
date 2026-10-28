import Hero from "@/modules/hero/Hero";
import PriceList from "@/modules/price-list/PriceList";
import Services from "@/modules/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PriceList />
    </>
  );
}
