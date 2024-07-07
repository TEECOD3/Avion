import type { Metadata } from "next"

import "./globals.css"

import { siteConfig } from "@/config/site"
import { ClashDisplay, Satoshi } from "@/lib/Font"
import { Footer } from "@/components/Layouts/footer"
import { Navbar } from "@/components/Layouts/navbar/Navbar"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | Avion",
  },
  description: siteConfig.description,
  keywords: siteConfig.keyWords.join(", "),
  icons: {
    icon: "/assets/svg/Cart.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${Satoshi.className} ${ClashDisplay.variable} font-satoshi flex min-h-screen flex-col antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
