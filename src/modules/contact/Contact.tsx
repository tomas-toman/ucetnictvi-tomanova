import Check from "@/components/icons/Check";
import ContactForm from "./ContactForm";
import { CONTACT_DETAILS } from "./contactDetails";

const HIGHLIGHTS = [
  "Odpověď nejpozději následující pracovní den",
  "Poptávka je zcela nezávazná",
  "Individuální přístup ke každému klientovi",
];

export default function Contact() {
  return (
    <section className="py-10 max-w-250 mx-auto px-4" id="kontakt">
      <div
        data-reveal="self"
        className="grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-white rounded-md shadow-sm border border-dim-gray/20">
        <div className="flex flex-col gap-8 bg-linear-to-br from-teal to-lapis p-8 text-white md:p-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold uppercase tracking-wider text-white/70">
                Kontakt
              </span>
              <h2 className="text-3xl font-medium">Kontaktujte mě</h2>
              <p className="text-white/85 leading-relaxed">
                Máte dotaz k účetním službám nebo chcete rovnou probrat
                spolupráci? Napište mi přes formulář a společně najdeme řešení
                na míru vašemu podnikání.
              </p>
            </div>

            <ul className="flex flex-col gap-3 border-t border-white/20 pt-6">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-white p-1 text-teal">
                    <Check className="size-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-auto flex flex-col gap-5 border-t border-white/20 pt-6">
            {CONTACT_DETAILS.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-4 focus:outline-white rounded-md"
                >
                  <span className="shrink-0 rounded-full bg-white/10 p-3 transition-colors group-hover:bg-white group-hover:text-teal">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                      {label}
                    </span>
                    <span className="truncate text-lg font-medium underline-offset-4 group-hover:underline">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
