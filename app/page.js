import Archievements from '@/components/Archievements'
import ClientsSection from '@/components/ClientsSection'
import Community from '@/components/Community'
import Customers from '@/components/Customers'
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
    </main>
  )
}
