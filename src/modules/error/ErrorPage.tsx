"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import ArrowRight from "@/components/icons/ArrowRight";
import Refresh from "@/components/icons/Refresh";
import StatusPage from "@/modules/status-page/StatusPage";

type ErrorPageProps = {
  error: unknown;
  retry: () => void;
  className?: string;
};

export default function ErrorPage({ error, retry, className }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="500"
      eyebrow="Něco se pokazilo"
      title="Tady mi nesedí čísla"
      description="Při načítání stránky došlo k neočekávané chybě. Zkuste to prosím znovu, a pokud potíže přetrvají, vraťte se na úvodní stránku."
      className={className}
      actions={
        <>
          <Button onClick={retry} className="w-full justify-center sm:w-fit">
            <Refresh className="transition-transform duration-500 group-hover:-rotate-180" />
            Zkusit znovu
          </Button>
          <Button
            href="/"
            variant="secondary"
            className="w-full justify-center sm:w-fit"
          >
            <ArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            Zpět na úvod
          </Button>
        </>
      }
    />
  );
}
