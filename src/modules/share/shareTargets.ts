import { ComponentType, SVGProps } from "react";
import Facebook from "@/components/icons/Facebook";
import Link from "@/components/icons/Link";
import LinkedIn from "@/components/icons/LinkedIn";
import Telegram from "@/components/icons/Telegram";
import WhatsApp from "@/components/icons/WhatsApp";
import XLogo from "@/components/icons/XLogo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type ShareTarget =
  | { kind: "link"; label: string; Icon: Icon; href: string }
  | { kind: "copy"; label: string; Icon: Icon };

const url = encodeURIComponent(SITE_URL);
const text = encodeURIComponent(SITE_NAME);

export const SHARE_TARGETS: ShareTarget[] = [
  {
    kind: "link",
    label: "Sdílet na Facebooku",
    Icon: Facebook,
    href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    kind: "link",
    label: "Poslat přes WhatsApp",
    Icon: WhatsApp,
    href: `https://wa.me/?text=${text}%20${url}`,
  },
  {
    kind: "link",
    label: "Sdílet na LinkedInu",
    Icon: LinkedIn,
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  {
    kind: "link",
    label: "Sdílet na X",
    Icon: XLogo,
    href: `https://x.com/intent/post?url=${url}&text=${text}`,
  },
  {
    kind: "link",
    label: "Poslat přes Telegram",
    Icon: Telegram,
    href: `https://t.me/share/url?url=${url}&text=${text}`,
  },
  {
    kind: "copy",
    label: "Zkopírovat odkaz",
    Icon: Link,
  },
];
