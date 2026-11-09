import { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const EFFECTIVE_DATE = "9. 11. 2026";

const LINK_STYLE =
  "text-teal underline underline-offset-4 transition-colors hover:text-lapis";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section data-reveal="self" className="flex flex-col gap-3">
      <h2 className="text-xl font-medium text-charcoal">{title}</h2>
      {children}
    </section>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="flex list-disc flex-col gap-2 pl-5">{children}</ul>;
}

function EmailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_STYLE}>
      {CONTACT_EMAIL}
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <article data-intro="children" className="mx-auto max-w-200 px-4 py-10">
      <div className="flex flex-col gap-8 rounded-md border border-dim-gray/20 bg-white p-8 leading-relaxed text-dim-gray shadow-sm md:p-10">
        <header className="flex flex-col gap-3">
          <span
            data-reveal="self"
            className="text-sm font-bold uppercase tracking-wider text-teal"
          >
            Právní informace
          </span>
          <h1 data-reveal="self" className="text-3xl font-medium text-charcoal">
            Zásady ochrany osobních údajů
          </h1>
          <p data-reveal="self">
            Tyto zásady popisují, jak zpracovávám osobní údaje při návštěvě
            tohoto webu a&nbsp;při použití kontaktního formuláře, a&nbsp;jaká
            máte v&nbsp;souvislosti s&nbsp;tím práva podle nařízení Evropského
            parlamentu a&nbsp;Rady (EU) 2016/679 (GDPR).
          </p>
        </header>

        <Section title="Správce osobních údajů">
          <address className="flex flex-col not-italic">
            <span className="font-medium text-charcoal">
              Václava Malá Tomanová
            </span>
            <span>Sídlo: Alfonse Muchy 416/19, 412&nbsp;01 Litoměřice</span>
            <span>IČO: 63748339</span>
            <span>
              E-mail: <EmailLink />
            </span>
          </address>
        </Section>

        <Section title="Jaké údaje zpracovávám">
          <p>Při odeslání kontaktního formuláře zpracovávám:</p>
          <List>
            <li>jméno a&nbsp;příjmení,</li>
            <li>e-mailovou adresu,</li>
            <li>telefonní číslo, pokud jej vyplníte,</li>
            <li>typ subjektu (např. OSVČ, s.r.o.), pokud jej zvolíte,</li>
            <li>
              obsah zprávy a&nbsp;případné další údaje, které do ní uvedete,
            </li>
            <li>
              IP adresu, ze které byl formulář odeslán, a&nbsp;to za účelem
              ochrany formuláře před zneužitím.
            </li>
          </List>
          <p>
            Při každé návštěvě webu navíc poskytovatel hostingu automaticky
            zpracovává technické údaje o&nbsp;požadavku, jako je IP adresa, typ
            prohlížeče a&nbsp;čas přístupu.
          </p>
          <p>
            Do zprávy prosím neuvádějte citlivé údaje, jako jsou rodná čísla,
            čísla bankovních účtů a podobné ... Ty si v&nbsp;případě spolupráce
            vyžádám bezpečnější cestou.
          </p>
        </Section>

        <Section title="Účel a právní základ zpracování">
          <List>
            <li>
              <span className="font-medium text-charcoal">
                Odpověď na poptávku a&nbsp;jednání o&nbsp;spolupráci
              </span>{" "}
              – zpracování je nezbytné pro provedení opatření před uzavřením
              smlouvy na vaši žádost (čl. 6 odst. 1 písm. b) GDPR).
              U&nbsp;obecných dotazů je právním základem můj oprávněný zájem na
              tom, abych vám mohla odpovědět (čl. 6 odst. 1 písm. f) GDPR).
            </li>
            <li>
              <span className="font-medium text-charcoal">
                Ochrana formuláře před spamem a&nbsp;zneužitím
              </span>{" "}
              – IP adresu zpracovávám na základě oprávněného zájmu na
              zabezpečení webu (čl. 6 odst. 1 písm. f) GDPR).
            </li>
            <li>
              <span className="font-medium text-charcoal">
                Provoz a&nbsp;zabezpečení webu
              </span>{" "}
              – technické údaje o&nbsp;návštěvě zpracovává poskytovatel hostingu
              na základě mého oprávněného zájmu na spolehlivém a&nbsp;bezpečném
              provozu webu (čl. 6 odst. 1 písm. f) GDPR).
            </li>
          </List>
          <p>
            Poskytnutí údajů je dobrovolné. Bez jména, e-mailu a&nbsp;zprávy vám
            však nemohu odpovědět.
          </p>
          <p>Nedochází k&nbsp;automatizovanému rozhodování ani profilování.</p>
        </Section>

        <Section title="Jak dlouho údaje uchovávám">
          <List>
            <li>
              Údaje z&nbsp;formuláře uchovávám po dobu nezbytnou k&nbsp;vyřízení
              vašeho dotazu, nejdéle 12 měsíců od poslední komunikace. Pokud
              uzavřeme smlouvu o&nbsp;spolupráci, řídí se další zpracování touto
              smlouvou a&nbsp;příslušnými právními předpisy.
            </li>
            <li>
              IP adresa uložená kvůli ochraně formuláře je automaticky smazána
              nejpozději do 24 hodin.
            </li>
            <li>
              Technické záznamy o&nbsp;návštěvě webu uchovává poskytovatel
              hostingu jen krátkodobě, po dobu nezbytnou k&nbsp;zajištění
              provozu a&nbsp;bezpečnosti.
            </li>
          </List>
        </Section>

        <Section title="Kdo má k údajům přístup">
          <p>
            Vaše údaje neprodávám ani nepředávám třetím stranám pro marketingové
            účely. Ke zpracování využívám tyto zpracovatele, kteří mi poskytují
            technické služby:
          </p>
          <List>
            <li>
              Seznam.cz, a.s. – provoz e-mailové schránky a&nbsp;odesílání
              zpráv,
            </li>
            <li>Vercel Inc. – hosting webu,</li>
            <li>
              Upstash, Inc. – technické omezení počtu odeslání formuláře (IP
              adresa).
            </li>
          </List>
          <p>
            Společnosti Vercel Inc. a&nbsp;Upstash, Inc. sídlí v&nbsp;USA.
            Předání údajů do USA probíhá na základě rozhodnutí Evropské komise
            o&nbsp;odpovídající úrovni ochrany (EU-US Data Privacy Framework),
            případně na základě standardních smluvních doložek schválených
            Evropskou komisí.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Tento web nepoužívá žádné cookies ani jiné technologie ke sledování
            vašeho chování na stránkách.
          </p>
        </Section>

        <Section title="Vaše práva">
          <p>V&nbsp;souvislosti se zpracováním osobních údajů máte právo:</p>
          <List>
            <li>na přístup ke svým osobním údajům,</li>
            <li>na opravu nepřesných údajů,</li>
            <li>na výmaz údajů,</li>
            <li>na omezení zpracování,</li>
            <li>na přenositelnost údajů,</li>
            <li>
              vznést námitku proti zpracování založenému na oprávněném zájmu.
            </li>
          </List>
          <p>
            Svá práva můžete uplatnit e-mailem na adrese <EmailLink />. Na vaši
            žádost odpovím bez zbytečného odkladu, nejpozději do jednoho měsíce.
            Pokud se domníváte, že zpracování porušuje právní předpisy, můžete
            podat stížnost u&nbsp;Úřadu pro ochranu osobních údajů, Pplk.
            Sochora 27, 170&nbsp;00 Praha 7,{" "}
            <a
              href="https://uoou.gov.cz"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_STYLE}
            >
              uoou.gov.cz
            </a>
            .
          </p>
        </Section>

        <p data-reveal="self" className="border-t border-dim-gray/20 pt-6 text-sm">
          Tyto zásady jsou účinné od {EFFECTIVE_DATE}.
        </p>
      </div>
    </article>
  );
}
