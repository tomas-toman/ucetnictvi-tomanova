import Link from "next/link";

export default function NavLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const Component = href.startsWith("#") ? "a" : Link;

  return (
    <Component
      href={href}
      className="relative py-3.5 first:pt-0 last:pb-0 hover:text-teal transition-colors rounded-md lg:py-0 lg:before:absolute lg:before:left-0 lg:before:-bottom-0.5 lg:before:h-0.5 lg:before:w-0 lg:before:bg-teal lg:before:transition-all lg:before:duration-300 lg:hover:before:w-full"
    >
      {label}
    </Component>
  );
}
