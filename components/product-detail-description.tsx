import React from "react"

type Props = {}

const ProductDetailDesc = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="text-black  font-clash-display">
        <h3 className="text-header-3 lg:text-header-1">The Dandy Chair</h3>
        <h5 className="text-header-4 lg:text-header-3">$250</h5>
      </div>
      <div className="space-y-4">
        <h5 className=" text-black font-clash-display">Description</h5>
        <p>
          A timeless design, with premium materials features as one of our most
          popular and iconic pieces. The dandy chair is perfect for any stylish
          living space with beech legs and lambskin leather upholstery.
        </p>
        <ul className="list-disc list-inside">
          <li>Premium material Quality </li>
          <li>Handmade upholstery </li>
          <li>timeless classic</li>
        </ul>
      </div>
      <div className="font-clash-display capitalize">
        <h4 className="body-medium font-clash-display mb-4 text-black">
          dimensions
        </h4>
        <div className="flex w-full lg:max-w-[15rem] justify-between">
          <div className="flex flex-col gap-y-2 body-small">
            <h5>height</h5>
            <span>15cm</span>
          </div>
          <div className="flex flex-col gap-y-2 body-small">
            <h5>width</h5>
            <span>15cm</span>
          </div>
          <div className="flex flex-col gap-y-2 body-small">
            <h5>Depth</h5>
            <span>15cm</span>
          </div>
        </div>
      </div>

      <div className="">cart</div>
    </div>
  )
}

export default ProductDetailDesc
