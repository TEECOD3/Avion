import { Navbar } from "@/components/Layouts/main-navbar/site-navbar"
import { Footer } from "@/components/Layouts/site-footer"
import NewsLetter from "@/components/news-letter"
import MainProvider from "@/components/Providers/main-provider"

export default function WebsiteLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <section>
      <MainProvider>
        {modal}
        <Navbar />
        {children}
        <NewsLetter />
        <Footer />
      </MainProvider>
    </section>
  )
}
