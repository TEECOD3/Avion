import { ClashDisplay, Satoshi } from "@/lib/Font"
import { Navbar } from "@/components/Layouts/main-navbar/site-navbar"
import { Footer } from "@/components/Layouts/site-footer"
import NewsLetter from "@/components/news-letter"

export default function WebsiteLayout({
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
        <Navbar />
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  )
}
