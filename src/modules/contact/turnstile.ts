import { getClientIp } from "./clientIp";

const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_TOKEN_LENGTH = 2048;
const SITEVERIFY_TIMEOUT_MS = 10_000;

export const TURNSTILE_RESPONSE_FIELD = "cf-turnstile-response";

type SiteverifyResult = {
  success: boolean;
  "error-codes"?: string[];
};

export async function isTurnstileTokenValid(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("Missing TURNSTILE_SECRET_KEY");
  }

  if (!token || token.length > MAX_TOKEN_LENGTH) {
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });
  const ip = await getClientIp();
  if (ip) body.set("remoteip", ip);

  const response = await fetch(SITEVERIFY_URL, {
    method: "POST",
    body,
    signal: AbortSignal.timeout(SITEVERIFY_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Turnstile siteverify responded with ${response.status}`);
  }

  const result: SiteverifyResult = await response.json();

  if (!result.success) {
    console.warn("Turnstile verification failed", result["error-codes"]);
  }

  return result.success;
}
