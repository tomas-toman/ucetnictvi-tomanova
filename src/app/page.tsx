import RevealObserver from "@/components/RevealObserver";
import Contact from "@/modules/contact/Contact";
import Hero from "@/modules/hero/Hero";
import PriceList from "@/modules/price-list/PriceList";
import Services from "@/modules/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PriceList />
      <Contact />
      <RevealObserver />
    </>
  );
}
