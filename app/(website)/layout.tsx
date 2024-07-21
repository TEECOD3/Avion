import { ClashDisplay, Satoshi } from "@/lib/Font"
import { Navbar } from "@/components/Layouts/main-navbar/site-navbar"
import { Footer } from "@/components/Layouts/site-footer"
import NewsLetter from "@/components/news-letter"

export default function WebsiteLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <section>
      {modal}
      <Navbar />
      {children}
      <NewsLetter />
      <Footer />
    </section>
  )
}
