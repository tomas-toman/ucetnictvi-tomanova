import { ReactNode } from "react";
import LogoOutline from "@/components/icons/LogoOutline";
import { cn } from "@/lib/cn";

type StatusPageProps = {
  code: string;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  className?: string;
};

export default function StatusPage({
  code,
  eyebrow,
  title,
  description,
  actions,
  className,
}: StatusPageProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[calc(100svh-var(--spacing-header))] items-center overflow-hidden px-4 py-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,color-mix(in_oklab,var(--color-teal),transparent_92%)_0%,transparent_100%)]" />

      <LogoOutline className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[min(56rem,140vw)] -translate-x-1/2 -translate-y-1/2 text-teal/6 motion-safe:animate-hero-zoom" />

      <div
        data-intro="children"
        className="mx-auto flex w-full max-w-xl flex-col items-center text-center"
      >
        <p className="bg-linear-to-br from-teal to-lapis bg-clip-text text-[clamp(6rem,24vw,10rem)] leading-none font-bold tracking-tight text-transparent">
          {code}
        </p>

        <span className="mt-4 text-sm font-bold tracking-wider text-teal uppercase">
          {eyebrow}
        </span>

        <h1 className="mt-2 text-3xl font-bold text-charcoal md:text-4xl">
          {title}
        </h1>

        <p className="mt-4 leading-relaxed text-dim-gray">{description}</p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          {actions}
        </div>
      </div>
    </section>
  );
}
