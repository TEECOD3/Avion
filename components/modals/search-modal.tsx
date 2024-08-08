"use client"

import React from "react"
import { useSearchModal } from "@/stores/modals/search-modal"

import { Modal } from "../modal"
import { Input } from "../ui/input"

type Props = {}

export default function SearchModal({}: Props) {
  const open = useSearchModal((state) => state.isOpen)
  const onClose = useSearchModal((state) => state.close)
  return (
    <Modal onClose={onClose} open={open} className="sm:max-w-[500px]">
      <div className="p-3 ">
        <h1 className="text-xl font-medium font-clash-display">
          Search for products
        </h1>
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Search product..."
            className="w-full p-2 rounded-md border border-gray-100 focus:outline-none focus:border-gray-300 placeholder:text-muted-foreground/50 "
          />
        </div>
        <div className="flex flex-col gap-y-1 mt-1 overflow-y-scroll max-h-[300px] styled-scrollbar">
          {Array.from({ length: 20 }).map((searchitem, searchidx) => (
            <div
              className="border-[1px] border-muted-foreground/40 p-2 flex gap-x-2 hover:bg-gray-100 cursor-pointer "
              key={searchidx}
            >
              <div className="w-12 h-12 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-dark-primary text-sm">Product Name</span>
                <span className="text-muted-foreground line-clamp-2 text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus ullam vel rerum doloremque id
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
