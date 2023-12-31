import Archievements from '@/components/Archievements'
import ClientsSection from '@/components/ClientsSection'
import Community from '@/components/Community'
import CommunityUpdates from '@/components/CommunityUpdates'
import Customers from '@/components/Customers'
import Footer from '@/components/Footer'
import FooterSmall from '@/components/FooterSmall'
import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'
import Unlock from '@/components/Unlock'

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#FFFFFF] overflow-x-hidden">
      <NavBar />
      <Slider />
      <ClientsSection />
      <Community />
      <Archievements />
      <Unlock />
      <Customers />
      <CommunityUpdates />
      <FooterSmall />
      <Footer />
    </main>
  )
}
