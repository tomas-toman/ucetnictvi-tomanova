import Mail from "@/components/icons/Mail";
import Button from "@/components/Button";
import NavLink from "./NavLink";

export default function Dropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`absolute right-4 top-[110%] w-fit transition-all duration-300 ease-out ${
        isOpen ? "visible translate-y-0" : "invisible -translate-y-full"
      }`}
    >
      <nav className="flex flex-col gap-3 p-4 rounded-md mb-2 bg-ghost-white shadow-2xl">
        <NavLink label="Úvod" href="#" />
        <NavLink label="Služby" href="#" />
        <NavLink label="O mně" href="#" />
        <NavLink label="Kontakt" href="#" />
      </nav>

      <Button href="#" className="mx-auto rounded-md">
        <Mail />
        Kontaktujte mě
      </Button>
    </div>
  );
}
