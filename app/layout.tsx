import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HtmlLang from '@/components/HtmlLang'
import { SITE_BRAND, SITE_URL } from '@/lib/siteMeta'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

const siteTitle = `${SITE_BRAND} - US auction access & international delivery`
const siteDescription = `${SITE_BRAND} · ${SITE_URL.replace(
  'https://',
  ''
)}. Used cars from USA auctions (Copart, IAAI) with international delivery - Ukraine, UAE, and more. Save up to 40%.`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: '/logo_Namcars.png',
    shortcut: '/logo_Namcars.png',
    apple: '/logo_Namcars.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: SITE_BRAND,
    images: [
      {
        url: '/logo_Namcars.png',
        width: 1408,
        height: 768,
        alt: `${SITE_BRAND} logo`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/logo_Namcars.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
  )
}
