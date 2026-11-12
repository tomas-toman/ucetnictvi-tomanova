"use client";

import Script from "next/script";
import {
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  language?: string;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
};

type Turnstile = {
  render: (
    container: HTMLElement,
    options: TurnstileRenderOptions,
  ) => string | null | undefined;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

const SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export type TurnstileHandle = {
  reset: () => void;
};

type Props = {
  ref: Ref<TurnstileHandle>;
};

export default function TurnstileWidget({ ref }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    if (!isScriptReady || !container || !window.turnstile) return;

    if (!siteKey) {
      console.error("Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY");
      return;
    }

    const widgetId = window.turnstile.render(container, {
      sitekey: siteKey,
      language: "cs",
      theme: "light",
      size: "flexible",
    });
    widgetIdRef.current = widgetId ?? null;

    return () => {
      if (widgetId) window.turnstile?.remove(widgetId);
      widgetIdRef.current = null;
    };
  }, [isScriptReady]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
    },
  }));

  return (
    <>
      <Script src={SCRIPT_URL} onReady={() => setIsScriptReady(true)} />
      <div ref={containerRef} className="min-h-16.25" />
    </>
  );
}
