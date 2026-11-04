import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  isOptional?: boolean;
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
};

export const INPUT_STYLE =
  "w-full rounded-md border border-dim-gray/30 bg-ghost-white/60 px-4 py-3 text-charcoal transition-colors hover:border-dim-gray/50 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 aria-invalid:border-red-700 aria-invalid:focus:ring-red-700/20";

export function errorProps(id: string, error?: string) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}

export function OptionalMark() {
  return <span className="font-normal text-dim-gray"> (nepovinné)</span>;
}

export default function Field({
  id,
  label,
  error,
  isOptional = false,
  aside,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-charcoal">
          {label}
          {isOptional && <OptionalMark />}
        </label>
        {aside}
      </div>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="text-sm text-red-700 motion-safe:animate-fade-in"
        >
          {error}
        </p>
      )}
    </div>
  );
}
