import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HtmlLang from "@/components/HtmlLang";
import { SITE_BRAND, SITE_URL } from "@/lib/siteMeta";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

const siteTitle = `${SITE_BRAND} - Авто из США с аукциона и доставка`;
const siteDescription = `${SITE_BRAND} · ${SITE_URL.replace(
  "https://",
  ""
)}. Авто из США через Copart и IAAI: подбор, проверка, покупка и международная доставка под ключ.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: SITE_BRAND,
    images: [
      {
        url: "/logo-nac-transparent.png",
        width: 1408,
        height: 768,
        alt: `${SITE_BRAND} logo`,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo-nac-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V8GHSRNRQ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V8GHSRNRQ3');
          `}
        </Script>
        <HtmlLang />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
