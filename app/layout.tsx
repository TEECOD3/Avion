import type { Metadata } from "next"

import "./globals.css"

import { siteConfig } from "@/config/site"
import { ClashDisplay, Satoshi } from "@/lib/Font"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keyWords.join(", "),
  icons: {
    icon: siteConfig.icon,
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
        className={`
        ${Satoshi.className}
        ${ClashDisplay.variable}
        font-satoshi flex min-h-screen flex-col antialiased `}
      >
        {children}
      </body>
    </html>
  )
}
