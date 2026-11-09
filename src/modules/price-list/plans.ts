export type MonthlyPlan = {
  title: string;
  price: number;
  isStartingPrice?: boolean;
  isRecommended?: boolean;
  description: string;
  features: string[];
};

export const MONTHLY_PLANS: MonthlyPlan[] = [
  {
    title: "Malý neplátce DPH (OSVČ)",
    price: 2000,
    description: "Pro začínající podnikatele a OSVČ s pár fakturami",
    features: ["Do 30 dokladů měsíčně", "Základní daňová evidence"],
  },
  {
    title: "Střední plátce DPH (s.r.o.)",
    price: 6000,
    isRecommended: true,
    description: "Ideální pro menší e-shopy a poskytovatele služeb",
    features: [
      "Do 100 dokladů měsíčně",
      "Kontrolní a souhrnné hlášení",
      "Zpracování bankovních výpisů",
    ],
  },
  {
    title: "Větší firma / Aktivní e-shop",
    price: 20000,
    isStartingPrice: true,
    description: "Pro firmy s větším objemem dat a automatizací",
    features: [
      "Do 600 dokladů měsíčně",
      "Automatizované importy (API)",
      "Drobná mzdová agenda",
    ],
  },
];
