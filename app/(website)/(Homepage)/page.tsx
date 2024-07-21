import { stuff } from "../(profile)/profile/page"
import BrandCore from "./_components/brand-core"
import Hero from "./_components/hero-section"
import MoreCollection from "./_components/more-collections"
import Newceramics from "./_components/new-ceramics"

export default function Home() {
  return (
    <>
      <Hero />
      <BrandCore />
      <Newceramics />
      <MoreCollection />
    </>
  )
}
