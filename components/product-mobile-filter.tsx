import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { icons } from "./custom-icons/Index"
import ProductFilter from "./product-filter"

type Props = {}

const ProductMobileFilter = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <icons.Filter className="lg:hidden " color="gray" />
      </SheetTrigger>
      <SheetContent>
        <ProductFilter />
      </SheetContent>
    </Sheet>
  )
}

export default ProductMobileFilter
