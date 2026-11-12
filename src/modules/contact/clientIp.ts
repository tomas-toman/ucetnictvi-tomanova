import { headers } from "next/headers";

export async function getClientIp() {
  const requestHeaders = await headers();
  return requestHeaders.get("x-real-ip");
}
