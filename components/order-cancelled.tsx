import React from "react"

import OrderItem from "./order-item"

type Props = {}

const OrderCancelled = (props: Props) => {
  return (
    <div className="space-y-2">
      <OrderItem />
      <OrderItem />
    </div>
  )
}

export default OrderCancelled
