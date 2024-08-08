import * as React from "react"
import { useMedia } from "react-use"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type Tmodalprops = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ open, onClose, children, className }: Tmodalprops) {
  const isDesktop = useMedia("(min-width: 768px)")

  const onChange = (open: boolean) => {
    if (!open) {
      onClose?.()
    }
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onChange}>
        <DialogContent className={cn("sm:max-w-[425px] ", className)}>
          <DialogHeader className="sr-only">
            <DialogTitle> modal</DialogTitle>
            <DialogDescription>Modal pop up</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onChange}>
      <DrawerContent>
        <DrawerHeader className="text-left sr-only">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>Modal pop up</DrawerDescription>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  )
}
