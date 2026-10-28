import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-300 mx-auto h-25 flex flex-row justify-between items-center px-4">
      <div className="flex flex-col w-fit">
        <span className="logo text-[48px] leading-none">Václava Tomanová</span>
        <span className="text-sm uppercase tracking-widest">
          Účetní | Vaše čísla pod kontrolou
        </span>
      </div>
      <nav className="flex gap-8">
        <Link href="#" className="hover:text-verdigris transition-colors">
          Úvod
        </Link>
        <Link href="#">Služby</Link>
        <Link href="#">O mně</Link>
        <Link href="#">Kontakt</Link>
      </nav>
      <button type="button">Kontaktujte mě</button>
    </header>
  );
}
