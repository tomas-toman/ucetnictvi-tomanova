import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import { HOME_STRUCTURED_DATA } from "@/lib/structuredData";
import Contact from "@/modules/contact/Contact";
import Faq from "@/modules/faq/Faq";
import Hero from "@/modules/hero/Hero";
import PriceList from "@/modules/price-list/PriceList";
import Services from "@/modules/services/Services";
import About from "@/modules/about/About";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={HOME_STRUCTURED_DATA} />
      <Hero />
      <About />
      <Services />
      <PriceList />
      <Contact />
      <Faq />
      <RevealObserver />
    </>
  );
}
