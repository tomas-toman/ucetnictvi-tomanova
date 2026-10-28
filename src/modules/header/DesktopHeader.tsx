import Link from "next/link";
import Button from "@/components/Button";
import Mail from "@/components/icons/Mail";
import NavLink from "./NavLink";

export default function DesktopHeader() {
  return (
    <header className="bg-ghost-white sticky top-0 z-50 hidden lg:block">
      <div className="max-w-300 h-25 mx-auto flex flex-row justify-between items-center px-4">
        <Link href="/" className="flex flex-col rounded-sm">
          <span className="logo text-[48px] leading-none">
            Václava Tomanová
          </span>
          <span className="text-sm uppercase tracking-widest">
            Účetní | Vaše čísla pod kontrolou
          </span>
        </Link>

        <nav className="flex gap-8">
          <NavLink label="Úvod" href="#" />
          <NavLink label="Služby" href="#" />
          <NavLink label="O mně" href="#" />
          <NavLink label="Kontakt" href="#" />
        </nav>

        <Button href="#">
          <Mail />
          Kontaktujte mě
        </Button>
      </div>
    </header>
  );
}
