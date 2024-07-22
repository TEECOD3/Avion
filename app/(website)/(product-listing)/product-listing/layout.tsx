import NewsLetter from "@/components/news-letter"

export default function ProductLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <section>
      {children}
      {modal}
    </section>
  )
}
