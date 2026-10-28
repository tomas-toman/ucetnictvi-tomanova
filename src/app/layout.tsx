import type { Metadata } from "next";
import { Carlito, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/modules/header/Header";

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const carlito = Carlito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-carlito",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Účetnictví Václava Malá Tomanová",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body
        className={`${caveat.variable} ${carlito.variable} ${playfair.variable}`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
