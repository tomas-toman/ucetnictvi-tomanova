"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";
import Button from "@/components/Button";
import Mail from "@/components/icons/Mail";
import Menu from "@/components/icons/Menu";
import X from "@/components/icons/X";
import NavLink from "./NavLink";
import Image from "next/image";

const DROPDOWN_ID = "main-dropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0 });
  };

  return (
    <header className="bg-ghost-white sticky top-0 z-50 shadow-sm">
      <div className="relative bg-ghost-white max-w-300 h-header mx-auto flex flex-row justify-between items-center px-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center justify-center gap-3 rounded-md text-[clamp(14px,4vw,20px)]"
        >
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            height={43}
            width={60}
            className="h-auto w-[3em]"
          />

          <span className="leading-none flex flex-col">
            Václava Malá Tomanová
            <span className="text-[0.7em] tracking-widest text-teal leading-none">
              Účetní služby
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="grid *:col-start-1 *:row-start-1 lg:hidden"
          aria-label="Otevřít menu"
          aria-expanded={isOpen}
          aria-controls={DROPDOWN_ID}
        >
          <Menu
            className={`size-12 transition-all duration-200 ease-in-out ${
              isOpen
                ? "rotate-90 scale-50 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`size-12 transition-all duration-200 ease-in-out ${
              isOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-50 opacity-0"
            }`}
          />
        </button>

        <div
          id={DROPDOWN_ID}
          className={`absolute -z-10 right-4 top-[110%] w-fit transition-all duration-400 ease-out lg:contents lg:visible ${
            isOpen
              ? "visible translate-y-0"
              : "invisible -translate-y-[calc(100%+var(--spacing-header))]"
          }`}
        >
          <nav
            aria-label="Hlavní menu"
            className="flex flex-col divide-y divide-gray-200 p-4 rounded-md mb-2 bg-ghost-white shadow-lg lg:flex-row lg:gap-8 lg:divide-y-0 lg:p-0 lg:mb-0 lg:bg-transparent lg:shadow-none"
          >
            <NavLink label="Služby" href="#sluzby" />
            <NavLink label="Ceník" href="#cenik" />
            <NavLink label="Kontakt" href="#kontakt" />
          </nav>

          <Button href="#kontakt" className="mx-auto lg:mx-0 shadow-lg">
            <Mail />
            Kontaktujte mě
          </Button>
        </div>
      </div>
    </header>
  );
}
