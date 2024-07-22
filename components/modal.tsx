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
      <DialogContent className="">{children}</DialogContent>
    </Dialog>
  )
}
