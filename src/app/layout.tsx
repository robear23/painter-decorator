import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SB Painter & Decorator Belfast | Professional Painting & Decorating",
  description:
    "Belfast's premier painter and decorator. Professional interior, exterior and commercial painting across Belfast and Northern Ireland. 100% satisfaction guaranteed. Get a free quote today.",
  keywords:
    "painter decorator Belfast, painting decorating Belfast, interior painting Belfast, exterior painting Belfast, commercial painting Northern Ireland, home decor Belfast, Steven Boobyer",
  openGraph: {
    title: "SB Painter & Decorator | Belfast's Premium Painting Service",
    description:
      "Flawless finishes, guaranteed craftsmanship. Serving Belfast and Northern Ireland with 100% recommendation rate.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${jakartaSans.variable}`}
    >
      <body className="bg-slate-900 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
