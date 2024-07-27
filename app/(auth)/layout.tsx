import Image from "next/image"
import Authimage from "@/public/assets/Images/10030.jpg"

export const metadata = {
  title: {
    default: "Auth",
    template: `%s | Auth`,
  },
  description: "Authentication for avion Ecommerce",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-screen w-full hidden lg:block">
        <Image
          src={Authimage}
          alt="Authheroimage"
          className="object-cover h-full w-full"
          fill
          sizes="300px"
          priority
          placeholder="blur"
        />
      </div>
      <div className="px-4">{children} </div>
    </main>
  )
}
