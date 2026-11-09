import type { MetadataRoute } from "next";
import { PRIVACY_POLICY_PATH, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL }, { url: `${SITE_URL}${PRIVACY_POLICY_PATH}` }];
}
