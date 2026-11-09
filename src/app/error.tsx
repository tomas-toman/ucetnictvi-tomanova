"use client";

import type { ErrorInfo } from "next/error";
import ErrorPage from "@/modules/error/ErrorPage";

export default function RouteError({ error, retry }: ErrorInfo) {
  return (
    <>
      <title>Něco se pokazilo | Účetnictví Václava Malá Tomanová</title>
      <ErrorPage error={error} retry={retry} />
    </>
  );
}
