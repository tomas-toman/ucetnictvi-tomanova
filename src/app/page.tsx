import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import { BASE_OPEN_GRAPH } from "@/lib/site";
import { HOME_STRUCTURED_DATA } from "@/lib/structuredData";
import Contact from "@/modules/contact/Contact";
import Faq from "@/modules/faq/Faq";
import Hero from "@/modules/hero/Hero";
import PriceList from "@/modules/price-list/PriceList";
import Services from "@/modules/services/Services";
import Share from "@/modules/share/Share";
import About from "@/modules/about/About";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/",
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
      <Share />
      <RevealObserver />
    </>
  );
}
