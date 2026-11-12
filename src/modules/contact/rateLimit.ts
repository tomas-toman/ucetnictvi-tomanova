import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getClientIp } from "./clientIp";

const redis = Redis.fromEnv();

const perIpLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  prefix: "contact:ip",
});

const globalLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(50, "1 d"),
  prefix: "contact:global",
});

export async function isWithinContactRateLimit() {
  const ip = (await getClientIp()) ?? "unknown";

  try {
    const perIpResult = await perIpLimiter.limit(ip);
    if (!perIpResult.success) return false;

    const globalResult = await globalLimiter.limit("all");
    return globalResult.success;
  } catch (error) {
    console.error("Contact form rate limit check failed", error);
    return true;
  }
}
