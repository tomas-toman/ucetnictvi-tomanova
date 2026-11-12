import type { Metadata, Viewport } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import {
  BASE_OPEN_GRAPH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import Header from "@/modules/header/Header";
import Footer from "@/modules/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Účetní Litoměřice | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: BASE_OPEN_GRAPH,
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f7f74",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${roboto.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
