import { cn } from "@/lib/cn";
import Spinner from "@/components/icons/Spinner";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  ElementType,
  MouseEventHandler,
  ReactNode,
} from "react";

type ButtonVariant = "primary";

interface ButtonBaseProps {
  children: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  fullWidth?: boolean | "mobile";
  variant?: ButtonVariant;
  "aria-label"?: string;
}

export interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  isExternal?: never;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  disabled?: never;
  type?: never;
  isExternal?: boolean;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const BASE_STYLE =
  "cursor-pointer py-2 px-4 rounded-md flex gap-2 items-center transition-colors";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-ghost-white hover:bg-[color-mix(in_oklab,var(--color-terracotta),black_10%)] active:bg-[color-mix(in_oklab,var(--color-terracotta),black_15%)]",
};

const EXTERNAL_HREF = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    isLoading = false,
    loadingText,
    fullWidth = false,
    className,
    "aria-label": ariaLabel,
  } = props;

  const content = isLoading ? (
    <span className="inline-flex items-center gap-2">
      <Spinner
        aria-hidden="true"
        className="size-4 animate-spin fill-base-secondary text-white"
      />
      {loadingText ?? children}
    </span>
  ) : (
    children
  );

  const widthStyle =
    fullWidth === "mobile" ? "w-full md:w-fit" : fullWidth ? "w-full" : "w-fit";

  const classes = cn(
    BASE_STYLE,
    VARIANT_STYLES[variant],
    widthStyle,
    className,
  );

  if (props.href !== undefined) {
    const Component: ElementType = EXTERNAL_HREF.test(props.href) ? "a" : Link;

    return (
      <Component
        className={classes}
        aria-label={ariaLabel}
        onClick={props.onClick}
        href={props.href}
        target={props.isExternal ? "_blank" : undefined}
        rel={props.isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </Component>
    );
  }

  return (
    <button
      className={classes}
      aria-label={ariaLabel}
      onClick={props.onClick}
      type={props.type ?? "button"}
      disabled={props.disabled || isLoading}
      aria-busy={isLoading || undefined}
    >
      {content}
    </button>
  );
}
