export type Question = {
  question: string;
  answer: string;
};

export const QUESTIONS: Question[] = [
  {
    question: "Kolik stojí vedení účetnictví?",
    answer:
      "Cena závisí hlavně na počtu dokladů, na tom, zda jste plátce DPH, a na rozsahu mzdové agendy. Vedení daňové evidence pro OSVČ, která není plátcem DPH, začíná na 2 000 Kč měsíčně. Účetnictví menší s.r.o. s plátcovstvím DPH vychází zhruba na 6 000 Kč měsíčně. Přesnou cenu Vám ráda spočítám po krátké nezávazné konzultaci.",
  },
  {
    question: "Jak probíhá předávání dokladů?",
    answer:
      "Doklady mi můžete předat osobně v Litoměřicích, poslat e-mailem nebo sdílet přes cloudové úložiště. Nejjednodušší je posílat je průběžně, ideálně nejpozději na začátek následujícího měsíce zpracovávaného období spolu s bankovními výpisy. Pokud Vaše banka nebo fakturační systém umí export dat, můžeme import nastavit automaticky.",
  },
  {
    question: "Převezmete účetnictví v průběhu roku nebo po jiné účetní?",
    answer:
      "Ano. Na začátku projdu dosavadní účetnictví, zkontroluji zůstatky a navážu na předchozí období. Pokud při kontrole najdu nesrovnalosti, domluvíme se na jejich opravě. Rozsáhlejší nápravu účtuji jako rekonstrukci účetnictví podle hodinové sazby v ceníku.",
  },
  {
    question: "Pracujete i s klienty mimo Litoměřice?",
    answer:
      "Ano. Většina spolupráce dnes probíhá elektronicky, takže vzdálenost není překážkou. Pracuji pro klienty z Litoměřic a okolí, například z Lovosic, Roudnice nad Labem nebo Ústí nad Labem, ale i pro podnikatele z jiných částí České republiky.",
  },
  {
    question: "Hlídáte za mě termíny a komunikaci s úřady?",
    answer:
      "Ano. Termíny přiznání k DPH, kontrolních a souhrnných hlášení i ročních daňových přiznání hlídám já a s předstihem Vám dám vědět, kdy a kolik zaplatit. Na základě plné moci mohu za Vás komunikovat s finančním úřadem, správou sociálního zabezpečení i zdravotní pojišťovnou.",
  },
  {
    question: "Co potřebuji k daňovému přiznání?",
    answer:
      "Obvykle vydané a přijaté faktury, pokladní doklady, bankovní výpisy za celý rok a přehled zaplacených záloh na sociální a zdravotní pojištění. Pokud uplatňujete odpočty, přidejte potvrzení o úrocích z hypotéky, penzijním spoření, životním pojištění nebo darech. Přesný seznam Vám pošlu předem, abyste nic nemuseli hledat na poslední chvíli.",
  },
];
