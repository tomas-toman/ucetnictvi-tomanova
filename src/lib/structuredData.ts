import {
  BUSINESS_ADDRESS,
  BUSINESS_GEO,
  BUSINESS_REGISTRATION_NUMBER,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OWNER_NAME,
  SERVICE_AREA_CITIES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { QUESTIONS } from "@/modules/faq/questions";
import { MONTHLY_PLANS } from "@/modules/price-list/plans";
import { RATE_GROUPS } from "@/modules/price-list/rateGroups";

const BUSINESS_NODE_ID = `${SITE_URL}/#business`;
const WEBSITE_NODE_ID = `${SITE_URL}/#website`;
const FAQ_NODE_ID = `${SITE_URL}/#caste-dotazy`;

const priceFormatter = new Intl.NumberFormat("cs-CZ");
const lowestMonthlyPrice = Math.min(...MONTHLY_PLANS.map(({ price }) => price));
const PRICE_RANGE = `od ${priceFormatter.format(lowestMonthlyPrice)} Kč / měsíc`;

type PriceOptions = {
  price: number | [number, number];
  isStartingPrice?: boolean;
  unitText?: string;
};

function priceSpecification({ price, isStartingPrice, unitText }: PriceOptions) {
  const amount = Array.isArray(price)
    ? { minPrice: price[0], maxPrice: price[1] }
    : isStartingPrice
      ? { minPrice: price }
      : { price };

  return {
    "@type": unitText ? "UnitPriceSpecification" : "PriceSpecification",
    ...amount,
    priceCurrency: "CZK",
    valueAddedTaxIncluded: false,
    ...(unitText && { unitText }),
  };
}

function serviceOffer(name: string, price: PriceOptions, description?: string) {
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      ...(description && { description }),
      provider: { "@id": BUSINESS_NODE_ID },
    },
    priceSpecification: priceSpecification(price),
  };
}

const monthlyPlansCatalog = {
  "@type": "OfferCatalog",
  name: "Měsíční paušály",
  itemListElement: MONTHLY_PLANS.map(
    ({ title, price, isStartingPrice, description }) =>
      serviceOffer(
        title,
        { price, isStartingPrice, unitText: "měsíc" },
        description,
      ),
  ),
};

const rateCatalogs = RATE_GROUPS.map(({ title, rates }) => ({
  "@type": "OfferCatalog",
  name: title,
  itemListElement: rates.map(({ label, price, unit }) =>
    serviceOffer(label, { price, unitText: unit }),
  ),
}));

export const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_NODE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "cs",
      publisher: { "@id": BUSINESS_NODE_ID },
    },
    {
      "@type": "AccountingService",
      "@id": BUSINESS_NODE_ID,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/apple-icon.png`,
      address: {
        "@type": "PostalAddress",
        ...BUSINESS_ADDRESS,
      },
      geo: {
        "@type": "GeoCoordinates",
        ...BUSINESS_GEO,
      },
      founder: {
        "@type": "Person",
        name: OWNER_NAME,
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "IČO",
        value: BUSINESS_REGISTRATION_NUMBER,
      },
      areaServed: [
        ...SERVICE_AREA_CITIES.map((name) => ({ "@type": "City", name })),
        { "@type": "Country", name: "Česko" },
      ],
      currenciesAccepted: "CZK",
      priceRange: PRICE_RANGE,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ceník účetních služeb",
        itemListElement: [monthlyPlansCatalog, ...rateCatalogs],
      },
    },
    {
      "@type": "FAQPage",
      "@id": FAQ_NODE_ID,
      url: SITE_URL,
      inLanguage: "cs",
      isPartOf: { "@id": WEBSITE_NODE_ID },
      mainEntity: QUESTIONS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};
