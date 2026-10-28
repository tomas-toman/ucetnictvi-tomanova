"use client";

import Link from "next/link";
import Menu from "@/components/icons/Menu";
import X from "@/components/icons/X";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ghost-white sticky top-0 z-50 block lg:hidden">
      <div className="relative z-10 bg-ghost-white max-w-300 h-25 mx-auto flex flex-row justify-between items-center px-4">
        <Link href="/" className="flex flex-col rounded-sm">
          <span className="logo text-[48px] leading-none">
            Václava Tomanová
          </span>
          <span className="text-sm uppercase tracking-widest">
            Účetní | Vaše čísla pod kontrolou
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="grid *:col-start-1 *:row-start-1"
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
      </div>

      <Dropdown isOpen={isOpen} />
    </header>
  );
}
