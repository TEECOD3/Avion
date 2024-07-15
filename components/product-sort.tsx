import React from "react"
import { Value } from "@radix-ui/react-select"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {}

const sortoptions = [
  {
    name: "By Date",
    Value: "date",
  },
  {
    name: "Price low to high",
    Value: "asc",
  },
  {
    name: "Price High to low",
    Value: "dsc",
  },
]

const ProductSort = (props: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        {sortoptions.map((sort, sortidx) => (
          <SelectItem value={sort.Value} key={sortidx}>
            {sort.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default ProductSort
