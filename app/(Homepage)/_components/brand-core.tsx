import { icons } from "@/components/custom-icons/Index"

const BrandCore = () => {
  return (
    <section className="lg:p-x-20 lg:pt-20 lg:pb-10 container mx-auto max-[400px]:mt-[23rem] max-[400px]:mb-[10rem] max-sm:mt-[22rem]  max-lg:mt-[20rem]  mb-16 ">
      <div className="w-full flex items-center lg:justify-center">
        <h4 className="max-w-xl font-clash-display text-xl lg:text-header-3 mx-auto max-lg:textleft">
          What makes our brand different
        </h4>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-16 gap-x-14 gap-y-10 ">
        <div className="flex flex-col gap-y-2 bg-light-gray lg:px-10 px-4 py-6">
          <icons.delivery />
          <h4 className="text-base lg:text-xl font-clash-display mt-3">
            Next day as standard
          </h4>
          <p className=" text-[0.875rem] lg:text-base">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="flex flex-col gap-y-2 bg-light-gray lg:px-10 px-4 py-6">
          <icons.checkedLight />
          <h4 className="text-base lg:text-xl font-clash-display mt-3">
            Made by true artisans
          </h4>
          <p className=" text-[0.875rem] lg:text-base">
            Handmade crafted goods made with real passion and craftmanship
          </p>
        </div>
        <div className="flex flex-col gap-y-2 bg-light-gray lg:px-10 px-4 py-6">
          <icons.purchase />
          <h4 className="text-base lg:text-xl font-clash-display mt-3">
            Unbeatable prices
          </h4>
          <p className=" text-[0.875rem] lg:text-base">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>
        <div className="flex flex-col gap-y-2 bg-light-gray lg:px-10 px-4 py-6">
          <icons.flower />
          <h4 className="text-base lg:text-xl font-clash-display mt-3">
            Recycled packaging
          </h4>
          <p className=" text-[0.875rem] lg:text-base">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrandCore
