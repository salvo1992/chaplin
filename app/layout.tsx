import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "../components/language-provider"
import { AuthProvider } from "../components/auth-provider"
import { CookieConsent } from "../components/cookie-consent"
import { WhatsAppButton } from "../components/whatsapp-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AL 22 Suite & SPA LUXURY EXPERIENCE",
  description:
    "Experience authentic Italian hospitality at AL 22 Suite & SPA, a luxury bed & breakfast in the heart of Polignano a Mare",
  keywords: ["luxury", "B&B", "Polignano a Mare", "suite", "spa", "Puglia", "Italy"],
  openGraph: {
    title: "AL 22 Suite & SPA LUXURY EXPERIENCE",
    description: "Experience authentic Italian hospitality in the heart of Polignano a Mare",
    type: "website",
    locale: "it_IT",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"

  return (
    <html
      lang="it"
      className={`${inter.variable} ${playfairDisplay.variable} ${cinzel.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a2e" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LanguageProvider>
          <AuthProvider>
            <Suspense fallback={null}>
              {children}
            </Suspense>
            <WhatsAppButton />
            <CookieConsent />
          </AuthProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
