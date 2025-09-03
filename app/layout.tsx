import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

export const metadata: Metadata = {
  title: "TheCosmoStore - Luxury Beauty Products & Reviews",
  description:
    "Discover premium cosmetics with authentic reviews. From luxury skincare to high-end makeup, find your perfect beauty match.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
