"use client"

import { useRouter } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { icons } from "../custom-icons/Index"
import { Modal } from "../modal"
import ProfileAccount from "../profile-account"
import ProfileInboxwidget from "../profile-inbox-widget"

type Props = {}

const ProfileModal = (props: Props) => {
  const router = useRouter()
  const onclose = () => {
    router.back()
  }

  const loggedin = true

  return (
    <Modal open onOpenChange={onclose}>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full mt-4">
          <TabsTrigger value="account" className="w-full font-clash-display">
            Account
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full font-clash-display">
            inbox
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="py-3 mt-3 flex flex-col gap-y-3">
            {loggedin ? (
              <ProfileAccount />
            ) : (
              <div>
                <span className="capitalize font-semibold text-muted-foreground">
                  login to your avion account
                </span>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="py-3 mt-3 flex flex-col gap-y-3">
            <ProfileInboxwidget />
            <ProfileInboxwidget />
          </div>
        </TabsContent>
      </Tabs>

      <div
        className="cursor-pointer capitalize text-sm text-muted-foreground flex items-center hover:underline hover:underline-offset-4"
        onClick={() => {
          window.location.reload()
        }}
      >
        <span>view more</span> <icons.ArrowUpRight className="size-4" />
      </div>
    </Modal>
  )
}

export default ProfileModal
