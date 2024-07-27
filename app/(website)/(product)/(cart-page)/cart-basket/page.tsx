import { Button } from "@/components/ui/button"
import CartBasketItem from "@/components/cart-basket-item"
import CartEmptyBasket from "@/components/cart-empty-basket"

type Props = {}

const page = (props: Props) => {
  const productArr = Array.from({ length: 3 })

  return (
    <section className="bg-light-gray min-h-[70vh]">
      {productArr.length == 0 ? (
        <CartEmptyBasket />
      ) : (
        <div className="container mx-auto py-5 lg:py-16">
          <div className="">
            <h4 className="text-2xl md:text-3xl lg:text-3xl font-clash-display">
              Your shopping cart
            </h4>
            <div className="hidden w-full lg:grid grid-cols-[3fr_1fr_1fr] mt-16 capitalize font-clash-display">
              <span>product</span>
              <div className="flex justify-start">
                <span>quantity</span>
              </div>
              <div className="flex justify-end">
                <span>Total</span>
              </div>
            </div>

            <div className="h-[1px] bg-muted-foreground/40 my-4 w-full" />
          </div>
          <div className="space-y-8">
            <CartBasketItem />
            <CartBasketItem />
            <CartBasketItem />
          </div>

          <div className="h-[1px] bg-muted-foreground/40 my-4 w-full" />

          <div className="w-full flex justify-end items-center">
            <div className="flex flex-col items-end justify-center text-[#4E4D93]">
              <div className="flex gap-x-2  font-clash-display items-center">
                <span className="text-xl">subtotal</span>
                <span className="text-dark-primary text-2xl">$210</span>
              </div>
              <p className="mt-3">
                Taxes and shipping are calculated at checkout
              </p>
            </div>
          </div>
          <div className="w-full flex lg:justify-end my-8 lg:my-4">
            <Button className="bg-dark-primary max-lg:w-full py-7">
              Go to checkout
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default page
