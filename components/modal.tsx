import { ReactNode } from "react"
import { useRouter } from "next/navigation"

import { Dialog, DialogContent } from "@/components/ui/dialog"

type Tmodalprops = {
  children: ReactNode
  open: boolean
  onOpenChange: () => void
}

export function Modal({ children, open, onOpenChange }: Tmodalprops) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-lg:w-[80%] mx-auto sm:max-w-[500px]">
        {children}
      </DialogContent>
    </Dialog>
  )
}
