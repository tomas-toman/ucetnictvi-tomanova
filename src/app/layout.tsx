import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/lib/fonts";
import Header from "@/modules/header/Header";
import Footer from "@/modules/footer/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
