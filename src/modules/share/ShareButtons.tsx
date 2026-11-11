"use client";

import { useEffect, useState } from "react";
import Check from "@/components/icons/Check";
import { cn } from "@/lib/cn";
import { SITE_URL } from "@/lib/site";
import { SHARE_TARGETS, ShareTarget } from "./shareTargets";

const BUTTON_STYLE =
  "flex rounded-full border border-dim-gray/20 bg-white p-2.5 text-lapis shadow-sm transition-colors hover:border-lapis hover:bg-lapis hover:text-white";

const COPIED_DURATION_MS = 2000;

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), COPIED_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
    } catch {}
  }

  function renderTarget(target: ShareTarget) {
    const { label, Icon } = target;

    if (target.kind === "link") {
      return (
        <a
          href={target.href}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON_STYLE}
        >
          <Icon className="size-5" />
          <span className="sr-only">{label}</span>
        </a>
      );
    }

    return (
      <button
        type="button"
        title={label}
        onClick={copyLink}
        className={cn(BUTTON_STYLE, "cursor-pointer")}
      >
        {copied ? <Check className="size-5" /> : <Icon className="size-5" />}
        <span className="sr-only">{label}</span>
      </button>
    );
  }

  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {SHARE_TARGETS.map((target) => (
        <li key={target.label}>{renderTarget(target)}</li>
      ))}
    </ul>
  );
}
