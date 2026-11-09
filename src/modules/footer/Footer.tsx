import { cacheLife } from "next/cache";
import Link from "next/link";
import LogoOutline from "@/components/icons/LogoOutline";
import WhatsApp from "@/components/icons/WhatsApp";
import { PRIVACY_POLICY_PATH } from "@/lib/site";
import { CONTACT_DETAILS } from "@/modules/contact/contactDetails";
import { NAV_LINKS } from "@/modules/header/navLinks";

const CONTACT_LINKS = [
  ...CONTACT_DETAILS.map(({ label, href, Icon }) => ({ label, href, Icon })),
  {
    label: "WhatsApp",
    href: "https://wa.me/420774058618",
    Icon: WhatsApp,
  },
];

const FOOTER_LINKS = [
  ...NAV_LINKS,
  {
    label: "Zásady ochrany osobních údajů",
    href: PRIVACY_POLICY_PATH,
  },
];

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="bg-lapis px-4 text-white">
      <div className="mx-auto max-w-300">
        <div className="grid gap-10 py-10 md:grid-cols-3 md:items-start">
          <div className="order-last flex flex-col gap-3 md:order-0">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ghost-white/60">
              Fakturační údaje
            </h2>
            <address className="flex flex-col gap-1 not-italic">
              <span className="font-semibold">Václava Malá Tomanová</span>
              <span>Sídlo: Alfonse Muchy 416/19, 412&nbsp;01 Litoměřice</span>
              <span>IČO: 63748339</span>
            </address>
            <p className="max-w-sm text-xs text-white/50">
              Fyzická osoba je zapsána v živnostenském rejstříku vedeném
              Městským úřadem v Litoměřicích.
            </p>
          </div>

          <div className="order-first flex flex-col items-center gap-5 md:order-0 md:self-center">
            <LogoOutline className="h-14 w-auto" />
            <ul className="flex items-center gap-3">
              {CONTACT_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white hover:text-lapis focus:outline-white"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-labelledby="footer-links-heading"
            className="flex flex-col gap-3 md:justify-self-end"
          >
            <h2
              id="footer-links-heading"
              className="text-sm font-semibold uppercase tracking-wide text-ghost-white/60"
            >
              Odkazy
            </h2>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-ghost-white/70 rounded-md focus:outline-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-white/10 py-5 text-sm sm:flex-row sm:justify-between">
          <p className="text-white/80">
            © <CurrentYear /> Václava Malá Tomanová. Všechna práva vyhrazena.
          </p>
          <p className="flex items-center gap-1 text-white/50">
            Vytvořil{" "}
            <a
              href="https://www.instagram.com/_tomastoman/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors rounded-md focus:outline-white"
            >
              @_tomastoman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
