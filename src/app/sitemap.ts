import type { MetadataRoute } from "next";
import {
  HOME_LAST_MODIFIED,
  PRIVACY_POLICY_EFFECTIVE_DATE,
  PRIVACY_POLICY_PATH,
  SITE_URL,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: HOME_LAST_MODIFIED },
    {
      url: `${SITE_URL}${PRIVACY_POLICY_PATH}`,
      lastModified: PRIVACY_POLICY_EFFECTIVE_DATE,
    },
  ];
}
