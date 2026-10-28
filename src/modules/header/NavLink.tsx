import Link from "next/link";

export default function NavLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="relative hover:text-teal transition-colors rounded-md before:absolute before:left-0 before:-bottom-0.5 before:h-0.5 before:w-0 before:bg-teal before:transition-all before:duration-300 hover:before:w-full"
    >
      {label}
    </Link>
  );
}
