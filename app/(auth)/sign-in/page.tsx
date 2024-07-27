import SigninForm from "@/components/auth-sign-in-form"
import { HandWave } from "@/components/custom-icons/wave"

type Props = {}

export const metadata = {
  title: "Sign in",
  description: "sign in your avion account",
}

const page = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-center h-full w-full min-h-[100dvh] ">
        <div className="flex flex-col gap-y-4 px-5">
          <header>
            <h1 className=" capitalize text-2xl lg:text-3xl font-medium font-clash-display tracking-tight flex gap-x-3">
              <span>Avion , Welcome back </span> <HandWave className="size-8" />
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to avion ecommerce
            </p>
          </header>
          <div className="max-w-6xl mx-auto w-[20rem] sm:w-[25rem]">
            <SigninForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
