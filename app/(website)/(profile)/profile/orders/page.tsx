import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrderCancelled from "@/components/order-cancelled"
import OrderOngoing from "@/components/order-ongoing"
import ProfileAccount from "@/components/profile-account"
import ProfileInboxwidget from "@/components/profile-inbox-widget"

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-full px-0">
        <TabsList className="lg:w-[60%]">
          <TabsTrigger
            value="account"
            className="w-full font-clash-display capitalize"
          >
            ongoing/delivered
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full font-clash-display">
            cancelled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="py-3 mt-3 flex flex-col gap-y-3">
            <OrderOngoing />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="py-3 mt-3 flex flex-col gap-y-3">
            <OrderCancelled />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page
