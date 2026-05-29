import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin-ext"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Klavíry & Kytary | Import pian a kytar pro domov, studio i koncert",
  description:
    "Dovážíme a pomáháme vybírat akustická a digitální piana, koncertní křídla, pianina, akustické, elektroakustické a elektrické kytary pro začátečníky, školy i profesionály.",
  metadataBase: new URL("https://www.klaviry-kytary.cz"),
  openGraph: {
    title: "Klavíry & Kytary | Import pian a kytar pro domov, studio i koncert",
    description:
      "Dovážíme a pomáháme vybírat akustická a digitální piana, koncertní křídla, pianina, akustické, elektroakustické a elektrické kytary pro začátečníky, školy i profesionály.",
    type: "website",
    locale: "cs_CZ"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body style={{ isolation: "isolate" }}>{children}</body>
    </html>
  );
}
