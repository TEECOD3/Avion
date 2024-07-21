import ProfileHeader from "@/components/profile-header"
import ProfileNavMenu from "@/components/profile-nav-menu"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" container mx-auto">
      <div className="max-w-4xl mx-auto py-10">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr]  py-10">
          <aside className="relative  w-full">
            <ProfileNavMenu />
          </aside>
          <div className="max-lg:mt-6 border-[1px] border-muted p-4">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
