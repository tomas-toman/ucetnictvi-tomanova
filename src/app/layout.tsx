import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/modules/header/Header";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Účetnictví Václava Malá Tomanová",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body className={`${roboto.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
