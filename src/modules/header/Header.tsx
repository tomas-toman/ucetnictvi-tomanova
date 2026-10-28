"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import Mail from "@/components/icons/Mail";
import Menu from "@/components/icons/Menu";
import X from "@/components/icons/X";
import NavLink from "./NavLink";

const DROPDOWN_ID = "main-dropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ghost-white sticky top-0 z-50">
      <div className="relative bg-ghost-white max-w-300 h-25 mx-auto flex flex-row justify-between items-center px-4">
        <Link href="/" className="flex flex-col rounded-md">
          <span className="logo text-[32px] lg:text-[48px] leading-none">
            Václava Malá Tomanová
          </span>
          <span className="text-[9px] lg:text-sm uppercase tracking-widest text-teal text-center">
            Účetní | Vaše čísla pod kontrolou
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
          className={`absolute -z-10 right-4 top-[110%] w-fit transition-all duration-300 ease-out lg:contents lg:visible ${
            isOpen ? "visible translate-y-0" : "invisible -translate-y-full"
          }`}
        >
          <nav
            aria-label="Hlavní menu"
            className="flex flex-col gap-3 p-4 rounded-md mb-2 bg-ghost-white shadow-2xl lg:flex-row lg:gap-8 lg:p-0 lg:mb-0 lg:bg-transparent lg:shadow-none"
          >
            <NavLink label="Služby" href="#sluzby" />
            <NavLink label="Ceník" href="#cenik" />
            <NavLink label="Kontakt" href="#kontakt" />
          </nav>

          <Button href="#kontakt" className="mx-auto lg:mx-0">
            <Mail />
            Kontaktujte mě
          </Button>
        </div>
      </div>
    </header>
  );
}
