import OrderItem from "./order-item"

type Props = {}

const OrderOngoing = (props: Props) => {
  return (
    <div className="space-y-4">
      <OrderItem />
      <OrderItem />
    </div>
  )
}

export default OrderOngoing
