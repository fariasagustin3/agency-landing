import ClientsSection from '@/components/ClientsSection'
import Community from '@/components/Community'
import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#FFFFFF]">
      <NavBar />
      <Slider />
      <ClientsSection />
      <Community />
    </main>
  )
}
