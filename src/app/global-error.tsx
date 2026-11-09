"use client";

import "./globals.css";
import type { ErrorInfo } from "next/error";
import { roboto } from "@/lib/fonts";
import ErrorPage from "@/modules/error/ErrorPage";

export default function GlobalError({ error, retry }: ErrorInfo) {
  return (
    <html lang="cs">
      <body className={roboto.variable}>
        <title>Něco se pokazilo | Účetnictví Václava Malá Tomanová</title>
        <main>
          <ErrorPage error={error} retry={retry} className="min-h-svh" />
        </main>
      </body>
    </html>
  );
}
