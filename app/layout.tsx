import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Cinzel } from "next/font/google"
import "./globals.css"

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="it"
      className={`${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${cinzel.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}
