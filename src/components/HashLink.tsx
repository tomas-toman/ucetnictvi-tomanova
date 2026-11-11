"use client";

import Link from "next/link";
import { ComponentProps, MouseEvent } from "react";

type HashLinkProps = ComponentProps<typeof Link> & { href: string };

const isPlainLeftClick = (event: MouseEvent<HTMLAnchorElement>) =>
  event.button === 0 &&
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey;

export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !isPlainLeftClick(event)) return;

    const url = new URL(href, window.location.href);
    if (!url.hash || url.pathname !== window.location.pathname) return;

    const target = document.getElementById(
      decodeURIComponent(url.hash.slice(1)),
    );
    if (!target) return;

    event.preventDefault();
    if (url.hash !== window.location.hash) {
      window.history.pushState(null, "", url.hash);
    }
    target.scrollIntoView();
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
