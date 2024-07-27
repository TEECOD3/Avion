import SignUpForm from "@/components/auth-sign-up-form"

type Props = {}

export const metadata = {
  title: "Sign up",
  description: "Create An avion Account",
}

const page = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-center h-full w-full min-h-[100dvh] ">
        <div className="flex flex-col gap-y-4 px-5">
          <header>
            <h1 className=" capitalize text-2xl lg:text-3xl font-medium font-clash-display tracking-tight">
              <span>Avion , Sign up </span>
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign up to avion ecommerce
            </p>
          </header>
          <div className="max-w-6xl mx-auto w-[20rem] sm:w-[25rem]">
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
