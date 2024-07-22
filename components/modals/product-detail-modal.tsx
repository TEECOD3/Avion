"use client"

import React, { Suspense } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import image from "@/public/assets/Images/10030.jpg"

import { Modal } from "../modal"
import ProductDetailDesc from "../product-detail-description"
import ProductDetailSkeleton from "../skeletons/product-detail-skeleton"

type Props = {}

const Product = (props: Props) => {
  return (
    <div className="w-full h-full p-2">
      <div className="flex flex-col max-lg:gap-y-8 lg:flex-row gap-x-5">
        <div className="w-full h-48 md:h-[21rem] xl:h-[35rem] relative">
          <Image
            src={image}
            alt="product-detail-image"
            fill
            className="object-cover absolute h-full w-full"
            placeholder="blur"
          />
        </div>
        <div className=" text-[#505977] w-full h-full">
          <div className="">
            <ProductDetailDesc />
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductDetailModal = (props: Props) => {
  const router = useRouter()

  function handleClose() {
    router.back()
  }
  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <Modal open onOpenChange={handleClose}>
        <Product />
      </Modal>
    </Suspense>
  )
}

export default ProductDetailModal
